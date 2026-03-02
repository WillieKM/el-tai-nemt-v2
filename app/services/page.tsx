export const metadata = {
  title: "NEMT Services | El-Tai Transportation North of Seattle",
  description:
    "Professional Non-Emergency Medical Transportation services north of Seattle including dialysis transport, hospital discharge, wheelchair accessible rides, and private medical transport.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: "🩺",
      title: "Dialysis Transportation",
      desc: "Reliable, recurring transportation for scheduled dialysis treatments with safe transfers and on-time arrival."
    },
    {
      icon: "🏥",
      title: "Hospital Discharge",
      desc: "Safe and coordinated transportation home following hospital stays, outpatient procedures, or emergency room visits."
    },
    {
      icon: "🧑‍⚕️",
      title: "Doctor Appointments",
      desc: "On-time transportation to physicians, specialists, clinics, and follow-up visits."
    },
    {
      icon: "🦽",
      title: "Rehabilitation Visits",
      desc: "Dependable rides to physical therapy and rehabilitation centers north of Seattle."
    },
    {
      icon: "♿",
      title: "Wheelchair Accessible Transport",
      desc: "ADA-compliant vehicles equipped for secure wheelchair transport and professional assistance."
    },
    {
      icon: "🚐",
      title: "Private Medical Transport",
      desc: "Personalized non-emergency medical transportation for individuals requiring extra care."
    }
  ];

  return (
    <main style={{ padding: "100px 20px" }}>
      
      {/* HEADER */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "48px", color: "#0F2A43" }}>Our Services</h1>
        <p style={{
          maxWidth: "750px",
          margin: "20px auto",
          color: "#555",
          fontSize: "18px"
        }}>
          El-Tai Transportation provides professional Non-Emergency Medical Transportation
          services north of Seattle, delivering safe, punctual, and compassionate rides
          for individuals and healthcare facilities.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "40px",
        maxWidth: "1100px",
        margin: "0 auto 120px auto"
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 15px 40px rgba(15,42,67,0.08)",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "15px" }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: "15px", color: "#0F2A43" }}>
              {service.title}
            </h3>
            <p style={{ color: "#555" }}>{service.desc}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ textAlign: "center", marginBottom: "120px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "50px", color: "#0F2A43" }}>
          Why Choose El-Tai Transportation?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          <div>
            <h4>✔ Punctual & Reliable</h4>
            <p>We prioritize on-time arrivals and dependable scheduling.</p>
          </div>

          <div>
            <h4>✔ Compassionate Service</h4>
            <p>Our drivers treat every passenger with dignity and respect.</p>
          </div>

          <div>
            <h4>✔ Licensed & Insured</h4>
            <p>Fully compliant with transportation and safety regulations.</p>
          </div>

          <div>
            <h4>✔ Serving North of Seattle</h4>
            <p>Focused service coverage in communities north of Seattle.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{
        background: "#F7F9FC",
        padding: "100px 20px",
        textAlign: "center",
        marginBottom: "120px"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#0F2A43" }}>
          Transparent & Fair Pricing
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#555",
          fontSize: "18px"
        }}>
          We offer competitive and transparent pricing for all non-emergency medical
          transportation services. Rates vary based on distance, level of assistance,
          and vehicle type. Call <strong>469-407-5588</strong> for a personalized quote.
        </p>
      </section>

      {/* MEDICAID */}
      <section style={{ textAlign: "center", marginBottom: "120px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px", color: "#0F2A43" }}>
          Insurance & Medicaid
        </h2>

        <p style={{
          maxWidth: "750px",
          margin: "0 auto",
          color: "#555",
          fontSize: "18px"
        }}>
          El-Tai Transportation works with Medicaid transportation brokers
          and healthcare providers. If you qualify for Medicaid transportation
          benefits, we can coordinate rides through approved programs.
          Contact us to confirm eligibility and coverage options.
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: "#0F2A43",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
        borderRadius: "12px"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Need Reliable Medical Transportation?
        </h2>

        <p style={{ marginBottom: "30px" }}>
          Call 469-407-5588 or request transportation online today.
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
