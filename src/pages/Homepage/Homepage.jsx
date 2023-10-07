import { useLoaderData } from "react-router-dom";
import Events from "../../EventsCard/Events";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import RigthSideNav from "../RightSideNav/RigthSideNav";

const Homepage = () => {

    const events = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="flex-wrap-reverse lg:flex justify-between">
            <Events events={events}></Events>
            <RigthSideNav></RigthSideNav>
            </div>
        </div>
    );
};

export default Homepage;