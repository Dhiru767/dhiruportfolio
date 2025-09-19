import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Shoe and Bag E-commerce Website",
      description: "Modern, user-friendly e-commerce interface designed in Figma with responsive design principles and seamless user experience flow.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
      technologies: ["Figma", "UI/UX Design", "Responsive Design", "E-commerce"],
      category: "Design",
      link: "#",
      github: "#"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive system for managing patient and staff data with streamlined operations, appointment scheduling, and medical records management.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80",
      technologies: ["Python", "MySQL", "Flask", "Healthcare IT"],
      category: "Full-Stack",
      link: "#",
      github: "#"
    },
    {
      title: "Bus Route Finder App & Website",
      description: "Data-driven application for accurate route mapping and real-time bus tracking with integrated GPS and schedule management.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&q=80",
      technologies: ["React", "Node.js", "Google Maps API", "Real-time Data"],
      category: "Full-Stack",
      link: "#",
      github: "#"
    },
    {
      title: "Arduino-Based IoT Projects",
      description: "Hardware-software interfacing projects featuring sensor integration, automation prototypes, and smart home solutions.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80",
      technologies: ["Arduino", "C++", "Sensors", "IoT", "Automation"],
      category: "Hardware",
      link: "#",
      github: "#"
    }
  ];

  const categories = ["All", "Design", "Full-Stack", "Hardware"];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="hero-gradient bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent projects spanning web development, UI/UX design, and hardware integration.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "ghost"}
                size="sm"
                className={category === "All" ? "hero-gradient text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-gradient card-hover overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-20 smooth-transition"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink size={14} className="mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={14} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            size="lg"
            variant="outline"
            className="glow-border"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;