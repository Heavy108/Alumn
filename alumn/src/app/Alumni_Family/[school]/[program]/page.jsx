"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import style from "@/css/Family.module.css"
import Title from '@/Components/Title';
const schoolPrograms = {
  SOE: {
    CSE: ['CSB', 'CSM', 'PhD'],
    ME:['CSB', 'CSM', 'PhD'],
    EE:['CSB', 'CSM', 'PhD'],
    ECE: ['CSB', 'CSM', 'PhD'],
  },
  SOM: {
    MBA: ['Full-time', 'Part-time'],
    BBA: ['General', 'International']
  },
  SOL: {
    LLB: ['3 years', '5 years'],
    LLM: ['Corporate Law', 'Criminal Law']
  },
  SOP: {
    Pharmacy: ['DPharm', 'MPharm'],
    BPharm: ['Regular', 'Lateral Entry'],
    MPharm: ['Pharmaceutics', 'Pharmacology']
  }
};

export default function Program() {
  const params = useParams();
  const { school, program } = params;
  const courses = schoolPrograms[school][program] || [];

  return (
    <>
    <Navbar/>
    <Title title="Alumni Family"/>
    <div className={style.Family}> 
      <h1>Select your Programme ID</h1>
      <ul className={style.list}>
        {courses.map((course) => (
       
            <Link key={course} href={`/Alumni_Family/${school}/${program}/${course}`}>   <li >{course}  </li></Link>
        
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
