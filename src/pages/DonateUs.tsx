import { useState } from "react";
import {
  Banknote,
  Copy,
  CheckCircle,
  HandCoins,
  QrCode,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const DonateUs = () => {
  const { language } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const content = {
    en: {
      title: "Support Our Temple Construction",
      subtitle:
        "Your generous donations help us build a sacred space for future generations",

      bankDetails: "Bank Account Details",
      accountName: "Arya Vysya Sangam",
      accountNumber: "79104164115",
      ifscCode: "TGRB0000222",
      bankName: "Telangana Grameena Bank",
      branch: "Mupkal",

      onlineDonation: "Online Donation Options",
      upiTitle: "Donate Through UPI",
      upiId: "aryavayshyasangam@oktgb",
      scanQr: "Scan the QR code using any UPI application",
      copy: "Copy",
      copied: "Copied!",
      contactForDonation:
        "For any queries regarding donations, please contact us at +91 9490241116",
    },

    te: {
      title: "మా దేవాలయ నిర్మాణానికి మద్దతు ఇవ్వండి",
      subtitle:
        "మీ దాతృత్వ దానాలు భవిష్యత్ తరాలకు పవిత్ర స్థలాన్ని నిర్మించడంలో మాకు సహాయపడతాయి",

      bankDetails: "బ్యాంక్ ఖాతా వివరాలు",
      accountName: "Arya Vysya Sangam",
      accountNumber: "79104164115",
      ifscCode: "TGRB0000222",
      bankName: "Telangana Grameena Bank",
      branch: "Mupkal",

      onlineDonation: "ఆన్‌లైన్ విరాళం ఎంపికలు",
      upiTitle: "UPI ద్వారా విరాళం ఇవ్వండి",
      upiId: "aryavayshyasangam@oktgb",
      scanQr: "ఏదైనా UPI యాప్ ఉపయోగించి QR కోడ్‌ను స్కాన్ చేయండి",
      copy: "కాపీ చేయండి",
      copied: "కాపీ అయింది!",
      contactForDonation:
        "విరాళాలకు సంబంధించిన ఏవైనా ప్రశ్నలు ఉంటే, దయచేసి మా నం. +91 9490241116 వద్ద సంప్రదించండి",
    },
  };

  const currentContent = content[language];

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedField(field);

      toast({
        title: currentContent.copied,
        description:
          `${field} ${
            language === "en"
              ? "copied to clipboard"
              : "క్లిప్‌బోర్డ్‌కు కాపీ అయింది"
          }`,
      });

      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      toast({
        title: language === "en" ? "Copy failed" : "కాపీ విఫలమైంది",
        description:
          language === "en"
            ? "Please copy the details manually."
            : "దయచేసి వివరాలను మాన్యువల్‌గా కాపీ చేయండి.",
      });
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 ${
        language === "te" ? "telugu" : ""
      }`}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-16">

        {/* Page Heading */}
        <div className="text-center mb-12">

          {/* Donation Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="/uploads/donate-lightbg.png"
              alt="Donate"
              className="block dark:hidden h-28 md:h-36 w-auto"
            />

            <img
              src="/uploads/donate-page.png"
              alt="Donate"
              className="hidden dark:block h-28 md:h-36 w-auto"
            />
          </div>

          <h1 className="text-4xl font-bold text-orange-900 dark:text-orange-100 mb-4">
            {currentContent.title}
          </h1>

          <p className="text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Bank Details Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-700">

            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-orange-800 dark:text-orange-200 flex items-center justify-center gap-2">
                <Banknote className="h-6 w-6" />
                {currentContent.bankDetails}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                {/* Left Column */}
                <div className="space-y-4">

                  {/* Account Name */}
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        Account Name:
                      </p>
                      <p className="text-gray-900 dark:text-gray-100 break-words">
                        {currentContent.accountName}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          currentContent.accountName,
                          "Account Name"
                        )
                      }
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "Account Name" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* Account Number */}
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg gap-3">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        Account Number:
                      </p>
                      <p className="text-gray-900 dark:text-gray-100">
                        {currentContent.accountNumber}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          currentContent.accountNumber,
                          "Account Number"
                        )
                      }
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "Account Number" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* IFSC Code */}
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg gap-3">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        IFSC Code:
                      </p>
                      <p className="text-gray-900 dark:text-gray-100">
                        {currentContent.ifscCode}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          currentContent.ifscCode,
                          "IFSC Code"
                        )
                      }
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "IFSC Code" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">

                  <div className="p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      Bank Name:
                    </p>
                    <p className="text-gray-900 dark:text-gray-100">
                      {currentContent.bankName}
                    </p>
                  </div>

                  <div className="p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      Branch:
                    </p>
                    <p className="text-gray-900 dark:text-gray-100">
                      {currentContent.branch}
                    </p>
                  </div>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* UPI Donation Section */}
        <div className="max-w-4xl mx-auto mb-10">

          <Card className="bg-white dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-700 overflow-hidden">

            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-orange-800 dark:text-orange-200 flex items-center justify-center gap-2">
                <HandCoins className="h-6 w-6" />
                {currentContent.onlineDonation}
              </CardTitle>
            </CardHeader>

            <CardContent>

              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* UPI Details */}
                <div className="flex flex-col items-center text-center space-y-5">

                  <div className="p-4 bg-orange-50 dark:bg-gray-700 rounded-full">
                    <QrCode className="h-10 w-10 text-orange-600 dark:text-orange-300" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentContent.upiTitle}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {currentContent.scanQr}
                  </p>

                  {/* UPI ID */}
                  <div className="w-full p-4 bg-orange-50 dark:bg-gray-700 rounded-lg">

                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                      UPI ID
                    </p>

                    <div className="flex items-center justify-center gap-2 flex-wrap">

                      <p className="font-bold text-orange-800 dark:text-orange-200 break-all">
                        {currentContent.upiId}
                      </p>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            currentContent.upiId,
                            "UPI ID"
                          )
                        }
                        className="dark:border-gray-500 dark:text-gray-200"
                      >
                        {copiedField === "UPI ID" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}

                        <span className="ml-2">
                          {copiedField === "UPI ID"
                            ? currentContent.copied
                            : currentContent.copy}
                        </span>
                      </Button>

                    </div>
                  </div>

                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center">

                  <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
                    <img
                      src="/uploads/donation-qr.png"
                      alt="Arya Vysya Sangam UPI Donation QR Code"
                      className="w-full max-w-[260px] h-auto object-contain"
                    />
                  </div>

                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
                    {currentContent.scanQr}
                  </p>

                </div>

              </div>

            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {currentContent.contactForDonation}
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default DonateUs;