export default function ContactPage() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "42px", color: "#0F2A43", marginBottom: "20px" }}>
        Request Transportation
      </h1>

      <p style={{ marginBottom: "40px", color: "#555" }}>
        Fill out the form below and our team will contact you shortly to confirm your ride.
        You can also call us directly at <strong>469-407-5588</strong>.
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        style={{
          display: "grid",
          gap: "20px"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          required
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="dropoff"
          placeholder="Dropoff Location"
          required
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="date"
          name="date"
          required
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <textarea
          name="notes"
          placeholder="Additional Notes (Wheelchair? Stretcher? Assistance needed?)"
          rows={4}
          style={{ padding: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            background: "#C8A95A",
            padding: "16px",
            borderRadius: "8px",
            border: "none",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Submit Request
        </button>
      </form>

      <div style={{ marginTop: "50px", color: "#555" }}>
        <p>Email: info@el-taitransportaion.com</p>
        <p>Phone: 469-407-5588</p>
        <p>Serving areas north of Seattle.</p>
      </div>

    </main>
  );
}
