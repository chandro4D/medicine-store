import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your medicines delivered quickly at your doorstep.",
      icon: "🚚",
    },
    {
      title: "Certified Products",
      description: "Only authentic and government-approved medicines.",
      icon: "✅",
    },
    {
      title: "24/7 Support",
      description: "Pharmacist support whenever you need assistance.",
      icon: "📞",
    },
    {
      title: "Best Prices",
      description: "Affordable healthcare with competitive pricing.",
      icon: "💊",
    },
  ];

  const categories = [
    "Pain Relief",
    "Diabetes Care",
    "Heart Care",
    "Vitamins",
    "Baby Care",
    "Skin Care",
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              Trusted Online Pharmacy
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Your Trusted
              <span className="text-blue-600"> Medicine Store</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Buy genuine medicines online with fast delivery, verified
              products, and expert healthcare support.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/items"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 border rounded-xl hover:bg-white transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
              alt="Medicine"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Popular Categories</h2>
            <p className="text-gray-500 mt-3">Browse medicines by category</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Healthcare"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose MediCare?
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We combine technology and healthcare to deliver medicines safely,
            quickly, and affordably to your home.
          </p>

          <ul className="mt-8 space-y-4">
            <li>✔ Licensed pharmacy service</li>
            <li>✔ Secure online payment</li>
            <li>✔ Expert pharmacist support</li>
            <li>✔ Prescription management</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Start Ordering Your Medicines Today
          </h2>

          <p className="mt-4 text-blue-100">
            Safe, trusted and fast healthcare at your fingertips.
          </p>

          <Link
            href="/items"
            className="inline-block mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </main>
  );
}
