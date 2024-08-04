import ResponsiveHome from "../ResponsiveHome/ResponsiveHome";
import Login from "../Login/Login";
import useAuth from "../../hooks/useAuth";

const BasicPage = () => {
  const { smallDevice } = useAuth();
  return smallDevice ? <ResponsiveHome/> : <Login/>
};

export default BasicPage;
