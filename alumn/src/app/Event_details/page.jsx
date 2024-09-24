
import style from "@/css/Event_Details.module.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import Image from "next/image";
import logo from "@/Assets/Logo.png";
import { IoLocation, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { fetchEventData } from "../api/Events/route";

async function Event_detail({ searchParams }) {
    const { _id } = searchParams;
    
    
    return (
        <>
            <Navbar />
            <Title title="Event Details" />
            <center className={style.heading}>
                <h4>We are excited to announce the upcoming event on December 15-16 for Tezpur University Alumni</h4>
            </center>
            <div className={style.container}>
                <div className={style.detail_card}>
                    <Image
                        src={img}
                        width={1200}
                        height={1200}
                        alt="Event Banner"
                    />
                    <div className={style.top}>
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt="TU Logo"
                        />
                        <div className={style.toptext}>
                            <h4>Alumni Relations, Tezpur University</h4>
                            <h3>{head}</h3>
                        </div>
                    </div>
                    <h4 className={style.topic}>{title}</h4>
                    <div className={style.profile}>
                        <p>{name}</p>
                        <p>{position}</p>
                    </div>
                    <p className={style.location}><span><IoLocation /> Venue:</span> {venue}</p>
                    <p className={style.location}><span>Time:</span> {time}</p>
                    <center className={style.links}>
                        <IoLogoLinkedin />
                        <IoMail />
                    </center>
                </div>
                <div className={style.speaker}>
                    <Image
                        src='/Profile.png'
                        width={200}
                        height={200}
                        alt="Speaker Photo"
                    />
                    <h3>About</h3>
                    <p>{description}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Event_detail;
