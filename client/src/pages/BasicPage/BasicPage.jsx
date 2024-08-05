import ResponsiveHome from "../ResponsiveHome/ResponsiveHome";
import Login from "../Login/Login";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const BasicPage = () => {
  const { smallDevice, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  return smallDevice ? <ResponsiveHome /> : <Login />;
};

export default BasicPage;
