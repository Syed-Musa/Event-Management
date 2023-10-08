import { useLoaderData } from "react-router-dom";
import Events from "../../EventsCard/Events";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../../About/AboutUs";
import Footer from "../Footer/Footer";

const Homepage = () => {

    const events = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            
            <Events events={events}></Events>
            
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;