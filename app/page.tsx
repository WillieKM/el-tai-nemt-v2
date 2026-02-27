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
          <a href="#how" style={{ textDecoration: "none", color: "#0F2A43" }}>How It Works</a>
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
          fontFamily: "Playfair Display, serif",
          fontSize: "60px",
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
          Safe, punctual, and compassionate transportation for
          medical appointments, dialysis treatments, hospital
          discharge, and rehabilitation visits.
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
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "40px",
          color: "#0F2A43"
        }}>
          About El-Tai Transportation
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
          background: "#C8A95A",
          margin: "20px auto 40px auto"
        }} />

        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "18px",
          color: "#555",
          lineHeight: 1.7
        }}>
          El-Tai Transportation is a trusted Non-Emergency Medical
          Transportation (NEMT) provider serving King County,
          Snohomish County, and Pierce County. Our mission is to
          deliver reliable and dignified transportation services
          that support the health and independence of our clients.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        background: "#F7F9FC",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "40px",
          color: "#0F2A43"
        }}>
          Our Services
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
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
            {
              title: "Dialysis Transportation",
              desc: "Reliable recurring transportation for dialysis treatments with punctual pickup and return."
            },
            {
              title: "Hospital Discharge",
              desc: "Safe transportation home after hospital discharge with assistance as needed."
            },
            {
              title: "Rehabilitation Visits",
              desc: "Comfortable transport to physical therapy and rehabilitation appointments."
            },
            {
              title: "Doctor Appointments",
              desc: "Door-to-door service for routine and specialist medical visits."
            },
            {
              title: "Wheelchair Transportation",
              desc: "Fully equipped wheelchair-accessible vehicles for safe and secure transport."
            },
            {
              title: "Private Medical Transport",
              desc: "Customized non-emergency transport for personal or private medical needs."
            }
          ].map((service) => (
            <div key={service.title} style={{
              background: "white",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 15px 40px rgba(15,42,67,0.08)"
            }}>
              <h3 style={{
                color: "#0F2A43",
                marginBottom: "15px"
              }}>
                {service.title}
              </h3>

              <p style={{
                color: "#555",
                fontSize: "15px",
                lineHeight: 1.6
              }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "40px",
          color: "#0F2A43"
        }}>
          How It Works
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
          background: "#C8A95A",
          margin: "20px auto 60px auto"
        }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {[
            "1. Schedule your ride via phone or email.",
            "2. Receive confirmation and pickup time.",
            "3. Our professional driver arrives on time.",
            "4. Safe transportation to your destination."
          ].map((step) => (
            <div key={step} style={{
              background: "#F7F9FC",
              padding: "30px",
              borderRadius: "10px"
            }}>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" style={{
        background: "#F7F9FC",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "40px",
          color: "#0F2A43"
        }}>
          Service Areas
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
          background: "#C8A95A",
          margin: "20px auto 40px auto"
        }} />

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
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "40px"
        }}>
          Request Transportation Today
        </h2>

        <div style={{
          width: "60px",
          height: "3px",
          background: "#C8A95A",
          margin: "20px auto 40px auto"
        }} />

        <p style={{ marginBottom: "30px" }}>
          Call us or email to schedule safe and reliable transportation.
        </p>

        <p>Phone: (XXX) XXX-XXXX</p>
        <p>Email: info@yourdomain.com</p>
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
