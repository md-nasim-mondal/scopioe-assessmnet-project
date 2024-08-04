import { Helmet } from "react-helmet-async";
import MessageTherapist from "../../components/Home/Therapist/MessageTherapist";
import TherapistSlider from "../../components/Home/Therapist/TherapistSlider/TherapistSlider";
import TestimonialSlider from "../../components/Home/TestimonialSlider/TestimonialSlider";
import PopularCities from "../../components/Home/PopularCities/PopularCities";

const Home = () => {
  return (
    <div className='p-10'>
      <Helmet>
        <title>Scopioe Assessment | Home</title>
      </Helmet>

      {/* Message Therapist Section */}
      <MessageTherapist />

      {/* Therapist Slider Section */}
      <TherapistSlider />
      {/* testimonial + Popular Section */}
      <section className='flex flex-col md:flex-row justify-center items-center gap-8 2xl:gap-20 flex-wrap lg:flex-nowrap'>
        {/* Testimonial Slider Section */}
        <div>
          <TestimonialSlider />
        </div>
        {/* Popular Cities Section */}
        <div className='md:flex-1  min-w-[450px] flex flex-col justify-center rounded-2xl w-full'>
          <h1 className='text-[#152A16] font-medium text-lg  dark:text-white -translate-y-4'>
            Popular Cities
          </h1>
          <div>
            <PopularCities />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
