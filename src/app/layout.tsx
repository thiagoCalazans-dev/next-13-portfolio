import "./globals.css";

import { Inter } from "@next/font/google";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--inter-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-w-full h-screen max-w-screen-xl mx-auto bg-base-200 dark:bg-base-900 dark:text-base-100 transition-all duration-300">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
