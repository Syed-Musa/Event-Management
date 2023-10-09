
const AboutUs = () => {
    return (
        <div className="px-5 mx-auto p-5" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            
            <h2 className="text-2xl lg:text-5xl font-bold text-orange-400 text-center mt-6 uppercase">About us</h2>
            <div>
                <div className="bg-[url('/Doctor.jpg')] bg-cover w-80 lg:w-full h-[400px] lg:h-[600px]">
                    <h2 className="hero-overlay opacity-65 text-xl lg:text-5xl font-bold pl-5 my-20 py-40 text-green-300">We combine expertise, <br /> technology, safety, <br /> and patient care.
                    <p className="text-[12px] lg:text-2xl pt-6 text-blue-400">Dr. Garrey Hells</p>
                    <p className="text-[8px] lg:text-[20px] text-white">Bachelor of Science in Biology, University of California, <br /> Los Angeles (UCLA), 2007
                    Doctor of Medicine, University of California, San Francisco (UCSF), <br /> 2011
                    Ophthalmology Residency, Jules Stein Eye Institute, UCLA, 2015
                    Dr. <br /> Garrey Hells Cruvant is a board-certified ophthalmologist with <br /> over 30 years of  experience in the field. He received his medical degree <br /> from Harvard Medical School and <br />  completed her ophthalmology residency at the Massachusetts Eye and Ear Infirmary. <br /> Dr.  Cruvant then pursued a fellowship in cornea <br /> and refractive surgery at the Wilmer Eye Institute at Johns Hopkins University.
                    </p></h2>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;