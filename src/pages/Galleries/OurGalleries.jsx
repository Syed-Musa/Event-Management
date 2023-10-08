
const OurGalleries = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-7">Our Galleries</h2>
            <div className="w-full rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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