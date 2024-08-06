"use client";
import Button from "@/Components/Button";
import Footer from "@/Components/Footer";
import { Input } from "@/Components/Input";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import style from "@/css/Digital.module.css";
import Image from "next/image";
import { useState, useRef } from "react";


function Digital_AlumniCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  
 

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file); // Store the actual file object
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      if (selectedFile) {
        formData.append('file', selectedFile); // Append the file object
      }

      const response = await fetch('/api/Digital_Card', {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Title title="Services" />
      <center className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </center>
      <div className={style.container4}>
        <form onSubmit={onSubmit} className={style.form}>
          <div className={style.half}>
            <h4>Digital Alumni Card</h4>
            <Input label="Name" type="text" placeholder="Enter your name"  />
            <Input label="Roll No" type="text" placeholder="Enter your Roll No" />
            <Input label="Email" type="email" placeholder="Enter your Email"  />
            <Input label="Programme" type="text" placeholder="Enter text here"/>
            <Input label="Passout Year" type="number" placeholder="Enter Passout Year"  />
            <Input label="Linkedin Profile" type="text" placeholder="Enter text here"  />
          </div>
          <div className={style.img_container3}>
            <label htmlFor="Upload Image" className={style.piclabel}>Upload Profile</label>
            <div className={style.image_preview} onClick={handleImageClick}>
              {selectedImage ? (
                <Image src={selectedImage} alt="Uploaded photo" width={200} height={200} />
              ) : (
                <Image src="/Profile.png" alt="Default photo" width={200} height={200} />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Digital_AlumniCard;
