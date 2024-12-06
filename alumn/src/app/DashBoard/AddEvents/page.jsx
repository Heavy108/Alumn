"use client";
import Title from "@/Components/Title";
// import style from "@/css/Digital.module.css";
import style from "@/css/addEvent.module.css"
import Image from "next/image";
import { useState, useRef } from "react";
import { Input ,Textarea} from "@/Components/Input"; // Assuming you have an Input component like before
import { useRouter } from "next/navigation";
function AddEvents() {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const router =useRouter()
  const handleFileInputChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage1(imageUrl);
      setSelectedFile1(file);
    }
  };

  const handleFileInputChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage2(imageUrl);
      setSelectedFile2(file);
    }
  };

  const handleImageClick1 = () => {
    fileInputRef1.current.click();
  };

  const handleImageClick2 = () => {
    fileInputRef2.current.click();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      if (selectedFile1) {
        formData.append('file1', selectedFile1); // Append the first file object
      }
      if (selectedFile2) {
        formData.append('file2', selectedFile2); // Append the second file object
      }

      const response = await fetch('/api/AddEvents', {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Form Submitted Successfully!");
      } else {
        alert(`${data.error}. Please try again later.`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      router.refresh()
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Programmatically submit the form
    }
  };

  return (
    <>
      <Title title="ADD Event" />
      <div className={style.container4}>
        <form onSubmit={onSubmit} className={style.form} ref={formRef}>
          <div className={style.half}>
            <h4>Event Details</h4>
            <Input
              label="Event Headline"
              type="text"
              name="head"
              placeholder="Enter the Event Headline"
              required
            />
            <Input
              label="Speaker Name"
              type="text"
              name="name"
              placeholder="Enter the Name of the speaker"
              required
            />
            <Input
              label="Position"
              type="text"
              name="position"
              placeholder="Enter the speaker Designation"
              required
            />
            <Input
              label="Venue"
              type="text"
              name="venue"
              placeholder="Enter the venue"
              required
            />
            <Input
              label="Title"
              type="text"
              name="Title"
              placeholder="Enter the Title of event"
              required
            />
            <Input
              label="Time"
              type="datetime-local"
              name="time"
              placeholder="6:30 PM, 10/11/2024"
              required
            />
            <Input
              label="External_Link"
              type="text"
              name="ext_page"
              placeholder="Enter the Link of extra Page"
              required
            />
            <Textarea
              label="description"
              placeholder="Enter description"
              required
            ></Textarea>
          </div>
          <div className={style.image_container}>
            <div className={style.img_container3}>
              <label htmlFor="Speaker Image" className={style.piclabel}>
                Speaker Image
              </label>
              <div className={style.image_preview} onClick={handleImageClick1}>
                {selectedImage1 ? (
                  <Image
                    src={selectedImage1}
                    alt="speaker Image 1"
                    width={200}
                    height={200}
                  />
                ) : (
                  <Image
                    src="/Profile.png"
                    alt="Default Image 1"
                    width={200}
                    height={200}
                  />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef1}
                onChange={handleFileInputChange1}
                style={{ display: "none" }}
              />
            </div>

            <div className={style.img_container3}>
              <label htmlFor="Event Image" className={style.piclabel}>
                Event Image
              </label>
              <div className={style.image_preview} onClick={handleImageClick2}>
                {selectedImage2 ? (
                  <Image
                    src={selectedImage2}
                    alt="speaker Image 2"
                    width={200}
                    height={200}
                  />
                ) : (
                  <Image
                    src="/profile.png"
                    alt="Default Image 2"
                    width={200}
                    height={200}
                  />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef2}
                onChange={handleFileInputChange2}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </form>

        <div className={style.Button}>
          <button
            type="button"
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddEvents;
