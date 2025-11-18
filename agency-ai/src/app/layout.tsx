import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NEURA//FORGE | Agenzia AI su Misura",
    template: "%s | NEURA//FORGE",
  },
  description:
    "NEURA//FORGE progetta sistemi di intelligenza artificiale su misura: dashboard integrate, automazioni, marketing predittivo e customer experience aumentata.",
  keywords: [
    "agenzia AI",
    "soluzioni AI personalizzate",
    "automazioni aziendali",
    "marketing AI",
    "sviluppo piattaforme AI",
  ],
  openGraph: {
    title: "NEURA//FORGE | Sistemi AI avanzati per il tuo business",
    description:
      "Trasformiamo processi, marketing e customer journey con automazioni AI personalizzate, pronte per scalare.",
    url: "https://agentic-7fc6c225.vercel.app",
    siteName: "NEURA//FORGE",
    locale: "it_IT",
    type: "website",
  },
  metadataBase: new URL("https://agentic-7fc6c225.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
