"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

export default function AddItem() {
  const { user } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    short: "",
    price: "",
    category: "",
    image: "",
  });

  // 🔐 PROTECTED ROUTE
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // 📝 HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🚨 VALIDATION
  const validate = () => {
    if (!form.title) return "Medicine name is required";
    if (!form.short) return "Short description is required";
    if (!form.price) return "Price is required";
    if (!form.category) return "Category is required";
    return null;
  };

  // 💾 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    try {
      setLoading(true);

      const newProduct = {
        ...form,
        id: Date.now(),
      };

      console.log("Product Added:", newProduct);

      alert("✅ Product added successfully!");

      setForm({
        title: "",
        short: "",
        price: "",
        category: "",
        image: "",
      });

      router.push("/items");
    } catch (err) {
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
          <p className="text-gray-500 mt-2">Add new medicines to your store</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NAME */}
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Medicine Name"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* DESCRIPTION */}
          <input
            type="text"
            name="short"
            value={form.short}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* PRICE + CATEGORY */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category (e.g. Pain Relief)"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* IMAGE */}
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* IMAGE PREVIEW */}
          {form.image && (
            <div className="border rounded-xl overflow-hidden">
              <img
                src={form.image}
                alt="preview"
                className="w-full h-48 object-cover"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            {loading ? "Saving..." : "Add Product"}
          </button>
        </form>
      </div>
    </main>
  );
}
