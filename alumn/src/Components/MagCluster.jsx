'use client'
import style from "@/css/MagCluster.module.css"
import React, { useState } from "react";
import Pagination from "./Pagination";
import Magazine from "@/Components/Magazine_Frame_1";

function Mag_Section({  Data, MagazinesPerPage}) {
  console.log(typeof Data)
  const [currentPage, setCurrentPage] = useState(1);
 
  const lastIndex = currentPage * MagazinesPerPage;
  const firstIndex = lastIndex - MagazinesPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / MagazinesPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handlePrevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.All_magazine}>
    <>
      { 
  records.map((items, index) => (
    < Magazine
      key={index}
      {...items} 
    />
  ))}

      <Pagination
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleChangePage={handleChangePage}
        numbers={numbers}
        npage={npage}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        data={Data.length}
      />
      </>

     </div>
  );
}

export default Mag_Section;
