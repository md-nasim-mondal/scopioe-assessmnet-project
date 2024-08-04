import { Helmet } from "react-helmet-async";
import MessageTherapist from "../../components/Home/Therapist/MessageTherapist";
import TherapistSlider from "../../components/Home/Therapist/TherapistSlider/TherapistSlider";
import TestimonialSlider from "../../components/Home/TestimonialSlider/TestimonialSlider";

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
      <section className="flex justify-between items-center">
        {/* Testimonial Slider Section */}
        <TestimonialSlider />
      </section>
    </div>
  );
};

export default Home;
