import style from "@/css/Giveback.module.css";
import Title from "./Title";
import Image from "next/image";
import Achi from "@/Assets/achivement.svg";
import mentor from "@/Assets/Mentor.svg";
import opportunities from "@/Assets/Opportunities.svg";
import donation from "@/Assets/donation.svg";
import Link from "next/link";


function GiveBack_card(props){

    return(
        <>
        <Link href={props.address} className={style.superlink}>
        <div className={style.card}>
           <Image
            src={props.img}
            />
            <div className={style.Introduction}>
           <center> <h4>{props.head}</h4></center>
            <p>{props.text}</p>
            </div>
        </div>
        </Link>
        </>
    )
}

// export default  GiveBack_card;

function  GiveBack(){
    const achivem =
      "Share your personal and professional milestones with the alumni community. Inspire others with your journey and accomplishments.";
    const Ment =
      "Support students and recent graduates by sharing your experiences and insights. Help them navigate their paths to success.";
    const opport =
      "Post job openings, internships, and other opportunities to help alumni and students achieve their career aspirations.";
    const payb =
      "Contribute to initiatives that support education and growth, helping the association make a lasting impact.";
    return(
        <>
        <Title title="GiveBack"/>

        <div className={style.container}>
            
            <GiveBack_card head="Share Achievements" img ={Achi}  address='/Share_Achievements' text={achivem}/>
            <GiveBack_card head="Be a Mentor" img={mentor}  address='/Mentor'text={Ment}/>
            <GiveBack_card head= "Share Opportunities" img={opportunities}  address='/Share_Opportunities'text={opport}/>
            <GiveBack_card head="PayBack" img={donation}  address='/Payback'text={payb}/>
        </div>
        
        </>
    )
}
export default GiveBack