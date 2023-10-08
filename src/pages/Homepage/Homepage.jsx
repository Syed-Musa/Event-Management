import { useLoaderData } from "react-router-dom";
import Events from "../../EventsCard/Events";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../../About/AboutUs";
import Footer from "../Footer/Footer";
import OurGalleries from "../Galleries/OurGalleries";

const Homepage = () => {

    const events = useLoaderData();

    return (
        <div className=" p-5 max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            
            <Events events={events}></Events>
            
            <AboutUs></AboutUs>
            <OurGalleries></OurGalleries>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;