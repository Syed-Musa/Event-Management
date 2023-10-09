
const Banner = () => {
    return (
        <div className="px-8 mx-auto p-5" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div className="w-[350px] md:w-[500px] lg:w-full h-[300px] lg:h-[600px] bg-cover bg-[url('https://i.ibb.co/42K4fMb/doctor-giving-presentation-team-interim-doctors.jpg')]">
                <div className="hero-overlay opacity-90 pt-20 lg:py-40">
                    <p className="text-xl lg:text-2xl font-semibold text-white ml-3">Medical Center & Hospital</p>
                    <h2 className="text-2xl lg:text-7xl font-bold text-white my-5 ml-3">Excellence in medical <br /> services  with passion <br /> for patient care</h2>
                </div>            
            </div>
        </div>
    );
};

export default Banner;