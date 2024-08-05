// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { IoLocationSharp } from "react-icons/io5";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const TestimonialSlider = () => {
  const axiosSecure = useAxiosSecure();
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/testimonials`);
      return data;
    },
  });
  const createPairs = (testimonials) => {
    const pairs = [];
    for (let i = 0; i < testimonials?.length; i += 2) {
      pairs.push(testimonials?.slice(i, i + 2));
    }
    return pairs;
  };

  const testimonialPairs = createPairs(testimonials);

  return (
    <div className='mt-4 mx-auto relative max-w-2xl md:max-w-4xl lg:max-w-2xl overflow-hidden'>
      <h1 className='text-[#152A16] font-medium text-lg mb-4 dark:text-white '>
        Featured Testimonial
      </h1>
      <div className='max-w-2xl md:max-w-4xl lg:max-w-2xl mx-auto'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className='mySwiper'>
          {testimonialPairs.map((pair, index) => (
            <SwiperSlide key={index}>
              <div className='w-full flex flex-col space-y-4  lg:min-h-[550px] bg-white dark:bg-gray-600 p-4 md:p-8 rounded-xl'>
                {pair.map((testimonial, subIndex) => (
                  <div key={subIndex} className='w-full mx-auto'>
                    <div className='flex flex-row items-center gap-4 p-4 md:p-6 bg-white dark:bg-gray-600 rounded-lg mb-4 border-2 border-gray-100'>
                      <div className='w-[40%] h-[140px] rounded-md overflow-hidden'>
                        <img
                          className='w-full h-full object-cover'
                          src={testimonial?.imgSrc}
                          alt={`Testimonial from ${testimonial?.author}`}
                        />
                      </div>
                      <div className='text-center md:text-left text-[#5C635A] dark:text-white'>
                        <p className='flex items-center justify-center md:justify-start'>
                          <IoLocationSharp className='mr-2' />{" "}
                          {testimonial?.location}
                        </p>
                        <h3 className='text-lg md:text-xl font-bold'>
                          {testimonial?.title}{" "}
                          <span className='text-blue-500'>
                            {testimonial?.author}
                          </span>
                        </h3>
                        <p className='mt-2 text-[#5C635A] dark:text-white'>
                          {testimonial?.text}{" "}
                          <a href='#' className='text-blue-500 underline'>
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className='custom-pagination'></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
