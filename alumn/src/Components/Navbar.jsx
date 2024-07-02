'use client'
import { IoIosArrowDown } from "react-icons/io";
import style from "@/css/Navbar.module.css";
import logo from "@/Assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
function Navbar() {
   const [active ,setactive] =useState(true);

   const handleClick =() =>{
    setactive(!active);
    console.log(active)
   }
  return (
    <>

      <div className={style.Nav}>
        <div className={style.list}>
        <span>
        <Image 
        src={logo} 
        width={40}
        height={40}
        alt="University Logo"/></span>
        <h4>Alumni Connect</h4>
        {/* <span> <GiHamburgerMenu/></span> */}
        </div>
        
        <div className={style.container}>
        <div className={style.list1}>
          <ul >
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                GiveBack <IoIosArrowDown />
              </Link>
              <div className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Share Achievement</Link>
                  </li>
                  <li>
                    <Link href="">Be A Mentor</Link>
                  </li>
                  <li>
                    <Link href="">Share opportunity</Link>
                  </li>
                  <li>
                    <Link href="">PayBack</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                Alumni+ <IoIosArrowDown />
              </Link>
              <div  className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Alumni Achievement</Link>
                  </li>
                  <li>
                    <Link href="">Alumni Family</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                Events <IoIosArrowDown />
              </Link>
              <div  className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">UpComing Events</Link>
                  </li>
                  <li>
                    <Link href="">Past Events</Link>
                  </li>
                  <li>
                    <Link href="">Past Committee</Link>
                  </li>
                  <li>
                    <Link href="">Reunion</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                Service <IoIosArrowDown />
              </Link>
              <div  className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Digital Alumni Card</Link>
                  </li>
                  <li>
                    <Link href="">Transcript</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                About <IoIosArrowDown />
              </Link>
              <div   className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Relation</Link>
                  </li>
                  <li>
                    <Link href="">Admin</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={style.list2}>
            <ul>
        <li ><Link href="#">Connect </Link></li>
        <li>
          <Link href="#">Gallery</Link>
        </li>
        <button>Contact Us</button>
        </ul>
        </div>
        </div>


        <div className={style.menuIcon} onClick={handleClick}>
            <span>
          {active ?  <IoMdCloseCircleOutline/> : <GiHamburgerMenu /> }
          </span>
        </div>
      </div>    
      {/* <div className={`sideMenu ${active ? 'show' : ''}`}> */}
      {active &&
      <ul className={style.sideMenu}>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                GiveBack <IoIosArrowDown />
              </Link>
              <hr className={style.horizontal}/>
              <div className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Share Achievement</Link>
                  </li>
                  <li>
                    <Link href="">Be A Mentor</Link>
                  </li>
                  <li>
                    <Link href="">Share opportunity</Link>
                  </li>
                  <li>
                    <Link href="">PayBack</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                Alumni+ <IoIosArrowDown />
              </Link>
              <hr  className={style.horizontal}/>
              <div  className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Alumni Achievement</Link>
                  </li>
                  <li>
                    <Link href="">Alumni Family</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                Events <IoIosArrowDown />
              </Link>
              <hr  className={style.horizontal}/>
              <div  className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">UpComing Events</Link>
                  </li>
                  <li>
                    <Link href="">Past Events</Link>
                  </li>
                  <li>
                    <Link href="">Past Committee</Link>
                  </li>
                  <li>
                    <Link href="">Reunion</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                Service <IoIosArrowDown />
              </Link>
              <hr  className={style.horizontal}/>
              <div  className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Digital Alumni Card</Link>
                  </li>
                  <li>
                    <Link href="">Transcript</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}>
              <Link className={style.opt2} href="#">
                About <IoIosArrowDown />
              </Link>
              <hr  className={style.horizontal}/>
              <div   className={style.Menu}>
                <ul>
                  <li>
                    <Link href="">Relation</Link>
                  </li>
                  <li>
                    <Link href="">Admin</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.opt}><Link href="#">Connect </Link></li>
            <hr  className={style.horizontal}/>
        <li className={style.opt}>
          <Link href="#">Gallery</Link>
        </li>
        <hr  className={style.horizontal}/>
        <button className={style.contact}>Contact Us</button>
          </ul>
          }
      
    </>
  );
}
export default Navbar;
