import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          {modal}

          <ThemeToggle />

          {/* Fixed email button */}
          <a
            href="mailto:hello@nico.com"
            className="fixed bottom-0 right-0 z-50 p-5 hover:opacity-80 transition-opacity"
            style={{ backgroundColor: 'var(--email-btn-bg)' }}
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
                stroke="var(--email-btn-icon)"
                strokeWidth="5"
                strokeLinecap="square"
                strokeLinejoin="miter"
                fill="none"
              />
              <path
                d="M8 18L40 46L72 18"
                stroke="var(--email-btn-icon)"
                strokeWidth="4"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
