import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/AktivGrotesk-Black.otf",
  variable: "--font-aktiv-black",
  weight: "800",
});
const aktivxBlack = localFont({
  src: "./fonts/AktivGrotesk-XBold.otf",
  variable: "--font-aktiv-xbold",
  weight: "900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Buddy Belgium",
  description: "The First CBD Hub of Europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Buddy Belgium is Europe's leading CBD hub, offering premium CBD products and resources for enthusiasts and businesses."
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aktivxBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
