import { useNavigate } from "react-router-dom";
import responsiveBgImg from "../../assets/images/responsiveBg.png";

const ResponsiveHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='relative'>
        <img src={responsiveBgImg} alt='' className='w-full h-full' />
        <div className='absolute top-[3%] w-full p-4'>
          <h1 className='my-5 text-[40px] font-medium text-[#4285F3] text-center'>
            LOGO
          </h1>
          <div className='w-full'>
            <h2 className='font-semibold text-center text-[#1A2531] text-3xl leading-10 my-3'>
              Sign In To Your Account
            </h2>
            <p className='text-start text-lg leading-6 text-white'>
              Welcome Back! By click the sign up button, you&apos;re agree to
              Zenitood Terms and Service and acknowledge the{" "}
              <span className='text-[#4285F3] underline'>
                <a href='#'>Privacy and Policy</a>
              </span>
            </p>
          </div>
          <div className='max-w-[344px] h-[144px] bg-[#1F2833] flex flex-col items-center justify-center rounded-lg mx-auto mt-28 bg-opacity-75'>
            <h3 onClick={() => navigate("/signup")} className='text-2xl leading-9 text-center font-semibold text-[#156BCA]'>
              Create Account
            </h3>
            <h2 className='text-2xl font-medium leading-9 text-center text-white'>
              Fill in Your Information
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHome;
