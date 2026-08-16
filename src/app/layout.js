import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "The ISS Waltz",
  description: "Track the distance between the ISS and your city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} bg-[#030712] text-[#F3F4F6] antialiased`}>
        {children}
      </body>
    </html>
  );
}