"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MediCare
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/items" className="hover:text-blue-600 transition">
            Items
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          {!user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-700 max-w-[140px] truncate">
                  {user.email}
                </span>
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/items/add"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Add Product
                </Link>

                <Link
                  href="/items/manage"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Manage Products
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/items" className="block">
            Items
          </Link>
          <Link href="/about" className="block">
            About
          </Link>

          {!user ? (
            <>
              <Link href="/login" className="block">
                Login
              </Link>
              <Link href="/register" className="block">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link href="/items/add" className="block">
                Add Product
              </Link>
              <Link href="/items/manage" className="block">
                Manage Products
              </Link>
              <button onClick={handleLogout} className="block text-red-600">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
