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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 sm:top-40 -left-10 sm:-left-20 w-40 h-40 sm:w-72 sm:h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 sm:bottom-40 -right-10 sm:-right-20 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 glass-effect">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent px-4 sm:px-0">
            Crafting Real-World Solutions with Code and Design
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Building intuitive web apps that blend clean design, real-time functionality, and backend power.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 glass-card p-2 shadow-xl max-w-sm mx-auto lg:max-w-none">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top rounded-xl"
                  style={{ objectPosition: '50% 15%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent opacity-60 rounded-xl"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg glass-effect">
                <Code className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
              </div>
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg glass-effect">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              Hello! I'm <span className="text-primary">Chandan</span>, a backend-focused full-stack developer who builds modern web apps that are clean, responsive, and real-world ready.
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed glass-card p-4 sm:p-6">
              <p>
                I specialize in building full-stack applications using modern tools like React, Node.js, TypeScript, and Socket.io, focusing on performance, maintainability, and scalability. Whether it's real-time collaboration or seamless UI, I aim to deliver solutions that work beautifully — inside and out.
              </p>
              <p>
                I'm passionate about solving real problems through clean code and thoughtful design. When I'm not coding, you'll find me exploring new technologies, improving my projects, or contributing to open-source communities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="glass-card border-none shadow-lg overflow-hidden">
                    <CardContent className="p-3 sm:p-4 text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild className="hero-primary-btn group glass-effect hover:shadow-lg transition-all">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="group glass-effect hover:shadow-lg transition-all">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">👁️</span>
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