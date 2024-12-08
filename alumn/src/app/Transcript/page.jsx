"use client"
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
import Transcrip from "@/Assets/Transcript.svg"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useState ,useEffect} from "react";
function Transcript() {
  const [isLoading, setIsLoading] = useState(false);
  const [alumniId, setAlumniId] = useState("");
  const [alumniIdValid, setAlumniIdValid] = useState(null); // null: not checked, true: valid, false: invalid
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('/api/Transcript', {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("submitted successfully!");
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

    setDebounceTimeout(setTimeout(() => {
      if (id) {
        checkAlumniId(id);
      }
    }, 2000)); // 3 seconds debounce
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
      <Title title="Service" />
      <center className={style.texts}>
        Easily request your official academic transcript through our alumni
        portal. Whether for higher education, job applications, or personal
        records, we’ve made the process seamless and hassle-free. Simply fill
        out the details below, and our team will process your request promptly.
        Stay connected, and let us assist you in achieving your next milestone.
      </center>
      <div className={style.container}>
        <form onSubmit={onSubmit} className={style.form}>
          <h4>Transcript</h4>
          <Input label="Name" type="text" placeholder="Enter your name" />
          <Input label="Roll No" type="text" placeholder="Enter your Roll no" />
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

          <Input label="Email" type="text" placeholder="Enter your email" />

          <Input label="Reason" type="text" placeholder="Enter your reason " />
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
          <Image src={Transcrip} alt="TranScript" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Transcript;
