import Achievement from "@/Components/Achievements";
import Carasoul from "@/Components/Carousels";
import Footer from "@/Components/Footer";
import GiveBack from "@/Components/giveback";
import Navbar from "@/Components/Navbar";
import Event_Card from "@/Components/Events";
import Gallery from "@/Components/Gallery";
import { fetchEventData } from "../api/Events/route";
import { fetchGalleryData } from "../api/Gallery/route";
import styles from "@/css/Event.module.css";
import Title from "@/Components/Title";
import sty from "@/css/button.module.css";
import Link from "next/link";
import Button from "@/Components/Button";

export const revalidate = 0;
async function Home1 () {
    
    const data = await fetchEventData();  // Fetching event data dynamically
    // console.log(data);
    const data2 =await fetchGalleryData(8)

    return (
      <>
        <Navbar />
        <Carasoul />
        <Title title="Alumni Achievements" />
        <Achievement />
        <div className={sty.wrapper2}>
          <Link href="/Alumni_Achievement">
            <Button text="More" />
          </Link>
        </div>
        <GiveBack />
        {/* <Events data={data} />   */}
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
        <div className={sty.wrapper2}>
          <Link href="/Event">
            <Button text="More" />
          </Link>
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

        <Gallery data={data2} />
        <Footer />
      </>
    );
}

export default Home1;
