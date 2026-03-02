import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "El-Tai Transportation | Non-Emergency Medical Transportation North of Seattle",
  description:
    "Safe, punctual, and compassionate Non-Emergency Medical Transportation services north of Seattle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

        {/* NAVBAR */}
   <nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    borderBottom: "1px solid #eee",
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  }}
>
  {/* LOGO → Click goes home */}
  <Link
    href="/"
    style={{
      fontSize: "22px",
      fontWeight: 700,
      color: "#0F2A43",
      textDecoration: "none"
    }}
  >
    El-Tai Transportation
  </Link>

  <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
    
    <Link href="/" style={{ textDecoration: "none", color: "#0F2A43" }}>
      Home
    </Link>

    <Link href="/about" style={{ textDecoration: "none", color: "#0F2A43" }}>
      About
    </Link>

    <Link href="/services" style={{ textDecoration: "none", color: "#0F2A43" }}>
      Services
    </Link>

    <Link href="/service-area" style={{ textDecoration: "none", color: "#0F2A43" }}>
      Service Area
    </Link>

    <Link href="/contact" style={{ textDecoration: "none", color: "#0F2A43" }}>
      Contact
    </Link>

    <Link
      href="/contact"
      style={{
        background: "#C8A95A",
        padding: "10px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#0F2A43",
        fontWeight: 600
      }}
    >
      Book Ride
    </Link>
  </div>
</nav>

        {children}

      </body>
    </html>
  );
}
