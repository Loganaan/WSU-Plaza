function NavItem({ label }: { label: string }) {
  return (
    <div className="p-3 hover:bg-gray-200 cursor-pointer">
      {label}
    </div>
  );
}

function NavList() {
  const items = [
    "Dashboard",
    "Posts",
    "Media",
    "Pages",
    "Comments",
    "Appearance",
    "Plugins",
    "Users",
    "Settings",
    "Tools",
    "Light Mode",
    "Logout",
  ];

  return (
    <nav className="flex flex-col w-64 bg-gray-100">
      {items.map((label) => (
        <NavItem key={label} label={label} />
      ))}
    </nav>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <NavList />
      <main className="flex-1 p-4">
        Main content area
      </main>
    </div>
  );
}
