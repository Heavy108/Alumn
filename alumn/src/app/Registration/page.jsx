"use client";
import Button from "@/Components/Button";
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
import reg from "@/Assets/regist.svg";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useState, useEffect } from "react";

function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [alumniId, setAlumniId] = useState("");
  const [alumniIdValid, setAlumniIdValid] = useState(null); // null: not checked, true: valid, false: invalid
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("/api/Achievements", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("Your Achivements submitted successfully!");
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const checkAlumniId = async (id) => {
    try {
      const response = await fetch(`/api/CheckId?alumniId=${id}`);
      const data = await response.json();
      setAlumniIdValid(data.exists);
    } catch (error) {
      console.error(error);
      setAlumniIdValid(false);
    }
  };

  const handleAlumniIdChange = (e) => {
    const id = e.target.value;
    setAlumniId(id);
    setAlumniIdValid(null);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(
      setTimeout(() => {
        if (id) {
          checkAlumniId(id);
        }
      }, 3000)
    ); // 3 seconds debounce
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return (
    <>
      <Navbar />
      <Title title="Alumni Meet 2025" />
      <div className={style.container}>
        <form onSubmit={onSubmit} className={style.form}>
          <h4>Registration</h4>
          <Input label="Name" type="text" placeholder="Enter your name" />

          <div className={style.Input_field}>
            <label htmlFor="Alumni ID">
              Alumni ID
              {alumniIdValid === true && (
                <span className={style.valid}>✔️</span>
              )}
              {alumniIdValid === false && (
                <span className={style.invalid}>❌</span>
              )}
            </label>
            <input
              name="Alumni ID"
              type="text"
              placeholder="Enter your ID"
              value={alumniId}
              onChange={handleAlumniIdChange}
            />
          </div>
          <Input label="Email" type="email" placeholder="Enter your Email" />
          <Input
            label="Will you be Attending?"
            type="text"
            placeholder="Enter text here"
          />
          <Input label="Need Acomadation" placeholder="Enter yes or No"></Input>
          <Input
            label="Transaction ID/UPI Reference ID"
            type="text"
            placeholder="Enter text here"
          />
          {/* <Textarea
            label="Description"
            type="text"
            placeholder="Enter text here"
          /> */}
          <div className={style.Input_field}>
            <label htmlFor="Attachment">Attachment</label>
            <input
              name="Attachment"
              type="file"
              placeholder="Screenshot of payment"
            //   onChange={handleFileInputChange}
            />
          </div>
          <div className={style.Button}>
            <button
              type="submit"
              disabled={isLoading || alumniIdValid !== true}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <div className={style.img_conatiner}>
          <Image src={reg} alt="share Achievements" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
