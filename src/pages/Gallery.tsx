
import { useState } from "react";
import { Building, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Gallery",
      subtitle: "Photos of our temple construction progress and community events",
      constructionTitle: "Construction Progress",
      eventsTitle: "Community Events",
      noPhotos: "Photos will be uploaded soon. Stay tuned for updates on our temple construction progress and community gatherings."
    },
    te: {
      title: "గ్యాలరీ",
      subtitle: "మా దేవాలయ నిర్మాణ పురోగతి మరియు సమాజ కార్యక్రమాల ఫోటోలు",
      constructionTitle: "నిర్మాణ పురోగతి",
      eventsTitle: "సమాజ కార్యక్రమాలు",
      noPhotos: "ఫోటోలు త్వరలో అప్‌లోడ్ చేయబడతాయి. మా దేవాలయ నిర్మాణ పురోగతి మరియు సమాజ సమావేశాలపై అప్‌డేట్‌ల కోసం వేచి ఉండండి."
    }
  };

  const currentContent = content[language];

  // Construction progress images
  //ensure to add new images to the public/uploads folder and update the paths in this array as needed
  //update this gallery array with new images as they are added to the project
  const constructionImages = [
    "/uploads/temple1.jpeg",
    "/uploads/temple2.jpeg",
    "/uploads/temple3.jpeg",
    "/uploads/temple4.jpeg",
    "/uploads/temple5.jpeg",
    "/uploads/temple6.jpeg",
    "/uploads/temple7.jpeg",
    "/uploads/temple8.jpeg"
  ];

  // Community events images
  const eventImages = [
    "/uploads/340ba2bc-9d08-4c59-9ac6-89b7e383d2c7.png",
    "/uploads/ac9fb44c-0fce-497d-af22-586f8755a9ed.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* <div className="container mx-auto px-4 py-12 md:py-16">
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
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-12 md:py-16">

  {/* Page Header */}
  <div className="text-center mb-10 md:mb-14">
    <Camera className="h-12 w-12 md:h-16 md:w-16 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
    <h1 className="text-2xl md:text-4xl font-bold text-orange-900 dark:text-orange-100 mb-4 px-4">
      {currentContent.title}
    </h1>
    {/* <p className="text-lg md:text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto px-4">
      {currentContent.subtitle}
    </p> */}
  </div>

  {/* Construction Section - TOP */}
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 mb-12">
    
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
      {currentContent.constructionTitle}
    </h2>

    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
  {constructionImages.map((image, index) => (
    <div
      key={index}
      className="break-inside-avoid overflow-hidden rounded-xl shadow-lg"
    >
      <img
        src={image}
        alt={`Construction Progress ${index + 1}`}
        loading="lazy"
        className="w-full h-auto transition-transform duration-300 hover:scale-105"
      />
    </div>
  ))}
</div>

    {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {constructionImages.map((image, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden h-32 sm:h-40 md:h-48 bg-gradient-to-b from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600"
        >
          <img
            src={image}
            alt={`Construction Progress ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div> */}

  </div>

  {/* Events Section - BELOW */}
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
    
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
      {currentContent.eventsTitle}
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {eventImages.map((image, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden h-32 sm:h-40 md:h-48 bg-gradient-to-b from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600"
        >
          <img
            src={image}
            alt={`Community Event ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

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
            © 2026 Arya Vysya Sangam - Mupkal. All rights reserved. Built with devotion and community support.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
