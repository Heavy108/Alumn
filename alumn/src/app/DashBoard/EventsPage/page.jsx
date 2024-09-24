import Mag_Section from "@/Components/MagCluster";
import style from "@/css/Display.module.css";
import { fetchData } from "@/app/api/Eventdata/route";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

async function EventPage(){
    const data =await fetchData()
    console.log(typeof(data))
    return(<>
    
    <div className={style.Account}>
        <div className={style.heading}>
          <p className={style.p}>Magazines</p>
          <Link href="/Dashboard/MagazineInsert" className={style.link}>
            <button className={style.add}>Add Events</button>
          </Link>
        </div>
        <ul className={style.items}>
          <li className={style.box}>
            Events<span className={style.data}>0</span>
          </li>
          <li className={style.box}>
            Upcoming Events<span className={style.data}>0</span>
          </li>
          <li className={style.box}>
            Past Events<span className={style.data}> 0</span>
          </li>
          {/* <li className={style.box}>
            <span className={style.data}>99</span>
          </li> */}
        </ul>

        <div className={style.heading}>
          <p className={style.all}>All Events</p>
          <div className={style.searchContainer}>
            <input type="search" placeholder="Search" />
            <CiSearch />
          </div>
        </div>
        <div style={{display:"flex", flexWrap:"wrap"}}>
        <Mag_Section Data={data} MagazinesPerPage={8}/>
      </div>
      </div>
    </>
  );
}
export default EventPage;