import "./globals.css";

export const metadata = {
  title: "El-Tai Transportation | Non-Emergency Medical Transportation North of Seattle",
  description:
    "Professional Non-Emergency Medical Transportation services north of Seattle including dialysis transport, hospital discharge, wheelchair accessible rides, and private medical transport.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#F7F9FC" }}>
        {children}
      </body>
    </html>
  );
}
