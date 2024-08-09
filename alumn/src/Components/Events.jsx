import styles from "@/css/Event.module.css";
import Image from "next/image";
import Title from "./Title";
// import Machine from "@/Assets/Machine.svg";
// import Alumn from "@/Assets/Alum.svg";
// import DataSci from "@/Assets/DataScie.svg";
import Button from "./Button";
import Link from "next/link";
function Event_Card(props) {
  return (
    <>
      <div className={styles.card}>
        <Image src={props.img}
        width={1200}
        height={1200}
        alt="event"

        />
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
          <Link
          href={{
            pathname: "/Event_details",
            query: { ...props }, // Spread all props into query
          }}
        >
          <Button text="View Details" />
        </Link>
        </div>
      </div>
    </>
  );
}

const eventsData = [
  {
    img: '/Event/ml.jpg',
    
    head: "Virtual Startup",
    name: "Akhilesh Kumar Yadav",
    position: "SDE at Amazon",
    venue: "KBR Auditorium",
    Title:'Carrier  Opportunities in Data Science',
    description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.',
    time: "6:30 PM, 10/11/2024",
  },
  {
    img: '/Event/data.jpg',
    head: "Data Science",
    name: "Akhilesh Kumar Yadav",
    position: "SDE at Amazon",
    venue: "KBR Auditorium",
    time: "6:30 PM, 10/11/2024",
    Title:'Carrier  Opportunities in Data Science',
    description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    img: '/Event/Alum.svg' ,
    head: "Alumni Talks",
    name: "Akhilesh Kumar Yadav",
    position: "SDE at Amazon",
    venue: "KBR Auditorium",
    time: "6:30 PM, 10/11/2024",
    Title:'Carrier  Opportunities in Data Science',
    description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.',
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
            title={event.Title}
            description={event.description}
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
            title={event.Title}
            description={event.description}
          />
        ))}
      </div>
    </>
  );
}

export default Events;
