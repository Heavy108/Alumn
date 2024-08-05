import Button from "@/Components/Button";
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
import Don from "@/Assets/donation.svg";
import qr from "@/Assets/QR.svg";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

function Donation() {
  return (
    <>
    <Navbar/>
      <Title title="GiveBack" />
      <div className={style.container}>
        
        <form action="" className={style.form}>
        <h4>PayBack</h4>
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
            label="Transaction ID/
UPI Reference ID"
            type="text"
            placeholder="Enter text here"
          />
          <Input
            label="Attachments"
            type="file"
            placeholder="Add Attachment"
          />
         
          <Button text="Submit" />
        </form>
        <div className={style.img_conatiner2}>
        <center>QR Code</center>
        <Image 
            src={qr}
            alt="PayBack"
            />
        <Image 
            src={Don}
            alt="PayBack"
            />
            </div>
      </div>
      <Footer/>
    </>
  );
}
export default Donation;
