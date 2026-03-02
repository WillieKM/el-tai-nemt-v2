export default function Home() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "20px" : "22px 80px",
        borderBottom: "1px solid #eee",
        background: "white",
        gap: isMobile ? "15px" : "0"
      }}>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "#0F2A43" }}>
          El-Tai Transportation
        </div>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "15px" : "40px",
          fontWeight: 500,
          alignItems: "center"
        }}>
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
        padding: isMobile ? "100px 20px" : "150px 20px"
      }}>
        <h1 style={{
          fontSize: isMobile ? "36px" : "54px",
          maxWidth: "900px",
          margin: "0 auto 30px auto",
          lineHeight: 1.2
        }}>
          Premium Non-Emergency Medical Transportation
        </h1>

        <p style={{
          fontSize: isMobile ? "16px" : "20px",
          maxWidth: "750px",
          margin: "0 auto 40px auto",
          opacity: 0.9
        }}>
          Safe, punctual, and compassionate transportation for medical
          appointments, dialysis, hospital discharge, and rehabilitation visits.
        </p>

        <a href="#contact" style={{
          background: "#C8A95A",
          padding: "14px 30px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#0F2A43",
          fontWeight: 700,
          fontSize: "15px"
        }}>
          Schedule Transportation
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        background: "#F7F9FC",
        padding: isMobile ? "80px 20px" : "120px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: isMobile ? "30px" : "40px", color: "#0F2A43" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          maxWidth: "1100px",
          margin: "60px auto"
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
              padding: "40px",
              borderRadius: "14px",
              boxShadow: "0 15px 45px rgba(15,42,67,0.08)"
            }}>
              <h3 style={{ color: "#0F2A43" }}>{service}</h3>
              <p style={{ color: "#555" }}>
                Reliable, safe, and professional transportation tailored to your medical needs.
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
