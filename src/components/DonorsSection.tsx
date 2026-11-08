import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { useLanguage } from "@/contexts/LanguageContext";

const donors = [
  {
    nameEn: "Sri Dhanpal Suryanarayana (MLA Nizamabad Urban)",
    nameTe: "శ్రీ ధన్పాల్ సూర్యనారాయణ (ఎం.ఎల్.ఏ, నిజామాబాద్ అర్బన్)",
    amount: "₹2,51,000",
    image: "/uploads/donors/dhanpal-suryanarayana.jpeg",
  },
  {
    nameEn: "Sri Bompelly Bhumeshwar",
    nameTe: "శ్రీ బొంపల్లి భూమేశ్వర్",
    amount: "",
    image: "/uploads/donors/bompelly-bhueshwar.jpeg",
  },
  {
    nameEn: "Sri Narla Mohan",
    nameTe: "శ్రీ నార్ల మోహన్, భారతి దంపతులు",
    amount: "",
    image: "/uploads/donors/narla-mohan.jpeg",
  },
  {
    nameEn: "Sri Mukka Radhakishan Gupta",
    nameTe: "శ్రీ ముక్క రాధాకిషన్ గుప్తా",
    amount: "",
    image: "/uploads/donors/mukka-radhakishan.jpeg",
  },
  {
    nameEn: "Sri Kaparthy Srinivas",
    nameTe: "శ్రీ కాపర్తి శ్రీనివాస్,వనజ దంపతులు",
    amount: "",
    image: "/uploads/donors/kaparthy-srinivas.jpeg",
  },
  {
    nameEn: "Sri Mara Manohar",
    nameTe: "శ్రీ మార మనోహర్, పూజిత దంపతులు",
    amount: "",
    image: "/uploads/donors/mara-manohar.jpeg",
  },
  {
    nameEn: "Sri Kondra Dhanpal Gupta",
    nameTe: "శ్రీ కోండ్ర ధన్ పాల్ గుప్తా",
    amount: "",
    image: "/uploads/donors/dhanpal-sir.jpeg",
  },
  {
    nameEn: "Sri Gangam Shankaraiah",
    nameTe: "శ్రీ గంగం శంకరయ్య",
    amount: "",
    image: "/uploads/donors/gangam-shankaraiah.jpeg",
  },
  {
    nameEn: "Sri Moturi Muralikrishna",
    nameTe: "శ్రీ మోటూరి మురళీకృష్ణ",
    amount: "",
    image: "/uploads/donors/muralikrishna-moturi-full.jpeg",
  },
  {
    nameEn: "Sri Argula Bhagvan Das",
    nameTe: "శ్రీ అర్గుల భగవాన్ దాస్",
    amount: "",
    image: "/uploads/donors/bhagwan-das.jpeg",
  },
  {
    nameEn: "Sri Argula Shankar Das",
    nameTe: "శ్రీ అర్గుల శంకర్ దాస్",
    amount: "",
    image: "/uploads/donors/shankar-das.jpeg",
  },
  {
    nameEn: "Sri Kantala Gangadhar",
    nameTe: "శ్రీ కంటాల గంగాధర్, చంద్రబాగ - మెట్ పల్లి",
    amount: "",
    image: "/uploads/donors/kantala-gangadhar.jpeg",
  },
  {
    nameEn: "Sri Paldhe Devender",
    nameTe: "శ్రీ పాల్దె దేవేందర్ గుప్తా",
    amount: "",
    image: "/uploads/donors/palde-devendar.jpeg",
  },
  {
    nameEn: "Sri Pampatti Vikram",
    nameTe: "శ్రీ పాంపట్టి విక్రమ్",
    amount: "",
    image: "/uploads/donors/vikram-uncle.jpeg",
  },
  {
    nameEn: "Sri Chinthala Bharat Bhushan, Sashikala",
    nameTe: "శ్రీ చింతల భారత్ భూషణ్, శశికళ",
    amount: "",
    image: "/uploads/donors/bharath-bhushan.jpeg",
  },
  {
    nameEn: "Sri Pallikonda Gopinath",
    nameTe: "శ్రీ పల్లికొండ గోపీనాథ్",
    amount: "",
    image: "/uploads/donors/gopi-sir.jpeg",
  },
  {
    nameEn: "Sri Marri Devender, Sangeetha - Drishti Opticals Indur",
    nameTe: "శ్రీ మర్రి దేవేందర్, సంగీత - దృష్టి ఆప్టికల్స్ ఇందూర్",
    amount: "",
    image: "/uploads/donors/drishti-raju.jpeg",
  },
  {
    nameEn: "Sri Gangam Sambaiah, Maheshwari",
    nameTe: "శ్రీ గంగం సాంబయ్య, మహేశ్వరి",
    amount: "",
    image: "/uploads/donors/maheshwari-peddamma.jpeg",
  },
  {
    nameEn: "Sri Chinthala Venkateshwar",
    nameTe: "శ్రీ చింతల వెంకటేశ్వర్",
    amount: "",
    image: "/uploads/donors/chinthala-venkateshwar.jpeg",
  },
  {
    nameEn: "Sri Nalla Vilas",
    nameTe: "శ్రీ నల్ల విలాస్",
    amount: "",
    image: "/uploads/donors/nalla-vilas.jpeg",
  },
  {
    nameEn: "Sri Muthyapu Prabhakar",
    nameTe: "శ్రీ ముత్యపు ప్రభాకర్",
    amount: "",
    image: "/uploads/donors/prabhakar-muthyapu.jpeg",
  },
  {
    nameEn: "Sri Mamindla Laxmi Rajam, Sindhu M-plastz PVC Interiors",
    nameTe:
      "శ్రీ మామిండ్ల లక్ష్మి రాజాం, సింధు ఎం-ప్లాస్ట్జ్ పీవీసీ ఇంటీరియర్స్",
    amount: "",
    image: "/uploads/donors/Mamindla-Laxmi-Rajam.jpeg",
  },
  {
    nameEn:
      "In Memory of Late Shri Nunugonda Anjaiah & Late Smt. Nunugonda Shyamala — Shri Nunugonda Ramakrishna (USA)",
    nameTe:
      "కీ.శే. శ్రీ నునుగొండ అంజయ్య మరియు కీ.శే. శ్రీ నునుగొండ శ్యామల జ్ఞాపకాలు శ్రీ నునుగొండ రామకృష్ణ (USA)",
    amount: "",
    image: "/uploads/donors/anjayya.jpeg",
  },
  {
    nameEn:
      "Sri Muda Nagabhushanam Gupta – Hotel Nikhil Sai International, Nizamabad",
    nameTe:
      "శ్రీ మూడా నాగభూషణం గుప్తా – హోటల్ నిఖిల్ సాయి ఇంటర్నేషనల్, నిజామాబాద్",
    amount: "",
    image: "/uploads/donors/nikhilsai.jpeg",
  },
];

