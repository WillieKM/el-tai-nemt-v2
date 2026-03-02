export const metadata = {
  title: "Medical Transportation in Everett, Marysville & Snohomish | El-Tai Transportation",
  description:
    "Non-Emergency Medical Transportation in Everett, Marysville, and Snohomish. Dialysis, hospital discharge, rehabilitation visits, and doctor appointments.",
};

export default function ServiceAreaPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section
        style={{
          background: "#0F2A43",
          color: "white",
          textAlign: "center",
          padding: "120px 20px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Non-Emergency Medical Transportation in Everett, Marysville & Snohomish
        </h1>

        <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "18px", opacity: 0.9 }}>
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
          From dialysis treatments to hospital discharge and routine appointments,
          we ensure punctual arrival and professional care.
        </p>
      </section>

      {/* MARYSVILLE */}
      <section style={{ background: "#F7F9FC", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: "#0F2A43", marginBottom: "15px" }}>
            Medical Transportation in Marysville
          </h2>
          <p style={{ lineHeight: 1.8, color: "#555" }}>
            El-Tai Transportation proudly serves Marysville residents requiring
            dependable medical transportation to hospitals, dialysis centers,
            rehabilitation facilities, and specialist clinics.
          </p>
        </div>
      </section>

      {/* SNOHOMISH */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ color: "#0F2A43", marginBottom: "15px" }}>
          Medical Transportation in Snohomish
        </h2>
        <p style={{ lineHeight: 1.8, color: "#555" }}>
          Residents in Snohomish rely on El-Tai Transportation for safe,
          compassionate Non-Emergency Medical Transportation services
          for ongoing treatments and outpatient care.
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0F2A43",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Need Medical Transportation in Everett, Marysville, or Snohomish?
        </h2>

        <p style={{ marginBottom: "30px" }}>
          Call 469-407-5588 or request transportation online.
        </p>

        <a
          href="/contact"
          style={{
            background: "#C8A95A",
            padding: "14px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#0F2A43",
            fontWeight: 600,
          }}
        >
          Request Transportation
        </a>
      </section>

    </main>
  );
}
