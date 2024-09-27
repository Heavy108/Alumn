import styles from "@/css/Event.module.css";
import Image from "next/image";
import Title from "./Title";
import Button from "./Button";
import Link from "next/link";
import sty from "@/css/button.module.css";

function Event_Card({ data }) {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={`data:image/jpeg;base64,${data.E_image}`} // Use base64 encoded image
          width={1200}
          height={1200}
          alt="event"
        />
        <div className={styles.Introductio}>
          <h3>{data.Head}</h3>

          <div className={styles.Intro}>
            <h4>{data.Name}</h4>
            <h5>{data.Position}</h5>
          </div>
          <div className={styles.Time}>
            <p>Venue: {data.Venue}</p>
            <p>Time: {data.time}</p>
            <Link
          href={{
            pathname: "/Event_details",
            query: { id:data._id }, 
          }}
        >
          <Button text="View Details" />
        </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Events({ data }) {
  const eventsArray = Array.isArray(data) ? data : data ? [data] : [];
  // console.log(data)

  return (
    <>
    
      <Title title="Events" />
      <p className={styles.subtitle}>Upcoming Events</p>
      <div className={styles.container_1}>
        {data.map((event, index) => (
          <Event_Card
            key={index}
            data={event}  // Passing event data to Event_Card
          />
        ))}
      </div>
      <div className={sty.wrapper2}>
        <Link href='/CommingSoon'><Button text="More" /></Link>
      </div>
      {/* <p className={styles.container}>Past Events</p>
      <div className={styles.container_2}>
        {data.map((event, index) => (
          <Event_Card
            key={index}
            data={event}  // Passing event data to Event_Card
          />
        ))}
      </div>
      <div className={sty.wrapper2}>
        <Link href='/CommingSoon'><Button text="More" /></Link>
      </div> */}
    </>
  );
}

export default Events;
