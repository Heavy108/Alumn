import Achievement from "@/Components/Achievements";
import Carasoul from "@/Components/Carousels";
import Footer from "@/Components/Footer";
import GiveBack from "@/Components/giveback";
import Navbar from "@/Components/Navbar";
import Events from "@/Components/Events";
import Gallery from "@/Components/Gallery";
function Home1 (){

        return(
            <>
            <Navbar/>
            <Carasoul/>
            
            <Achievement/>
            <GiveBack/>
            <Events/>
            <Gallery len ={8}/>
            <Footer/>
            </>
        )
}
export default Home1;