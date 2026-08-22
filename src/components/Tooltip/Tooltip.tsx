import { useState } from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
};

const Tooltip = ({
  children,
  content,
  position = "top",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={`
            absolute z-50 whitespace-nowrap
            rounded-md px-3 py-2
            text-sm
            bg-gray-900 text-white
            dark:bg-white dark:text-gray-900
            ${positionClasses[position]}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;