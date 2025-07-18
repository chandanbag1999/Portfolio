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
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-5">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-button glass-effect text-sm lg:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle-btn ml-2 sm:ml-3 lg:ml-4 glass-effect flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <div className="sun-icon absolute inset-0 flex items-center justify-center">
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="moon-icon absolute inset-0 flex items-center justify-center">
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle-btn glass-effect flex items-center justify-center w-9 h-9"
              aria-label="Toggle theme"
            >
              <div className="sun-icon absolute inset-0 flex items-center justify-center">
                <Sun className="h-4 w-4" />
              </div>
              <div className="moon-icon absolute inset-0 flex items-center justify-center">
                <Moon className="h-4 w-4" />
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-0 rounded-full flex items-center justify-center w-9 h-9 border border-border/30"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="fixed inset-x-0 top-[56px] sm:top-[64px] z-50 p-4 sm:p-6 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="nav-button glass-effect w-full text-left px-4 py-3 flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="h-4 w-4 opacity-70" />
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;