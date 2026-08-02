import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DotTech Solutions | Innovating Tomorrow, Building Today",
    template: "%s | DotTech Solutions",
  },
  description:
    "DotTech Solutions is a modern software development and AI solutions company specializing in Web Development, Mobile Apps, AI, Cloud Solutions, and UI/UX Design.",
  keywords: [
    "DotTech Solutions",
    "Software Development",
    "AI Solutions",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Digital Transformation",
    "NestJS",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "DotTech Solutions", url: "https://dottechsolutions.com" }],
  creator: "DotTech Solutions",
  metadataBase: new URL("https://dottechsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dottechsolutions.com",
    title: "DotTech Solutions | Innovating Tomorrow, Building Today",
    description:
      "Enterprise-grade software development, AI solutions, and digital transformation services.",
    siteName: "DotTech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "DotTech Solutions | Innovating Tomorrow, Building Today",
    description:
      "Enterprise-grade software development, AI solutions, and digital transformation services.",
    creator: "@dottechsolutions",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DotTech Solutions",
              url: "https://dottechsolutions.com",
              logo: "https://dottechsolutions.com/images/logo.png",
              description:
                "Modern software development and AI solutions company.",
              sameAs: [
                "https://www.instagram.com/dot_techsolutions",
                "https://www.linkedin.com/in/dottechsolutions/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-90250-88044",
                contactType: "customer service",
                email: "info.dottechsolutions@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
