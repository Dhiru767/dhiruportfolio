import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Database, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean, user-friendly designs for web and mobile applications with focus on user experience and modern aesthetics.",
      features: [
        "Responsive Web Design",
        "Mobile App UI",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Brand Identity Design"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack solutions with responsive layouts, modern frameworks, and performance optimization.",
      features: [
        "React & TypeScript Development",
        "Backend API Development",
        "E-commerce Solutions",
        "Performance Optimization",
        "SEO Implementation"
      ]
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Efficient handling of data for applications and systems with robust database design and management.",
      features: [
        "Database Design & Management",
        "API Integration",
        "Data Migration",
        "Real-time Data Processing",
        "Analytics Implementation"
      ]
    },
    {
      icon: Cpu,
      title: "Arduino/Hardware Interfacing",
      description: "Basic hardware-software prototyping with sensor integration and automation solutions.",
      features: [
        "IoT Solutions",
        "Sensor Integration",
        "Automation Systems",
        "Hardware Prototyping",
        "Embedded Programming"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="hero-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive solutions across design, development, and technology integration to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-gradient card-hover group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                  <service.icon className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <ArrowRight className="text-primary mr-2 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-card rounded-2xl p-8 card-gradient max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with innovative solutions 
              that combine creativity, technology, and user-centered design.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="hero-gradient text-primary-foreground px-8 py-4"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;