import "./globals.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body className="bg-gray-100">
        <Hero>
          <Navbar />
        </Hero>
        {children}
      </body>
    </html>
  );
}
