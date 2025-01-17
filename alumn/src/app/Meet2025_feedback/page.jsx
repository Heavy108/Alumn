'use client'
import Footer from "@/Components/Footer";
import { Input, Textarea } from "@/Components/Input";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import style from "@/css/feedback.module.css";
// import style from "@/css/Input.module.css";
import { useState} from "react";
import { useRouter } from "next/navigation";

function AlumniFeedbackForm() {
  const [isLoading, setIsLoading] = useState(false);
  // const formRef = useRef(null);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);

      const response = await fetch("/api/Feedback", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Thank you for your feedback!");
        router.push("/ThankYou");
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
      <Title title="Alumni Meet Feedback Form" />
      <center className={style.text}>
        Thank you for attending the Alumni Meet! Your feedback is invaluable in
        helping us improve future events.
      </center>
      <div className={style.feedback_container}>
        <form onSubmit={onSubmit}>
          <h4>Personal Details</h4>
          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <Input
            label="Year of Graduation"
            type="number"
            name="graduationYear"
            placeholder="Enter your graduation year"
            required
          />
          <Input
            label="Contact Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <h4>Event Feedback</h4>
          <div className={style.Input_field}>
            <label>
              How satisfied were you with the following aspects of the Alumni
              Meet?
            </label>
            <div>
              <label className={style.lable2}>Event Organization:</label>
              <select
                name="eventOrganization"
                className={style.selectDropdown}
                required
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div>
              <label className={style.lable2}>Venue and Facilities:</label>
              <select
                name="venueAndFacilities"
                className={style.selectDropdown}
                required
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div>
              <label className={style.lable2}>Agenda/Activities:</label>
              <select
                name="agendaActivities"
                className={style.selectDropdown}
                required
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div>
              <label className={style.lable2}>Networking Opportunities:</label>
              <select
                name="networkingOpportunities"
                className={style.selectDropdown}
                required
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div>
              <label className={style.lable2}>Quality of Food:</label>
              <select
                name="qualityOfFood"
                className={style.selectDropdown}
                required
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>

          <div className={style.Input_field}>
            <label htmlFor="">What was your favorite part of the event?</label>
            <textarea
              type="text"
              placeholder="Your response"
              name="favoritePart"
            />
          </div>

          <div className={style.Input_field}>
            <label htmlFor="">
              Were there any activities you felt could be improved or added?
            </label>
            <textarea
              type="text"
              placeholder="Your response"
              name="activitiesImprovement"
            />
          </div>

          <div className={style.Input_field}>
            <label>Would you attend similar events in the future?</label>
            <select
              name="attendFuture"
              className={style.selectDropdown}
              required
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </select>
          </div>

          <div className={style.Input_field}>
            <label htmlFor="">
              What suggestions do you have for improving our future alumni
              events?
            </label>
            <textarea
              type="text"
              placeholder="Your response"
              name="suggestions"
            />
          </div>

          <div className={style.Input_field}>
            <label htmlFor="">Any other feedback you'd like to share?</label>
            <textarea
              type="text"
              placeholder="Your response"
              name="otherFeedback"
            />
          </div>

          <div className={style.Button}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AlumniFeedbackForm;
