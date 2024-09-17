'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Title from "./Title";
import Button from "./Button";
import Link from "next/link";
import style from "@/css/Gallery.module.css";
import sty from "@/css/button.module.css";

function Gallery(props) {
  const imagePaths = Array.from({ length: props.len }, (_, i) => `/Gallery/${i + 1}.jpg`);

  // State for lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open the lightbox on image click
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Function to move to the next image in the lightbox
  const moveNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagePaths.length);
  };

  // Function to move to the previous image in the lightbox
  const movePrev = () => {
    setCurrentImageIndex((currentImageIndex + imagePaths.length - 1) % imagePaths.length);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return; // Only handle keys when the lightbox is open
      if (e.key === "ArrowRight") {
        moveNext();
      } else if (e.key === "ArrowLeft") {
        movePrev();
      } else if (e.key === "Escape") {
        closeLightbox(); // Close the lightbox when Escape is pressed
      }
    };

    // Attach the event listener to the document
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentImageIndex]);

  return (
    <>
      <Title title="Memories" />
      <div className={style.gallery_container}>
        {imagePaths.map((path, index) => (
          <Image
            key={path + index}
            src={path}
            width={220}
            height={220}
            alt="Memories"
            className={style.gallery_image}
            onClick={() => openLightbox(index)} // Open the lightbox on image click
          />
        ))}
      </div>

      {/* Lightbox Implementation */}
      {isOpen && (
        <div className={style.lightbox_overlay}>
          <div className={style.lightbox_content}>
            <span className={style.close_button} onClick={closeLightbox}>
              &times;
            </span>
            <Image
              src={imagePaths[currentImageIndex]}
              width={800}
              height={600}
              alt="Lightbox"
              className={style.lightbox_image}
            />
            <button className={style.prev_button} onClick={movePrev}>
              &#10094;
            </button>
            <button className={style.next_button} onClick={moveNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}

      <div className={sty.wrapper2}>
        <Link href="/Gallery">
          <Button text="More" />
        </Link>
      </div>
    </>
  );
}

export default Gallery;
