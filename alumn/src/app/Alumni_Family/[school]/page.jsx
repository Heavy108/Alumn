"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';

const schoolPrograms = {
  SOE: ['CSE', 'ME', 'EE', 'ECE'],
  SOM: ['MBA', 'BBA'],
  SOL: ['LLB', 'LLM'],
  SOP: ['Pharmacy', 'BPharm', 'MPharm']
};

export default function School() {
  const { school } = useParams();
  const programs = schoolPrograms[school] || [];

  return (
    <div>
      <h1>Programs offered by {school}</h1>
      <ul>
        {programs.map((program) => (
          <li key={program}>
            <Link href={`/Alumni_Family/${school}/${program}`}>{program}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
