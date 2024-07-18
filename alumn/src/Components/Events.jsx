import styles from "@/css/Event.module.css";
import Image from "next/image";
import Title from "./Title";
import Machine from "@/Assets/Machine.svg";
import Alumn from "@/Assets/Alum.svg";
import DataSci from "@/Assets/DataScie.svg";

function Event_Card(props) {
  return (
    <>
      <div className={styles.card}>
        <Image src={props.img} />
        <div className={styles.Introductio}>
          <h3>{props.head}</h3>

          <div className={styles.Intro}>
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
          </div>
          <div className={styles.Time}>
            <p>Venue: {props.venue}</p>
            <p>Time: {props.time} </p>
          </div>
        </div>
      </div>
    </>
  );
}

const eventsData = [
  {
    img: Machine,
    head: "Virtual Startup",
    name: "Akhilesh Kumar Yadav",
    position: "SDE at Amazon",
    venue: "KBR Auditorium",
    time: "6:30 PM, 10/11/2024",
  },
  {
    img: DataSci,
    head: "Data Science",
    name: "Akhilesh Kumar Yadav",
    position: "SDE at Amazon",
    venue: "KBR Auditorium",
    time: "6:30 PM, 10/11/2024",
  },
  {
    img: Alumn,
    head: "Alumni Talks",
    name: "Akhilesh Kumar Yadav",
    position: "SDE at Amazon",
    venue: "KBR Auditorium",
    time: "6:30 PM, 10/11/2024",
  },
];

function Events() {
  return (
    <>
      <Title title="Events" />
      <p className={styles.subtitle}>Upcoming Events</p>
      <div className={styles.container_1}>
        {eventsData.map((event, index) => (
          <Event_Card
            key={index}
            img={event.img}
            head={event.head}
            name={event.name}
            position={event.position}
            venue={event.venue}
            time={event.time}
          />
        ))}
      </div>
      <p className={styles.container}>Past Events</p>
      <div className={styles.container_2}>
        {eventsData.map((event, index) => (
          <Event_Card
            key={index}
            img={event.img}
            head={event.head}
            name={event.name}
            position={event.position}
            venue={event.venue}
            time={event.time}
          />
        ))}
      </div>
    </>
  );
}

export default Events;
