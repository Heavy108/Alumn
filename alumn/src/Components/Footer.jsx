import style from "@/css/Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className={style.Footer}>
        <h1>Alumni Plus</h1>
        <ul className={style.list}>
          <li className={style.head}>University Links</li>
          <Link
            href={"http://www.tezu.ac.in/"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>TU Home</li>
          </Link>
          <Link
            href={"http://www.tezu.ac.in/newsfeeds.html"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>TU News</li>
          </Link>
          <Link
            href={"https://www.tezu.ernet.in/yoga/manthan/"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Magazine</li>
          </Link>
          <Link
            href={"https://www.tezu.ernet.in/students_affairs/"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Student Affairs</li>
          </Link>
          <Link
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Yearly Magazine</li>
          </Link>
          <Link
            href={"/Event"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Events</li>
          </Link>
        </ul>

        <ul className={style.list}>
          <li className={style.head}>Important Links</li>
          <Link
            href={"/Digital_Card"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Services</li>
          </Link>
          <Link
            href={"/Transcript"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Transcript</li>
          </Link>
          <Link
            href={"https://www.tezu.ernet.in/bus_time/Bus_Timing_1_11_2024.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Bus Timing</li>
          </Link>
          <Link
            href={"https://www.tezu.ernet.in/guesthouse/guesth.html"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Guest House</li>
          </Link>
          <Link
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className={style.hyperlink}
          >
            <li>Contact Us</li>
          </Link>
        </ul>

        <ul className={style.list}>
          <li>Address</li>
          <li>
            Alumni Plus Computer Science Department, Tezpur University, Napaam,
            Tezpur - 784028
          </li>
          <li className={style.icons}>
            <MdEmail />{" "}
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              deena@tezu.ernet.in
            </Link>
          </li>
          <li className={style.icons}>
            <FaPhoneAlt />{" "}
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              +91 9706368501
            </Link>
          </li>
        </ul>

        <ul className={style.list}>
          <li>
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              <IoLogoYoutube />
            </Link>
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              <IoLogoInstagram />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/school/tezpur-university/posts/?feedView=all"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hyperlink}
            >
              Copyright © 2024 Alumni Plus, TEZPUR UNIVERSITY
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
