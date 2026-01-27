import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hi, I am nico...",
  description: "Hi, I am Nico, a Strategic Designer studying Philosophy while UX freelancing. Exploring the intersection of design and philosophy.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        {children}
        {modal}

        {/* Fixed email button */}
        <a
          href="mailto:hello@nico.com"
          className="fixed bottom-0 right-0 z-50 bg-black p-5 hover:opacity-80 transition-opacity"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="18"
              width="64"
              height="44"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
            />
            <path
              d="M8 18L40 46L72 18"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
