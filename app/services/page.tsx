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
    <main style={{ padding: "80px 20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* HEADER */}
      <section style={{ textAlign: "center", marginBottom: "70px" }}>
        <h1 style={{ fontSize: "42px", color: "#0F2A43" }}>Our Services</h1>
        <p style={{
          maxWidth: "750px",
          margin: "20px auto",
          color: "#555",
          fontSize: "18px"
        }}>
          El-Tai Transportation provides safe, punctual, and compassionate
          Non-Emergency Medical Transportation services north of Seattle.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "30px",
        maxWidth: "1100px",
        margin: "0 auto 100px auto"
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: "10px", color: "#0F2A43" }}>
              {service.title}
            </h3>
            <p style={{ color: "#555", fontSize: "15px" }}>
              {service.desc}
            </p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#0F2A43" }}>
          Why Choose El-Tai Transportation?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          <div>
            <h4>✔ Punctual & Reliable</h4>
            <p>We prioritize on-time arrivals and dependable scheduling.</p>
          </div>

          <div>
            <h4>✔ Compassionate Drivers</h4>
            <p>Our team treats every passenger with dignity and respect.</p>
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
        padding: "80px 20px",
        textAlign: "center",
        marginBottom: "100px",
        borderRadius: "12px"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#0F2A43" }}>
          Transparent & Fair Pricing
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#555",
          fontSize: "16px"
        }}>
          Rates vary based on distance and assistance level.
          Call <strong>469-407-5588</strong> for a personalized quote.
        </p>
      </section>

      {/* MEDICAID */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#0F2A43" }}>
          Insurance & Medicaid
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#555",
          fontSize: "16px"
        }}>
          We work with Medicaid transportation brokers and healthcare providers.
          Contact us to confirm eligibility and coverage options.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        background: "#0F2A43",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
        borderRadius: "12px",
        marginBottom: "100px"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
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

      {/* GOOGLE REVIEWS LINK */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#0F2A43" }}>
          Read More Reviews
        </h2>

        <a
          href="https://google.com"
          target="_blank"
          style={{
            background: "#C8A95A",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#0F2A43",
            fontWeight: 600
          }}
        >
          View Google Reviews
        </a>
      </section>

      {/* FINAL CTA */}
      <section style={{
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Need Reliable Medical Transportation?
        </h2>

        <p style={{ marginBottom: "25px" }}>
          Call 469-407-5588 or request transportation online.
        </p>

        <a
          href="/contact"
          style={{
            background: "#0F2A43",
            padding: "16px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
            fontWeight: 600
          }}
        >
          Request Transportation
        </a>
      </section>

    </main>
  );
}
