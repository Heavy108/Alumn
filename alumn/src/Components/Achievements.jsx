"use client";
import style from "@/css/Achievement.module.css";
import sty from "@/css/button.module.css";
import Image from "next/image";
import { Data } from "@/Js/Data";
import Title from "@/Components/Title";
import Button from "./Button";
import Link from "next/link";

// Reusable Achievement Card Component
function AchievementCard({ link, image, name, designation, position, detail }) {
  return (
    <div className={style.card}>
      <Link href={link} target="_blank" rel="noopener noreferrer" className={style.superlink}>
        <div className={style.upper}>
          <Image src={image} width={560} height={560} alt="Achievers" />
          <div className={style.Introduction}>
            <h3>{name}</h3>
            <h4>{designation}</h4>
            <h4>{position}</h4>
          </div>
        </div>
        <p>{detail}</p>
      </Link>
    </div>
  );
}

// Main Achievement Component
function Achievement() {
  const title = "Alumni Achievements";
  return (
    <>
      {/* <Title title={title} /> */}
      <div className={style.wrapper}>
        {Data.map((t, index) => (
          <AchievementCard
            key={index}
            link={t.Link}
            image={t.image}
            name={t.name}
            designation={t.Designation}
            position={t.position}
            detail={t.Detail}
          />
        ))}
      </div>
      {/* <div className={sty.wrapper2}>
        <Link href="/Alumni_Achievement">
          <Button text="More" />
        </Link>
      </div> */}
    </>
  );
}

export default Achievement;
