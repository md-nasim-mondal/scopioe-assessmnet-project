import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import responsiveBgImg from "../../assets/images/responsiveBg.png";
import Slider from "../../components/Slider/Slider";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const from = location?.state || "/home";
  const { signIn, signInWithGoogle, resetPassword, smallDevice, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setIsLoading(true);
      // 1. sign In user
      await signIn(email, password);
      navigate(from);
      toast.success("SignIn Successful");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) return toast.error("Please write your email first!");
    setIsLoading(true);
    try {
      await resetPassword(email);
      toast.success(
        "Request Success! Check your email for further process.........."
      );
      setIsLoading(false);
    } catch (err) {
      // console.log(err)
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      navigate(from);
      toast.success("LogIn Successful With Google");
      setIsLoading(false);
    } catch (err) {
      // console.log(err)
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  if(loading) return <LoadingSpinner/>

  if (smallDevice) {
    return (
      <div className='relative min-h-screen'>
        <div className='relative'>
          <img src={responsiveBgImg} alt='' className='w-full h-full' />
          <div className='absolute top-[4%] w-full'>
            <h1 className='my-4 text-[40px] font-medium text-[#4285F3] text-center'>
              LOGO
            </h1>
            <div className='text-center w-full text-white text-lg '>
              <p className='font-semibold leading-7'>Create Account</p>
              <p className='font-medium leading-7'>Fill In Your Information</p>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 bg-white w-full p-4 rounded-2xl'>
          <div className='mb-8 text-start'>
            <h1 className='my-3 text-3xl font-bold text-center'>
              Log In To Your Account
            </h1>
            <p className='text-[#5C635A] text-center'>
              Welcome Back! Select a method to log in:
            </p>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-4 mb-6 '>
            <button
              disabled={isLoading}
              onClick={handleGoogleSignIn}
              className='flex justify-center text-base max-w-[178px] flex-1 h-[55px] items-center space-x-1 disabled:cursor-not-allowed cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF]'>
              <FcGoogle size={28} />
              <p>Google</p>
            </button>
            <button
              type='button'
              className='text-white bg-gradient-to-t flex-1 max-w-[205px] h-[55px] from-[#298FFF] to-[#298FFF] font-medium rounded-xl text-base justify-center inline-flex items-center'>
              <GrFacebookOption className='text-lg' />
              Facebook
            </button>
          </div>

          <div className='flex items-center py-4'>
            <div className='flex-1 dark:bg-gray-700'>
              <hr />
            </div>
            <p className='px-0.5 text-[#5C635A]'>Or Continue With Email</p>
            <div className='flex-1'>
              <hr />
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-[#152A16] font-semibold'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter your email'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
                  data-temp-mail-org='0'
                />
              </div>
              <div className='relative'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='password'
                    className='mb-2 text-[#152A16] font-semibold'>
                    Password
                  </label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  autoComplete='new-password'
                  id='password'
                  required
                  placeholder='Enter your password'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-[3%] top-[58%]'>
                  {showPassword ? (
                    <IoEyeOutline className='text-xl' />
                  ) : (
                    <IoEyeOffOutline className='text-xl' />
                  )}
                </div>
              </div>
            </div>

            <div className='flex items-start mb-5 justify-between'>
              <div className='flex items-center'>
                <input
                  id='terms'
                  type='checkbox'
                  name='terms'
                  className='w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
                />
                <label htmlFor='terms' className='ms-1 text-sm'>
                  Remember Me
                </label>
              </div>
              <p
                onClick={handleResetPassword}
                className='text-sm hover:underline hover:text-rose-500 text-[#4285F3] underline'>
                Forgot password?
              </p>
            </div>

            <div className='text-center'>
              <button
                disabled={isLoading}
                type='submit'
                className='bg-[#4285F3] w-[60%] rounded-lg py-3 text-white disabled:cursor-not-allowed cursor-pointer'>
                {isLoading ? (
                  <TbFidgetSpinner className='animate-spin m-auto' />
                ) : (
                  "Log In"
                )}
              </button>
            </div>
          </form>
          <p className='text-center text-[#152A16] py-2'>
            Don&apos;t Have an Account?{" "}
            <Link
              to='/signup'
              className='hover:underline hover:text-rose-500 text-[#4285F3]'>
              Create Account
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen xl:gap-24 gap-16 lg:gap-20 bg-white p-8'>
      <div className='flex flex-col lg:min-w-[428px] max-w-md p-2 lg:ml-auto'>
        <div className='mb-8 text-start'>
          <h1 className='my-3 text-4xl font-medium text-[#4285F3]'>LOGO</h1>
          <h1 className='my-3 text-3xl font-bold'>Log In To Your Account</h1>
          <p className='text-[#5C635A]'>
            Welcome Back! Select a method to log in:
          </p>
        </div>

        <div className='flex justify-between items-center flex-wrap gap-4 mb-6'>
          <button
            disabled={isLoading}
            onClick={handleGoogleSignIn}
            className='flex justify-center text-base min-w-[178px] h-[55px] items-center space-x-2 disabled:cursor-not-allowed cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-[#E4E4E4] to-[#FFFFFF]'>
            <FcGoogle size={32} />
            <p>Google</p>
          </button>
          <button
            type='button'
            className='text-white bg-gradient-to-t min-w-[205px] h-[55px] from-[#298FFF] to-[#298FFF] font-medium rounded-xl text-base justify-center inline-flex items-center'>
            <GrFacebookOption className='text-xl' />
            Facebook
          </button>
        </div>

        <div className='flex items-center py-4'>
          <div className='flex-1 dark:bg-gray-700'>
            <hr />
          </div>
          <p className='px-0.5 text-[#5C635A]'>Or Continue With Email</p>
          <div className='flex-1'>
            <hr />
          </div>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-[#152A16] font-semibold'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter your email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
                data-temp-mail-org='0'
              />
            </div>
            <div className='relative'>
              <div className='flex justify-between'>
                <label
                  htmlFor='password'
                  className='mb-2 text-[#152A16] font-semibold'>
                  Password
                </label>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='Enter your password'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-[3%] top-[58%]'>
                {showPassword ? (
                  <IoEyeOutline className='text-xl' />
                ) : (
                  <IoEyeOffOutline className='text-xl' />
                )}
              </div>
            </div>
          </div>

          <div className='flex items-start mb-5 justify-between'>
            <div className='flex items-center'>
              <input
                id='terms'
                type='checkbox'
                name='terms'
                className='w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
              />
              <label htmlFor='terms' className='ms-1 text-sm'>
                Remember Me
              </label>
            </div>
            <p
              onClick={handleResetPassword}
              className='text-sm hover:underline hover:text-rose-500 text-[#4285F3] underline'>
              Forgot password?
            </p>
          </div>

          <div className='text-center'>
            <button
              disabled={isLoading}
              type='submit'
              className='bg-[#4285F3] w-[60%] rounded-lg py-3 text-white disabled:cursor-not-allowed cursor-pointer'>
              {isLoading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </form>
        <p className='text-center text-[#152A16] py-2'>
          Don&apos;t Have an Account?{" "}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-[#4285F3]'>
            Create Account
          </Link>
        </p>
      </div>
      <div className='max-w-3xl lg:mr-auto'>
        <Slider initialSlide={1} />
      </div>
    </div>
  );
};

export default Login;
