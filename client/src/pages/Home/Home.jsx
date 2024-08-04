import { Helmet } from "react-helmet-async";
import MessageTherapist from "../../components/Home/Therapist/MessageTherapist";
import TherapistSlider from "../../components/Home/Therapist/TherapistSlider/TherapistSlider";

const Home = () => {
  return (
    <div className="p-10">
      <Helmet>
        <title>Scopioe Assessment | Home</title>
      </Helmet>
      <MessageTherapist />
      
      <TherapistSlider/>
    </div>
  );
};

export default Home;
