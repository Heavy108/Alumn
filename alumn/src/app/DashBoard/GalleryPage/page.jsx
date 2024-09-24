import Mag_Section from "@/Components/MagCluster";
import style from "@/css/Display.module.css";
import { fetchGalleryData } from "@/app/api/Gallery/route";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

async function GalleryPage(){
    const data =await fetchGalleryData()
    const total = data.length
    return(<>
    
    <div className={style.Account}>
        <div className={style.heading}>
          <p className={style.p}>Gallery</p>
          <Link href="/DashBoard/AddImage" className={style.link}>
            <button className={style.add}>Add Image</button>
          </Link>
        </div>
        <ul className={style.items}>
          <li className={style.box}>
            Number of Image<span className={style.data}>{total}</span>
          </li>
          {/* <li className={style.box}>
            Upcoming Events<span className={style.data}>0</span>
          </li>
          <li className={style.box}>
            Past Events<span className={style.data}> 0</span>
          </li> */}
          {/* <li className={style.box}>
            <span className={style.data}>99</span>
          </li> */}
        </ul>

        <div className={style.heading}>
          <p className={style.all}>All Image</p>
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
export default GalleryPage;