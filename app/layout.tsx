import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/app-header";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EPANET Utilities",
  description:
    "A collection of tools to help you work with EPANET files and models",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-900 min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppHeader />
          <div className="container mx-auto px-4 py-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
