import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./(componets)/Nav";
import Footer from "./(componets)/Footer";
import Head from "next/head"; // Import Next.js Head component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Camping At Pawna Lake",
  description: "Camping at Pawna Lake offers a unique experience with beautiful views and exciting activities for all.",
  keywords: "camping, pawna lake, camping at pawna, outdoor adventure, lakeside camping, camping getaway",
  openGraph: {
    type: "website",
    url: "https://www.pawnacamping.com",
    title: "Camping At Pawna Lake",
    description: "Camping at Pawna Lake offers a unique experience with beautiful views and exciting activities for all.",
    keywords: "camping, pawna lake, camping at pawna, outdoor adventure, lakeside camping, camping getaway",
    images: [
      {
        url: "https://www.pawnalakecamps.com/wp-content/uploads/2019/04/photo_6150133949872060136_y.jpg",
        width: 1200,
        height: 630,
        alt: "Camping near the lake",
      },
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Set default meta tags for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
