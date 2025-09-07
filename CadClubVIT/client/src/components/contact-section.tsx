import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      content: "VIT Chennai Campus\nKelambakkam - Vandalur Rd\nChennai, Tamil Nadu 600127"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "cadclub@vit.ac.in\ninfo.cadclub@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+91 9876543210\n+91 8765432109"
    },
    {
      icon: "fas fa-clock",
      title: "Meeting Hours",
      content: "Monday - Friday: 4:00 PM - 6:00 PM\nSaturday: 2:00 PM - 5:00 PM"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
    { icon: "fab fa-discord", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-cad-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-cad-secondary mx-auto mb-8"></div>
          <p className="text-xl text-cad-light-gray max-w-3xl mx-auto">
            Ready to join our community of innovators? Let's connect and start building the future together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-cad-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-cad-secondary text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-cad-light-gray whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="w-12 h-12 bg-cad-secondary rounded-lg flex items-center justify-center hover:bg-cad-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${social.icon} text-black text-xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-cad-light-gray mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder-cad-light-gray focus:ring-cad-secondary focus:border-transparent"
                    placeholder="Your First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-cad-light-gray mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder-cad-light-gray focus:ring-cad-secondary focus:border-transparent"
                    placeholder="Your Last Name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cad-light-gray mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-cad-light-gray focus:ring-cad-secondary focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cad-light-gray mb-2">
                  Subject
                </label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-cad-secondary focus:border-transparent">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="membership">Club Membership</SelectItem>
                    <SelectItem value="collaboration">Industry Collaboration</SelectItem>
                    <SelectItem value="workshop">Workshop Inquiry</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cad-light-gray mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder-cad-light-gray focus:ring-cad-secondary focus:border-transparent resize-none"
                  placeholder="Tell us about your interest in CAD Club..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cad-secondary text-black hover:bg-cad-primary hover:text-white transition-all transform hover:scale-105 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
