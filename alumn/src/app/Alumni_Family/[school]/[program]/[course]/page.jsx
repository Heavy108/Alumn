"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import style from "@/css/Family.module.css"
import Title from '@/Components/Title';
const years = ['2021', '2022', '2023', '2024'];

export default function Course() {
  const params = useParams();
  const { school, program, course } = params;

  return (
    <>
    <Navbar/>
    <Title title="Alumni Family"/>
    <div className={style.Family}>
      <h1>Years for {course} in {program} at {school}</h1>
      <ul className={style.list}>
        {years.map((year) => (
         
            <Link key={year} href={`/Alumni_Family/${school}/${program}/${course}/${year}`}> <li >{year} </li></Link>
         
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
