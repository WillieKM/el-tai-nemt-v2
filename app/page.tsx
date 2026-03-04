export const metadata = {
  title:
    "El-Tai Transportation | Non-Emergency Medical Transportation in Everett, Marysville & Snohomish",
  description:
    "Safe, punctual, and compassionate medical transportation serving Everett, Marysville, and Snohomish.",
};

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container">

          <h1>
            Reliable Medical Transportation in Everett,
            Marysville & Snohomish
          </h1>

          <p>
            Safe, punctual, and compassionate transportation for dialysis,
            hospital discharge, rehabilitation visits, and doctor appointments.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="primary-btn">
              Request Transportation
            </a>

            <a href="tel:4694075588" className="secondary-btn">
              Call 469-407-5588
            </a>
          </div>

          <div className="trust-bar">
            Licensed • Insured • Medicaid Coordination Available
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">

          <h2>Why Families Trust El-Tai Transportation</h2>

          <p className="section-intro">
            Medical transportation is more than a ride — it's about safety,
            dignity, and reliability for patients and families.
          </p>

          <div className="grid">

            <div className="card">
              <h3>✔ Always On Time</h3>
              <p>Reliable scheduling and punctual pickups.</p>
            </div>

            <div className="card">
              <h3>✔ Compassionate Drivers</h3>
              <p>Professional and respectful assistance for patients.</p>
            </div>

            <div className="card">
              <h3>✔ Safe & Insured</h3>
              <p>Licensed, insured, and fully compliant transportation.</p>
            </div>

            <div className="card">
              <h3>✔ Local Service</h3>
              <p>Serving Everett, Marysville, Snohomish and nearby areas.</p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section light">
        <div className="container">

          <h2>Our Medical Transportation Services</h2>

          <div className="grid">

            <div className="card">
              <h3>Dialysis Transportation</h3>
              <p>
                Reliable recurring transportation to dialysis appointments.
              </p>
            </div>

            <div className="card">
              <h3>Hospital Discharge</h3>
              <p>
                Safe transportation home after hospital discharge.
              </p>
            </div>

            <div className="card">
              <h3>Doctor Appointments</h3>
              <p>
                Transportation for routine medical visits and checkups.
              </p>
            </div>

            <div className="card">
              <h3>Wheelchair Transport</h3>
              <p>
                Wheelchair-accessible vehicles available for mobility needs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">

          <h2>Trusted by Patients & Families</h2>

          <div className="grid">

            <div className="card testimonial">
              ⭐⭐⭐⭐⭐
              <p>
                “They transport my father to dialysis every week. Always on
                time and very kind drivers.”
              </p>
              <strong>— Everett Family</strong>
            </div>

            <div className="card testimonial">
              ⭐⭐⭐⭐⭐
              <p>
                “Professional service and very helpful after hospital
                discharge.”
              </p>
              <strong>— Marysville Resident</strong>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">

        <h2>Need Medical Transportation Today?</h2>

        <p>Call 469-407-5588 or request transportation online.</p>

        <a href="/contact" className="primary-btn">
          Book Transportation
        </a>

      </section>

    </main>
  );
}
