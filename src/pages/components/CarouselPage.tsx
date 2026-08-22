import Carousel from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const basicCode = `
<Carousel>
  <div className="...">Slide 1</div>
  <div className="...">Slide 2</div>
  <div className="...">Slide 3</div>
</Carousel>
`;

  const autoplayCode = `
<Carousel
  autoPlay
  interval={2000}
>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</Carousel>
`;

  const manualCode = `
<Carousel
  autoPlay={false}
  loop={false}
>
  <div>First Slide</div>
  <div>Second Slide</div>
  <div>Last Slide</div>
</Carousel>
`;

  const propsData = [
    {
      prop: "children",
      type: "ReactNode[]",
      default: "-",
      description: "Slides displayed inside the carousel.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically moves to the next slide.",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "Time between automatic slide changes in milliseconds.",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "true",
      description: "Allows the carousel to continue from the first slide after the last slide.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* Header */}

      <header className="space-y-2">
        <h1 className="text-4xl font-bold">
          Carousel
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Displays a collection of content that users can navigate through
          using previous and next controls.
        </p>
      </header>

      {/* Basic */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Basic Carousel
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          A simple carousel with navigation arrows and slide indicators.
        </p>

        <ComponentDemo code={basicCode}>
          <div className="w-full max-w-xl">
            <Carousel>
              {[
                <div className="h-60 bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
                  First Slide
                </div>,

                <div className="h-60 bg-purple-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Second Slide
                </div>,

                <div className="h-60 bg-green-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Third Slide
                </div>,
              ]}
            </Carousel>
          </div>
        </ComponentDemo>
      </section>

      {/* Auto Play */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Auto Play
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Automatically moves between slides after the specified interval.
        </p>

        <ComponentDemo code={autoplayCode}>
          <div className="w-full max-w-xl">
            <Carousel
              autoPlay
              interval={2000}
            >
              {[
                <div className="h-60 bg-indigo-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Auto Slide 1
                </div>,

                <div className="h-60 bg-pink-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Auto Slide 2
                </div>,

                <div className="h-60 bg-orange-500 flex items-center justify-center text-white text-2xl font-semibold">
                  Auto Slide 3
                </div>,
              ]}
            </Carousel>
          </div>
        </ComponentDemo>
      </section>

      {/* Manual */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Manual Navigation
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Disables automatic playback and prevents the carousel from looping.
        </p>

        <ComponentDemo code={manualCode}>
          <div className="w-full max-w-xl">
            <Carousel
              autoPlay={false}
              loop={false}
            >
              {[
                <div className="h-60 bg-slate-700 flex items-center justify-center text-white text-2xl font-semibold">
                  Start
                </div>,

                <div className="h-60 bg-slate-600 flex items-center justify-center text-white text-2xl font-semibold">
                  Middle
                </div>,

                <div className="h-60 bg-slate-500 flex items-center justify-center text-white text-2xl font-semibold">
                  End
                </div>,
              ]}
            </Carousel>
          </div>
        </ComponentDemo>
      </section>

      {/* API */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={propsData} />
      </section>

    </div>
  );
};

export default CarouselPage;