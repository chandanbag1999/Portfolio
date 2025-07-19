import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Code, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/70 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
<<<<<<< HEAD
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 text-primary" />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent">
=======
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-1 sm:space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
=======
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
<<<<<<< HEAD
                className="nav-button glass-effect text-sm lg:text-base xl:text-lg px-4 py-2 lg:px-5 lg:py-2.5"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ y: 0, scale: 0.95 }}
=======
                className="nav-button glass-effect text-sm xl:text-base px-3 xl:px-4 py-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
<<<<<<< HEAD
              className="theme-toggle-btn ml-3 lg:ml-4 xl:ml-6 glass-effect flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12"
              aria-label="Toggle theme"
            >
              <div className="sun-icon absolute inset-0 flex items-center justify-center">
                <Sun className="h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="moon-icon absolute inset-0 flex items-center justify-center">
                <Moon className="h-5 w-5 lg:h-6 lg:w-6" />
=======
              className="theme-toggle-btn ml-2 xl:ml-4 glass-effect w-9 h-9 xl:w-10 xl:h-10"
              aria-label="Toggle theme"
            >
              <div className="sun-icon">
                <Sun className="h-4 w-4 xl:h-5 xl:w-5" />
              </div>
              <div className="moon-icon">
                <Moon className="h-4 w-4 xl:h-5 xl:w-5" />
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
          <div className="flex items-center space-x-3 sm:space-x-4 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle-btn glass-effect flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11"
              aria-label="Toggle theme"
            >
              <div className="sun-icon absolute inset-0 flex items-center justify-center">
                <Sun className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="moon-icon absolute inset-0 flex items-center justify-center">
                <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
=======
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle-btn glass-effect w-9 h-9"
              aria-label="Toggle theme"
            >
              <div className="sun-icon">
                <Sun className="h-4 w-4" />
              </div>
              <div className="moon-icon">
                <Moon className="h-4 w-4" />
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
<<<<<<< HEAD
              className="glass-effect rounded-lg flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 border border-border/30 hover:border-primary/50 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 sm:h-7 sm:w-7" />
                ) : (
                  <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                )}
              </motion.div>
            </button>
=======
              className="bg-background/50 hover:bg-primary hover:text-primary-foreground border-border/50 backdrop-blur-lg w-9 h-9"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
<<<<<<< HEAD
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="fixed inset-x-0 top-[64px] sm:top-[72px] z-50 mx-4 mt-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden"
                initial={{ y: -30, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -30, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="p-6">
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="nav-button glass-effect w-full text-left px-5 py-4 flex items-center justify-between text-base font-medium rounded-xl hover:bg-primary/10 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-foreground">{item.name}</span>
                        <ChevronRight className="h-5 w-5 opacity-60 text-primary" />
                      </motion.button>
                    ))}
                  </nav>
                </div>
              </motion.div>
=======
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-3 pt-3 pb-4 space-y-3 bg-background/90 backdrop-blur-lg border-t border-border/50 rounded-b-xl">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="nav-button w-full text-left glass-effect text-base py-3 px-4"
                    whileHover={{ x: 8 }}
                    whileTap={{ x: 0 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;