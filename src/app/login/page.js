"use client";

import { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
        <div className="hidden md:flex bg-gray-900 text-white p-10 flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-lg text-gray-300 leading-8">
            Login to manage your medicine orders, prescriptions and personal
            health dashboard.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          <p className="text-gray-500 mt-2 mb-8">
            Access your account securely.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
