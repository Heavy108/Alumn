import Achievement from "@/Components/Achievements";
import Carasoul from "@/Components/Carousels";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

function Home (){

        return(
            <>
            <Navbar/>
            <Carasoul/>
            
            <Achievement/>
            <Footer/>
            </>
        )
}
export default Home;