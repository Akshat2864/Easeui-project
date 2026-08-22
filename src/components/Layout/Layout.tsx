type LayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
};

const Layout = ({
  children,
  header,
  sidebar,
  footer,
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100">
      
      {header && (
        <header>
          {header}
        </header>
      )}

      <div className="flex flex-1">

        {sidebar && (
          <aside className="w-64 border-r border-gray-200 dark:border-zinc-800">
            {sidebar}
          </aside>
        )}

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

      {footer && (
        <footer className="border-t border-gray-200 dark:border-zinc-800">
          {footer}
        </footer>
      )}

    </div>
  );
};

export default Layout;