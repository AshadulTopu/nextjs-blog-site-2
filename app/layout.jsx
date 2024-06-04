import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Next JS Blog",
  description: "Tech Blog using daisy ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100 dark:bg-medium overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
