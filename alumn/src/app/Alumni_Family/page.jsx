import Link from 'next/link';

const schools = ['SOE', 'SOM', 'SOL', 'SOP'];

export default function Home() {
  return (
    <div>
      <h1>Select a School</h1>
      <ul>
        {schools.map((school) => (
          <li key={school}>
            <Link href={`/Alumni_Family/${school}`}>{school}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
