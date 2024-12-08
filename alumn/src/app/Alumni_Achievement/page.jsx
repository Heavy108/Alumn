// import Events from "@/Components/Events"
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import styles from "@/css/EventMainPage.module.css";
import Title from "@/Components/Title";
import Achievement from "@/Components/Achievements";

function Alumni_Achievement() {
//   const data = await fetchFullEventData();
  return (
    <>
      <Navbar />
      <Title title="Alumni Achievement" />
      <div className={styles.container_1}>
       <Achievement/>
      </div>

      <Footer />
    </>
  );
}

export default Alumni_Achievement;
