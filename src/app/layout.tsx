import type { Metadata } from "next";
import { Manrope, DotGothic16 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScrollProvider } from "@/context/SmoothScrollContext";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import AOSInit from "@/components/ui/AOSInit";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-man",
});

const dotGothic = DotGothic16({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dot",
});

export const metadata: Metadata = {
  title: "mrE.",
  description: "Fullstack Developer Portfolio",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${dotGothic.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <Cursor />
            <Preloader />
            <AOSInit />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
