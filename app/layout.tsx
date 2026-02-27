export const metadata = {
  title: "El-Tai Transportation",
  description: "Premium Non-Emergency Medical Transportation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Segoe UI, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
