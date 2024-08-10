import Navbar from '@/Components/Navbar';
import Footer from "@/Components/Footer";
import Title from '@/Components/Title';
import { FetchData } from '@/app/api/Alumni/route';
import { IoMail,IoLogoLinkedin } from "react-icons/io5";
import style from "@/css/Profile.module.css"
import Image from 'next/image';
import emptyimage from "@/Assets/found.svg"
import { Suspense } from 'react';
import Loading from '@/app/loading';

export default async function Year({params}) {
  
  const { school, program,course, year } = params;
  const Data= await FetchData(course,year)
  
  return (
    <>
      <Navbar />
      <Title title="Alumni Family" />
      <div className={style.Family}>
        <h1>Class of {year}</h1>
        <Suspense fallback={<Loading/>}>
        <div className={style.card_container}>
          {Data.length > 0 ? (
            Data.map((t, index) => (
              <div key={t._id + index} className={style.card}>
                <h4>{t.Name}</h4>
                <p><span>Roll_No:</span>{t.Roll_Number}</p>
                <p>{t.Email}</p>
                <div className={style.image}>
                  <IoMail />
                  <IoLogoLinkedin />
                </div>
              </div>
            ))
          ) : (
            <div className={style.emptyState}>
              <Image src={emptyimage} alt="No Data Available" className={style.emptyImage} />
              <center><h4>No alumni data available.</h4></center>
            </div>
          )}
        </div>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}