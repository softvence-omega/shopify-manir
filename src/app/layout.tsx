import { Space_Grotesk, Urbanist } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manir Agency",
  description:
    "Manir Agency is a full-stack web development agency  with in-depth knowledge of web design, Shopify, WordPress, Wix, Webflow, and all e-commerce platforms.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body
        className={`${spaceGrotesk.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
