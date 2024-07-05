import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import LandingHeader from "./_components/LandingHeader";
import Footer from './_components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rene & Grace Sizzlingg",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
            {children}
        </body>
    </html>
    </ClerkProvider>
  
  );
}
