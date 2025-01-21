'use client'
import { Input, Textarea } from "@/Components/Input";
import Title from "@/Components/Title";
import style from "@/css/Input.module.css";
import Image from "next/image";
import Don from "@/Assets/donation.svg";
import qr from "@/Assets/QR.svg";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect,useState } from "react";
import Link from "next/link";

function Donation() {
  const [isLoading, setIsLoading] = useState(false);
  const [alumniId, setAlumniId] = useState("");
  const [alumniIdValid, setAlumniIdValid] = useState(null); // null: not checked, true: valid, false: invalid
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Store the actual file object
    }
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      if (selectedFile) {
        formData.append('file', selectedFile); // Append the file object
      }
      const response = await fetch('/api/Payback', {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert(" submitted successfully!");
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

    // if (debounceTimeout) {
    //   clearTimeout(debounceTimeout);
    // }

    // setDebounceTimeout(setTimeout(() => {
    //   if (id) {
    //     checkAlumniId(id);
    //   }
    // }, 2000)); 
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
      <Title title="GiveBack" />
      <div className={style.container}>
        <form onSubmit={onSubmit} className={style.form}>
          <h4>PayBack</h4>
          <Input label="Name" type="text" placeholder="Enter your name" />
          <div className={style.Input_field}>
            <label htmlFor="Alumni ID">
              Alumni ID
              <Link href="/Digital_Card">?</Link>
              {/* {alumniIdValid === true && (
                <span className={style.valid}>✔️</span>
              )}
              {alumniIdValid === false && (
                <span className={style.invalid}>❌</span>
              )} */}
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
            label="Transaction ID/UPI Reference ID"
            type="text"
            placeholder="Enter text here"
          />
          <Input label="Attachments" type="file" placeholder="Add Attachment" />

          <div className={style.Button}>
            <button
              type="submit"
              disabled={isLoading }
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <div className={style.img_conatiner2}>
          <center>Bank detail</center>
          {/* <Image 
            src={qr}
            alt="PayBack"
            /> */}
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <li
              className="text-blue-500 underline decoration-none cursor-pointer list-none"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Bank Details
            </li>

            {/* <center>Click the above Image for Bank details</center> */}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-white">
                <h3 className="font-bold text-lg">Bank Account Details</h3>
                <p className={`py-4 ${style.text2}`}>
                  <strong>Name of Account Holder:</strong> Tezpur University
                  Alumni Association.
                  <br />
                  
                  <strong>Bank Name:</strong> State Bank of India
                  <br />
                  <strong>Branch Name:</strong> Tezpur University Branch,
                  Napaam, Tezpur, Assam
                  <br />
                  <strong>IFS Code:</strong> SBIN0014259
                  <br />
                  <strong>Account Number:</strong> 10501586524
                  <br />
                
                </p>
                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_1").close()
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          </div>

          <Image src={Don} alt="PayBack" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Donation;
