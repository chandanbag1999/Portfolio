import { motion } from 'framer-motion';
import { Download, Award, Coffee, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary/10 text-primary rounded-full text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 glass-effect backdrop-blur-sm">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Crafting Real-World Solutions with Code and Design
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Building intuitive web apps that blend clean design, real-time functionality, and backend power.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 glass-card p-2 shadow-xl">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top rounded-xl"
                  style={{ objectPosition: '50% 15%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent opacity-60 rounded-xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg glass-effect">
                <Code className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg glass-effect">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Hello! I'm <span className="text-primary">Chandan</span>, a backend-focused full-stack developer who builds modern web apps that are clean, responsive, and real-world ready.
            </h3>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed glass-card p-6 sm:p-8 md:p-10 rounded-2xl">
              <p>
                I specialize in building full-stack applications using modern tools like React, Node.js, TypeScript, and Socket.io, focusing on performance, maintainability, and scalability. Whether it's real-time collaboration or seamless UI, I aim to deliver solutions that work beautifully — inside and out.
              </p>
              <p>
                I'm passionate about solving real problems through clean code and thoughtful design. When I'm not coding, you'll find me exploring new technologies, improving my projects, or contributing to open-source communities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="glass-card border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 md:p-8 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <Button asChild className="hero-primary-btn group glass-effect hover:shadow-lg transition-all w-full sm:w-auto">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="hero-secondary-btn group glass-effect hover:shadow-lg transition-all w-full sm:w-auto">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <span className="mr-3 text-lg">👁️</span>
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;