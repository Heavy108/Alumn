import Button from "@/Components/Button";
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
import Transcrip from "@/Assets/Transcript.svg"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function Transcript() {
  return (
    <>
    <Navbar/>
      <Title title="Service" />
      <center className={style.texts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center>
      <div className={style.container}>
        
        <form action="" className={style.form}>
        <h4>Transcript</h4>
          <Input 
            label="Name" 
            type="text" 
            placeholder="Enter your name" />
            <Input 
            label="Roll No" 
            type="text" 
            placeholder="Enter your Roll no" />
          <Input 
            label="Alumni ID" 
            type="text" 
            placeholder="Enter your ID" />
          
         
          <Input
            label="Email"
            type="text"
            placeholder="Enter your email"
          />
          
          <Input
            label="Reason"
            type="text"
            placeholder="Enter your reason "
          />
          <Button text="Submit" />
        </form>
        <div className={style.img_conatiner}>
        <Image 
            src={Transcrip}
            alt="TranScript"
            />
            </div>
      </div>
      <Footer/>
    </>
  );
}
export default Transcript;
