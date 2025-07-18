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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-violet-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-4 sm:left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-2 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-3000"></div>
      </div>

      <div className="container mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto pt-16 sm:pt-20 lg:pt-0"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 border border-primary/20 glass-effect">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Chandan Bag
            </span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light flex justify-center items-center h-8 sm:h-10"
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
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Backend-focused full-stack developer crafting robust, real-time web apps using modern tools like React, Node.js, and Socket.io — with clean code, smart design, and a problem-solving mindset.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Button 
              size="lg"
              className="hero-primary-btn group glass-effect w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hero-secondary-btn glass-effect w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-4 sm:space-x-6">
            <motion.a
              href="https://github.com/chandanbag1999?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn p-2 sm:p-3"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/cbag-98/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn p-2 sm:p-3"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="mailto:cbag67612@gmail.com"
              className="social-icon-btn p-2 sm:p-3"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default Hero;