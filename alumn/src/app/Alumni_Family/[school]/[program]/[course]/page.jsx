"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';

const years = ['2021', '2022', '2023', '2024'];

export default function Course() {
  const params = useParams();
  const { school, program, course } = params;

  return (
    <div>
      <h1>Years for {course} in {program} at {school}</h1>
      <ul>
        {years.map((year) => (
          <li key={year}>
            <Link href={`/Alumni_Family/${school}/${program}/${course}/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
