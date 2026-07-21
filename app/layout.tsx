import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jason Victor Portfolio",
    template: "%s | Jason Victor",
  },

  description:
    "Explore the portfolio of Jason Victor, showcasing experience in information technology, leadership, creative media, photography, videography, and modern web development.",

  keywords: [
    "Jason Victor",
    "IT Professional",
    "Creative",
    "Portfolio",
    "Next.js",
    "React",
    "Photography",
    "Videography",
    "Leadership",
    "Creative Media",
    "Information Technology",
    "Web Development",
  ],

  authors: [
    {
      name: "Jason Victor",
    },
  ],

  creator: "Jason Victor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900">
        <Navbar />

        <main className="flex-1 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}