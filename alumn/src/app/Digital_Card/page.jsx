"use client";
import Footer from "@/Components/Footer";
import { Input } from "@/Components/Input";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import styl from "@/css/Digital.module.css";
import style from "@/css/Input.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function Digital_AlumniCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [rollNo, setRollNo] = useState("");
  const [rollNoValid, setRollNoValid] = useState(null); // Roll number validation
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const checkRollNo = async (rollNo) => {
    try {
      const response = await fetch(`/api/checkroll?rollNo=${rollNo}`);
      const data = await response.json();
      // setRollNoValid(data.exists);
      setRollNoValid(true);

    } catch (error) {
      console.error(error);
      setRollNoValid(false);
    }
  };

  const handleRollNoChange = (e) => {
    const roll = e.target.value;
    setRollNo(roll);
    setRollNoValid(null); // Reset validation state

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(setTimeout(() => {
      if (roll) {
        checkRollNo(roll);
      }
    }, 2000));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      const response = await fetch('/api/Digital_Card', {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Check your email for verification!");
      } else {
        alert(`${data.error}. Please try again later.`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Title title="Services" />
      <center className={styl.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </center>
      <div className={styl.container4}>
        <form onSubmit={onSubmit} className={styl.form} ref={formRef}>
          <div className={styl.half}>
            <h4>Digital Alumni Card</h4>
            <Input label="Name" type="text" placeholder="Enter your name" />
            <div className={style.Input_field}>
              <label htmlFor="Roll No">Roll No
                {rollNoValid === true && <span className={style.valid}>✔️</span>}
                {rollNoValid === false && <span className={style.invalid}>❌</span>}
              </label>
              <input
                name="Roll No"
                type="text"
                placeholder="Enter your Roll No"
                value={rollNo}
                onChange={handleRollNoChange}
              />
            </div>
            <Input label="Email" type="email" placeholder="Enter your Email" />
            <Input label="Programme" type="text" placeholder="Enter text here" />
            <Input label="Passout Year" type="number" placeholder="Enter Passout Year" />
            <Input label="Linkedin Profile" type="text" placeholder="Enter text here" />
          </div>
          <div className={styl.img_container3}>
            <label htmlFor="Upload Image" className={styl.piclabel}>Upload Profile</label>
            <div className={styl.image_preview} onClick={() => fileInputRef.current.click()}>
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
              styl={{ display: 'none' }}
            />
          </div>
        </form>
        <div className={styl.Button}>
          <button type="button" onClick={() => formRef.current.requestSubmit()} disabled={isLoading || rollNoValid !== true}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Digital_AlumniCard;
