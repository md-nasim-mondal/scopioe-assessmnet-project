// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styes.css";
// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const TherapistSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(
    getSlidesToShow(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () =>
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getSlidesToShow(width) {
    if (width >= 1600) {
      return 4;
    } else if (width >= 1024) {
      return 3;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  const axiosSecure = useAxiosSecure();
  const { data: therapists = [] } = useQuery({
    queryKey: ["therapists"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/therapists`);
      return data;
    },
  });

  return (
    <section className='mt-4 mx-auto relative'>
      <h1 className='text-[#152A16] font-medium text-lg mb-4 dark:text-white'>
        Featured Therapist
      </h1>
      <div className=' bg-white rounded-xl dark:bg-gray-600'>
        <div className='max-w-[310px] md:max-w-xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl p-10 mx-auto'>
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            mousewheel={true}
            keyboard={true}
            slidesPerView={slidesToShow}
            spaceBetween={30}
            modules={[Pagination, Navigation, Mousewheel, Keyboard]}
            className='mySwiper'>
            {therapists?.map((therapist, index) => (
              <SwiperSlide
                key={index}
                className='bg-white dark:bg-gray-600 rounded-lg shadow-lg h-[303px]'>
                <div className='p-4 border border-b-0 border-gray-200 rounded-t-lg'>
                  <div className='w-full h-[230px]'>
                    <img
                      src={therapist?.image}
                      alt={therapist?.name}
                      className='rounded-lg mb-4 w-full h-full object-cover'
                    />
                  </div>
                  <h2 className='text-xl font-bold mb-2 text-[#152A16] dark:text-white'>
                    {therapist?.name}
                  </h2>
                  <p className='text-[#152A16] mb-1 flex items-center gap-1 dark:text-white'>
                    <IoLocationSharp /> {therapist?.address}
                  </p>
                  <p className='text-[#152A16] flex items-center gap-2 dark:text-white'>
                    <FaCar /> {therapist?.service}
                  </p>
                </div>
                <button className='bg-blue-200 dark:bg-blue-300 hover:text-white px-4 py-2 rounded-b hover:bg-[#156BCA] hover:dark:bg-blue-700 w-full h-[45px] underline hover:dark:text-[#152A16]'>
                  See Details
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper-button-next custom-next'></div>
          <div className='swiper-button-prev custom-prev'></div>
        </div>
      </div>
    </section>
  );
};

export default TherapistSlider;
