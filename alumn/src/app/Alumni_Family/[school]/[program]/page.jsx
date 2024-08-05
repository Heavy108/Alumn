"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const schoolPrograms = {
  SOE: {
    CSE: ['BTech', 'MTech', 'PhD'],
    ME: ['BTech', 'MTech'],
    EE: ['BTech', 'PhD'],
    ECE: ['BTech', 'MTech', 'MCA']
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
    <div>
      <h1>Courses in {program} at {school}</h1>
      <ul>
        {courses.map((course) => (
          <li key={course}>
            <Link href={`/Alumni_Family/${school}/${program}/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
