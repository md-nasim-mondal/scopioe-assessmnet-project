import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
const Main = () => {
  const location = useLocation();
  const [showComponents, setShowComponents] = useState(false);
  const { showSidebar, setShowSidebar, setUserDropDownOpen } = useAuth();
  useEffect(() => {
    if (
      location?.pathname === "/" ||
      location?.pathname.toLowerCase() === "/signup"
    ) {
      setShowComponents(false);
      setShowSidebar(false);
    } else {
      setShowComponents(true);
    }
  }, [location?.pathname, setShowSidebar]);

  return (
    <div className='min-h-screen flex '>
      <div className={showSidebar ? "lg:w-52 " : ""}>
        {showComponents && showSidebar ? <Sidebar /> : ""}
      </div>
      <div className='flex-1'>
        <div>{showComponents && <Navbar />}</div>
        <div
          onClick={() => setUserDropDownOpen(false)}
          className={`min-h-[calc(100vh-93px)] w-full bg-[#EEF2F5] dark:bg-gray-900 `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
