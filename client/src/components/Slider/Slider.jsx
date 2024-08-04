// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import bgImg from "../../assets/images/contentBg1.png";
import { useEffect, useState } from "react";

const Slider = ({ initialSlide = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentSlide == 0) {
      navigate("/signup");
    } else if (currentSlide == 1) {
      navigate("/login");
    }
  }, [currentSlide, navigate]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <div className='container mx-auto py-10 relative'>
      <div className='relative'>
        <img src={bgImg} alt='Background' className='w-full' />
        <div className='absolute inset-0 top-[25%] flex flex-col justify-center items-center'>
          <Swiper
            spaceBetween={30}
            initialSlide={initialSlide}
            onSlideChange={handleSlideChange}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Pagination]}
            className='mySwiper w-full'>
            <SwiperSlide>
              <div className='max-w-[344px] h-[144px] bg-[#1F2833] flex flex-col items-center justify-center rounded-lg mx-auto mt-28 bg-opacity-70'>
                <h3
                  onClick={() => navigate("/signup")}
                  className='text-2xl leading-9 text-center font-semibold text-[#156BCA]'>
                  Create Account
                </h3>
                <h2 className='text-2xl font-medium leading-9 text-center text-white'>
                  Fill in Your Information
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[344px] h-[144px] bg-[#1F2833] flex items-center justify-center rounded-lg mx-auto mt-28 bg-opacity-70'>
                <p className='text-2xl leading-9 text-center'>
                  <span
                    onClick={() => navigate("/login")}
                    className='text-[#156BCA] hover:underline'>
                    Sign In
                  </span>{" "}
                  to view all the <br />
                  message therapists
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='max-w-[344px] h-[144px] bg-[#1F2833] flex items-center justify-center rounded-lg mx-auto mt-28 bg-opacity-70'>
                <p className='text-2xl leading-9 text-center'>
                  <span
                    onClick={() => navigate("/login")}
                    className='text-[#156BCA] hover:underline'>
                    Sign In
                  </span>{" "}
                  to view all the <br />
                  message therapists
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='swiper-pagination mt-[70%] space-x-2'></div>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  initialSlide: PropTypes.number,
};

export default Slider;
