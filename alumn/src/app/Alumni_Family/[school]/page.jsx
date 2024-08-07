"use client"
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import style from "@/css/Family.module.css"
import Title from '@/Components/Title';

const schoolPrograms = {
  SOE: ['CSE', 'ME', 'EE', 'ECE','CEB','FET'],
  SOM: ['MBA', 'BBA'],
  SOL: ['LLB', 'LLM'],
  SOP: ['Pharmacy', 'BPharm', 'MPharm']
};

export default function School() {
  const { school } = useParams();
  const programs = schoolPrograms[school] || [];

  return (
    <>
    <Navbar/>
    <Title title="Alumni Family"/>
    <div className={style.Family}>
      <h1>Department at {school}</h1>
      <ul className={style.list}>
        {programs.map((program) => (
        
            <Link key={program} href={`/Alumni_Family/${school}/${program}`}>  <li >{program} </li></Link>
         
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
