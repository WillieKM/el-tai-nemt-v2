"use client";

import { useState } from "react";

export default function HomePage() {
  /* FAQ DATA */
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
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "15px" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            fontSize: "18px",
            fontWeight: 600,
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
          {question}
          <span>{open ? "−" : "+"}</span>
        </button>

        {open && (
          <p style={{ marginTop: "10px", color: "#555", lineHeight: 1.6 }}>
            {answer}
          </p>
        )}
      </div>
    );
  }

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

      {/* FAQ SECTION */}
      <section
        style={{
          padding: "100px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>

    </main>
  );
}
