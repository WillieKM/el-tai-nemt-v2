export const metadata = {
  title: "About El-Tai Transportation | NEMT North Seattle",
  description:
    "Learn about El-Tai Transportation, a trusted Non-Emergency Medical Transportation provider serving communities north of Seattle with safe, punctual, and compassionate service.",
};

export default function About() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}>

      <h1 style={{ fontSize: "42px", color: "#0F2A43", marginBottom: "30px" }}>
        About El-Tai Transportation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#555", marginBottom: "30px" }}>
        El-Tai Transportation is a trusted Non-Emergency Medical Transportation (NEMT)
        provider serving communities north of Seattle. We specialize in reliable,
        compassionate, and punctual transportation for individuals who require safe
        travel to medical appointments. 
      </p>

      <h2 style={{ fontSize: "28px", color: "#0F2A43", marginTop: "50px" }}>
        Our Mission
      </h2>

      <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#555" }}>
        Our mission is to provide dependable transportation that prioritizes dignity,
        safety, and professionalism. We understand that medical travel can be stressful,
        which is why we focus on comfort, timeliness, and respectful service.
      </p>

      <h2 style={{ fontSize: "28px", color: "#0F2A43", marginTop: "50px" }}>
        Why Choose Us
      </h2>

      <ul style={{ fontSize: "18px", lineHeight: 1.8, color: "#555", paddingLeft: "20px" }}>
        <li>Professional and courteous drivers</li>
        <li>Wheelchair-accessible vehicles</li>
        <li>On-time pickup and drop-off</li>
        <li>Serving communities north of Seattle</li>
        <li>Direct booking and personalized service</li>
      </ul>

    </main>
  );
}
