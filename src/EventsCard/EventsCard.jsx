/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EventsCard = ({events}) => {

    const {id, Image, Title, Description} = events || {}
    console.log(events);

    return (
    <div className="card lg:w-96 bg-blue-100 shadow-xl">
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
  );
};

export default EventsCard;
