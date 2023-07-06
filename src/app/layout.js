"use client";
import UserContext from "./context/UserContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserContext>
        <body className={inter.className}>{children}</body>
      </UserContext>
    </html>
  );
}
