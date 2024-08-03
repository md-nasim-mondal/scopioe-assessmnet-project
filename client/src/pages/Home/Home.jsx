import { Helmet } from "react-helmet-async";
import MessageTherapist from "../../components/Home/Therapist/MessageTherapist";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Scopioe Assessment | Home</title>
      </Helmet>
      <MessageTherapist/>
    </div>
  );
};

export default Home;
