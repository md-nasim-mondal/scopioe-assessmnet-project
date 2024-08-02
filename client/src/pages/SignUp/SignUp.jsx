import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import img from "../../assets/images/contentBg1.png";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import { imageUpload } from "../../api/utils";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const image = form.image.files[0];

    try {
      setLoading(true);
      // 1. Upload image and get image url
      // const image_url = await imageUpload(image);
      // console.log(image_url)

      // 2. User Registration
      await createUser(email, password);

      // 3. Save username and photo in firebase
      await updateUserProfile(name);

      navigate(from);
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };
  
  return (
    <div className='flex justify-center items-center min-h-screen max-w-7xl mx-auto gap-24'>
      <div className='flex flex-col max-w-md p-6 rounded-md'>
        <div className='mb-8 text-start'>
          <h1 className='my-3 text-4xl font-medium text-[#4285F3]'>LOGO</h1>
          <h1 className='my-3 text-xl font-bold'>Sign Up To Your Account</h1>
          <p className=''>
            Welcome Back! By click the sign up button, you&apos;re agree to
            Zenitood Terms and Service and acknowledge the{" "}
            <span className='text-[#4285F3] underline'>Privacy and Policy</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block mb-2  text-[#152A16] font-semibold'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='@username'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block mb-2  text-[#152A16] font-semibold'>
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

            <div className='relative'>
              <div className='flex justify-between'>
                <label
                  htmlFor='confirm-password'
                  className=' mb-2 text-[#152A16] font-semibold'>
                  Confirm Password
                </label>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name='confirm-password'
                autoComplete='new-password'
                id='confirm-password'
                required
                placeholder='Re-type Password'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
              />
              <div
                onClick={() => setShowConfirmPassword(!showPassword)}
                className='absolute right-[3%] top-[58%]'>
                {showConfirmPassword ? (
                  <IoEyeOutline className='text-xl' />
                ) : (
                  <IoEyeOffOutline className='text-xl' />
                )}
              </div>
            </div>
          </div>

          <div className='flex items-start mb-5'>
            <div className='flex items-center h-5'>
              <input
                id='terms'
                type='checkbox'
                value=''
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
                required
              />
              <label htmlFor='terms' className='ms-2 text-[#4285F3]'>
                <a href='#' className='text-blue-600 hover:underline'>
                  Accept Terms of Services
                </a>
              </label>
            </div>
          </div>

          <div className='text-center'>
            <button
              disabled={loading}
              type='submit'
              className='bg-[#4285F3] w-[60%] rounded-md py-3 text-white'>
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <p className='px-6 py-3  text-center text-[#152A16] font-medium'>
          Already Have an Account?{" "}
          <Link
            to='/login'
            className='underline hover:text-rose-500 text-[#4285F3]'>
            Login
          </Link>
        </p>
      </div>
      <div className='bg-gray-500'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};

export default SignUp;
