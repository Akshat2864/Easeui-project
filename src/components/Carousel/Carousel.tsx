import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
};

const Carousel = ({
  children,
  autoPlay = false,
  interval = 3000,
  loop = true,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = children.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === totalSlides - 1) {
        return loop ? 0 : prev;
      }

      return prev + 1;
    });
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return loop ? totalSlides - 1 : prev;
      }

      return prev - 1;
    });
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex]);

  if (!children.length) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Slides */}

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Previous */}

      <button
        onClick={previousSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index
                ? "bg-blue-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;