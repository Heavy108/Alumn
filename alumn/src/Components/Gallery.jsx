'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Title from "./Title";
import Button from "./Button";
import Link from "next/link";
import style from "@/css/Gallery.module.css";
import sty from "@/css/button.module.css";

function Gallery({ data }) {
  console.log(typeof(data))
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
    setCurrentImageIndex((currentImageIndex + 1) % data.length);
  };

  const movePrev = () => {
    setCurrentImageIndex((currentImageIndex + data.length - 1) % data.length);
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
        {data.map((item, index) => (
          <div key={item.id} className={style.gallery_item}>
            <Image
              src={`data:image/jpeg;base64,${item.image}`} // Assuming image is base64 encoded
              width={220}
              height={220}
              alt={item.head}
              className={style.gallery_image}
              onClick={() => openLightbox(index)} // Open the lightbox on image click
            />
            {/* <p>{item.head}</p>  */}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className={style.lightbox_overlay}>
          <div className={style.lightbox_content}>
            <span className={style.close_button} onClick={closeLightbox}>
              &times;
            </span>
            <Image
              src={`data:image/jpeg;base64,${data[currentImageIndex].image}`}
              width={800}
              height={600}
              alt={data[currentImageIndex].head}
              className={style.lightbox_image}
            />
            <button className={style.prev_button} onClick={movePrev}>
              &#10094;
            </button>
            <button className={style.next_button} onClick={moveNext}>
              &#10095;
            </button>
            <p>{data[currentImageIndex].head}</p> {/* Displaying the caption */}
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
