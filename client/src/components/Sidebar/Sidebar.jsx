import { AiOutlineAppstore } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineHelpCenter } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuItem from "./Menu/MenuItem";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Sidebar = () => {
  const { isLoading, showSidebar } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {/* Small Screen Navbar */}
      {/* <div className='flex justify-between '>
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div> */}

      {/* Sidebar */}
      <div
        className={`z-10 hidden lg:flex flex-col justify-start overflow-x-hidden w-52 space-y-6 px-2 py-4 ${
          !showSidebar && "hidden"
        }  transition duration-200 ease-in-out border-r dark:border-gray-100 bg-white dark:bg-gray-600 min-h-screen`}>
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center mx-auto'>
              <Link to='/'>
                <h1 className='my-3 text-4xl font-medium text-[#4285F3]'>
                  LOGO
                </h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/*  Menu Items */}
            <nav>
              <MenuItem
                label={"Home"}
                address={"/home"}
                icon={AiOutlineAppstore}
              />
              <MenuItem
                label={"New Listing"}
                address={"/new-listing"}
                icon={GoPeople}
              />
              <MenuItem label={"Search"} address={"/search"} icon={CiSearch} />
              <MenuItem
                label={"About"}
                address={"/about"}
                icon={IoDocumentTextOutline}
              />
              <MenuItem
                label={"Favorites"}
                address={"/favorites"}
                icon={CiHeart}
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label={"Help"}
            address={"/help"}
            icon={MdOutlineHelpCenter}
          />

          <MenuItem
            label={"Settings"}
            address={"/settings"}
            icon={IoSettingsOutline}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
