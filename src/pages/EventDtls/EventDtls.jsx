import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaAngleLeft } from "react-icons/fa";

const EventDtls = () => {

    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch('/event.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const newData = data?.find(data => data.id == id);
    console.log(newData);
    const {Image, Title, Description} = newData || {}

    return (
        <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <Navbar></Navbar>
            <div>
                <img className="w-60 lg:w-full px-8" src={Image} alt="" />
                <div className="px-8">
                    <h2 className="text-3xl font-bold mt-4">{Title}</h2>
                    <p className="text-xl font-bold mt-5">{Description}</p>
                    <Link to="/"><button className="flex items-center bg-[#D72050] py-1 px-2 text-[#fff] mt-3 mb-6 rounded-lg"><FaAngleLeft />Back another Events</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventDtls;