import Achievement from "@/Components/Achievements";
import Carasoul from "@/Components/Carousels";
import Footer from "@/Components/Footer";
import GiveBack from "@/Components/giveback";
import Navbar from "@/Components/Navbar";
import Events from "@/Components/Events";
import Gallery from "@/Components/Gallery";
import { fetchEventData } from "../api/Events/route";
import { fetchGalleryData } from "../api/Gallery/route";
export const revalidate = 0;
async function Home1 () {
    
    const data = await fetchEventData();  // Fetching event data dynamically
    // console.log(data);
    const data2 =await fetchGalleryData(8)

    return (
        <>
            <Navbar />
            <Carasoul />
            <Achievement />
            <GiveBack />
            <Events data={data} />  {/* Passing fetched event data */}
            <Gallery data = {data2}/>
            <Footer />
        </>
    );
}

export default Home1;
