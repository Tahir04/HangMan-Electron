import "./globals.css";


export const metadata = {
  title: "Hangman",
  description: "Hangman by erehh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen w-full bg-gray-100">
        {children}
      </body>
    </html>
  );
}
