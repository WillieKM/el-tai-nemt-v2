export const metadata = {
  title: "Medical Transportation in Everett, Marysville & Snohomish | El-Tai Transportation",
  description:
    "Non-Emergency Medical Transportation in Everett, Marysville, and Snohomish. Dialysis, hospital discharge, rehabilitation visits, and doctor appointments."
};

export default function ServiceArea() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          background: "#0F2A43",
          color: "white",
          textAlign: "center",
          padding: "120px 20px"
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Non-Emergency Medical Transportation in Everett, Marysville & Snohomish
        </h1>

        <p style={{
          maxWidth: "750px",
          margin: "0 auto",
          fontSize: "18px",
          opacity: 0.9
        }}>
          El-Tai Transportation proudly provides safe, reliable, and punctual
          medical transportation services throughout Snohomish County.
        </p>
      </section>

      {/* EVERETT */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ color: "#0F2A43", marginBottom: "15px" }}>
          Medical Transportation in Everett
        </h2>

        <p style={{ lineHeight: 1.8, color: "#555" }}>
          We specialize in Non-Emergency Medical Transportation throughout Everett.
          Whether you need transportation for dialysis treatments, hospital discharge,
          rehabilitation visits, or routine doctor appointments, our team ensures
          punctual arrival and professional service.
        </p>

        <p style={{ lineHeight: 1.8, color: "#555" }}>
          Our Everett transportation services focus on safety, dignity, and
          compassionate care for every passenger.
        </p>
      </section>

      {/* MARYSVILLE */}
      <section style={{ background: "#F7F9FC", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: "#0F2A43", marginBottom: "15px" }}>
            Medical Transportation in Marysville
          </h2>

          <p style={{ lineHeight: 1.8, color: "#555" }}>
            El-Tai Transportation proudly serves Marysville residents who require
            dependable medical transportation. From dialysis centers to hospitals
            and specialty clinics, we ensure reliable scheduling and safe travel.
          </p>

          <p style={{ lineHeight: 1.8, color: "#555" }}>
            Our experienced drivers understand the importance of punctuality
            and compassionate assistance.
          </p>
        </div>
      </section>

      {/* SNOHOMISH */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ color: "#0F2A43", marginBottom: "15px" }}>
          Medical Transportation in Snohomish
        </h2>

        <p style={{ lineHeight: 1.8, color: "#555" }}>
          Residents in Snohomish rely on El-Tai Transportation for professional
          Non-Emergency Medical Transportation services. We provide safe
          transportation for hospital discharge, rehabilitation visits,
          outpatient procedures, and ongoing medical treatments.
        </p>

        <p style={{ lineHeight: 1.8, color: "#555" }}>
          Our commitment to safety and professionalism ensures every passenger
          travels comfortably and confidently.
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0F2A43",
          color: "white",
          textAlign: "center",
          padding: "100px 20px"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Need Medical Transportation in Everett, Marysville, or Snohomish?
        </h2>

        <p style={{ marginBottom: "30px" }}>
          Contact El-Tai Transportation today to schedule reliable service.
        </p>

        <a
          href="/contact"
          style={{
            background: "#C8A95A",
            padding: "14px 30px",
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
