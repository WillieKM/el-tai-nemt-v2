export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #eee",
        background: "white"
      }}>
        <div style={{ fontSize: "20px", fontWeight: 600, color: "#0F2A43" }}>
          El-Tai Transportation
        </div>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#areas">Service Areas</a>
          <a href="#contact" style={{
            background: "#C8A95A",
            padding: "8px 16px",
            borderRadius: "6px",
            textDecoration: "none",
            color: "#0F2A43",
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
        padding: "120px 20px"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Reliable Non-Emergency Medical Transportation
        </h1>

        <p style={{
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          fontSize: "18px"
        }}>
          Safe, punctual, and compassionate transportation for medical
          appointments, dialysis, hospital discharge, and rehabilitation visits.
        </p>

        <a href="#contact" style={{
          background: "#C8A95A",
          padding: "14px 28px",
          borderRadius: "8px",
          textDecoration: "none",
          color: "#0F2A43",
          fontWeight: 600
        }}>
          Schedule Transportation
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", color: "#0F2A43" }}>
          About El-Tai Transportation
        </h2>

        <p style={{
          maxWidth: "800px",
          margin: "30px auto",
          fontSize: "18px",
          color: "#555"
        }}>
          El-Tai Transportation provides professional and dependable
          Non-Emergency Medical Transportation services throughout King County,
          Snohomish County, and Pierce County. We prioritize safety, dignity,
          and punctuality for every passenger.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        background: "#F7F9FC",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", color: "#0F2A43" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "50px auto"
        }}>
          {[
            "Dialysis Transportation",
            "Hospital Discharge",
            "Rehabilitation Visits",
            "Doctor Appointments",
            "Wheelchair Accessible Transport",
            "Private Medical Transport"
          ].map(service => (
            <div key={service} style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <h3>{service}</h3>
              <p style={{ color: "#555" }}>
                Reliable, safe, and professional transportation tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", color: "#0F2A43" }}>
          Service Areas
        </h2>

        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          King County • Snohomish County • Pierce County
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        background: "#0F2A43",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px" }}>
          Request Transportation
        </h2>

        <p style={{ marginTop: "20px" }}>
          Phone: (XXX) XXX-XXXX
        </p>

        <p>Email: info@yourdomain.com</p>
      </section>

    </main>
  );
}
