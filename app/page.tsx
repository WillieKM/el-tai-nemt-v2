export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "22px 80px",
        borderBottom: "1px solid #eee",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "#0F2A43" }}>
          El-Tai Transportation
        </div>

        <div style={{ display: "flex", gap: "40px", fontWeight: 500 }}>
          <a href="#about" style={{ textDecoration: "none", color: "#0F2A43" }}>About</a>
          <a href="#services" style={{ textDecoration: "none", color: "#0F2A43" }}>Services</a>
          <a href="#areas" style={{ textDecoration: "none", color: "#0F2A43" }}>Service Areas</a>
          <a href="#contact" style={{
            background: "#C8A95A",
            padding: "10px 22px",
            borderRadius: "8px",
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
        padding: "150px 20px"
      }}>
        <h1 style={{
          fontSize: "54px",
          maxWidth: "900px",
          margin: "0 auto 30px auto",
          lineHeight: 1.2
        }}>
          Premium Non-Emergency Medical Transportation
        </h1>

        <p style={{
          fontSize: "20px",
          maxWidth: "750px",
          margin: "0 auto 40px auto",
          opacity: 0.9
        }}>
          Safe, punctual, and compassionate transportation for medical
          appointments, dialysis, hospital discharge, and rehabilitation visits.
        </p>

        <a href="#contact" style={{
          background: "#C8A95A",
          padding: "16px 36px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#0F2A43",
          fontWeight: 700,
          fontSize: "16px"
        }}>
          Schedule Transportation
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", color: "#0F2A43", marginBottom: "20px" }}>
          About El-Tai Transportation
        </h2>

        <div style={{
          width: "70px",
          height: "4px",
          background: "#C8A95A",
          margin: "20px auto 40px auto"
        }} />

        <p style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "19px",
          lineHeight: 1.8,
          color: "#555"
        }}>
          El-Tai Transportation delivers professional and dependable
          Non-Emergency Medical Transportation services throughout King County,
          Snohomish County, and Pierce County. Our commitment is simple:
          safety, dignity, punctuality, and exceptional care on every ride.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        background: "#F7F9FC",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", color: "#0F2A43", marginBottom: "20px" }}>
          Our Services
        </h2>

        <div style={{
          width: "70px",
          height: "4px",
          background: "#C8A95A",
          margin: "20px auto 60px auto"
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto"
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
              padding: "45px",
              borderRadius: "14px",
              boxShadow: "0 15px 45px rgba(15,42,67,0.08)",
              transition: "all 0.3s ease"
            }}>
              <h3 style={{
                color: "#0F2A43",
                marginBottom: "18px",
                fontSize: "20px"
              }}>
                {service}
              </h3>
              <p style={{ color: "#555", lineHeight: 1.6 }}>
                Reliable, safe, and professional transportation tailored to your medical needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" style={{
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", color: "#0F2A43" }}>
          Service Areas
        </h2>

        <div style={{
          width: "70px",
          height: "4px",
          background: "#C8A95A",
          margin: "20px auto 40px auto"
        }} />

        <p style={{
          fontSize: "20px",
          fontWeight: 500,
          color: "#444"
        }}>
          King County • Snohomish County • Pierce County
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        background: "#0F2A43",
        color: "white",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Request Transportation
        </h2>

        <div style={{
          width: "70px",
          height: "4px",
          background: "#C8A95A",
          margin: "20px auto 40px auto"
        }} />

        <p style={{ fontSize: "20px", marginBottom: "12px" }}>
          Phone: (XXX) XXX-XXXX
        </p>

        <p style={{ fontSize: "20px" }}>
          Email: info@el-taitransportation.com
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0A1F33",
        color: "white",
        textAlign: "center",
        padding: "30px",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} El-Tai Transportation. All rights reserved.
      </footer>

    </main>
  );
}
