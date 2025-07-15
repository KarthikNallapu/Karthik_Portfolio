import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiX } from "react-icons/si"; // <-- New Twitter/X icon

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-background to-secondary/20 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Get In Touch
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-4 rounded-full" />
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
          Have a question or want to collaborate? I’d love to hear from you!
        </p>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-12">
            {/* Contact Info */}
            <div className="bg-secondary/10 p-8 rounded-2xl border border-border/50 shadow-sm space-y-6 text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={28} />
                <a
                  href="mailto:karthiknallapu450@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  karthiknallapu450@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={28} />
                <a
                  href="tel:+919550788322"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  +91 95507 88322
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={28} />
                <p className="text-muted-foreground text-lg">
                  Telangana, India
                </p>
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-secondary/10 p-8 rounded-2xl border border-border/50 shadow-sm text-left space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Social Networks</h3>

              <div className="flex items-center gap-3">
                <Github className="text-primary" size={28} />
                <a
                  href="https://github.com/KarthikNallapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="text-primary" size={28} />
                <a
                  href="https://linkedin.com/in/karthiknallapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3">
                <SiX className="text-primary" size={26} />
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-secondary/10 p-8 rounded-2xl border border-border/50 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium mb-2 text-left"
                >
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
                <label
                  htmlFor="email"
                  className="block font-medium mb-2 text-left"
                >
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
                <label
                  htmlFor="message"
                  className="block font-medium mb-2 text-left"
                >
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
