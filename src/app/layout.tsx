import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: profile.headline,
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
