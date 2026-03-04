"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link href="/" className="logo">
          El-Tai Transportation
        </Link>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

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
  );
}
