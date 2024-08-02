import Container from "../Container";
import useAuth from "../../../hooks/useAuth";
import UserMenuDropdown from "../../Dropdown/UserMenuDropdown";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* User Menu Drop Down */}
            <div>{user && <UserMenuDropdown />}</div>

            <div>
              <div className='flex flex-row items-center gap-3'>
                <div>
                  <span></span>
                </div>
                <div>

                  {user && <>
                    <div>
                      <span onClick={logOut}>Log Out</span>
                      <span></span>
                    </div>
                </>}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
