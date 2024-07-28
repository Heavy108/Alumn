import Button from "@/Components/Button";
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
// import opportunities from "@/Assets/opportunities.svg"

function Opportunities() {
  return (
    <>
      <Title title="GiveBack" />
      <div className={style.container}>
        
        <form action="" className={style.form}>
        <h4>Share Opportunity</h4>
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
            label="Opportunity Type"
            type="text"
            placeholder="Enter text here"
          />
          <Textarea
            label="Description"
            type="text"
            placeholder="Enter text here"
          />
          <Input
            label="Attachments"
            type="file"
            placeholder="Enter text here"
          />
          <Button text="Submit" />
        </form>
        <div className={style.img_conatiner}>
        {/* <Image 
            src={opportunities}
            alt="share opportunities"
            /> */}
            </div>
      </div>
    </>
  );
}
export default Opportunities;
