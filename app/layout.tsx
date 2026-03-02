import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "El-Tai Transportation",
  description:
    "Reliable Non-Emergency Medical Transportation in Everett, Marysville, and Snohomish.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav className="navbar">
          <Link href="/" className="logo">
            El-Tai Transportation
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/service-area">Service Area</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="cta">
              Book Ride
            </Link>
          </div>
        </nav>

        {children}
<footer className="footer">
  <p>El-Tai Transportation</p>
  <p>469-407-5588</p>
  <p>info@el-taitransportation.com</p>
  <p>Serving Everett, Marysville & Snohomish</p>
</footer>
        <a href="tel:4694075588" className="floating-call">
  Call Now
</a>
      </body>
    </html>
  );
}
