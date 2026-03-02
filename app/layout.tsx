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

      </body>
    </html>
  );
}
