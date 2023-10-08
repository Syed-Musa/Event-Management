/* eslint-disable react/prop-types */
import EventsCard from "./EventsCard";

const Events = ({events}) => {
    console.log(events);
    return (
        
        <div className="">
            <h2 className="text-2xl lg:text-5xl font-bold text-center my-10">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                {
                    events?.map(events => <EventsCard key={events.id} events={events}></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Events;
