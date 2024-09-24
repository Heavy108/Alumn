'use client'
import { useState, useEffect } from "react";
import style from "@/css/Magazine_Frame_1.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Magazine() {
  const [magazines, setMagazines] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const itemsPerPage = 3; // Adjust as per your need

  // Fetch data when the component mounts
  useEffect(() => {
    async function loadMagazines() {
      const response = await fetchData(currentPage, itemsPerPage);
      if (response.data) {
        setMagazines(response.data);
        setTotalPages(response.totalPages); // Assuming `fetchData` returns the total number of pages
      }
    }

    loadMagazines();
  }, [currentPage]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickDelete = async (id) => {
    try {
      console.log(id);
      const res = await fetch("/api/Delete", {
        method: 'POST',
        body: JSON.stringify({ id }), // Correctly send the ID as JSON
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log("success", data);
    } catch (error) {
      console.log(error.message);
    } finally {
      router.push("/Dashboard/Magazine");
    }
  };

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className={style.Magazine_Container}>
        {magazines.map((mag) => (
          <div key={mag._id} className={style.thumbnail}>
            <img src={`data:image/jpeg;base64,${mag.image}`} alt="" />
            <div className={style.mag_Info}>
              <h5>{mag.head}</h5>
              <div className={style.dropdown}>
                <span>
                  <BsThreeDotsVertical onClick={toggleMenu} />
                </span>
                {showMenu && (
                  <div className={style.dropdownContent}>
                    {/* Edit link if needed */}
                    <li onClick={() => handleClickDelete(mag._id)}>
                      <MdDelete className={style.delete} />
                      Delete
                    </li>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Magazine;
