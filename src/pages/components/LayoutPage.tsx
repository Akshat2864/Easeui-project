import Layout from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const fullLayoutCode = `
<Layout
  header={<div>Header</div>}
  sidebar={<div>Sidebar</div>}
  footer={<div>Footer</div>}
>
  <div>Main Content</div>
</Layout>
`;

  const headerLayoutCode = `
<Layout
  header={<div>Header</div>}
>
  <div>Main Content</div>
</Layout>
`;

  const sidebarLayoutCode = `
<Layout
  sidebar={<div>Sidebar</div>}
>
  <div>Main Content</div>
</Layout>
`;

  const propsData = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Main content displayed inside the layout.",
    },
    {
      prop: "header",
      type: "ReactNode",
      default: "undefined",
      description: "Optional content displayed at the top of the layout.",
    },
    {
      prop: "sidebar",
      type: "ReactNode",
      default: "undefined",
      description: "Optional sidebar displayed beside the main content.",
    },
    {
      prop: "footer",
      type: "ReactNode",
      default: "undefined",
      description: "Optional content displayed at the bottom of the layout.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* Header */}

      <header className="space-y-2">
        <h1 className="text-4xl font-bold">
          Layout
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Provides a flexible page structure using optional header,
          sidebar, content, and footer sections.
        </p>
      </header>

      {/* Full Layout */}

      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          Full Layout
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          A complete application layout containing a header, sidebar,
          main content area, and footer.
        </p>

        <ComponentDemo code={fullLayoutCode}>

          <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-700">

            <Layout
              header={
                <div className="h-12 flex items-center px-4 bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 font-semibold">
                  Header
                </div>
              }

              sidebar={
                <div className="h-full p-4 bg-gray-50 dark:bg-zinc-900">
                  <p className="font-semibold mb-3">
                    Sidebar
                  </p>

                  <div className="space-y-2 text-sm">
                    <div>Dashboard</div>
                    <div>Profile</div>
                    <div>Settings</div>
                  </div>
                </div>
              }

              footer={
                <div className="h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700 text-sm">
                  Footer
                </div>
              }
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  Main Content
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Your application content goes here.
                </p>
              </div>
            </Layout>

          </div>

        </ComponentDemo>

      </section>

      {/* Header + Content */}

      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          Header Layout
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          A simpler layout containing only a header and the main content.
        </p>

        <ComponentDemo code={headerLayoutCode}>

          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-700">

            <Layout
              header={
                <div className="p-4 bg-blue-600 text-white font-semibold">
                  Application Header
                </div>
              }
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  Content Area
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A simple header-based layout.
                </p>
              </div>
            </Layout>

          </div>

        </ComponentDemo>

      </section>

      {/* Sidebar + Content */}

      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          Sidebar Layout
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          A layout useful for dashboards and documentation applications.
        </p>

        <ComponentDemo code={sidebarLayoutCode}>

          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-700">

            <Layout
              sidebar={
                <div className="h-full p-4 bg-gray-900 text-white">

                  <p className="font-semibold mb-4">
                    Navigation
                  </p>

                  <div className="space-y-3 text-sm text-gray-300">
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Analytics</div>
                    <div>Settings</div>
                  </div>

                </div>
              }
            >
              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  Dashboard
                </h3>

                <div className="grid grid-cols-2 gap-3 mt-5">

                  <div className="rounded-lg bg-blue-100 dark:bg-blue-950 p-4">
                    <p className="text-sm">
                      Projects
                    </p>
                    <p className="text-2xl font-bold">
                      24
                    </p>
                  </div>

                  <div className="rounded-lg bg-green-100 dark:bg-green-950 p-4">
                    <p className="text-sm">
                      Completed
                    </p>
                    <p className="text-2xl font-bold">
                      18
                    </p>
                  </div>

                </div>

              </div>
            </Layout>

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

export default LayoutPage;