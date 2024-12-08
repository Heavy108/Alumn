// import Events from "@/Components/Events"
import { fetchFullEventData } from "../api/FullEventData/route"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/css/EventMainPage.module.css";
import Title from "@/Components/Title";
import Event_Card from "@/Components/Events";
async function Upcomming_Events(){
    const data =await fetchFullEventData()
return (
  <>
    <Navbar />
    <Title title="Events" />
    <p className={styles.subtitle}>Upcoming Events</p>
    <div className={styles.container_1}>
      {data.map((event, index) => (
        <Event_Card
          key={index}
          data={event} // Passing event data to Event_Card
        />
      ))}
    </div>
    
   
    <Footer />
  </>
);

}

export default Upcomming_Events