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
  metadataBase: new URL(BUSINESS_INFO.website),
  title: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`,
  description: `Professional DJ, MC, Photo Booth, and Photography services for weddings, Sweet 16 and 15th birthday celebrations, corporate events, and private parties in Los Angeles and Orange County. ${BUSINESS_INFO.yearsExperience} years of experience with ${BUSINESS_INFO.reviewCount}+ five-star reviews.`,
  icons: {
    icon: '/dj-isaac-v-ico.png',
    shortcut: '/dj-isaac-v-ico.png',
    apple: '/dj-isaac-v-ico.png',
  },
  keywords: [
    "DJ services Los Angeles",
    "Wedding DJ Orange County",
    "Sweet 16 DJ",
    "Corporate Event DJ",
    "Photo Booth Rental",
    "Event Photography",
    "Los Angeles DJ",
    "Orange County DJ",
    "DJ near me",
    "Event DJ Los Angeles",
    "Orange County event DJ",
    "Beverly Hills DJ",
    "Newport Beach DJ",
    "Norwalk DJ",
  ],
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
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
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Norwalk",
    "geo.position": "33.835649;-118.0405815",
    "ICBM": "33.835649, -118.0405815",
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
