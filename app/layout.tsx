import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Codvix Tech Private Limited | Innovating the Future",
  description:
    "Codvix Tech Private Limited is a modern tech company building next-generation digital products. Creator of Billbuckz – India's cashback platform empowering local shops.",
  keywords: [
    "Codvix",
    "Codvix Tech",
    "Billbuckz",
    "Fintech India",
    "Cashback App",
    "Local Shop Cashback",
    "Codvix Private Limited",
    "Startup India",
  ],
  authors: [{ name: "Codvix Team", url: "https://codvix.in" }],
  creator: "Codvix Tech Private Limited",
  metadataBase: new URL("https://codvix.in"),
  openGraph: {
    title: "Codvix Tech Private Limited",
    description:
      "Empowering the future of fintech with Billbuckz and other innovative solutions.",
    url: "https://codvix.in",
    siteName: "Codvix",
    images: [
      {
        url: "https://codvix.in/og-image.jpg", // replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Codvix Tech - Innovating the Future",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codvix Tech Private Limited",
    description:
      "Codvix is building the future of digital commerce and fintech in India.",
    creator: "@codvix", // replace if you have an actual Twitter handle
    images: ["https://codvix.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
