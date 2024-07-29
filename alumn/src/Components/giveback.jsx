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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
            </div>
        </div>
        </Link>
        </>
    )
}

// export default  GiveBack_card;

function  GiveBack(){
    return(
        <>
        <Title title="GiveBack"/>

        <div className={style.container}>
            
            <GiveBack_card head="Share Achievements" img ={Achi}  address='/Share_Achievements'/>
            <GiveBack_card head="Be a Mentor" img={mentor}  address='/Mentor'/>
            <GiveBack_card head= "Share Opportunities" img={opportunities}  address='/Share_Opportunities'/>
            <GiveBack_card head="PayBack" img={donation}  address='/Payback'/>
        </div>
        
        </>
    )
}
export default GiveBack