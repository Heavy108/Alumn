import { useEffect, useState } from "react";
import Mag_Section from "@/Components/MagCluster";
import style from "@/css/Display.module.css";
import { fetchGalleryData } from "@/app/api/Gallery/route";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

function GalleryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchGalleryData();
        setData(response);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const total = data.length;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.Account}>
      <div className={style.heading}>
        <h5 className={style.p}>Gallery</h5>
        <Link href="/DashBoard/AddImage" className={style.link}>
          <button className={style.add}>Add Image</button>
        </Link>
      </div>
      <ul className={style.items}>
        <li className={style.box}>
          Number of Image<span className={style.data}>{total}</span>
        </li>
        {/* Additional items can go here */}
      </ul>

      <div className={style.heading}>
        <h5 className={style.all}>All Image</h5>
        <div className={style.searchContainer}>
          <input type="search" placeholder="Search" />
          <CiSearch />
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Mag_Section Data={data} MagazinesPerPage={8} />
      </div>
    </div>
  );
}

export default GalleryPage;
