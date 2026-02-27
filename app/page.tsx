export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 80px",
        borderBottom: "1px solid #eee",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ fontSize: "20px", fontWeight: 600, color: "#0F2A43" }}>
          El-Tai Transportation
        </div>

        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <a href="#about" style={{ textDecoration: "none", color: "#0F2A43" }}>About</a>
          <a href="#services" style={{ textDecoration: "none", color: "#0F2A43" }}>Services</a>
          <a href="#how" style={{ textDecoration: "none", color: "#0F2A43" }}>How It Works</a>
          <a href="#fleet" style={{ textDecoration: "none", color: "#0F2A43" }}>Fleet</a>
          <a href="#faq" style={{ textDecoration: "none", color: "#0F2A43" }}>FAQ</a>
          <a href="#contact" style={{
            background: "#C8A95A",
            color: "#0F2A43",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600
          }}>
            Book Ride
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: "#0F2A43",
        color: "white",
        textAlign: "center",
        padding: "140px 20px"
      }}>
        <h1 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "60px",
          marginBottom: "30px"
        }}>
          Premium Non-Emergency Medical Transportation
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto 40px auto",
          opacity: 0.9
        }}>
          Safe, punctual, and compassionate transportation
          for medical appointments, dialysis treatments,
          hospital discharge, and rehabilitation visits.
        </p>

        <a href="#contact" style={{
          background: "#C8A95A",
          color: "#0F2A43",
          padding: "16px 32px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600
        }}>
          Schedule Transportation
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "42px", color: "#0F2A43" }}>
          About El-Tai Transportation
        </h2>

        <div style={{ width: "70px", height: "3px", background: "#C8A95A", margin: "20px auto 50px auto" }} />

        <div style={{ maxWidth: "900px", margin: "0 auto", fontSize: "18px", color: "#555", lineHeight: 1.8 }}>
          <p>
            El-Tai Transportation is a trusted Non-Emergency Medical
            Transportation provider serving King County,
            Snohomish County, and Pierce County. We specialize in
            reliable, door-to-door transportation for individuals
            requiring safe and professional medical travel.
          </p>

          <p style={{ marginTop: "30px" }}>
            Our commitment is simple: deliver transportation services
            that prioritize safety, dignity, punctuality, and
            professionalism at every step of the journey.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: "#F7F9FC", padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "40px", color: "#0F2A43" }}>
          Our Services
        </h2>

        <div style={{ width: "60px", height: "3px", background: "#C8A95A", margin: "20px auto 60px auto" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {[
            ["Dialysis Transportation", "Recurring, reliable rides for scheduled dialysis treatments."],
            ["Hospital Discharge", "Safe transportation home following medical procedures."],
            ["Rehabilitation Visits", "Comfortable rides to therapy and rehabilitation centers."],
            ["Doctor Appointments", "Timely transport for routine and specialist visits."],
            ["Wheelchair Accessible Transport", "Vehicles equipped for safe wheelchair mobility."],
            ["Private Medical Transport", "Custom non-emergency transportation solutions."]
          ].map(([title, desc]) => (
            <div key={title} style={{
              background: "white",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 15px 40px rgba(15,42,67,0.08)"
            }}>
              <h3 style={{ color: "#0F2A43", marginBottom: "15px" }}>{title}</h3>
              <p style={{ color: "#555" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "40px", color: "#0F2A43" }}>
          How It Works
        </h2>

        <div style={{ width: "60px", height: "3px", background: "#C8A95A", margin: "20px auto 60px auto" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {[
            "1. Schedule by phone or email.",
            "2. Receive confirmation.",
            "3. Driver arrives on time.",
            "4. Safe and comfortable transport."
          ].map((step) => (
            <div key={step} style={{ background: "#F7F9FC", padding: "30px", borderRadius: "10px" }}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" style={{ background: "#F7F9FC", padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "40px", color: "#0F2A43" }}>
          Our Fleet
        </h2>

        <div style={{ width: "60px", height: "3px", background: "#C8A95A", margin: "20px auto 40px auto" }} />

        <p style={{ maxWidth: "700px", margin: "0 auto", color: "#555" }}>
          Our vehicles are professionally maintained, clean,
          wheelchair-accessible, and equipped for safe medical transport.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "40px", color: "#0F2A43" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ width: "60px", height: "3px", background: "#C8A95A", margin: "20px auto 60px auto" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          <p><strong>Do you accept Medicaid?</strong><br />We work with Medicaid transportation brokers.</p>
          <p><strong>Are vehicles wheelchair accessible?</strong><br />Yes, we offer ADA-compliant vehicles.</p>
          <p><strong>How far in advance should I schedule?</strong><br />We recommend 24–48 hours notice.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        background: "#0F2A43",
        color: "white",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "40px" }}>
          Request Transportation Today
        </h2>

        <div style={{ width: "60px", height: "3px", background: "#C8A95A", margin: "20px auto 40px auto" }} />

        <p style={{ marginBottom: "20px" }}>
          Phone: (XXX) XXX-XXXX
        </p>
        <p>
          Email: info@yourdomain.com
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "20px",
        background: "#0A1F33",
        color: "white"
      }}>
        © {new Date().getFullYear()} El-Tai Transportation. All rights reserved.
      </footer>

    </main>
  );
}
