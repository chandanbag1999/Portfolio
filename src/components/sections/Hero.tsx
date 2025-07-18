import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 -left-8 sm:-left-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-violet-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 -right-8 sm:-right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-16 left-4 sm:left-10 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 sm:right-5 md:right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-5 py-2.5 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-primary/10 text-primary rounded-full text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6 md:mb-8 border border-primary/20 glass-effect backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block">
              Chandan Bag
            </span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-10 md:mb-12 font-light flex justify-center items-center h-10 sm:h-12 md:h-14 lg:h-16"
          >
            <span className="typewriter-wrapper">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'UI/UX Designer',
                    'React Specialist',
                    'Node.js Expert'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor"
                }}
              />
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8"
          >
            Backend-focused full-stack developer crafting robust, real-time web apps using modern tools like React, Node.js, and Socket.io — with clean code, smart design, and a problem-solving mindset.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 w-full px-4 sm:px-6 md:px-0">
            <Button 
              size="lg" 
              className="hero-primary-btn group glass-effect w-full sm:w-auto text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 min-w-[200px] sm:min-w-[220px] md:min-w-[250px]"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hero-secondary-btn glass-effect w-full sm:w-auto text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 min-w-[200px] sm:min-w-[220px] md:min-w-[250px]"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 sm:space-x-8 md:space-x-10">
            <motion.a
              href="https://github.com/chandanbag1999?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn p-3 sm:p-4 md:p-5 rounded-xl"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/cbag-98/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn p-3 sm:p-4 md:p-5 rounded-xl"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </motion.a>
            <motion.a
              href="mailto:cbag67612@gmail.com"
              className="social-icon-btn p-3 sm:p-4 md:p-5 rounded-xl"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToAbout}
        whileHover={{ y: 8, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center glass-effect px-4 py-3 rounded-2xl border border-border/30">
          <span className="text-sm sm:text-base md:text-lg text-muted-foreground mb-2 sm:mb-3 font-medium">Scroll Down</span>
          <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;