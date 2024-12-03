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
  
      // Check if the URL contains "EventPage" or "GalleryPage"
      const currentUrl = window.location.href;
      let apiEndpoint = "";
  
      if (currentUrl.includes("DashBoard/EventsPage")) {
        apiEndpoint = "../api/DeleteEvent";
      } else if (currentUrl.includes("DashBoard/GalleryPage")) {
        apiEndpoint = "../api/DeleteGallery";
      } else {
        throw new Error("Invalid page for deletion request");
      }
  
      // Make the fetch request based on the determined endpoint
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify({ id }), // Send the ID in the body
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to delete event/gallery");
      }
  
      const data = await res.json(); // Assuming the response is in JSON format
      console.log("Deletion successful:", data);
      router.refresh()
      // Perform any additional actions like updating the UI here
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
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
