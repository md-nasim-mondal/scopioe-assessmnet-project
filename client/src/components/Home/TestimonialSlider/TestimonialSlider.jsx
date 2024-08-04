// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { IoLocationSharp } from "react-icons/io5";

const testimonials = [
  {
    imgSrc: "path/to/image1.jpg",
    location: "123 Elm Street, New York",
    title: "Healing Bodywork",
    author: "by Cort",
    text: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...",
  },
  {
    imgSrc: "path/to/image2.jpg",
    location: "123 Elm Street, New York",
    title: "Healing Bodywork",
    author: "by Cort",
    text: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...",
  },
  {
    imgSrc: "path/to/image1.jpg",
    location: "123 Elm Street, New York",
    title: "Healing Bodywork",
    author: "by Cort",
    text: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...",
  },
  {
    imgSrc: "path/to/image2.jpg",
    location: "123 Elm Street, New York",
    title: "Healing Bodywork",
    author: "by Cort",
    text: "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const createPairs = (testimonials) => {
    const pairs = [];
    for (let i = 0; i < testimonials.length; i += 2) {
      pairs.push(testimonials.slice(i, i + 2));
    }
    return pairs;
  };

  const testimonialPairs = createPairs(testimonials);

  return (
    <section className='mt-4 mx-auto relative'>
      <h1 className='text-[#152A16] font-medium text-lg mb-4 dark:text-white'>
        Featured Therapist
      </h1>
      <div className='max-w-xl'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Custom pagination element
          }}
          modules={[Pagination]}
          className='mySwiper'>
          {testimonialPairs.map((pair, index) => (
            <SwiperSlide key={index}>
              <div className='w-full flex flex-col space-y-4 bg-white dark:bg-gray-600 p-8 rounded-xl'>
                {pair.map((testimonial, subIndex) => (
                  <div key={subIndex} className='w-full md:max-w-lg mx-auto'>
                    <div className='flex items-center gap-4 p-6 bg-white dark:bg-gray-600 rounded-lg mb-4 border-2 border-gray-100'>
                      <div className='w-[130px] h-[140px] rounded-md'>
                        <img
                          className='w-[130px] h-[140px] rounded-md'
                          src={testimonial.imgSrc}
                          alt={`Testimonial from ${testimonial.author}`}
                        />
                      </div>
                      <div className='ml-4 text-[#5C635A] dark:text-white '>
                        <p className='flex items-center'>
                          <IoLocationSharp /> {testimonial.location}
                        </p>
                        <h3 className='text-xl font-bold'>
                          {testimonial.title}{" "}
                          <span className='text-blue-500'>
                            {testimonial.author}
                          </span>
                        </h3>
                        <p className='mt-2 text-[#5C635A] dark:text-white'>
                          {testimonial.text}{" "}
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
    </section>
  );
};

export default TestimonialSlider;
