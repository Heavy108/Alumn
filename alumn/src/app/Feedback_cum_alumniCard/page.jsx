"use client";
import Footer from "@/Components/Footer";
import { Input,Textarea } from "@/Components/Input";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import styl from "@/css/Digital.module.css";
import style from "@/css/Input.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
function Feed_Back_cum_Registration() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [rollNo, setRollNo] = useState("");
  const [rollNoValid, setRollNoValid] = useState(null); // Roll number validation
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foodPreference, setFoodPreference] = useState("Select");
  const [rating, setRating] = useState(0);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const router =useRouter()

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
      setRollNoValid(true); // Placeholder for response data
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

    setDebounceTimeout(
      setTimeout(() => {
        if (roll) {
          checkRollNo(roll);
        }
      }, 2000)
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      formData.append("Rating",rating)

      const response = await fetch("/api/Feedback_cum", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Check your email for verification!");
        router.push("/ThankYou");
      } else {
        alert(`${data.error}. Please try again later.`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    //   router.push("/ThankYou")

    }
  };

  return (
    <>
      <Navbar />
      <Title title="Services" />
      <center className={styl.text}>
        Join our alumni network by creating your personalized Digital Alumni
        Card. Share your journey, stay connected with your batchmates, and
        access exclusive alumni privileges. Fill in your details below to get
        started. Your Digital Alumni Card helps us celebrate your achievements
        and ensures you’re a part of our vibrant community. Stay updated with
        the latest news, events, and opportunities
      </center>
      <div className={styl.container4}>
        <form onSubmit={onSubmit} className={styl.form} ref={formRef}>
          <div className={styl.half}>
            <h4>
              Feedback for the pre-convocation dinner 2024 and register for
              Alumni Card
            </h4>
            <Input label="Name" type="text" placeholder="Enter your name" />
            <div className={style.Input_field}>
              <label htmlFor="Roll No">
                Roll No <span className={style.astreik}>*</span>
                {rollNoValid === true && (
                  <span className={style.valid}>✔️</span>
                )}
                {rollNoValid === false && (
                  <span className={style.invalid}>❌</span>
                )}
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
            <Input
              label="Programme"
              type="text"
              placeholder="Enter text here"
            />
            <Input
              label="Passout Year"
              type="number"
              placeholder="Enter Passout Year"
            />

            <div className={style.Input_field}>
              <label htmlFor="Linkedin Profile">Linkedin Profile</label>
              <input
                type="text"
                name="Linkedin Profile"
                placeholder="Enter text here"
              />
            </div>

            {/* <h4>Feedback for the pre-convocation Dinner</h4> */}
            <div className={style.Input_field}>
              <label htmlFor="Food_Preference">
                Food_Preference <span className={style.astreik}>*</span>
              </label>
              <select
                className={style.selectDropdown}
                name="Food_Preference"
                value={foodPreference}
                onChange={(e) => setFoodPreference(e.target.value)}
              >
                <option value="Select">Select</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
            <div className={style.Input_field}>
              <label htmlFor="Rating">
                Food Quality <span className={style.astreik}>*</span>
              </label>
              <div className={style.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                      cursor: "pointer",
                      color: star <= rating ? "gold" : "gray",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <Textarea
              label="Comment(optional)"
              type="text"
              placeholder="Enter text here"
            />
          </div>
          <div className={styl.img_container3}>
            <label htmlFor="Upload Image" className={styl.piclabel}>
              Upload Profile 
            </label>
            <div
              className={styl.image_preview}
              onClick={() => fileInputRef.current.click()}
            >
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Uploaded photo"
                  width={200}
                  height={200}
                />
              ) : (
                <Image
                  src="/Profile.png"
                  alt="Default photo"
                  width={200}
                  height={200}
                />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              styl={{ display: "none" }}
            />
          </div>
        </form>
        <div className={styl.Button}>
          <button
            type="button"
            onClick={() => formRef.current.requestSubmit()}
            disabled={isLoading || rollNoValid !== true}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Feed_Back_cum_Registration;
