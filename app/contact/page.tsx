export const metadata = {
  title: "Request Medical Transportation | El-Tai Transportation",
  description:
    "Request Non-Emergency Medical Transportation in Everett, Marysville & Snohomish.",
};

export default function ContactPage() {
  return (
    <main className="section">

      <h1>Request Medical Transportation</h1>

      <p>
        Call us directly or send a request below. We proudly serve families
        in Everett, Marysville, and Snohomish.
      </p>

      <form className="contact-form">

        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Pickup Location" required />
        <input type="text" placeholder="Destination" required />
        <input type="datetime-local" required />

        <button type="submit">Submit Request</button>

      </form>

      <div className="contact-direct">
        <p>Or call us directly:</p>
        <a href="tel:4694075588">469-407-5588</a>
      </div>

    </main>
  );
}
