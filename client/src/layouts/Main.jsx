import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
const Main = () => {
  const location = useLocation();
  const [showComponents, setShowComponents] = useState(false);
  const { showSidebar } = useAuth();
  useEffect(() => {
    if (location?.pathname === "/" || location?.pathname === "/signup") {
      setShowComponents(false);
    } else {
      setShowComponents(true);
    }
  }, [location?.pathname]);
  return (
    <div className='min-h-screen flex '>
      <div className={showSidebar ? "w-[15%]" : "w-20"}>
        {showComponents && showSidebar ? <Sidebar /> : ""}
      </div>
      <div className='flex-1'>
        <div>{showComponents && <Navbar />}</div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
