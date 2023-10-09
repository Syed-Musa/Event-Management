
const OurGalleries = () => {
    return (
        <div className="px-5 mx-auto p-5" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <h2 className="text-xl lg:text-5xl font-bold text-orange-400 text-center my-10 uppercase">Our Galleries</h2>
            <div className=" lg:w-full rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img className="h-full" src="/g-1.jpg" alt="" />
            <img className="h-full" src="/g-2.jpg" alt="" />
            <img className="h-full" src="/g-3.jpg" alt="" />
            <img className="h-full" src="/g-4.jpg" alt="" />
            <img className="h-full" src="/g-5.jpg" alt="" />
            <img className="h-full" src="/g-2.jpg" alt="" />
            <img className="h-full" src="/g-7.jpg" alt="" />
            <img className="h-full" src="/g-3.jpg" alt="" />
            <img className="h-full" src="/g-4.jpg" alt="" />
            </div>
        </div>
    );
};

export default OurGalleries;