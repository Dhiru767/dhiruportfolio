import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhirajbohara767@gmail.com",
      href: "mailto:dhirajbohara767@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9762475537",
      href: "tel:9762475537"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Dhiru767",
      href: "https://github.com/Dhiru767"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Birmingham, UK",
      href: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <Card className="card-gradient h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and interesting projects.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 smooth-transition group"
                  >
                    <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <item.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}

                <div className="mt-8 p-6 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Available for</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Freelance Projects</li>
                    <li>• Full-time Opportunities</li>
                    <li>• Collaboration & Partnerships</li>
                    <li>• Consulting & Advice</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-300">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hero-gradient text-primary-foreground"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;