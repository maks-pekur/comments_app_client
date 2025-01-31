import type { Metadata, Viewport } from "next";

import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Providers } from "@/components/providers";
import "./globals.css";

const fontSans = GeistSans;
const fontMono = GeistMono;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
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
        className={cn(
          "bg-background text-foreground font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers>
          <div className="flex flex-col min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
