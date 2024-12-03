"use client";
import Title from "@/Components/Title";
import style from "@/css/addEvent.module.css"; // Update to the relevant CSS file
import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/Components/Input"; // Assuming you have an Input component
import { revalidatePath } from "next/cache";
function AddGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      if (selectedFile) {
        formData.append('image', selectedFile); // Append the file object
      }

      const response = await fetch('/api/ImageUpdate', {
        method: "POST",
        body: formData
      });

      const data = await response.json();
    //   console.log(data);
      if (data.success) {
        alert("Gallery Image Submitted Successfully!");
        // Optionally reset the form
        formRef.current.reset();
        setSelectedImage(null);
        setSelectedFile(null);
      } else {
        alert(`${data.error}. Please try again later.`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      
      setIsLoading(false);
        revalidatePath("/DashBoard/GalleryPage");
      router.push("/DashBoard/GalleryPage");
      router.refresh();
    }
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Programmatically submit the form
    }
  };

  return (
    <>
      <Title title="Add Image" />
      <div className={style.container4}>
        <form onSubmit={onSubmit} className={style.form} ref={formRef}>
          <div className={style.half}>
            <h4>Gallery Image Details</h4>
            <Input label="Caption" type="text" name="Caption" placeholder="Enter image caption" required />
          </div>
          <div className={style.image_container}>
            <div className={style.img_container3}>
              <label htmlFor="Gallery Image" className={style.piclabel}>Gallery Image</label>
              <div className={style.image_preview} onClick={handleImageClick}>
                {selectedImage ? (
                  <Image src={selectedImage} alt="Gallery Image" width={200} height={200} />
                ) : (
                  <Image src="/Profile.png" alt="Default Image" width={200} height={200} />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
                required
              />
            </div>
          </div>
        </form>

        <div className={style.Button}>
          <button type="button" onClick={handleButtonClick} disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddGallery;
