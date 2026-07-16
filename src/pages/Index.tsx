
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Building, Phone, Mail, MapPin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
//import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

import DonorsSection from "@/components/DonorsSection";

const Index = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  const content = {
    en: {
      slokam : "Om Vāsavāmbhāya vidmahe, Kusumaputryai dhīmahi | tanno Vāsavī prachodayāt ||",
      title: "Contribute to Temple Construction",
      subtitle: "Join us in creating a divine space for worship, community, and spiritual growth",
      donateNow: "Donate Now",
      learnMore: "Learn More",
      aboutUs: "About Us",
      aboutText: "Mupkal - Arya Vysya Sangam, is dedicated to the construction of Sri Vasavi Kanyaka Parameswari Temple, a sacred place of worship and devotion for the Arya Vysya community and all devotees. The temple is being built with the generous support of devotees, well-wishers, and members of our community who share the vision of preserving our spiritual and cultural heritage. This temple will serve as a center for daily prayers, religious ceremonies, festivals, spiritual activities, and community gatherings. Beyond being a place of worship, it will strengthen our traditions, inspire future generations, and promote unity, service, and devotion. Every contribution, regardless of its size, brings us one step closer to completing this sacred mission.",
      ourMission: "Our Mission",
      missionText: "We are building a magnificent temple that will serve as a spiritual center for our community for generations to come. Your generous donations will help us create a sacred space where devotees can find peace, perform prayers, and celebrate festivals together.",
      progress: "Construction Progress",
      progressText: "We have raised ₹44,00,000 out of our ₹1,00,00,000 goal",
      contact: "Contact Us",
      features: {
        community: "Community Center",
        communityDesc: "A space for spiritual gatherings and cultural events",
        worship: "Prayer Halls",
        worshipDesc: "Multiple halls for religious ceremonies",
        education: "Learning Center",
        educationDesc: "Religious education and cultural classes for all ages"
      },
      contactDetails: {
        phone1: "+91 9490241116",
        phone2: "+91 9440534333",
        phone3: "+91 9396496375",
        email: "aryavysyasangammupkal@gmail.com",
        address: "Arya Vysya Sangam, Beside Marri Chettu Devasthanam, Mupkal - 503218"
      }
    },
    
    te: {
      slokam : "ఓం వాసవాంభాయ విద్యామహే, కుసుమపుత్ర్యై ధీమహి। తన్నో వాసవీ ప్రచోదయాత్॥",
      title: "మా పవిత్ర దేవాలయ నిర్మాణంలో సహాయం చేయండి",
      subtitle: "ఆధ్యాత్మిక వృద్ధి, సమాజ సేవ మరియు పూజల కోసం దివ్య స్థలం సృష్టించడంలో మాతో చేరండి",
      donateNow: "ఇప్పుడు దానం చేయండి",
      learnMore: "మరింత తెలుసుకోండి",
      aboutUs: "మా గురించి",
      aboutText: "ముప్కాల్ - ఆర్య వైశ్య సంఘం, ఆధ్వర్యంలో శ్రీ వాసవి కన్యకా పరమేశ్వరి అమ్మవారి ఆలయ నిర్మాణం భక్తుల సహకారంతో కొనసాగుతోంది. ఈ ఆలయం ఆర్య వైశ్య సమాజంతో పాటు అన్ని భక్తులకు ఆధ్యాత్మిక శాంతి, భక్తి మరియు సాంస్కృతిక విలువలను అందించే పవిత్ర క్షేత్రంగా రూపుదిద్దుకుంటోంది. ఈ ఆలయం నిత్య పూజలు, ఆధ్యాత్మిక కార్యక్రమాలు, పండుగల నిర్వహణ మరియు సామాజిక సేవా కార్యక్రమాలకు కేంద్రంగా నిలుస్తుంది. మన సంప్రదాయాలను పరిరక్షిస్తూ, రాబోయే తరాలకు ఆధ్యాత్మిక వారసత్వాన్ని అందించడం ఈ నిర్మాణం యొక్క ముఖ్య ఉద్దేశ్యం. భక్తులు అందించే ప్రతి విరాళం ఈ పవిత్ర కార్యాన్ని పూర్తి చేయడానికి అమూల్యమైన సహాయంగా నిలుస్తుంది.",
      ourMission: "మా లక్ష్యం",
      missionText: "మేము మా సమాజానికి తరతరాలుగా సేవ చేసే అద్భుతమైన దేవాలయాన్ని నిర్మిస్తున్నాము. మీ దాతృత్వ దానాలు భక్తులు శాంతిని పొందే, ప్రార్థనలు చేసే మరియు పండుగలను జరుపుకునే పవిత్ర స్థలాన్ని సృష్టించడంలో మాకు సహాయపడతాయి.",
      progress: "నిర్మాణ పురోగతి",
      progressText: "మా ₹1,00,00,000 లక్ష్యంలో ₹44,00,000 సేకరించాము",
      contact: "సంప్రదించండి",
      features: {
        community: "సామాజిక కేంద్రం",
        communityDesc: "ఆధ్యాత్మిక సమావేశాలు మరియు సాంస్కృతిక కార్యక్రమాలకు స్థలం",
        worship: "ప్రార్థనా మందిరాలు",
        worshipDesc: "వివిధ వేడుకలకు అనేక మందిరాలు",
        education: "అభ్యాస కేంద్రం",
        educationDesc: "అన్ని వయసుల వారికి మత విద్య మరియు సాంస్కృతిక తరగతులు"
      },
      contactDetails: {
        phone1: "+91 9490241116",
        phone2: "+91 9440534333",
        phone3: "+91 9396496375",
        email: "aryavysyasangammupkal@gmail.com",
        address: "ఆర్య వైశ్య సంగం, మర్రి చెట్టు దేవస్థానం ప్రక్కన, ముప్కాల్ - 503218"
      }
    }
  };

  const currentContent = content[language];

  // Gallery Preview Images
  const galleryPreview = [
  "/uploads/paintedtemple1.jpeg",
  "/uploads/paintedtemple2.jpeg",
  "/uploads/temple1.jpeg",
  "/uploads/temple2.jpeg",
];

  const handleDonateNow = () => {
    navigate('/donate-us');
  };

  return (
   // <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">

    <div
  className={`min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 ${
    language === "te" ? "telugu" : ""
  }`}
>

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 md:mb-8">
            <img src="/uploads/vasavi_maatha.png" alt="Arya Vysya Sangam Logo" className="h-64 md:h-80 w-auto mx-auto mb-4" />
            {/* // 40 56 */}
            <div className="text-center space-y-3 mb-6">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 md:p-6 max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-orange-900 dark:text-orange-100 mb-3 leading-relaxed">
                  "ఓం వాసవాంబాయై విద్మహే, కుసుమపుత్రిచ ధీమహి। తన్నో వాసవి ప్రచోదయాత్।।"
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-orange-900 dark:text-orange-100 mb-4 md:mb-6 leading-tight px-2">
            {currentContent.title}
          </h1>
          <p className="text-lg md:text-xl text-orange-700 dark:text-orange-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            {currentContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600 text-white px-6 md:px-8 py-3 text-base md:text-lg w-full sm:w-auto"
              onClick={handleDonateNow}
            >
            {currentContent.donateNow}
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-gray-700 px-6 md:px-8 py-3 text-base md:text-lg w-full sm:w-auto"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {currentContent.learnMore}
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6 md:mb-8">{currentContent.aboutUs}</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto px-4">
            {currentContent.aboutText}
          </p>
        </div>
      </section>

      <DonorsSection />

      {/* Progress Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{currentContent.progress}</h2>
          <div className="max-w-2xl mx-auto px-4">
            <Progress value={44} className="h-3 md:h-4 mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base">{currentContent.progressText}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4">
                <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">₹44L</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Raised</div>
              </div>
              <div className="text-center p-4">
                <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">₹1Cr</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Goal</div>
              </div>
              <div className="text-center p-4">
                <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">250+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Donors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Gallery Preview */}
<section className="py-8 bg-white dark:bg-gray-800">
  <div className="w-full">

    <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
      {galleryPreview.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden"
        >
          <img
            src={image}
            alt={`Temple ${index + 1}`}
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Contact Section */}
      <section className="py-8 md:py-5 px-4 bg-gradient-to-r from-orange-900 to-amber-900 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">{currentContent.contact}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-5">
              <div className="flex flex-col items-center text-center p-2">
                <Phone className="h-5 w-5 md:h-6 md:w-6 mb-2" />
                <h3 className="font-semibold mb-1 text-sm md:text-base">Phone</h3>
                <p className="text-sm md:text-base leading-5">{currentContent.contactDetails.phone1}</p>
                <p className="text-sm md:text-base leading-5">{currentContent.contactDetails.phone2}</p>
                <p className="text-sm md:text-base leading-5">{currentContent.contactDetails.phone3}</p>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <Mail className="h-5 w-5 md:h-6 md:w-6 mb-2" />
                <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                <p className="text-sm md:text-base break-all">{currentContent.contactDetails.email}</p>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 mb-2" />
                <h3 className="font-semibold mb-1 text-sm md:text-base">Address</h3>
                <p className="text-xs md:text-sm">{currentContent.contactDetails.address}</p>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.301902631402!2d78.36248857884414!3d18.911318446117857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd95006702cbfd%3A0x7c360ae38c9c154!2sVasavi%20Maatha%20Temple!5e0!3m2!1sen!2sin!4v1784219437180!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vasavi Maatha Temple Location"
                ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
