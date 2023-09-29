import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const bolivia = localFont({
  src: [
    {
      path: "../public/assets/fonts/Bolivia-Condensed.woff2",
      type: "woff2",
    },
  ],
});

export const metadata = {
  title: "Modular Spices",
  description: "Elevate your culinary experience with our premium spices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bolivia.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
