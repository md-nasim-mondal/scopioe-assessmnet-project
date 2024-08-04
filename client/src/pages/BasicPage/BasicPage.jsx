import ResponsiveHome from "../ResponsiveHome/ResponsiveHome";
import Login from "../Login/Login";
import useAuth from "../../hooks/useAuth";

const BasicPage = () => {
  const { smallDevice } = useAuth();
  if (smallDevice) {
    return <ResponsiveHome />;
  } else {
    return <Login />;
  }
};

export default BasicPage;
