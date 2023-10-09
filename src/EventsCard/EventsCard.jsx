/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EventsCard = ({events}) => {

    const {id, Image, Title, Description} = events || {}
    console.log(events);

    return (
    <div className=" mx-auto p-5 px-5">
      <div className="card lg:w-96 bg-blue-100 shadow-xl" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <figure>
        <img className="h-64" src={Image} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{Title}</h2>
        {
          Description.length > 100 ? <p>{Description.slice(0, 100)}
          <Link to={`/events/${id}`} className="text-xl font-bold text-blue-500">Read More..</Link>
          </p> :
          <p>{Description}</p>
        }
        
      </div>
    </div>
    </div>
  );
};

export default EventsCard;
