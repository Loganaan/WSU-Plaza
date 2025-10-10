import Image from "next/image";

export default function Home() {
  return (
      <div className="flex min-h-screen bg-[#121212] text-gray-200">
        {/* Sidebar */}
        <aside className="w-64 bg-[#1c1c1c] flex flex-col justify-between p-4">
          <div>
            <h1 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
              The Plaza
            </h1>

            <nav className="space-y-2">
              {[
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
              ].map((item) => (
                <button
                  key={item}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left hover:bg-gray-700 ${
                    item === "Posts" ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black" : ""
                  }`}
                >
                  <span className="capitalize">{item}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <span>Light Mode</span>
              <div className="relative w-10 h-5 bg-gray-700 rounded-full">
                <div className="absolute left-5 top-0.5 w-4 h-4 bg-yellow-400 rounded-full" />
              </div>
            </div>
            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Search bar */}
          <div className="max-w-3xl mb-8">
            <div className="flex items-center bg-[#1c1c1c] rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent flex-1 outline-none text-gray-300"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#1c1c1c] rounded-lg p-4 flex flex-col gap-3 shadow-lg"
              >
                <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h18M3 19h18M3 10h18M3 14h18"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Text</p>
                  <p className="text-sm font-bold">$0</p>
                  <p className="text-xs text-gray-400">Body text.</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
  );
}
