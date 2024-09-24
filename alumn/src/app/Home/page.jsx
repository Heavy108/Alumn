import Achievement from "@/Components/Achievements";
import Carasoul from "@/Components/Carousels";
import Footer from "@/Components/Footer";
import GiveBack from "@/Components/giveback";
import Navbar from "@/Components/Navbar";
import Events from "@/Components/Events";
import Gallery from "@/Components/Gallery";
import { fetchEventData } from "../api/Events/route";

async function Home1 () {
    const data = await fetchEventData();  // Fetching event data dynamically
    // console.log(data);

    return (
        <>
            <Navbar />
            <Carasoul />
            <Achievement />
            <GiveBack />
            <Events data={data} />  {/* Passing fetched event data */}
            <Gallery len={8} />
            <Footer />
        </>
    );
}

export default Home1;
