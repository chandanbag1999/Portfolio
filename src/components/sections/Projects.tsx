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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            My Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
                    className="w-full h-48 sm:h-56 lg:h-64 object-scale-down bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                    style={{ padding: '12px' }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-4 px-4">
                    <Button size="sm" variant="secondary" asChild className="text-xs sm:text-sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="text-xs sm:text-sm">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold line-clamp-2">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs shrink-0 ml-2">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn text-sm"
                    onClick={() => handleOpenProjectDialog(project)}
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
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
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center px-4 sm:px-0"
          >
            Other Projects
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 lg:h-52 object-scale-down bg-gray-100 transition-transform duration-300 group-hover:scale-102"
                    style={{ padding: '12px' }}
                    />
                  </div>
                  <CardHeader>
                    <h4 className="text-base sm:text-lg font-semibold line-clamp-2">{project.title}</h4>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs sm:text-sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 text-xs sm:text-sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                  <CardFooter className="pt-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="w-full text-xs sm:text-sm"
                      onClick={() => handleOpenProjectDialog(project)}
                    >
                      View Project Details
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
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
          className="text-center mt-8 sm:mt-12"
        >
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <a href="https://github.com/chandanbag1999" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <Github className="ml-2 h-4 w-4" />
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