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

function StudentDashBoard() {
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
            <li>Alumni connect</li>
            <li
              onClick={() => handleClick('Dashboard')}
              className={activeItem === 'Dashboard' ? `${style.activeItem}` : ''}
            >
              <Link href="/Student/studentDash" className={style.Link}>
                <TbHomeFilled className={style.icons} /> Dashboard
              </Link>
            </li>
            <li
              onClick={() => handleClick('Write')}
              className={activeItem === 'Write' ? `${style.activeItem}` : ''}
            >
              <Link href="/Student/WritePage" className={style.Link}>
                <TbHomeFilled className={style.icons} /> Write Blog
              </Link>
            </li>
            <li
              onClick={() => handleClick('Blog')}
              className={activeItem === 'Blog' ? `${style.activeItem}` : ''}
            >
              <Link href="/Student/BlogPage" className={style.Link}>
                <BiSolidCarousel className={style.icons} /> Blog
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

export default StudentDashBoard;
