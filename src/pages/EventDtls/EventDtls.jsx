import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaAngleLeft } from "react-icons/fa";

const EventDtls = () => {

    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch('/public/event.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    const newData = data?.find(data => data.id == id);
    console.log(newData);
    const {Image, Title, Description} = newData || {}

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <img className="w-60 lg:w-full" src={Image} alt="" />
                <div>
                    <h2 className="text-3xl font-bold mt-4">{Title}</h2>
                    <p className="text-xl font-bold mt-5">{Description}</p>
                    <Link to="/"><button className="flex items-center rounded-sm bg-[#D72050] py-1 px-2 text-[#fff] mt-3 mb-6"><FaAngleLeft />All events in this category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventDtls;