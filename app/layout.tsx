import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "El-Tai Transportation | Medical Transportation North of Seattle",
  description:
    "Reliable Non-Emergency Medical Transportation serving Everett, Marysville, Snohomish and surrounding communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <nav className="navbar">
          <Link href="/" className="logo">
            El-Tai Transportation
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/service-area">Service Area</Link>
            <Link href="/contact">Contact</Link>
            <a href="tel:4694075588" className="cta">
              Call 469-407-5588
            </a>
          </div>
        </nav>

        {children}

        {/* FLOATING MOBILE CALL BUTTON */}
        <a href="tel:4694075588" className="floating-call">
          📞 Call Now
        </a>

        {/* LOCAL BUSINESS SCHEMA */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "El-Tai Transportation",
              telephone: "469-407-5588",
              areaServed: [
                "Everett WA",
                "Marysville WA",
                "Snohomish WA",
                "Snohomish County WA"
              ],
              serviceType: "Non-Emergency Medical Transportation",
              url: "https://yourdomain.com"
            }),
          }}
        />

      </body>
    </html>
  );
}
