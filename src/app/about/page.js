export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About MediCare</h1>
          <p className="mt-4 text-blue-100 text-lg">
            Your trusted online medicine and healthcare partner
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
        <p className="mt-4 text-gray-600 leading-7">
          MediCare is a modern online pharmacy platform dedicated to providing
          genuine, affordable, and safe medicines to your doorstep. We aim to
          make healthcare accessible for everyone with trusted products and fast
          delivery.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl">🏥</div>
            <h3 className="font-bold text-xl mt-4">Trusted Pharmacy</h3>
            <p className="text-gray-500 mt-2">
              Licensed and verified medicines only
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl">🚚</div>
            <h3 className="font-bold text-xl mt-4">Fast Delivery</h3>
            <p className="text-gray-500 mt-2">
              Quick and safe delivery to your home
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl">💊</div>
            <h3 className="font-bold text-xl mt-4">Quality Medicines</h3>
            <p className="text-gray-500 mt-2">
              100% authentic and verified products
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-7">
            Our mission is to make healthcare simple, affordable, and accessible
            for everyone. We connect patients with trusted medicines and ensure
            safe healthcare delivery across the country.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">
          Start Shopping Safe Medicines Today
        </h2>
        <p className="mt-3 text-blue-100">
          Trusted healthcare delivered to your door
        </p>

        <a
          href="/items"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Browse Products
        </a>
      </section>
    </main>
  );
}
