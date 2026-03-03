import Script from "next/script";

export const metadata = {
  title:
    "Medical Transportation in Everett, Marysville & Snohomish | El-Tai Transportation",
  description:
    "Non-Emergency Medical Transportation in Everett, Marysville, and Snohomish.",
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
        <h1>
          Non-Emergency Medical Transportation in Everett, Marysville & Snohomish
        </h1>
        <p>
          Safe, reliable, and punctual transportation services throughout Snohomish County.
        </p>
      </section>

      {/* GOOGLE MAP */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Serving Everett, Marysville & Snohomish</h2>

        <div style={{ maxWidth: "900px", margin: "30px auto" }}>
          <iframe
            src="https://www.google.com/maps?q=Everett,+WA&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        style={{
          background: "#F7F9FC",
          padding: "100px 20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: "25px" }}>
          <h4>Do you provide transportation within Everett?</h4>
          <p>
            Yes. We provide Non-Emergency Medical Transportation services
            throughout Everett for dialysis and medical appointments.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>Is Marysville included in your service area?</h4>
          <p>
            Absolutely. Marysville residents can rely on us for safe,
            punctual medical transportation.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>Do you serve Snohomish?</h4>
          <p>
            Yes. We proudly serve Snohomish and surrounding communities.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>How do I schedule a ride?</h4>
          <p>
            Call 469-407-5588 or visit our contact page to request transportation.
          </p>
        </div>
      </section>

      {/* FAQ SCHEMA (Correct Way) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you provide transportation within Everett?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We provide Non-Emergency Medical Transportation services throughout Everett.",
                },
              },
              {
                "@type": "Question",
                name: "Is Marysville included in your service area?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We proudly serve Marysville residents for medical transportation.",
                },
              },
              {
                "@type": "Question",
                name: "Do you serve Snohomish?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We provide services throughout Snohomish and surrounding areas.",
                },
              },
            ],
          }),
        }}
      />

    </main>
  );
}
