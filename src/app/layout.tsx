import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts";
import { RootProviders } from "@/providers/root-providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.geistSans.className} ${fonts.geistMono.className} antialiased`}
      >
        <Toaster />
        <RootProviders>
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
