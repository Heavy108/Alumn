import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery";
import Navbar from "@/Components/Navbar";
import { fetchGalleryData } from "../api/Gallery/route";

export const revalidate = 0;

async function Gallery_page(){
    const data =await fetchGalleryData()
    return(<>
    <Navbar/>
    <Gallery data={data}/>
    <Footer/>
    </>)

}
export default Gallery_page;