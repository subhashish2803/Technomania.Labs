// src/components/IndustriesSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// ✅ Array of industries with online images
const industries = [
  {
    name: "Travel & Hospitality",
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Food & Beverages",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Health App & Development",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Banking",
    image: "https://images.pexels.com/photos/438639/pexels-photo-438639.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Booking",
    image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "eCommerce",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Entertainment",
    image: "https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Education",
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Gaming",
    image: "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Marketing",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Sports",
    image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Real Estate",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Manufacturing",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Media & Communication",
    image: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const IndustriesSlider = () => {
  return (
    <div className="expertise m-auto py-10 md:py-16 lg:py-24 bg-black px-6 mt-10">
      <div className="flex flex-col max-w-xl text-center m-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-white mb-4">
          Industries we serve
        </h2>
        <p className="text-white font-sans">
          We help industries to transform digitally with our tailored solutions,
          <br />
          We play our strength: Ideate, Create, Ship.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Scrollbar, Autoplay]}
        className="mySwiper !pb-16" // Add padding bottom so dots appear below
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-64 bg-cover bg-center rounded-xl shadow-md flex items-end justify-center text-white text-xl font-semibold p-4"
              style={{ backgroundImage: `url(${industry.image})` }}
            >
              <div className="bg-black bg-opacity-50 px-4 py-2 rounded">
                {industry.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IndustriesSlider;
