import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import img from "../../assets/images/contentBg1.png";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { imageUpload } from "../../api/utils";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { createUser, updateUserProfile, loading, setLoading, setUser } =
    useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const image = form.image.files[0];
    const accepted = e.target.terms.checked;

    if (password.length < 6) {
      return toast.error("Password length should be minimum 6 digit");
    }
    if (!accepted) {
      return toast.error("Please accept our terms of service!");
    }
    if (password !== confirmPassword) {
      return toast.error("Didn't match your confirm password! Please try again!");
    }

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const image_url = await imageUpload(image);

      // 2. User Registration
      const result = await createUser(email, password);

      // 3. Save username and photo in firebase
      await updateUserProfile(name, image_url);

      // Optimistic UI update
      setUser({ ...result?.user, photoURL: image_url, displayName: name });

      navigate(from);
      toast.success("SignUp Successful");
      setLoading(false);
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
          <h1 className='my-3 text-3xl font-bold'>Sign Up To Your Account</h1>
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
                required
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
                data-temp-mail-org='0'
              />
            </div>

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

            <div>
              <label
                htmlFor='image'
                className='block mb-2 text-[#152A16] font-semibold'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
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
                  htmlFor='confirmPassword'
                  className=' mb-2 text-[#152A16] font-semibold'>
                  Confirm Password
                </label>
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name='confirmPassword'
                autoComplete='new-password'
                id='confirmPassword'
                required
                placeholder='Re-type Password'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500'
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                name='terms'
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
              className='bg-[#4285F3] w-[60%] rounded-md py-3 text-white cursor-pointer'>
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
