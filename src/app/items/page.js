"use client";

import { useMemo, useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 📂 Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p?.category || "General"))];
  }, []);

  // 🔍 PRODUCTION SEARCH (IMPROVED)
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return (products || []).filter((item) => {
      const title = (item?.title || "").toLowerCase();
      const short = (item?.short || "").toLowerCase();
      const category = (item?.category || "").toLowerCase();

      // if no search text → show all
      const matchesSearch =
        query === "" ||
        title.includes(query) ||
        short.includes(query) ||
        category.includes(query);

      // category filter
      const matchesCategory =
        selectedCategory === "All" || item?.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Medicine Store</h1>
          <p className="mt-3 text-blue-100">
            Search medicines instantly with smart filters
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow p-6 grid md:grid-cols-3 gap-4 items-center">
          {/* 🔍 SEARCH INPUT */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search medicines (e.g. paracetamol, pain, fever)..."
            className="border rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* 📂 CATEGORY */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* 📊 COUNT */}
          <div className="text-gray-600 text-center md:text-right">
            <span className="font-bold text-black">
              {filteredProducts.length}
            </span>{" "}
            products found
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 text-center rounded-2xl shadow">
            <h2 className="text-xl font-semibold">No Products Found</h2>
            <p className="text-gray-500 mt-2">
              Try searching different keywords or category
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
