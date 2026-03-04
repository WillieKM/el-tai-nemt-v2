import "./globals.css";
import Navbar from "./components/Navbar"
import Link from "next/link";

export const metadata = {
  title: "El-Tai Transportation",
  description:
    "Non-Emergency Medical Transportation serving Everett, Marysville & Snohomish.",
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
  <div className="nav-inner">

    <Link href="/" className="brand">
      El-Tai Transportation
    </Link>

  <div className="nav-menu">
  <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/service-area">Service Area</Link>
  <Link href="/contact">Contact</Link>
  <Link href="/contact" className="book-btn">
    Book Ride
  </Link>
</div>

  </div>
</nav>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            <h3>El-Tai Transportation</h3>
            <p>469-407-5588</p>
            <p>info@el-taitransportation.com</p>
            <p>Serving Everett, Marysville & Snohomish</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
