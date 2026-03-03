export const metadata = {
  title:
    "El-Tai Transportation | Non-Emergency Medical Transportation in Everett, Marysville & Snohomish",
  description:
    "Safe and reliable medical transportation serving Everett, Marysville, and Snohomish.",
};

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section
        style={{
          background: "#0F2A43",
          color: "white",
          textAlign: "center",
          padding: "140px 20px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Reliable Medical Transportation for Families in Everett, Marysville & Snohomish
        </h1>

        <p style={{ maxWidth: "750px", margin: "0 auto 30px auto" }}>
          Providing safe, punctual, and compassionate transportation for
          dialysis, hospital discharge, rehabilitation visits, and doctor appointments.
        </p>

        <a
          href="/contact"
          style={{
            background: "#C8A95A",
            padding: "14px 30px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#0F2A43",
            fontWeight: 700,
            marginRight: "15px",
          }}
        >
          Request Transportation
        </a>

        <a
          href="tel:4694075588"
          style={{
            border: "2px solid #C8A95A",
            padding: "12px 26px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
            fontWeight: 700,
          }}
        >
          Call 469-407-5588
        </a>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          background: "#F7F9FC",
          textAlign: "center",
          padding: "30px 20px",
          fontWeight: 600,
        }}
      >
        Licensed & Insured • Medicaid Coordination Available • Serving Snohomish County
      </section>

    </main>
  );
}
