'use client'; // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import { parseJwt } from '@/Js/parsejwt'; // Ensure this function is available
import style from "@/css/Accounts.module.css";
import ViewPDFButton from "@/Components/pdf";

async function Students() {
  const [totalAlumni, setTotalAlumni] = useState(0);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        // Get the token from cookies
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (!token) {
          setTotalAlumni(0);
          setLoading(false);
          return;
        }

        const jwt = token.split('=')[1];
        const decoded = parseJwt(jwt);
        const alumniId = decoded.alumniId;

        // Fetch the total number of posts for this alumni
        const res = await fetch(`/api/getblog?alumniId=${alumniId}`);
        const posts = await res.json();
        setTotalAlumni(posts.length); // Set the total number of posts
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run this effect on component mount

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.Account}>
          <h4>Analytics</h4>
          <ul className={style.items}>
            <li className={style.box}>
              Number of Posts<span className={style.data}>{totalAlumni}</span>
            </li>
          </ul>
        </div>

        <div className={style.guidelines}>
          <div className={style.heading}>
            <h4>Alumni Guidelines</h4>
            <span><ViewPDFButton pdfPath='/final.pdf'/></span>
          </div>
          <div className={style.image}>
            <img src="/desktop.svg" alt="guide image"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
