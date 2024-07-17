import style from "@/css/Giveback.module.css";
import Title from "./Title";
import Image from "next/image";
import Achi from "@/Assets/achivement.svg";
import mentor from "@/Assets/Mentor.svg";
import opportunities from "@/Assets/Opportunities.svg";
import donation from "@/Assets/donation.svg";


function GiveBack_card(props){

    return(
        <>
        <div className={style.card}>
           <Image
            src={props.img}
            />
            <div className={style.Introduction}>
           <center> <h4>{props.head}</h4></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
            </div>
        </div>
        </>
    )
}

// export default  GiveBack_card;

function  GiveBack(){
    return(
        <>
        <Title title="GiveBack"/>

        <div className={style.container}>
            <GiveBack_card head="Share Achievements" img ={Achi}/>
            <GiveBack_card head="Be a Mentor" img={mentor}/>
            <GiveBack_card head= "Share Opportunities" img={opportunities}/>
            <GiveBack_card head="PayBack" img={donation}/>
        </div>
        
        </>
    )
}
export default GiveBack