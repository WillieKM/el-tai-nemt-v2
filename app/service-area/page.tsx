import Script from "next/script";

export const metadata = {
  title:
    "Medical Transportation in Everett, Marysville & Snohomish | El-Tai Transportation",
  description:
    "Non-Emergency Medical Transportation serving Everett, Marysville, Snohomish and surrounding communities.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <main>

        {/* HERO */}
        <section className="hero">
          <h1>
            Non-Emergency Medical Transportation in Everett, Marysville & Snohomish
          </h1>
          <p>
            Safe, reliable, and punctual medical transportation throughout Snohomish County.
          </p>
        </section>

        {/* SERVICE AREA CONTENT */}
        <section className="section">
          <h2>Serving Everett, Marysville & Snohomish</h2>
          <p>
            El-Tai Transportation proudly serves families throughout Snohomish County,
            providing dialysis transport, hospital discharge transportation,
            rehabilitation visits, and routine medical appointment rides.
          </p>
        </section>

        {/* GOOGLE MAP */}
        <section className="section light">
          <iframe
            src="https://www.google.com/maps?q=Everett,+WA&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
          />
        </section>

        {/* FAQ SECTION */}
        <section className="section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h4>Do you provide transportation within Everett?</h4>
            <p>
              Yes. We provide Non-Emergency Medical Transportation services throughout Everett.
            </p>
          </div>

          <div className="faq-item">
            <h4>Is Marysville included in your service area?</h4>
            <p>
              Yes. Marysville residents can rely on our safe and punctual transportation.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do you serve Snohomish?</h4>
            <p>
              Absolutely. We proudly serve Snohomish and surrounding communities.
            </p>
          </div>

          <div className="faq-item">
            <h4>How do I schedule a ride?</h4>
            <p>
              Call 469-407-5588 or use our contact page to request transportation.
            </p>
          </div>
        </section>

      </main>

      {/* FAQ SCHEMA (MUST BE OUTSIDE MAIN BUT INSIDE COMPONENT RETURN) */}
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
    </>
  );
}
