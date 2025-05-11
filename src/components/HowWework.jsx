import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const data = [
  {
    title: "Strategy",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    points: [
      "Research & Insights",
      "Stakeholder Workshops",
      "Product Platform Strategy",
      "IA Development",
      "Content Planning",
    ],
  },
  {
    title: "UX",
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149623.png",
    points: [
      "User Research",
      "Persona Development",
      "User Journey Mapping",
      "IA Validation",
      "Wireframing",
    ],
  },
  {
    title: "Design",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    points: [
      "User Interface Design",
      "Responsive design",
      "Digital Brand Development",
      "Rapid Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Development",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    points: [
      "System Architecture",
      "Product Development",
      "CMS Integration",
      "3rd Party Integration",
      "API Design & Implementation",
    ],
  },
  {
    title: "Delivery",
    icon: "https://cdn-icons-png.flaticon.com/512/7542/7542163.png",
    points: [
      "CI/CD Integration",
      "Sprint wise delivery",
      "Multiple stages of deployment",
      "Performance Management",
    ],
  },
  {
    title: "Support",
    icon: "https://cdn-icons-png.flaticon.com/512/7542/7542163.png",
    points: [
      "Review deliverables",
      "Assess budget/timescales",
      "Initiate ongoing support",
      "Discuss next steps",
    ],
  },
];

export default function HowWeWork() {
  return (
    <section className="wework m-auto py-10 md:py-16 lg:py-24 container">
      <div className="flex flex-col max-w-2xl text-center m-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-gray-900 text-center mb-6">
          How we work
        </h2>
        <p className="text-black  text-md font-sans text-center mb-4">
          We listen to your requirement, We promise to deliver as exactly you
          want, a wonderful thing on the internet.
        </p>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-6">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-3 gap-6 mx-auto px-6">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, icon, points }) {
  return (
    <div className="border-gradient p-6 min-h-[240px] text-white flex gap-6 items-start bg-black rounded-lg">
      <img src={icon} alt={title} className="mt-2" width={24} height={24} />
      <div>
        {/* Black background container behind title */}
        <div className="bg-black inline-block px-3 py-1 rounded mb-2">
          <h4 className="text-2xl">{title}</h4>
        </div>

        <ul className="text-white text-sm lg:text-lg font-sans mt-2 list-disc pl-5">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
