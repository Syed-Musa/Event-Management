/* eslint-disable react/prop-types */


const EventsCard = ({events}) => {

    const {Id, Image, Title, Details} = events || {}
    console.log(Id)

    return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={Image} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{Title}</h2>
        <p>{Details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary font-bold">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
