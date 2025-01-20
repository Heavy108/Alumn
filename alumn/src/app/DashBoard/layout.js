import DashboardLayout from "@/Components/DashBoardLayout";
import { Inter } from "next/font/google";
// import "../global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alumni-Admin",
  description: "Tezpur University Alumni Association",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}
     
      ><DashboardLayout>{children}</DashboardLayout></body>
    </html>
  );
}
