import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Typography } from "@mui/material";
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaroKung",
  description: "homepageforTaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {" "}
        <nav>
          <Link href="/about"><Typography>about me</Typography></Link>
          <Link href="/projects"><Typography>project</Typography></Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
