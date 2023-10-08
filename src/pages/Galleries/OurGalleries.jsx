
const OurGalleries = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-xl lg:text-5xl font-bold text-center my-10">Our Galleries</h2>
            <div className=" lg:w-full rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img className="h-full" src="/public/g-1.jpg" alt="" />
            <img className="h-full" src="/public/g-2.jpg" alt="" />
            <img className="h-full" src="/public/g-3.jpg" alt="" />
            <img className="h-full" src="/public/g-4.jpg" alt="" />
            <img className="h-full" src="/public/g-5.jpg" alt="" />
            <img className="h-full" src="/public/g-2.jpg" alt="" />
            <img className="h-full" src="/public/g-7.jpg" alt="" />
            <img className="h-full" src="/public/g-3.jpg" alt="" />
            <img className="h-full" src="/public/g-4.jpg" alt="" />
            </div>
        </div>
    );
};

export default OurGalleries;