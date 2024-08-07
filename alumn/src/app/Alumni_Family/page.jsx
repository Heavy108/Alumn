import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import style from "@/css/Family.module.css"
import Title from '@/Components/Title';

const schools = ['SOE', 'SOM', 'SOL', 'SOP'];

export default function Home() {
  return (
    <>
    <Navbar/>
    <Title title="Alumni Family"/>
    <div className={style.Family}>
      <h1>Select a School</h1>
      <ul className={style.list}>
        {schools.map((school) => (
          
            <Link key={school } href={`/Alumni_Family/${school}`}><li >{school} </li></Link>
         
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}
