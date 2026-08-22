import Tooltip from "@/components/Tooltip/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import {
  Info,
  Settings,
  HelpCircle,
} from "lucide-react";

const TooltipPage = () => {
  const basicCode = `
<Tooltip content="This is a tooltip">
  <button>
    Hover me
  </button>
</Tooltip>
`;

  const positionsCode = `
<Tooltip content="Top tooltip" position="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left tooltip" position="left">
  <button>Left</button>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <button>Right</button>
</Tooltip>
`;

  const elementsCode = `
<Tooltip content="More information">
  <button>
    <Info />
  </button>
</Tooltip>

<Tooltip content="Settings">
  <button>
    <Settings />
  </button>
</Tooltip>

<Tooltip content="Need help?">
  <button>
    <HelpCircle />
  </button>
</Tooltip>
`;

  const propsData = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Element that triggers the tooltip.",
    },
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "Content displayed inside the tooltip.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Controls where the tooltip appears.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* Header */}

      <header className="space-y-2">
        <h1 className="text-4xl font-bold">
          Tooltip
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Displays contextual information when users hover over or focus
          on an element.
        </p>
      </header>

      {/* Basic */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Basic Tooltip
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          The basic tooltip appears above the element by default.
        </p>

        <ComponentDemo code={basicCode}>
          <div className="py-16">
            <Tooltip content="This is a tooltip">
              <button className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                Hover me
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Positions */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Positions
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Tooltips can be positioned on any side of the target element.
        </p>

        <ComponentDemo code={positionsCode}>
          <div className="flex flex-wrap items-center justify-center gap-10 py-16">

            <Tooltip
              content="Appears above"
              position="top"
            >
              <button className="rounded-md bg-purple-600 px-4 py-2 text-white">
                Top
              </button>
            </Tooltip>

            <Tooltip
              content="Appears below"
              position="bottom"
            >
              <button className="rounded-md bg-green-600 px-4 py-2 text-white">
                Bottom
              </button>
            </Tooltip>

            <Tooltip
              content="Appears on the left"
              position="left"
            >
              <button className="rounded-md bg-orange-500 px-4 py-2 text-white">
                Left
              </button>
            </Tooltip>

            <Tooltip
              content="Appears on the right"
              position="right"
            >
              <button className="rounded-md bg-pink-600 px-4 py-2 text-white">
                Right
              </button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>

      {/* Icons */}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Icon Tooltips
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Tooltips are useful for explaining icon-only controls.
        </p>

        <ComponentDemo code={elementsCode}>
          <div className="flex gap-6 py-12">

            <Tooltip content="More information">
              <button className="rounded-full border border-gray-300 dark:border-zinc-700 p-3 hover:bg-gray-100 dark:hover:bg-zinc-800">
                <Info size={20} />
              </button>
            </Tooltip>

            <Tooltip content="Settings">
              <button className="rounded-full border border-gray-300 dark:border-zinc-700 p-3 hover:bg-gray-100 dark:hover:bg-zinc-800">
                <Settings size={20} />
              </button>
            </Tooltip>

            <Tooltip content="Need help?">
              <button className="rounded-full border border-gray-300 dark:border-zinc-700 p-3 hover:bg-gray-100 dark:hover:bg-zinc-800">
                <HelpCircle size={20} />
              </button>
            </Tooltip>

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

export default TooltipPage;