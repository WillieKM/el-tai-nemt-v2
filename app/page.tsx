export default function Home() {
  return (
    <div>

      <h1 className="text-5xl font-bold">
        UPDATE CONFIRMED 2025
      </h1>

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

        {/* ALL OTHER SECTIONS REMAIN SAME */}

        <footer style={{
          textAlign: "center",
          padding: "20px",
          background: "#0A1F33",
          color: "white"
        }}>
          © {new Date().getFullYear()} El-Tai Transportation. All rights reserved.
        </footer>

      </main>
    </div>
  );
}
