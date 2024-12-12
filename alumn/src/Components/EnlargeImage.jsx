'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "@/css/Gallery.module.css"; // Custom styles for the modal
function PictureModal({ image, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Display the image that can be clicked to open the modal */}
      <Image
        src={`data:image/jpeg;base64,${image}`}
        alt={caption}
        width={120}
        height={120}
        className={styles.thumbnail}
        onClick={openModal}
      />

      {/* Modal for enlarging the image */}
      {isOpen && (
        <div className={styles.lightbox_overlay} onClick={closeModal}>
          <div
            className={styles.lightbox_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close_button} onClick={closeModal}>
              &times;
            </button>
            <Image
              src={`data:image/jpeg;base64,${image}`}
              alt={caption}
              width={800}
              height={600}
              className={styles.lightbox_image}
            />
            {caption && <p className={styles.caption}>{caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default PictureModal;
