import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import ProjectDialog from '@/components/ProjectDialog';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenProjectDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseProjectDialog = () => {
    setIsDialogOpen(false);
  };
  const projects: Project[] = [
    {
      title: 'AI-Powered-Real-Time-Team-Task-Manager',
      description: 'AI-Powered Real-Time Task Manager React, Node.js, MongoDB, Socket.io, Gemini API — Real-time team collaboration, smart task suggestions, and drag-and-drop UI',
      image: '/AI-Powered Real-Time Task Manager.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/chandanbag1999/AI-Powered-Real-Time-Team-Task-Manager',
      demo: 'https://demo.example.com',
      featured: true,
    },
    {
      title: 'Time4Meds — Smart Medicine Reminder App',
      description: 'A full-stack medicine reminder application built with React, Node.js, and MongoDB. Features include secure user authentication, customizable medication schedules, timely push/email reminders, medication history tracking, and responsive UI built with Tailwind CSS.',
      image: 'https://images.pexels.com/photos/576831/pexels-photo-576831.jpeg?_gl=1*1sh9eex*_ga*MzE3NTQzNzY1LjE3NTI2ODYzNjI.*_ga_8JE65Q40S6*czE3NTI2ODYzNjIkbzEkZzEkdDE3NTI2ODYzOTMkajI5JGwwJGgw',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/chandanbag1999/Time4Meds',
      demo: 'https://demo.example.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive charts, and historical data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'D3.js', 'Weather API'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      featured: false,
    },
    {
      title: 'Time4Meds — Smart Medicine Reminder App',
      description: 'A full-stack medicine reminder application built with React, Node.js, and MongoDB. Features include secure user authentication, customizable medication schedules, timely push/email reminders, medication history tracking, and responsive UI built with Tailwind CSS.',
      image: 'https://images.pexels.com/photos/576831/pexels-photo-576831.jpeg?_gl=1*1sh9eex*_ga*MzE3NTQzNzY1LjE3NTI2ODYzNjI.*_ga_8JE65Q40S6*czE3NTI2ODYzNjIkbzEkZzEkdDE3NTI2ODYzOTMkajI5JGwwJGgw',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/chandanbag1999/Time4Meds',
      demo: 'https://demo.example.com',
      featured: false,
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary/10 text-primary rounded-full text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 glass-effect backdrop-blur-sm">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-scale-down bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                    style={{ padding: '12px' }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn"
                    onClick={() => handleOpenProjectDialog(project)}
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent"
          >
            Other Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 glass-card border-none">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 md:h-56 object-scale-down bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                    style={{ padding: '12px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="pb-3">
                    <h4 className="text-lg sm:text-xl font-semibold leading-tight">{project.title}</h4>
                  </CardHeader>
                  <CardContent className="flex-1 pb-4">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs sm:text-sm px-2 py-1">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs sm:text-sm px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3 pb-3">
                    <Button size="sm" variant="outline" className="flex-1 glass-effect" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 hero-primary-btn" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                  <CardFooter className="pt-0">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="w-full hover:bg-primary/10 transition-all duration-300"
                      onClick={() => handleOpenProjectDialog(project)}
                    >
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <Button size="lg" variant="outline" className="hero-secondary-btn glass-effect" asChild>
            <a href="https://github.com/chandanbag1999" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <Github className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseProjectDialog} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Projects;