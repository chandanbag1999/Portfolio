import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
  } | null;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl pr-8">{project.title}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 sm:my-6">
          <div className="rounded-lg overflow-hidden mb-4 sm:mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto max-h-[250px] sm:max-h-[400px] object-scale-down bg-gray-100 p-2 sm:p-4" 
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs sm:text-sm">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 order-2 sm:order-1">
            <Button asChild className="w-full sm:w-auto">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          </div>
          <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto order-1 sm:order-2">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;