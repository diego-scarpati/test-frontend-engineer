import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playa3ull Frontend Test",
  description:
    "A modern e-commerce web application built with Next.js, TypeScript, and Tailwind CSS. Features include a responsive product listing page with pagination, detailed product views, a functional shopping cart with item management, and seamless integration with the Fake Store API for fetching product data. Designed with clean code principles, reusable components, and an intuitive user experience for desktop, tablet, and mobile devices.",
  keywords: [
    "next.js",
    "typescript",
    "tailwindcss",
    "ecommerce",
    "shopping cart",
    "fake store api",
    "responsive design",
    "clean code",
    "reusable components",
    "user experience",
    "desktop",
    "tablet",
    "mobile",
  ],
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
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
