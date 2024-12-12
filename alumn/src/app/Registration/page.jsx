"use client";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Title from "@/Components/Title";
import { Input, Textarea } from "@/Components/Input";
import styl from "@/css/Input.module.css";
import { useRef, useState } from "react";
import style from "@/css/registration.module.css";
import qr from "@/Assets/r.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function AlumniRegistrationForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const [numPersons, setNumPersons] = useState(1); // Default to 1 person
  const registrationFeePerPerson = 1000;
  const [currentStatus, setCurrentStatus] = useState(""); // Track current status
  const [loading, setLoading] = useState(false); // Loading state for the submit button
  const router = useRouter();

  const handleStatusChange = (event) => {
    setCurrentStatus(event.target.value);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file);
      setSelectedImage(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    const formData = new FormData(e.target);
    formData.append('file1',selectedImage)
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Registration successful! Check your mail for the details!");
        
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error submitting form ", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Navbar />
      <Title title="Alumni Registration Form" />
      <div className={style.container}>
        <form onSubmit={onSubmit} ref={formRef} className={styl.form}>
          <Input
            label="Mobile Number"
            type="tel"
            name="mobile"
            placeholder="Enter your 10-digit mobile number"
            pattern="[0-9]{10}"
            required
          />
          <Input
            label="First Name*"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
          <Input
            label="Last Name*"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
          <Input
            label="Date of Birth*"
            type="date"
            name="dob"
            placeholder="Select your date of birth"
            required
          />
          <div className={styl.Input_field}>
            <label>Gender*</label>
            <select name="gender" className={styl.select} required>
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>Department*</label>
            <select name="department" className={styl.select} required>
              <option value="Select">Select</option>
              <option>ENGLISH</option>
              <option>MATHEMATICAL SCIENCES</option>
              <option>ENERGY</option>
              <option>CULTURAL STUDIES</option>
              <option>BUSINESS ADMINISTRATION</option>
              <option>COMPUTER SCIENCE AND ENGINEERING</option>
              <option>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
              <option>MOLECULAR BIOLOGY AND BIOTECHNOLOGY</option>
              <option>CHEMICAL SCIENCES</option>
              <option>PHYSICS</option>
              <option>MASS COMMUNICATION AND JOURNALISM</option>
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>Programme Completed from TU*</label>
            <select name="programme" className={styl.select} required>
              <option value="Select">Select</option>
              <option>DIPLOMA</option>
              <option>M.A.</option>
              <option>MBA</option>
              <option>MCA</option>
              <option>M.SC.</option>
              <option>M.TECH.</option>
              <option>PG DIPLOMA</option>
              <option>PHD</option>
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>Year of Graduation*</label>
            <select name="graduationYear" className={styl.select} required>
              {Array.from({ length: 11 }, (_, i) => 1995 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>Current Status*</label>
            <select
              name="currentStatus"
              className={styl.select}
              required
              onChange={handleStatusChange}
              value={currentStatus}
            >
              <option value="Select">Select</option>
              <option value="Employed">Employed</option>
              <option value="Not Employed">Not Employed</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
          </div>
          {(currentStatus === "Employed" ||
            currentStatus === "Entrepreneur") && (
            <>
              <Input
                label="Organisation"
                type="text"
                name="organisation"
                placeholder="Enter your organisation name"
              />
              <Input
                label="Designation"
                type="text"
                name="designation"
                placeholder="Enter your designation"
              />
              <Input
                label="Company Email"
                type="email"
                name="companyEmail"
                placeholder="Enter your company email"
              />
            </>
          )}
          <Input
            label="Personal Email*"
            type="email"
            name="personalEmail"
            placeholder="Enter your personal email"
            required
          />
          <Textarea
            label="Address*"
            name="address"
            placeholder="Enter your address"
            required
          />
          <Input
            label="City*"
            type="text"
            name="city"
            placeholder="Enter your city"
            required
          />
          <Input
            label="Country*"
            type="text"
            name="country"
            placeholder="Enter your country"
            required
          />
          <Input
            label="WhatsApp Number"
            type="tel"
            name="whatsapp"
            placeholder="Enter your WhatsApp number (if applicable)"
          />
          <div className={styl.Input_field}>
            <label>Would you like accommodation within the campus?*</label>
            <select name="accommodation" className={styl.select} required>
              <option value="Select">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={styl.Input_field}>
            <label>Are you coming with your spouse or family members?*</label>
            <select name="withFamily" className={styl.select} required>
              <option value="Select">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>If Yes, Number of persons</label>
            <select
              className={styl.select}
              name="numberOfPersons"
              onChange={(e) => setNumPersons(Number(e.target.value))}
              value={numPersons}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>Please select your food preference</label>
            <select name="foodPreference" className={styl.select}>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
          <div className={styl.Input_field}>
            <label>
              Registration Fee (Rs {registrationFeePerPerson} per person )
            </label>
            <input
              type="text"
              value={`Rs ${numPersons * registrationFeePerPerson}`}
              readOnly
            />
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <li
                className="text-blue-500 underline decoration-none cursor-pointer list-none"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Bank Details
              </li>

              {/* <center>Click the above Image for Bank details</center> */}

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box  bg-white">
                  <h3 className="font-bold text-lg">Bank Account Details</h3>
                  <p className={`py-4 ${style.text2}`}>
                    <strong>Name of Account Holder:</strong> Registrar, Tezpur
                    University
                    <br />
                    <strong>Complete Contact Address:</strong> Tezpur
                    University, Napaam, Tezpur, Assam-784028
                    <br />
                    <strong>Telephone Number / Fax:</strong>{" "}
                    03712-273101/267004, Fax: 267005
                    <br />
                    <br />
                    <strong>Bank Name:</strong> State Bank of India
                    <br />
                    <strong>Branch Name:</strong> Tezpur University Branch,
                    Napaam, Tezpur, Sonitpur, Assam-784028
                    <br />
                    <strong>Branch Telephone:</strong> +91-3712-273361
                    <br />
                    <strong>RTGS Enabled:</strong> YES (IFS Code: SBIN0014259)
                    <br />
                    <strong>NEFT Enabled:</strong> YES
                    <br />
                    <strong>Type of Bank Account:</strong> Savings
                    <br />
                    <strong>Institute Account Name:</strong> Tezpur University
                    Endowment Fund Account
                    <br />
                    <strong>Account Number:</strong> 10501585452
                    <br />
                    <strong>MICR Code:</strong> 784002005
                    <br />
                    <strong>PFMS Code:</strong> TU
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
          </div>
          <div className={styl.Input_field}>
            <label>Please upload a screenshot of the payment details(jpg/jpeg)* </label>
            <input
              type="file"
              
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              required
            />
          </div>
          <Input
            label="Transaction Reference No.*"
            type="text"
            name="transactionRef"
            placeholder="Enter your transaction reference number"
            required
          />
          <Input
            label="Transaction Date*"
            type="date"
            name="transactionDate"
            required
          />
          <div className={styl.Button}>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <div className={style.img_conatiner2}>
          <Image src={qr} alt="PayBack" className={style.alumni_reg_img} />
          {/* <Image src={Don} alt="PayBack" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AlumniRegistrationForm;
