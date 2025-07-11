
import { useState } from "react";
import { Building, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Temple Gallery",
      subtitle: "Photos of our temple construction progress and community events",
      constructionTitle: "Construction Progress",
      eventsTitle: "Community Events",
      noPhotos: "Photos will be uploaded soon. Stay tuned for updates on our temple construction progress and community gatherings."
    },
    te: {
      title: "దేవాలయ గ్యాలరీ",
      subtitle: "మా దేవాలయ నిర్మాణ పురోగతి మరియు సమాజ కార్యక్రమాల ఫోటోలు",
      constructionTitle: "నిర్మాణ పురోగతి",
      eventsTitle: "సమాజ కార్యక్రమాలు",
      noPhotos: "ఫోటోలు త్వరలో అప్‌లోడ్ చేయబడతాయి. మా దేవాలయ నిర్మాణ పురోగతి మరియు సమాజ సమావేశాలపై అప్‌డేట్‌ల కోసం వేచి ఉండండి."
    }
  };

  const currentContent = content[language];

  // Construction progress images
  const constructionImages = [
    "/lovable-uploads/53d9d85a-ea09-468f-b460-0ec6a3624bd8.png",
    "/lovable-uploads/e6a8b053-2ff9-40a9-98b7-d6bd9dc2efb8.png",
    "/lovable-uploads/63deb1eb-e962-4787-ad07-ff5578cf46e2.png",
    "/lovable-uploads/fd7c19e3-171b-4dc4-a606-f6ad69443e9c.png"
  ];

  // Community events images
  const eventImages = [
    "/lovable-uploads/340ba2bc-9d08-4c59-9ac6-89b7e383d2c7.png",
    "/lovable-uploads/ac9fb44c-0fce-497d-af22-586f8755a9ed.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <Camera className="h-12 w-12 md:h-16 md:w-16 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
          <h1 className="text-2xl md:text-4xl font-bold text-orange-900 dark:text-orange-100 mb-4 px-4">{currentContent.title}</h1>
          <p className="text-lg md:text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto px-4">{currentContent.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6 text-center">{currentContent.constructionTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {constructionImages.map((image, index) => (
                <div key={index} className="bg-gradient-to-b from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600 rounded-lg h-32 sm:h-40 overflow-hidden">
                  <img src={image} alt={`Construction Progress ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4 italic text-sm md:text-base">Temple construction progress photos</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6 text-center">{currentContent.eventsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {eventImages.map((image, index) => (
                <div key={index} className="bg-gradient-to-b from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600 rounded-lg h-32 sm:h-40 overflow-hidden">
                  <img src={image} alt={`Community Event ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4 italic text-sm md:text-base">Community event photos</p>
          </div>
        </div>

        <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg border-gray-200 dark:border-gray-700 p-6 md:p-8 mx-4 lg:mx-0">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            More photos will be added regularly. To add new images to the gallery, upload them to the Lovable project and update the image arrays in the Gallery component.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 md:py-8 px-4 mt-12 md:mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building className="h-5 w-5 md:h-6 md:w-6 text-orange-400" />
            <span className="text-base md:text-lg font-semibold">Arya Vysya Sangam - Mupkal</span>
          </div>
          <p className="text-gray-400 text-xs md:text-sm px-4">
            © 2024 Arya Vysya Sangam - Mupkal. All rights reserved. Built with devotion and community support.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
