import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/Components/Navbar";
// import Footer from "@/Components/Footer";
import Provider from '@/Components/Provider'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alumni Plus",
  description: "Tezpur University Alumni Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
       <Provider> {children}</Provider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
