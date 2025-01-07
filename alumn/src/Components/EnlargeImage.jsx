"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/css/Gallery.module.css"; // Custom styles for the modal

function determineImageType(image) {
  if (image.startsWith("/9j/")) return "jpeg"; // Base64 prefix for JPEG/JPG
  if (image.startsWith("iVBORw")) return "png"; // Base64 prefix for PNG
  if (image.startsWith("JVBER")) return "pdf";
  return null; // Unsupported or unknown format
}

function PictureModal({ image, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const imageType = determineImageType(image);
  console.log(imageType)

  if (!imageType) {
    console.error("Unsupported image format");
    return null;
  }

  return (
    <div>
      {/* If the file is a PDF, show the download button */}
      {imageType === "pdf" ? (
        <a
          href={`data:application/pdf;base64,${image}`}
          download="file.pdf"
          className={styles.download_button}
        >
          Download PDF
        </a>
      ) : (
        // Otherwise, display the image that can be clicked to open the modal
        <Image
          src={`data:image/${imageType};base64,${image}`}
          alt={caption}
          width={120}
          height={120}
          className={styles.thumbnail}
          onClick={openModal}
        />
      )}

      {/* Modal for enlarging the image */}
      {isOpen && imageType !== "pdf" && (
        <div className={styles.lightbox_overlay} onClick={closeModal}>
          <div
            className={styles.lightbox_content}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.close_button} onClick={closeModal}>
              &times;
            </button>
            <Image
              src={`data:image/${imageType};base64,${image}`}
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

