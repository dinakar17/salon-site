import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Seven The Hair and Beauty Salon | Premium Unisex Salon in Pradhikaran, Pune",
  description:
    "Experience premium hair styling, nail artistry, skincare treatments, and bridal services at Seven The Hair and Beauty Salon. Located in Pradhikaran, Pune. 4.8★ rated unisex salon with expert stylists. Book your appointment today!",
  keywords: [
    "Seven Salon Pune",
    "hair salon Pradhikaran",
    "unisex salon Pune",
    "beauty salon Pradhikaran",
    "hair styling Pune",
    "nail art salon",
    "bridal makeup Pune",
    "hair cut Pradhikaran",
    "facial treatments Pune",
    "salon near me",
    "best salon Pune",
    "hair color Pradhikaran",
  ],
  authors: [{ name: "Seven The Hair and Beauty Salon" }],
  creator: "Seven The Hair and Beauty Salon",
  publisher: "Seven The Hair and Beauty Salon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://seventhesalon.in",
    siteName: "Seven The Hair and Beauty Salon",
    title: "Seven The Hair and Beauty Salon | Premium Unisex Salon in Pune",
    description:
      "Pune's trusted unisex salon offering premium hair styling, nail artistry, skincare, and bridal services. Located in Pradhikaran with 4.8★ rating from 320+ customers.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Seven The Hair and Beauty Salon Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven The Hair and Beauty Salon | Premium Unisex Salon in Pune",
    description:
      "Experience premium beauty services at Pune's highest-rated unisex salon. Hair styling, nail art, skincare & bridal services in Pradhikaran.",
    images: ["/images/logo.png"],
    creator: "@seven_thesalon",
    site: "@seven_thesalon",
  },
  alternates: {
    canonical: "https://seventhesalon.in",
  },
  category: "Beauty & Personal Care",
  classification: "Beauty Salon",
  other: {
    "business:contact_data:locality": "Pradhikaran",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:country_name": "India",
    "business:contact_data:postal_code": "411044",
    "business:contact_data:street_address":
      "Shop No. B 12/13, Regent Arcade, Chatrapati Sambhaji Chowk Sector No 26",
    "business:contact_data:phone_number": "+91 91126 64990",
    "business:contact_data:email": "info@seventhesalon.in",
    "place:location:latitude": "18.6478",
    "place:location:longitude": "73.7637",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
