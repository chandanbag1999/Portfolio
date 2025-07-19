import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Using Formspree to send real emails to your Gmail
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('_replyto', data.email);
      formData.append('_subject', `Portfolio Contact: ${data.subject}`);
      
      // Formspree endpoint - Replace 'xpznvlqr' with your actual Formspree form ID
      // Get your form ID from https://formspree.io after creating an account
      const response = await fetch('https://formspree.io/f/xovlvrwl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setIsSubmitted(true);
        reset();
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact me directly at cbag67612@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cbag67612@gmail.com',
      href: 'mailto:cbag67612@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7001776875',
      href: 'tel:+917001776875',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kolkata - 700121, West Bengal, India',
      href: 'Kolkata - 700121, West Bengal, India',
    },
  ];

  return (
<<<<<<< HEAD
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted/30 dark:bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
=======
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
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
          <span className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary/10 text-primary rounded-full text-sm sm:text-base md:text-lg font-medium mb-6 sm:mb-8 glass-effect backdrop-blur-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-blue-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Have an idea or a project you'd like to build? I specialize in backend and full-stack development — let's discuss how we can bring your vision to reality with scalable, production-ready solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
=======
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className="space-y-6 sm:space-y-8 md:space-y-10"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border-none">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Let's Connect</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm always open to meaningful opportunities and impactful collaborations. Whether you're a company in need of a backend or full-stack developer, or a fellow developer with an exciting idea — feel free to reach out and let's build something great together.
=======
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Connect</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, don't hesitate to reach out.
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 sm:p-6 md:p-8 rounded-xl border-none hover:shadow-lg transition-all duration-300 group"
                >
<<<<<<< HEAD
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
=======
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="p-2 sm:p-3 bg-primary/10 rounded-lg shrink-0">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold">{info.title}</h4>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base text-muted-foreground">{info.value}</p>
                          )}
                        </div>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg md:text-xl">{info.title}</h4>
                      {info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? (
                        <a
                          href={info.href}
                          className="text-sm sm:text-base md:text-lg text-muted-foreground hover:text-primary transition-colors duration-300 break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-primary/5 rounded-lg border border-primary/10"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">Quick Response</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
<<<<<<< HEAD
            <Card className="glass-card border-none shadow-xl dark:shadow-2xl">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Send Message</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm sm:text-base font-medium">Name</Label>
=======
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">Name</Label>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Your name"
<<<<<<< HEAD
                        className={`mt-2 h-10 sm:h-12 text-sm sm:text-base glass-effect ${errors.name ? 'border-destructive' : 'border-border/50 dark:border-border/30'}`}
=======
                        className={`mt-1 ${errors.name ? 'border-destructive' : ''}`}
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                      />
                      {errors.name && (
                        <p className="text-xs sm:text-sm text-destructive mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
<<<<<<< HEAD
                      <Label htmlFor="email" className="text-sm sm:text-base font-medium">Email</Label>
=======
                      <Label htmlFor="email" className="text-sm">Email</Label>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="your@email.com"
<<<<<<< HEAD
                        className={`mt-2 h-10 sm:h-12 text-sm sm:text-base glass-effect ${errors.email ? 'border-destructive' : 'border-border/50 dark:border-border/30'}`}
=======
                        className={`mt-1 ${errors.email ? 'border-destructive' : ''}`}
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                      />
                      {errors.email && (
                        <p className="text-xs sm:text-sm text-destructive mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
<<<<<<< HEAD
                    <Label htmlFor="subject" className="text-sm sm:text-base font-medium">Subject</Label>
=======
                    <Label htmlFor="subject" className="text-sm">Subject</Label>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="Project discussion"
<<<<<<< HEAD
                      className={`mt-2 h-10 sm:h-12 text-sm sm:text-base glass-effect ${errors.subject ? 'border-destructive' : 'border-border/50 dark:border-border/30'}`}
=======
                      className={`mt-1 ${errors.subject ? 'border-destructive' : ''}`}
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                    />
                    {errors.subject && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
<<<<<<< HEAD
                    <Label htmlFor="message" className="text-sm sm:text-base font-medium">Message</Label>
=======
                    <Label htmlFor="message" className="text-sm">Message</Label>
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell me about your project..."
<<<<<<< HEAD
                      className={`mt-2 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] text-sm sm:text-base glass-effect resize-none ${errors.message ? 'border-destructive' : 'border-border/50 dark:border-border/30'}`}
=======
                      className={`mt-1 min-h-[100px] sm:min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                    />
                    {errors.message && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
<<<<<<< HEAD
                    className="w-full hero-primary-btn glass-effect h-12 sm:h-14 text-base sm:text-lg md:text-xl font-semibold"
=======
                    className="w-full text-sm sm:text-base"
>>>>>>> 0a90cfcb86bf526d45d041efaa0b7ead9cecc52d
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;