export const metadata = {
  title: "Contact El-Tai Transportation | Medical Transportation Snohomish County",
  description:
    "Request Non-Emergency Medical Transportation in Everett, Marysville, and Snohomish.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <h1>Request Medical Transportation</h1>
        <p>
          Call us directly or send a request below. We proudly serve families
          in Everett, Marysville, and Snohomish.
        </p>
      </section>
<section className="contact-form-section">
  <h2>Request Transportation</h2>

  <form className="contact-form">
    <input type="text" placeholder="Full Name" required />
    <input type="tel" placeholder="Phone Number" required />
    <input type="text" placeholder="Pickup Location" required />
    <input type="text" placeholder="Destination" required />
    <textarea placeholder="Appointment Date & Time"></textarea>

    <button type="submit">Submit Request</button>
  </form>

  <div className="contact-direct">
    <p>Or call us directly:</p>
    <a href="tel:4694075588">469-407-5588</a>
  </div>
</section>

    </main>
  );
}
