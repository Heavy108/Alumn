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

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const moveNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagePaths.length);
  };

  const movePrev = () => {
    setCurrentImageIndex((currentImageIndex + imagePaths.length - 1) % imagePaths.length);
  };

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

    document.addEventListener("keydown", handleKeyDown);

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
