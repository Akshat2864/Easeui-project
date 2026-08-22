import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Bell, Menu, Search, User } from "lucide-react";

const NavbarPage = () => {
  const basicCode = `
<nav className="flex items-center justify-between px-6 py-4 border-b">
  <div className="font-bold text-xl">
    EaseUI
  </div>

  <div className="flex items-center gap-6">
    <a href="#">Home</a>
    <a href="#">Components</a>
    <a href="#">Documentation</a>
  </div>

  <button>
    Sign In
  </button>
</nav>
`;

  const searchCode = `
<nav className="flex items-center justify-between px-6 py-4 border-b">

  <div className="font-bold text-xl">
    EaseUI
  </div>

  <div className="flex items-center gap-2 border rounded-md px-3 py-2">
    <Search size={16} />

    <input
      placeholder="Search components..."
      className="outline-none bg-transparent"
    />
  </div>

  <div className="flex items-center gap-3">
    <Bell />
    <User />
  </div>

</nav>
`;

  const mobileCode = `
<nav className="flex items-center justify-between px-5 py-4 border-b">

  <div className="font-bold text-xl">
    EaseUI
  </div>

  <button>
    <Menu />
  </button>

</nav>
`;

  const propsData = [
    {
      prop: "logo",
      type: "ReactNode",
      default: "-",
      description: "Content displayed as the navbar logo or brand.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "undefined",
      description: "Navigation links or other navbar content.",
    },
    {
      prop: "actions",
      type: "ReactNode",
      default: "undefined",
      description: "Actions displayed on the right side.",
    },
    {
      prop: "sticky",
      type: "boolean",
      default: "false",
      description: "Keeps the navbar fixed at the top.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* Header */}

      <header className="space-y-2">
        <h1 className="text-4xl font-bold">
          Navbar
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          A responsive navigation component for application headers,
          navigation links, search, and user actions.
        </p>
      </header>

      {/* Basic Navbar */}

      <section className="space-y-4">

        <div>
          <h2 className="text-2xl font-semibold">
            Basic Navbar
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            A simple navigation bar containing a logo,
            navigation links, and an action button.
          </p>
        </div>

        <ComponentDemo code={basicCode}>

          <nav className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800">

            <div className="font-bold text-xl">
              EaseUI
            </div>

            <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-zinc-400">

              <a
                href="#"
                className="hover:text-black dark:hover:text-white"
              >
                Home
              </a>

              <a
                href="#"
                className="hover:text-black dark:hover:text-white"
              >
                Components
              </a>

              <a
                href="#"
                className="hover:text-black dark:hover:text-white"
              >
                Documentation
              </a>

            </div>

            <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">
              Sign In
            </button>

          </nav>

        </ComponentDemo>

      </section>

      {/* Search Navbar */}

      <section className="space-y-4">

        <div>
          <h2 className="text-2xl font-semibold">
            Navbar with Search
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            A navigation bar with search functionality,
            notifications, and profile actions.
          </p>
        </div>

        <ComponentDemo code={searchCode}>

          <nav className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800">

            {/* Logo */}

            <div className="font-bold text-xl shrink-0">
              EaseUI
            </div>

            {/* Search */}

            <div className="hidden sm:flex items-center gap-2 flex-1 max-w-sm border border-gray-300 dark:border-zinc-700 rounded-md px-3 py-2">

              <Search
                size={17}
                className="text-gray-500 dark:text-zinc-400"
              />

              <input
                placeholder="Search components..."
                className="w-full outline-none bg-transparent text-sm text-gray-900 dark:text-zinc-100 placeholder-gray-400"
              />

            </div>

            {/* Actions */}

            <div className="flex items-center gap-2">

              <button
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
                aria-label="Notifications"
              >
                <Bell size={19} />
              </button>

              <button
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
                aria-label="Profile"
              >
                <User size={19} />
              </button>

            </div>

          </nav>

        </ComponentDemo>

      </section>

      {/* Mobile Navbar */}

      <section className="space-y-4">

        <div>
          <h2 className="text-2xl font-semibold">
            Mobile Navbar
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            A compact navigation layout designed for smaller screens.
          </p>
        </div>

        <ComponentDemo code={mobileCode}>

          <nav className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800">

            <div className="font-bold text-xl">
              EaseUI
            </div>

            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>

          </nav>

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

export default NavbarPage;