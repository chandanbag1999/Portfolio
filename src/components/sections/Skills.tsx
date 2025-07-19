import { motion } from 'framer-motion';
import { Code, Palette, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    // {
    //   title: 'Mobile Development',
    //   icon: Smartphone,
    //   skills: [
    //     { name: 'React Native', level: 85 },
    //     { name: 'Flutter', level: 75 },
    //     { name: 'iOS/Swift', level: 70 },
    //     { name: 'Android/Kotlin', level: 72 },
    //   ],
    // },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 75 },
      ],
    },
  ];

  return (
<<<<<<< HEAD
    <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted/30 dark:bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
=======
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6 md:mb-8 glass-effect backdrop-blur-sm border border-primary/20 dark:border-primary/30"
          >
            My Skills
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent"
          >
            What I Bring to the Table
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground dark:text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed"
          >
=======
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            My Skills
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            What I Bring to the Table
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
            A comprehensive skill set spanning modern web technologies and design principles
          </motion.p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 justify-items-center max-w-7xl mx-auto">
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group w-full max-w-sm mx-auto"
            >
<<<<<<< HEAD
              <Card className="h-full w-full glass-effect backdrop-blur-sm border-border/50 dark:border-border/30 bg-card/50 dark:bg-card/30 hover:bg-card/70 dark:hover:bg-card/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 md:p-5 bg-primary/10 dark:bg-primary/20 rounded-lg sm:rounded-xl w-fit glass-effect backdrop-blur-sm border border-primary/20 dark:border-primary/30"
                  >
                    <category.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 text-primary dark:text-primary" />
                  </motion.div>
                  <CardTitle className="text-base sm:text-lg md:text-xl font-semibold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 md:space-y-5 pt-0">
=======
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-primary/10 rounded-lg w-fit">
                    <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      className="group/skill"
                    >
<<<<<<< HEAD
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <span className="text-sm sm:text-base md:text-lg font-medium text-foreground dark:text-foreground group-hover/skill:text-primary dark:group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base text-muted-foreground dark:text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 sm:h-2.5 md:h-3 bg-muted/50 dark:bg-muted/30" 
                      />
=======
                      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-1.5 sm:h-2" />
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="text-center"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent"
          >
            Technologies I Love Working With
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
=======
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 px-4 sm:px-0">Technologies I Love Working With</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-0">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
            {[
              'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Python', 'Vue.js'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 glass-effect backdrop-blur-sm bg-secondary/50 dark:bg-secondary/30 hover:bg-secondary/70 dark:hover:bg-secondary/50 text-secondary-foreground dark:text-secondary-foreground border border-border/50 dark:border-border/30 hover:border-primary/50 dark:hover:border-primary/40 rounded-full text-sm sm:text-base md:text-lg font-medium cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20"
=======
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium cursor-default"
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;