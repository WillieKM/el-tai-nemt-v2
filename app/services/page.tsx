export const metadata = {
  title: "NEMT Services | El-Tai Transportation North Seattle",
  description:
    "Professional Non-Emergency Medical Transportation services including dialysis transport, hospital discharge, wheelchair accessible transport, and doctor appointment rides North of Seattle.",
};

export default function Services() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}>

      <h1 style={{ fontSize: "42px", color: "#0F2A43", marginBottom: "30px" }}>
        Our Services
      </h1>

      <div style={{ lineHeight: 1.8, fontSize: "18px", color: "#555" }}>

        <h3>Dialysis Transportation</h3>
        <p>Reliable recurring rides for scheduled dialysis treatments with punctual pickup and drop-off.</p>

        <h3>Hospital Discharge</h3>
        <p>Safe and comfortable transportation home following hospital stays or outpatient procedures.</p>

        <h3>Rehabilitation Visits</h3>
        <p>Transportation to physical therapy, rehabilitation centers, and follow-up care appointments.</p>

        <h3>Doctor Appointments</h3>
        <p>On-time travel for primary care visits, specialist consultations, and routine medical care.</p>

        <h3>Wheelchair Accessible Transport</h3>
        <p>ADA-compliant vehicles equipped to safely transport passengers using wheelchairs.</p>

      </div>

    </main>
  );
}
