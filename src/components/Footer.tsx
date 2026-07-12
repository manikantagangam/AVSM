import { Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 md:py-8 px-4">
      <div className="container mx-auto text-center">
        {/* <div className="flex items-center justify-center space-x-2 mb-4">
          <Building className="h-5 w-5 md:h-6 md:w-6 text-orange-400" />
          <span className="text-base md:text-lg font-semibold">
            Arya Vysya Sangam - Mupkal
          </span>
        </div> */}

        <p className="text-gray-400 text-xs md:text-sm px-4">
          © {new Date().getFullYear()} Arya Vysya Sangam - Mupkal. All rights reserved.
        </p>

        <p className="mt-3 text-xs md:text-sm text-gray-500">
          Designed &amp; Developed by{" "}
          <a
            href="https://manikantagangam.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 hover:underline transition-colors"
          >
            Manikanta Gangam
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;