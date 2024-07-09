import style from "@/css/Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
function Footer() {
  return (
    <>
      <div className={style.Footer}>
        <h1 >Alumni Connect</h1>
        <ul className={style.list}>
          <li>University Links</li>
          <li>TU Home</li>
          <li>TU CSE News</li>
          <li>Magazine</li>
          <li>Student Affairs</li>
          <li>Yearly Magazine</li>
          <li>Events</li>
        </ul>

        <ul className={style.list}>
          <li>Important Links</li>
          <li>Services</li>
          <li>UpComming Events</li>
          <li>SciTech</li>
          <li>Byte</li>
          <li>Contact Us</li>
        </ul>
        <ul className={style.list}>
          <li>Address</li>
          <li>
            Alumni Connect Computer Science Department, Tezpur University,
            Napaam, Tezpur - 784028
          </li>
          <li className={style.icons}>
            <MdEmail />Alumn@tezu.ac.in
          </li>
          <li className={style.icons}>
            <FaPhoneAlt /> +91 XXXXX XXXXX
          </li>
        </ul>
        <ul className={style.list}>
          <li >
            <IoLogoYoutube /> <FaFacebookF /> <IoLogoInstagram />{" "}
            <FaLinkedinIn />
          </li>
          <li>Copyright © 2024 Alumni Connect ,TEZPUR UNIVERSITY</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
