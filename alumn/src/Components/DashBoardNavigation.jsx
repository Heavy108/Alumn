'use client';
import style from '@/css/DashBoard.module.css';
import { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { BiSolidCarousel } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { RiSettings4Fill } from 'react-icons/ri';
import { IoLogOutOutline } from 'react-icons/io5';
import { TbHomeFilled } from 'react-icons/tb';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function DashBoard() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(null);

  const logout = async () => {
    try {
      await fetch('../api/logout', { method: 'POST' });
      router.push('/AdminLogin');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      {/* Message for smaller screens */}
      <div className={style.mobileMessage}>
        <h1>Please open this in a desktop browser.</h1>
      </div>

      {/* Dashboard content */}
      <div className={style.dashboardContainer}>
        <div className={style.superContainer}>
          <ul className={style.items}>
            <li>Admin DashBoard</li>
            <li
              onClick={() => handleClick('Home')}
              className={activeItem === 'Home' ? `${style.activeItem}` : ''}
            >
              <Link href="/DashBoard/Home" className={style.Link}>
                <TbHomeFilled className={style.icons} /> Dashboard
              </Link>
            </li>
            <li
              onClick={() => handleClick('Events')}
              className={activeItem === 'Events' ? `${style.activeItem}` : ''}
            >
              <Link href="/DashBoard/EventsPage" className={style.Link}>
                <MdDashboard className={style.icons} /> Events
              </Link>
            </li>
            <li
              onClick={() => handleClick('Carasoul')}
              className={activeItem === 'Carasoul' ? `${style.activeItem}` : ''}
            >
              <Link href="/DashBoard/GalleryPage" className={style.Link}>
                <BiSolidCarousel className={style.icons} /> Gallery
              </Link>
            </li>
            <li
              onClick={() => handleClick('Email')}
              className={activeItem === 'Email' ? `${style.activeItem}` : ''}
            >
              <Link href="#" className={style.Link}>
                <HiUserGroup className={style.icons} /> Blog
              </Link>
            </li>
            <li
              onClick={() => handleClick('SignUp')}
              className={activeItem === 'SignUp' ? `${style.activeItem}` : ''}
            >
              <Link href="/DashBoard/signup" className={style.Link}>
                <RiSettings4Fill className={style.icons} /> Setting
              </Link>
            </li>
            <li>
              <span onClick={logout} className={style.Link}>
                <IoLogOutOutline className={style.icons} /> Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
