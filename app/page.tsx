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
    Safe & Reliable Medical Transportation North of Seattle
  </h1>

  <p style={{
    maxWidth: "720px",
    margin: "0 auto 35px auto",
    fontSize: "18px",
    opacity: 0.95
  }}>
    El-Tai Transportation provides dependable Non-Emergency Medical Transportation
    for dialysis treatments, hospital discharge, rehabilitation visits,
    and doctor appointments — with punctual service and compassionate care.
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

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "50px", color: "#0F2A43" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto 50px auto"
        }}>
          <div>
            <h4>Dialysis Transportation</h4>
            <p>Reliable recurring rides for dialysis patients.</p>
          </div>

          <div>
            <h4>Hospital Discharge</h4>
            <p>Safe transport home after hospital stays.</p>
          </div>

          <div>
            <h4>Wheelchair Accessible</h4>
            <p>ADA-compliant vehicles with secure assistance.</p>
          </div>
        </div>

        <a
          href="/services"
          style={{
            background: "#C8A95A",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#0F2A43",
            fontWeight: 600
          }}
        >
          View All Services
        </a>
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
    it’s about safety, dignity, and reliability. Our commitment is to
    provide professional service that patients and families can depend on.
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
      <p>We prioritize punctual pickups and dependable scheduling.</p>
    </div>

    <div>
      <h4>✔ Compassionate Professionals</h4>
      <p>Our drivers are respectful, patient, and attentive.</p>
    </div>

    <div>
      <h4>✔ Safety First</h4>
      <p>Fully licensed, insured, and compliant with safety standards.</p>
    </div>

    <div>
      <h4>✔ Local Expertise</h4>
      <p>Serving communities north of Seattle with dedication and care.</p>
    </div>
  </div>
</section>

      {/* TESTIMONIALS PREVIEW */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#0F2A43" }}>
          What Our Clients Say
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <div>
            ⭐⭐⭐⭐⭐
            <p>"Always on time and extremely professional."</p>
          </div>

          <div>
            ⭐⭐⭐⭐⭐
            <p>"Reliable service for my dialysis appointments."</p>
          </div>

          <div>
            ⭐⭐⭐⭐⭐
            <p>"Compassionate drivers who truly care."</p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA PREVIEW */}
      <section style={{
        background: "#F7F9FC",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#0F2A43" }}>
          Service Area
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          fontSize: "18px",
          color: "#555"
        }}>
          Proudly serving communities north of Seattle with reliable
          Non-Emergency Medical Transportation services.
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
      <section style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
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
