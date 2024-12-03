import Image from "next/image";
import styles from "./page.module.css";
import Home1 from "./Home/page";
export const revalidate = 0;
export default function Home() {
  return (
    <Home1/>
  );
}
