"use client"
import Navbar from '@/Components/Navbar';
import { useParams } from 'next/navigation';

const students = ['Student A', 'Student B', 'Student C'];

export default function Year() {
  const params = useParams();
  const { school, program, course, year } = params;

  return (
    <>
    <Navbar/>
    <div>
      <h1>Students of {year} in {course} ({program} at {school})</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
