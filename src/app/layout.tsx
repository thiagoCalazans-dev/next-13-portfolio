"use client";

import "./globals.css";
import { Inter } from "@next/font/google";
import { Navbar } from "@/features/Navbar";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
