import Achievement from "@/Components/Achievements";
import Carasoul from "@/Components/Carousels";
import Footer from "@/Components/Footer";
import GiveBack from "@/Components/giveback";
import Navbar from "@/Components/Navbar";

function Home (){

        return(
            <>
            <Navbar/>
            <Carasoul/>
            
            <Achievement/>
            <GiveBack/>
            <Footer/>
            </>
        )
}
export default Home;