const DonorsSection = () => {
  const { language } = useLanguage();

  // Stores dynamically calculated card widths.
  const [cardWidths, setCardWidths] = useState<Record<string, number>>({});

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

  // Calculate card width according to the original image dimensions.
  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement>,
    imageHeight: number,
    imagePath: string
  ) => {
    const img = event.currentTarget;

    if (!img.naturalWidth || !img.naturalHeight) return;

    const imageRatio = img.naturalWidth / img.naturalHeight;
    const calculatedImageWidth = imageHeight * imageRatio;

    const cardWidth = Math.min(
      Math.max(calculatedImageWidth + 24, 244),
      444
    );

    setCardWidths((previous) => ({
      ...previous,
      [imagePath]: cardWidth,
    }));
  };

  return (
    <section className="py-14 bg-orange-50 dark:bg-gray-900 overflow-hidden">

      {/* Section Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {currentContent.title}
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {currentContent.subtitle}
        </p>
      </div>

      {/* Donor Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={4000}
        grabCursor={true}
        observer={true}
        observeParents={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="px-4"
      >
        {donors.map((donor, index) => {
          const isLongNameDonor = donor.nameEn.includes(
            "Nunugonda Anjaiah"
          );

          // Keep enough width for the complete long donor name.
          const cardWidth = isLongNameDonor
            ? 520
            : cardWidths[donor.image] ?? 260;

          // Give the long-name donor more room for text.
          const imageHeight = isLongNameDonor ? 210 : 256;

          const donorName =
            language === "te" ? donor.nameTe : donor.nameEn;

          return (
            <SwiperSlide
              key={index}
              style={{
                width: `${cardWidth}px`,
              }}
            >
              {/* Fixed-height donor card */}
              <div className="h-[380px] rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden flex flex-col">

                {/* Image */}
                <div
                  className={`w-full flex-shrink-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-3 border-b border-gray-200 dark:border-gray-700 ${
                    isLongNameDonor ? "h-[210px]" : "h-64"
                  }`}
                >
                  <img
                    src={donor.image}
                    alt={donorName}
                    onLoad={(event) =>
                      handleImageLoad(
                        event,
                        imageHeight,
                        donor.image
                      )
                    }
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Donor Details */}
                <div className="flex flex-col flex-1 justify-center p-4 min-w-0">

                  {/* Complete Donor Name */}
                  <h3
                    className={`font-semibold text-gray-900 dark:text-white text-center break-words ${
                      isLongNameDonor
                        ? "text-sm leading-5"
                        : "text-lg leading-6"
                    }`}
                    title={donorName}
                  >
                    {donorName}
                  </h3>

                  {/* Donation Amount */}
                  <div className="mt-2 h-6 flex items-center justify-center flex-shrink-0">
                    {donor.amount ? (
                      <p className="text-lg font-bold text-orange-600">
                        {donor.amount}
                      </p>
                    ) : (
                      <span className="invisible text-lg">
                        ₹0
                      </span>
                    )}
                  </div>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
};

export default DonorsSection;