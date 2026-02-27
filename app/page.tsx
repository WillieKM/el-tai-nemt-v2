export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-xl font-semibold text-[#0F2A43] tracking-wide">
            El-Tai Transportation
          </div>

          <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <a href="#about" className="hover:text-[#C8A95A] transition">About</a>
            <a href="#services" className="hover:text-[#C8A95A] transition">Services</a>
            <a href="#areas" className="hover:text-[#C8A95A] transition">Service Areas</a>
            <a href="#contact" className="hover:text-[#C8A95A] transition">Contact</a>

            <a
              href="#contact"
              className="bg-[#C8A95A] text-[#0F2A43] px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book Ride
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0F2A43] text-white py-32 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Premium Non-Emergency <br />
            Medical Transportation
          </h1>

          <p className="text-lg opacity-90 mb-10">
            Safe. Punctual. Professional.
            Providing dignified transportation for medical appointments,
            dialysis, hospital discharge, and rehabilitation visits.
          </p>

          <a
            href="mailto:info@el-taitranportation.com"
            className="bg-[#C8A95A] text-[#0F2A43] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Schedule Transportation
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0F2A43] mb-8">
            About El-Tai Transportation
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            El-Tai Transportation delivers compassionate, reliable,
            and professional Non-Emergency Medical Transportation
            throughout Washington. Our mission is to ensure every
            passenger experiences comfort, punctuality, and dignity
            with every ride.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-8 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#0F2A43] mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-[#0F2A43]">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-28 px-8 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#0F2A43] mb-8">
          Service Areas
        </h2>

        <p className="text-lg text-[#C8A95A] font-semibold">
          King County • Snohomish County • Pierce County
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-8 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#0F2A43] mb-8">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-3">
          Email: info@el-taitranportation.com
        </p>

        <p className="text-gray-600">
          Phone: (XXX) XXX-XXXX
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F2A43] text-white text-center py-6">
        © {new Date().getFullYear()} El-Tai Transportation. All rights reserved.
      </footer>

    </main>
  );
}
