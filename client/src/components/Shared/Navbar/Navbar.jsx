import Container from "../Container";
import useAuth from "../../../hooks/useAuth";
import UserMenuDropdown from "../../Dropdown/UserMenuDropdown";
import { CiLogin } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='w-full bg-white dark:bg-gray-600 z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* User Menu Drop Down */}
            <div>{user && <UserMenuDropdown />}</div>

            <div>
              {user && (
                <>
                  <div className='flex flex-row items-center gap-3'>
                    <div className='border-r-2 pr-6'>
                      <span>
                        <IoNotificationsOutline className='text-2xl w-12 h-12 border rounded-full p-2 dark:text-white' />
                      </span>
                    </div>
                    <div>
                      <div className='flex items-center text-[#F15E4A] gap-4 font-semibold'>
                        <span onClick={logOut}>Log Out</span>
                        <span className='bg-[#FFECEA] p-2 rounded-full w-10 h-10'>
                          <CiLogin className='text-2xl' />
                        </span>
                        <span className='text-[#152A16]'>
                          <ThemeToggle />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
