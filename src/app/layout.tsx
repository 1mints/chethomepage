import type { Metadata,Viewport } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu_Mono({ weight: '400',
subsets: ['latin'], });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
