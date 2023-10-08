/* eslint-disable react/prop-types */
import EventsCard from "./EventsCard";

const Events = ({events}) => {
    console.log(events);
    return (
        
        <div>
            <h2 className="text-5xl font-bold text-center my-5">Our Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-5">
                {
                    events?.map(events => <EventsCard key={events.id} events={events}></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Events;
