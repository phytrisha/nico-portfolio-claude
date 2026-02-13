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

        {/* Fixed email button */}
        <a
          href="mailto:helloiamnico@icloud.com"
          className="fixed bottom-0 right-17 z-50 px-6 py-4" style={{ backgroundColor: 'var(--externallink-bg)' }}
        >
          <span className="text-[24px]">👋</span>
        </a>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
