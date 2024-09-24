import React from "react";
import style from "@/css/Pagination.module.css";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";

function Pagination({
  currentPage,
  handlePrevPage,
  handleNextPage,
  handleChangePage,
  numbers,
  npage,
  firstIndex,
  lastIndex,
  data,
}) {
  
  const startPage = Math.max(1, currentPage - 1); // startPage is at least 1
  const endPage = Math.min(npage, startPage + 2); // Show only 3 pages 

  // Generate the list of page numbers to display
  const displayedPages = [];
  for (let i = startPage; i <= endPage; i++) {
    displayedPages.push(i);
  }

  return (
    <div className={style.Component}>
      <p>
        {`Showing ${firstIndex} - ${lastIndex} of ${data} result`}
      </p>
      <div className={style.buttonComp}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaChevronLeft/>
        </button>

        {displayedPages.map((page, i) => (
          <li
            key={i}
            onClick={() => handleChangePage(page)}
            style={{
              textDecoration: currentPage === page ? "underline" : "none",
              textUnderlineOffset: currentPage === page ? "0.3rem" : "none",
              opacity: currentPage === page ? "1" : "",
            }}
            className={style.pageItem}
          >
            {page}
          </li>
        ))}

        <button  onClick={handleNextPage} disabled={currentPage === npage}>
         <FaChevronRight/>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
