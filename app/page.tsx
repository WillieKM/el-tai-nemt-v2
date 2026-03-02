export const metadata = {
  title: "El-Tai Transportation | Non-Emergency Medical Transportation North of Seattle",
  description:
    "Safe, punctual, and compassionate Non-Emergency Medical Transportation services north of Seattle. Dialysis transport, hospital discharge, wheelchair accessible rides, and private medical transport.",
};

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO SECTION */}
      <section
        style={{
          background: "#0F2A43",
          color: "white",
          textAlign: "center",
          padding: "160px 20px" 
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "25px" }}>
          Reliable Non-Emergency Medical Transportation in Everett, Marysville & Snohomish
        </h1>

        <p style={{
          maxWidth: "720px",
          margin: "0 auto 35px auto",
          fontSize: "18px",
          opacity: 0.95
        }}>
          El-Tai Transportation provides safe, punctual, and compassionate
          medical transportation services throughout Everett, Marysville,
          Snohomish, and surrounding communities.
        </p>

        <div style={{ marginBottom: "25px" }}>
          <a
            href="/contact"
            style={{
              background: "#C8A95A",
              padding: "16px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#0F2A43",
              fontWeight: 600,
              marginRight: "15px"
            }}
          >
            Request Transportation
          </a>

          <a
            href="tel:4694075588"
            style={{
              border: "2px solid #C8A95A",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "white",
              fontWeight: 600
            }}
          >
            Call 469-407-5588
          </a>
        </div>

        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Licensed • Insured • Medicaid Coordination Available
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{
        background: "#F7F9FC",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#0F2A43" }}>
          Why Families Trust El-Tai Transportation
        </h2>

        <p style={{
          maxWidth: "750px",
          margin: "0 auto 60px auto",
          color: "#555",
          fontSize: "18px"
        }}>
          We understand that medical transportation is more than just a ride —
          it’s about safety, dignity, and reliability.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          <div>
            <h4>✔ On-Time Every Time</h4>
            <p>Dependable pickups and punctual arrivals.</p>
          </div>

          <div>
            <h4>✔ Compassionate Professionals</h4>
            <p>Respectful, patient, and trained drivers.</p>
          </div>

          <div>
            <h4>✔ Safety First</h4>
            <p>Fully licensed, insured, and compliant.</p>
          </div>

          <div>
            <h4>✔ Local Expertise</h4>
            <p>Serving north Seattle communities with care.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "50px", color: "#0F2A43" }}>
          Trusted by Patients & Families
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "10px" }}>
            ⭐⭐⭐⭐⭐
            <p>Professional, reliable, and always on time.</p>
          </div>

          <div style={{ background: "white", padding: "30px", borderRadius: "10px" }}>
            ⭐⭐⭐⭐⭐
            <p>Hospital discharge was smooth and stress-free.</p>
          </div>

          <div style={{ background: "white", padding: "30px", borderRadius: "10px" }}>
            ⭐⭐⭐⭐⭐
            <p>Drivers are compassionate and respectful.</p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{
        background: "#F7F9FC",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#0F2A43" }}>
          Proudly Serving North of Seattle
        </h2>

        <p style={{
          maxWidth: "750px",
          margin: "0 auto 40px auto",
          fontSize: "18px",
          color: "#555"
        }}>
          Everett • Marysville • Snohomish • Surrounding Communities
        </p>

        <a
          href="/service-area"
          style={{
            background: "#0F2A43",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
            fontWeight: 600
          }}
        >
          View Service Areas
        </a>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Need Medical Transportation Today?
        </h2>

        <p style={{ marginBottom: "25px" }}>
          Call <strong>469-407-5588</strong> or request a ride online.
        </p>

        <a
          href="/contact"
          style={{
            background: "#C8A95A",
            padding: "16px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#0F2A43",
            fontWeight: 600
          }}
        >
          Request Transportation
        </a>
      </section>

    </main>
  );
}
