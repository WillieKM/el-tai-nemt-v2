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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
