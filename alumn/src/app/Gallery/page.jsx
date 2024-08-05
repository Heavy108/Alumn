import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery";
import Navbar from "@/Components/Navbar";

function Gallery_page(){
    return(<>
    <Navbar/>
    <Gallery len={9}/>
    <Footer/>
    </>)

}
export default Gallery_page;