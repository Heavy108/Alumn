'use client'
import style from "@/css/Achievement.module.css";
import Image from "next/image";
import { Data } from "@/Js/Data";
import Title from "@/Components/Title";
import Button from "./Button";
import sty from "@/css/button.module.css"
import Link from "next/link";

function Achievement() {
    // const imageLoader = ({ src, width, quality }) => {
    //     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    //   }
    const title ="Alumni Achievements";
  return (
    <>
     <Title title={title}/> 
      <div className={style.wrapper}>
         
      {Data.map((t, index) => (
        <div className={style.card} key={index}>
          <div className={style.upper}>
            <Image 
            
              src={t.image}
              width={560}
              height={560}
              alt="Achievers"
              
              
            />
            
            <div className={style.Introduction}>
              <h3>{t.name}</h3>
              <h4>{t.Designation}</h4>
              <h4>{t.position}</h4>
            </div>
          </div>
          <p>{t.Detail}</p>
        </div>
      ))}
      
      </div>
      <div className={sty.wrapper2}>
        <Link href='/CommingSoon'><Button text="More" /></Link>
      
      </div>
    </>
  );
}

export default Achievement;

// export const Data = [
//   {
//     image: "@Assets/Profile.png",
//     name: "Lisa Xavier",
//     Designation: "Senior Software",
//     position: "Developer, TCS",
//     Detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     image: "@Assets/Profile.png",
//     name: "Lisa Xavier",
//     Designation: "Senior Software",
//     position: "Developer, TCS",
//     Detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     image: "@Assets/Profile.png",
//     name: "Lisa Xavier",
//     Designation: "Senior Software",
//     position: "Developer, TCS",
//     Detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];
