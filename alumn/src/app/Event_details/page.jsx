import style from "@/css/Event_Details.module.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import Image from "next/image";
import logo from "@/Assets/Logo.png";
import { IoLocation, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { fetchEventData } from "../api/Events/route";

async function Event_detail({ searchParams }) {
    const id =searchParams.id
    // const id ="66f2b85247b33c2f6e46a923"
    console.log(id)
    const data = await fetchEventData(id); // Fetch event data by ID
    // console.log(data)
    if (!data) {
        return <p>No event data found</p>;
    }
    console.log(typeof data)
    // Destructure necessary fields from the fetched data
    const { E_image,tiitle, Head, Name, Position, Venue, time, description ,S_image} = data;
    // console.log( E_image, Title,  Head, Name, Position, Venue, time, description)
    // console.log(data)
    return (
        <>
            <Navbar />
            <Title title="Event Details" />
            <center className={style.heading}>
                <h4>We are excited to announce the upcoming event on December 15-16 for Tezpur University Alumni</h4>
            </center>
            <div className={style.container}>
                <div className={style.detail_card}>
                    {/* Display the event image */}
                    {E_image && (
                        <Image
                            src={`data:image/jpeg;base64,${E_image}`}
                            width={1200}
                            height={1200}
                            alt="Event Banner"
                        />
                    )}
                    <div className={style.top}>
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt="TU Logo"
                        />
                        <div className={style.toptext}>
                            <h4>Alumni Relations, Tezpur University</h4>
                            <h3>{Head || "Event Head"}</h3>
                        </div>
                    </div>
                    <h4 className={style.topic}>{tiitle || "Event Title"}</h4>
                    <div className={style.profile}>
                        <p>{Name || "Speaker Name"}</p>
                        <p>{Position || "Speaker Position"}</p>
                    </div>
                    <p className={style.location}>
                        <span><IoLocation /> Venue:</span> {Venue || "Event Venue"}
                    </p>
                    <p className={style.location}>
                        <span>Time:</span> {time || "Event Time"}
                    </p>
                    <center className={style.links}>
                        <IoLogoLinkedin />
                        <IoMail />
                    </center>
                </div>
                <div className={style.speaker}>
                {S_image && (
                        <Image
                            src={`data:image/jpeg;base64,${S_image}`}
                            width={1200}
                            height={1200}
                            alt="Speaker image"
                        />
                    )}
                    <h3>About</h3>
                    <p>{description || "No description available."}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Event_detail;
