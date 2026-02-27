export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-[#1f4e79]">
            El-Tai Transportation
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#insurance" className="hover:text-orange-500 transition">Insurance</a>
            <a href="#areas" className="hover:text-orange-500 transition">Service Areas</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>

            <a
              href="#contact"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Book Ride
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#2d557c] text-white py-28 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliable Non-Emergency <br /> Medical Transportation
        </h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          Safe and dependable transportation for medical appointments,
          dialysis, hospital discharge, rehabilitation visits, and private rides.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:info@el-taitranportation.com"
            className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1f4e79] mb-6">
            About El-Tai Transportation
          </h2>

          <p className="text-gray-600 leading-relaxed">
            El-Tai Transportation provides professional, compassionate,
            and punctual Non-Emergency Medical Transportation services
            across Washington.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1f4e79] mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Dialysis Transportation",
            "Hospital Discharge",
            "Rehabilitation Visits",
            "Doctor Appointments",
            "Wheelchair Transportation",
            "Private Medical Transport",
          ].map((service) => (
            <div
              key={service}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-[#1f4e79]">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-[#1f4e79] mb-6">
          Contact Us
        </h2>

        <p className="mb-2 font-medium">
          Email: info@el-taitranportation.com
        </p>
      </section>

      <footer className="bg-[#1f4e79] text-white text-center py-6">
        © {new Date().getFullYear()} El-Tai Transportation.
      </footer>

    </main>
  );
}