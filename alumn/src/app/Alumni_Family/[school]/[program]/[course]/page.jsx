"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import style from "@/css/Family.module.css"
import Title from '@/Components/Title';
const years = ['2024', '2023', '2022', '2021','2020','2019','2018','2017','2016','2015','2014'];

export default function Course() {
  const params = useParams();
  const { school, program, course } = params;

  return (
    <>
    <Navbar/>
    <Title title="Alumni Family"/>
    <div className={style.Family}>
      <h1>Select the years </h1>
      <ul className={style.list}>
        {years.map((year) => (
         
            <Link key={year} href={`/Alumni_Family/${school}/${program}/${course}/${year}`}> <li >Class of {year} </li></Link>
         
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
