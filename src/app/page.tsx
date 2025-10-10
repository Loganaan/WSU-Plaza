"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  field: string;
}

interface Listing {
  id: number;
  title: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  status: string;
  dateListed: string;
  category: Category | null;
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings');
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        setListings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

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
            {loading ? (
              // Loading skeleton
              Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#1c1c1c] rounded-lg p-4 flex flex-col gap-3 shadow-lg animate-pulse"
                >
                  <div className="bg-gray-800 h-40 rounded-lg" />
                  <div>
                    <div className="h-4 bg-gray-700 rounded mb-2" />
                    <div className="h-4 bg-gray-700 rounded w-12 mb-1" />
                    <div className="h-3 bg-gray-700 rounded w-24" />
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-4 text-center py-8">
                <p className="text-red-400">{error}</p>
              </div>
            ) : listings.length === 0 ? (
              <div className="col-span-4 text-center py-8">
                <p className="text-gray-400">No listings available</p>
              </div>
            ) : (
              listings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-[#1c1c1c] rounded-lg p-4 flex flex-col gap-3 shadow-lg hover:bg-[#252525] transition-colors cursor-pointer"
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold truncate" title={listing.title}>
                      {listing.title}
                    </p>
                    <p className="text-sm font-bold text-green-400">
                      ${listing.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {listing.description || "No description available"}
                    </p>
                    {listing.category && (
                      <p className="text-xs text-yellow-400 mt-1">
                        {listing.category.field}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Listed: {new Date(listing.dateListed).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
  );
}
