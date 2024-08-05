import Button from "@/Components/Button";
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
import mentor from "@/Assets/Mentor.svg";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function BeAMentor() {
  return (
    <>
    <Navbar/>
      <Title title="GiveBack" />
      <div className={style.container}>
        
        <form action="" className={style.form}>
        <h4>Be a Mentor</h4>
          <Input 
            label="Name" 
            type="text" 
            placeholder="Enter your name" />
          <Input 
            label="Alumni ID" 
            type="text" 
            placeholder="Enter your ID" />
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your Email" />
          <Input
            label="Eligibility"
            type="text"
            placeholder="Enter text here"
          />
          <Textarea
            label="Description"
            type="text"
            placeholder="Enter text here"
          />
         
          <Button text="Submit" />
        </form>
        <div className={style.img_conatiner}>
        <Image 
            src={mentor}
            alt="Be a Mentor"
            />
            </div>
      </div>
      <Footer/>
    </>
  );
}
export default BeAMentor;
