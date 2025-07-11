
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Globe, Home, Camera, Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (savedDarkMode === 'false') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const content = {
    en: {
      home: "Home",
      gallery: "Gallery",
      donateUs: "Donate Us",
      switchLanguage: "తెలుగు",
      logoText: "Arya Vysya Sangam - Mupkal"
    },
    te: {
      home: "హోమ్",
      gallery: "గ్యాలరీ",
      donateUs: "దానం చేయండి",
      switchLanguage: "English",
      logoText: "ఆర్య వైశ్య సంగం - ముప్కాల్"
    }
  };

  const currentContent = content[language];

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 flex-1 min-w-0">
          <img src="/lovable-uploads/db5a578d-e0cd-4b68-a94b-71e87ebae12b.png" alt="Arya Vysya Sangam Logo" className="h-10 w-auto flex-shrink-0" />
          <span className="text-sm md:text-base font-bold text-orange-800 dark:text-orange-300 truncate">{currentContent.logoText}</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm ${
              isActive('/') ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>{currentContent.home}</span>
          </Link>
          <Link 
            to="/gallery" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm ${
              isActive('/gallery') ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
            }`}
          >
            <Camera className="h-4 w-4" />
            <span>{currentContent.gallery}</span>
          </Link>
          <Link 
            to="/donate-us" 
            className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors text-sm ${
              isActive('/donate-us') ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
            }`}
          >
            <span>🙏</span>
            <span>{currentContent.donateUs}</span>
          </Link>
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            <Switch
              checked={isDark}
              onCheckedChange={toggleDarkMode}
              className="data-[state=checked]:bg-orange-600"
            />
            <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
            className="flex items-center space-x-1 text-xs dark:border-gray-600 dark:text-gray-300"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{currentContent.switchLanguage}</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/') ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>{currentContent.home}</span>
            </Link>
            <Link 
              to="/gallery" 
              onClick={closeMobileMenu}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/gallery') ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
            >
              <Camera className="h-5 w-5" />
              <span>{currentContent.gallery}</span>
            </Link>
            <Link 
              to="/donate-us" 
              onClick={closeMobileMenu}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/donate-us') ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
            >
              <span>🙏</span>
              <span>{currentContent.donateUs}</span>
            </Link>
            
            {/* Mobile Controls */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <Switch
                    checked={isDark}
                    onCheckedChange={toggleDarkMode}
                    className="data-[state=checked]:bg-orange-600"
                  />
                  <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
                className="w-full flex items-center justify-center space-x-2 dark:border-gray-600 dark:text-gray-300"
              >
                <Globe className="h-4 w-4" />
                <span>{currentContent.switchLanguage}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
