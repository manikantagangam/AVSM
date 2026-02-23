
import { useState } from "react";
import { Building, CreditCard, Banknote, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const DonateUs = () => {
  const { language } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const content = {
    en: {
      title: "Support Our Temple Construction",
      subtitle: "Your generous donations help us build a sacred space for future generations",
      bankDetails: "Bank Account Details",
      accountName: "Arya Vysya Sangam",
      accountNumber: "79104164115",
      ifscCode: "TGRB0000222",
      bankName: "Telangana Grameena Bank",
      branch: "Mupkal",
      upiId: "@kotak",
      onlineDonation: "Online Donation Options",
      copy: "Copy",
      copied: "Copied!",
      contactForDonation: "For any queries regarding donations, please contact us at +91 9490241116"
    },
    te: {
      title: "మా దేవాలయ నిర్మాణానికి మద్దతు ఇవ్వండి",
      subtitle: "మీ దాతృత్వ దానాలు భవిష్యత్ తరాలకు పవిత్ర స్థలాన్ని నిర్మించడంలో మాకు సహాయపడతాయి",
      bankDetails: "బ్యాంక్ ఖాతా వివరాలు",
      accountName: "Arya Vysya Sangam",
      accountNumber: "79104164115",
      ifscCode: "TGRB0000222",
      bankName: "Telangana Grameena Bank",
      branch: "Mupkal",
      upiId: "@kotak",
      onlineDonation: "ఆన్‌లైన్ దానం ఎంపికలు",
      copy: "కాపీ చేయండి",
      copied: "కాపీ అయింది!",
      contactForDonation: "దానాలకు సంబంధించిన ఏవైనా ప్రశ్నలకు, దయచేసి మాను +91 9490241116 వద్ద సంప్రదించండి"
    }
  };

  const currentContent = content[language];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: currentContent.copied,
      description: `${field} ${language === 'en' ? 'copied to clipboard' : 'క్లిప్‌బోర్డ్‌కు కాపీ అయింది'}`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🙏</div>
          <h1 className="text-4xl font-bold text-orange-900 dark:text-orange-100 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">{currentContent.subtitle}</p>
        </div>

        {/* Bank Details Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-orange-800 dark:text-orange-200 flex items-center justify-center gap-2">
                <Banknote className="h-6 w-6" />
                {currentContent.bankDetails}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">Account Name:</p>
                      <p className="text-gray-900 dark:text-gray-100">{currentContent.accountName}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(currentContent.accountName, "Account Name")}
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "Account Name" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">Account Number:</p>
                      <p className="text-gray-900 dark:text-gray-100">{currentContent.accountNumber}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(currentContent.accountNumber, "Account Number")}
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "Account Number" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">IFSC Code:</p>
                      <p className="text-gray-900 dark:text-gray-100">{currentContent.ifscCode}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(currentContent.ifscCode, "IFSC Code")}
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "IFSC Code" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">Bank Name:</p>
                    <p className="text-gray-900 dark:text-gray-100">{currentContent.bankName}</p>
                  </div>

                  <div className="p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">Branch:</p>
                    <p className="text-gray-900 dark:text-gray-100">{currentContent.branch}</p>
                  </div>

                  {/* <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">UPI ID:</p>
                      <p className="text-gray-900 dark:text-gray-100">{currentContent.upiId}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(currentContent.upiId, "UPI ID")}
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedField === "UPI ID" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300">{currentContent.contactForDonation}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building className="h-6 w-6 text-orange-400" />
            <span className="text-lg font-semibold">Arya Vysya Sangam - Mupkal</span>
          </div>
          <p className="text-gray-400">
            © 2025 Arya Vysya Sangam - Mupkal. All rights reserved. Built with devotion and community support.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DonateUs;
