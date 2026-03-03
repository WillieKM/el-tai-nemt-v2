"use client";export const metadata = {
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
import { useState } from "react";

const faqs = [
  {
    question: "Do you provide transportation for dialysis appointments?",
    answer:
      "Yes. We regularly transport patients to and from dialysis treatments throughout Everett, Marysville, and Snohomish.",
  },
  {
    question: "Do you assist with hospital discharge transportation?",
    answer:
      "Absolutely. We provide safe and reliable transportation home after hospital discharge.",
  },
  {
    question: "Are your vehicles wheelchair accessible?",
    answer:
      "Yes. We offer wheelchair-accessible transportation for patients with mobility needs.",
  },
  {
    question: "Do you accept Medicaid coordination?",
    answer:
      "We work with Medicaid transportation coordination services. Contact us directly for eligibility details.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Everett, Marysville, Snohomish, and surrounding communities throughout Snohomish County.",
  },
];

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}
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

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Why Families Trust El-Tai Transportation
        </h2>

        <p style={{ maxWidth: "750px", margin: "0 auto 60px auto" }}>
          We understand medical transportation is more than just a ride —
          it’s about safety, dignity, and reliability.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div>
            <h4>✔ Always On Time</h4>
            <p>Dependable scheduling and punctual pickups.</p>
          </div>

          <div>
            <h4>✔ Respectful & Caring Drivers</h4>
            <p>Professional, patient, and attentive service.</p>
          </div>

          <div>
            <h4>✔ Safety You Can Trust</h4>
            <p>Fully licensed and insured for peace of mind.</p>
          </div>

          <div>
            <h4>✔ Proudly Local</h4>
            <p>Serving Everett, Marysville & Snohomish.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          background: "#F7F9FC",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "50px" }}>
          Trusted by Patients & Families
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div style={{ background: "white", padding: "30px", borderRadius: "10px" }}>
            ⭐⭐⭐⭐⭐
            <p>
              “They’ve been transporting my father to dialysis for months.
              Always on time and always kind.”
            </p>
            <strong>— Everett Family</strong>
          </div>

          <div style={{ background: "white", padding: "30px", borderRadius: "10px" }}>
            ⭐⭐⭐⭐⭐
            <p>
              “Very professional and caring during hospital discharge.”
            </p>
            <strong>— Marysville Resident</strong>
          </div>
        </div>
      </section>

    </main>
  );
}
