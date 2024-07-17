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
            <p>Time: {props.Time} </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Events() {
  return (
    <>
      <Title title="Events" />
      <p className={styles.subtitle}>Upcomming Events</p>
      <div className={styles.container_1}>
        <Event_Card
          img={Machine}
          head="Virtual Startup"
          name="Akhilesh kumar yadav"
          position="SDE at Amazon"
          venue="KBR Audotorium"
          Time="6:30 PM ,10/11/2024"
        />
        <Event_Card
          img={DataSci}
          head="Data Science"
          name="Akhilesh kumar yadav"
          position="SDE at Amazon"
          venue="KBR Audotorium"
          Time="6:30 PM ,10/11/2024"
        />
        <Event_Card
          img={Alumn}
          head="Alumni Talks"
          name="Akhilesh kumar yadav"
          position="SDE at Amazon"
          venue="KBR Audotorium"
          Time="6:30 PM ,10/11/2024"
        />
      </div>
      <p className={`${styles.container}`}>Past Events</p>
      <div className={styles.container_2}>
        <Event_Card
          img={Machine}
          head="Virtual Startup"
          name="Akhilesh kumar yadav"
          position="SDE at Amazon"
          venue="KBR Audotorium"
          Time="6:30 PM ,10/11/2024"
        />
        <Event_Card
          img={DataSci}
          head="Data Science"
          name="Akhilesh kumar yadav"
          position="SDE at Amazon"
          venue="KBR Audotorium"
          Time="6:30 PM ,10/11/2024"
        />
        <Event_Card
          img={Alumn}
          head="Alumni Talks"
          name="Akhilesh kumar yadav"
          position="SDE at Amazon"
          venue="KBR Audotorium"
          Time="6:30 PM ,10/11/2024"
        />
      </div>
    </>
  );
}
export default Events;
