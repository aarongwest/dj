import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`,
  description: `Professional DJ, MC, Photo Booth, and Photography services for weddings, Sweet 15 celebrations, corporate events, and private parties in Los Angeles and Orange County. ${BUSINESS_INFO.yearsExperience} years of experience with ${BUSINESS_INFO.reviewCount}+ five-star reviews.`,
  keywords: [
    "DJ services Los Angeles",
    "Wedding DJ Orange County",
    "Sweet 15 DJ",
    "Corporate Event DJ",
    "Photo Booth Rental",
    "Event Photography",
    "Bilingual DJ",
    "Los Angeles DJ",
    "Orange County DJ",
  ],
  openGraph: {
    title: BUSINESS_INFO.name,
    description: BUSINESS_INFO.tagline,
    url: BUSINESS_INFO.website,
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_INFO.name,
    description: BUSINESS_INFO.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();
  
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
