import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/dhiraj-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(262, 83%, 58%, 0.1), rgba(262, 83%, 58%, 0.05)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="hero-gradient bg-clip-text text-transparent">
                Dhiraj Bohara
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              I'm a tech-driven problem solver passionate about{" "}
              <span className="text-primary font-semibold">web development</span> and{" "}
              <span className="text-primary font-semibold">artificial intelligence</span>. 
              I love crafting dynamic user experiences while exploring how AI can enhance functionality and decision-making.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              My goal is to build smart, scalable solutions that bridge creativity and cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="hero-gradient text-primary-foreground px-8 py-4 text-lg"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 text-lg glow-border"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mt-8">
              <a
                href="https://github.com/Dhiru767"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:dhirajbohara767@gmail.com"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:9762475537"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden card-gradient border-4 border-primary/20 animate-float">
                <img
                  src={profileImage}
                  alt="Dhiraj Bohara - Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 hero-gradient rounded-full animate-pulse opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 hero-gradient rounded-full animate-pulse opacity-30 delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;