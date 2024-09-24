import { useState } from "react";
import style from "@/css/Magazine_Frame_1.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Magazine(props) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  console.log(props)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

 

  const handleClickDelete = async (id) => {
    try {
      console.log(id);
      const res = await fetch("../api/DeleteEvent", {
        method: "POST",
        body: JSON.stringify({ id }), // Correctly format the body
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to delete event");
      }
  
      console.log("success", await res.json()); // Log the response
      router.refresh(); // Refresh the page to reflect changes
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <>
      <div className={style.Magazine_Container}>
        <div className={style.thumbnail}>
          <img src={`data:image/jpeg;base64,${props.image}`} alt="" />
          <div className={style.mag_Info}>
            <h5>{props.head}</h5>
            <div className={style.dropdown}>
              <span>
                <BsThreeDotsVertical onClick={toggleMenu} />
              </span>
              {showMenu && (
                <div className={style.dropdownContent}>
                  {/* <Link
                  className={style.link}
                    href={{
                      pathname: "/Dashboard/EditMagazine",
                      query: { _id: props._id },
                    }}
                  >
                  
                    <li>
                      <BiSolidEditAlt className={style.edit} />
                      Edit
                    </li>
                  </Link> */}
                  <li onClick={() => handleClickDelete(props._id)}>
                    <MdDelete className={style.delete} />
                    Delete
                  </li>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Magazine;
