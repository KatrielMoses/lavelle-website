import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lavellenetworks.com"),
  title: {
    default: "Lavelle Networks — India's Largest SD-WAN Solutions Provider",
    template: "%s | Lavelle Networks",
  },
  description:
    "Lavelle Networks delivers enterprise SD-WAN, hybrid WAN, and branch networking solutions for India's largest organisations. Trusted by 3 out of 5 enterprise networks in India.",
  keywords: [
    "SD-WAN India",
    "SD-WAN solutions India",
    "enterprise networking India",
    "SD-WAN provider",
    "network solutions India",
    "managed SD-WAN",
    "Lavelle Networks",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lavellenetworks.com",
    siteName: "Lavelle Networks",
    title: "Lavelle Networks — India's Largest SD-WAN Solutions Provider",
    description:
      "Enterprise SD-WAN and networking solutions trusted by India's leading banks, conglomerates, and enterprises.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Lavelle Networks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavelle Networks — India's Largest SD-WAN Solutions Provider",
    description:
      "Enterprise SD-WAN and networking solutions trusted by India's leading banks, conglomerates, and enterprises.",
    images: ["/og/default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
