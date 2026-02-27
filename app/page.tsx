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
        <div style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#0F2A43"
        }}>
          El-Tai Transportation
        </div>

        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <a href="#about" style={{ textDecoration: "none", color: "#0F2A43" }}>About</a>
          <a href="#services" style={{ textDecoration: "none", color: "#0F2A43" }}>Services</a>
          <a href="#areas" style={{ textDecoration: "none", color: "#0F2A43" }}>Service Areas</a>
          <a href="#contact" style={{ textDecoration: "none", color: "#0F2A43" }}>Contact</a>

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
          fontSize: "56px",
          fontWeight: 700,
          marginBottom: "30px"
        }}>
          Premium Non-Emergency
          <br />
          Medical Transportation
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto 40px auto",
          opacity: 0.9
        }}>
          Safe. Punctual. Professional. Delivering dignified
          transportation for medical appointments, dialysis,
          hospital discharge, and rehabilitation visits.
        </p>

        <a href="#contact" style={{
          background: "#C8A95A",
          color: "#0F2A43",
          padding: "16px 32px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
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
        <h2 style={{
          fontSize: "40px",
          color: "#0F2A43",
          marginBottom: "30px"
        }}>
          About El-Tai Transportation
        </h2>

        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "18px",
          color: "#555",
          lineHeight: 1.7
        }}>
          El-Tai Transportation provides compassionate,
          reliable, and professional Non-Emergency Medical
          Transportation throughout Washington. We ensure
          every passenger experiences comfort, punctuality,
          and dignity with every ride.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        background: "#F7F9FC",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "40px",
          color: "#0F2A43",
          marginBottom: "60px"
        }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {[
            "Dialysis Transportation",
            "Hospital Discharge",
            "Rehabilitation Visits",
            "Doctor Appointments",
            "Wheelchair Transportation",
            "Private Medical Transport"
          ].map((service) => (
            <div key={service} style={{
              background: "white",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{
                color: "#0F2A43",
                fontSize: "18px"
              }}>
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" style={{
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "40px",
          color: "#0F2A43",
          marginBottom: "30px"
        }}>
          Service Areas
        </h2>

        <p style={{
          fontSize: "18px",
          color: "#C8A95A",
          fontWeight: 600
        }}>
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
        <h2 style={{
          fontSize: "36px",
          marginBottom: "20px"
        }}>
          Contact Us
        </h2>

        <p style={{ marginBottom: "10px" }}>
          Email: info@yourdomain.com
        </p>

        <p>
          Phone: (XXX) XXX-XXXX
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
