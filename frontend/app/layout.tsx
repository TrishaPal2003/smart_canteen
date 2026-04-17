import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "CCN Canteen",
  description: "Smart canteen ordering system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#d9ffee] text-on-surface min-h-screen flex flex-col">
        {/* Navbar (persistent) */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer (persistent) */}
       <Footer />
      </body>
    </html>
  );
}