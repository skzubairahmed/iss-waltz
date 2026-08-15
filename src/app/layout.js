import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Initialize the futuristic font
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono", // Optional: sets a CSS variable
});

export const metadata = {
  title: "The ISS Waltz",
  description: "Track the distance between the ISS and your city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Apply the font class and background to the body */}
      <body className={`${jetbrainsMono.className} bg-[#030712] text-[#F3F4F6] antialiased`}>
        {children}
      </body>
    </html>
  );
}