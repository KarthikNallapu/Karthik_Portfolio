
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form - Takes 3 columns on large screens */}
          <div className="lg:col-span-3 bg-secondary/10 p-8 rounded-2xl border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2 text-left">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary/20 border-border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-2 text-left">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary/20 border-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-2 text-left">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="bg-secondary/20 border-border min-h-[150px]"
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 bg-secondary/10 p-8 rounded-2xl border border-border/50 shadow-sm h-full">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:contact@johndoe.dev" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@johndoe.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+15555555555" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (555) 555-5555
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Social Media</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Github size={20} className="text-primary" />
                  </a>
                  <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} className="text-primary" />
                  </a>
                  <a href="#" className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                    <Twitter size={20} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
