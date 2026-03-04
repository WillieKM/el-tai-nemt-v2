:::
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
const [open, setOpen] = useState(false);

return (
<nav className="navbar">
<div className="nav-container">

    <Link href="/" className="logo">
      El-Tai Transportation
    </Link>

    {/* HAMBURGER */}
    <div
      className={`hamburger ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    {/* DESKTOP NAV */}
    <div className="nav-links">
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/service-area">Service Area</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/contact" className="book-btn">
        Book Ride
      </Link>
    </div>

  </div>

  {/* MOBILE MENU */}
  <div className={`mobile-menu ${open ? "show" : ""}`}>

    <Link href="/about" onClick={() => setOpen(false)}>
      About
    </Link>

    <Link href="/services" onClick={() => setOpen(false)}>
      Services
    </Link>

    <Link href="/service-area" onClick={() => setOpen(false)}>
      Service Area
    </Link>

    <Link href="/contact" onClick={() => setOpen(false)}>
      Contact
    </Link>

    <Link href="/contact" className="book-btn" onClick={() => setOpen(false)}>
      Book Ride
    </Link>

  </div>

  {/* OVERLAY */}
  {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

</nav>

);
}
:::
