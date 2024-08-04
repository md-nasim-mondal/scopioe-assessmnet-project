import Login from "../pages/Login/Login";
import ResponsiveHome from "../pages/ResponsiveHome/ResponsiveHome";
import useWindowWidth from "../hooks/useWindowWidth";

const ResponsiveRoutes = () => {
  const windowWidth = useWindowWidth();
  return <>{windowWidth > 500 ? <Login /> : <ResponsiveHome />}</>;
};

export default ResponsiveRoutes;
