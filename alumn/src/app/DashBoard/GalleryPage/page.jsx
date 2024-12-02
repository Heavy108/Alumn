"use client"; // Enable client-side rendering
import { useEffect, useState } from "react";
import Mag_Section from "@/Components/MagCluster";
import style from "@/css/Display.module.css";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

function GalleryPage() {
  const [data, setData] = useState([]); // State for gallery data
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("/api/Gallery"); // Adjust to your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Set gallery data
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setIsLoading(false); // Hide loading indicator
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  const total = data.length;

  return (
    <>
      <div className={style.Account}>
        <div className={style.heading}>
          <h5 className={style.p}>Gallery</h5>
          <Link href="/DashBoard/AddImage" className={style.link}>
            <button className={style.add}>Add Image</button>
          </Link>
        </div>
        <ul className={style.items}>
          <li className={style.box}>
            Number of Images<span className={style.data}>{total}</span>
          </li>
        </ul>

        <div className={style.heading}>
          <h5 className={style.all}>All Images</h5>
          <div className={style.searchContainer}>
            <input type="search" placeholder="Search" />
            <CiSearch />
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {isLoading ? (
            <p>Loading images...</p>
          ) : (
            <Mag_Section Data={data} MagazinesPerPage={8} />
          )}
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
