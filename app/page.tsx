<h1>TEST CHANGE RIGHT NOW</h1>

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b bg-white sticky top-0 z-50">
        <div className="text-xl font-semibold text-[#0F2A43]">
          El-Tai Transportation
        </div>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#about" className="hover:text-[#C8A95A] transition">About</a>
          <a href="#services" className="hover:text-[#C8A95A] transition">Services</a>
          <a href="#areas" className="hover:text-[#C8A95A] transition">Service Areas</a>
          <a href="#contact" className="bg-[#C8A95A] text-[#0F2A43] px-4 py-2 rounded-md hover:opacity-90 transition">
            Book Ride
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#0F2A43] text-white text-center py-28 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Reliable Non-Emergency Medical Transportation
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Safe, punctual, and compassionate transportation for medical
          appointments, dialysis, hospital discharge, and rehabilitation visits.
        </p>
        <a
          href="#contact"
          className="bg-[#C8A95A] text-[#0F2A43] px-8 py-4 rounded-md font-semibold hover:opacity-90 transition"
        >
          Schedule Transportation
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A43] mb-6">
          About El-Tai Transportation
        </h2>
        <div className="w-16 h-1 bg-[#C8A95A] mx-auto mb-8" />
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
          El-Tai Transportation provides professional and dependable
          Non-Emergency Medical Transportation services throughout King County,
          Snohomish County, and Pierce County. We prioritize safety, dignity,
          and punctuality for every passenger we serve.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A43] mb-6">
          Our Services
        </h2>
        <div className="w-16 h-1 bg-[#C8A95A] mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Dialysis Transportation",
            "Hospital Discharge",
            "Rehabilitation Visits",
            "Doctor Appointments",
            "Wheelchair Accessible Transport",
            "Private Medical Transport"
          ].map((service) => (
            <div
              key={service}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="font-semibold text-lg text-[#0F2A43] mb-4">
                {service}
              </h3>
              <p className="text-gray-600">
                Reliable, safe, and professional transportation tailored to your medical needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A43] mb-6">
          Service Areas
        </h2>
        <div className="w-16 h-1 bg-[#C8A95A] mx-auto mb-8" />

        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium text-gray-700">
          <span>King County</span>
          <span>Snohomish County</span>
          <span>Pierce County</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0F2A43] text-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Request Transportation
        </h2>
        <div className="w-16 h-1 bg-[#C8A95A] mx-auto mb-8" />

        <p className="mb-4 text-lg">Phone: (XXX) XXX-XXXX</p>
        <p className="text-lg">Email: info@yourdomain.com</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1F33] text-white text-center py-6 text-sm">
        © {new Date().getFullYear()} El-Tai Transportation. All rights reserved.
      </footer>

    </main>
  );
}
