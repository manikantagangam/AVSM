import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { useLanguage } from "@/contexts/LanguageContext";

const donors = [
  {
    name: "Sri Dhanpal Suryanarayana MLA (Nizamabad Urban)",
    amount: "₹2,51,000",
    image: "/uploads/donors/dhanpal-suryanarayana.jpeg",
  },
  {
    name: "Sri Argula Raghunandan Das Texas USA",
    amount: "₹1,51,000",
    image: "/uploads/donors/no-picture.jpg",
  },
  {
    name: "Sri Moturi Muralikrishna San francisco USA",
    amount: "₹1,11,116",
    image: "/uploads/donors/no-picture.jpg",
  },
  {
    name: "Sri Pallikonda Gopinath",
    amount: "₹1,00,000",
    image: "/uploads/donors/no-picture.jpg",
  },
  {
    name: "Sri Gangam Shankaraiah",
    amount: "₹1,11,000",
    image: "/uploads/donors/no-picture.jpg",
  },
];

const DonorsSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Generous Donors",
      subtitle:
        "We sincerely thank all the devotees who have contributed towards the construction of Sri Vasavi Kanyaka Parameswari Temple.",
    },
    te: {
      title: "మా దాతలు",
      subtitle:
        "శ్రీ వాసవి కన్యకా పరమేశ్వరి అమ్మవారి ఆలయ నిర్మాణానికి విరాళాలు అందించిన ప్రతి భక్తునికి మా హృదయపూర్వక కృతజ్ఞతలు.",
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-14 bg-orange-50 dark:bg-gray-900 overflow-hidden">

      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {currentContent.title}
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {currentContent.subtitle}
        </p>
      </div>

      <Swiper
  modules={[Autoplay]}
  slidesPerView={"auto"}
  spaceBetween={20}
  loop={true}
  speed={4000}
  grabCursor={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  className="px-4"
>
  {donors.map((donor, index) => (
    <SwiperSlide
      key={index}
      style={{ width: "260px" }}
    >
      <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden">

        <img
          src={donor.image}
          alt={donor.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-5 text-center">

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {donor.name}
          </h3>

          <p className="mt-2 text-xl font-bold text-orange-600">
            {donor.amount}
          </p>

        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default DonorsSection;