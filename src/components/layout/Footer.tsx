import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/chandanbag1999?tab=repositories', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/cbag-98/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:cbag67612@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50 dark:bg-muted/20 dark:border-border/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Code className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-primary" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
              Passionate about creating beautiful, functional, and user-centered 
              digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold mb-4 sm:mb-6 text-foreground text-lg sm:text-xl md:text-2xl">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto md:mx-0">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="nav-button text-center md:text-left justify-center md:justify-start glass-effect text-sm sm:text-base hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ x: 0, scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold mb-4 sm:mb-6 text-foreground text-lg sm:text-xl md:text-2xl">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-4 sm:mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-secondary/80 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 border border-border/50 glass-effect backdrop-blur-sm dark:bg-secondary/60 dark:hover:bg-primary dark:border-border/30"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <link.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs sm:max-w-sm mx-auto md:mx-0">
              Open to new opportunities and collaborations
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 md:pt-12 border-t border-border/50 dark:border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
        >
          <p className="text-sm sm:text-base text-muted-foreground flex items-center order-2 md:order-1">
            Made with <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mx-1 sm:mx-2 animate-pulse" /> by Chandan Bag
          </p>
          <p className="text-sm sm:text-base text-muted-foreground order-1 md:order-2">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;