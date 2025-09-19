import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Database, Cpu, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Web Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Python", icon: Zap, level: 80 },
    { name: "Machine Learning", icon: Cpu, level: 75 },
    { name: "Database Management", icon: Database, level: 85 },
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "MySQL", "MongoDB",
    "Figma", "Adobe XD", "TensorFlow", "Arduino", "Git", "AWS"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and passion for technology, I'm constantly learning and building innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education & Background */}
          <div className="animate-fade-in-up">
            <Card className="card-gradient card-hover">
              <CardContent className="p-8">
                {/* Profile Photo */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <img
                      src="/src/assets/dhiraj-photo.jpg"
                      alt="Dhiraj Bohara - Professional Photo"
                      className="w-40 h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full hero-gradient opacity-20"></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 hero-gradient rounded-lg">
                    <BookOpen className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Education & Goals</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      BSc (Hons) in Artificial Intelligence
                    </h4>
                    <p className="text-muted-foreground">
                      Birmingham City University • Expected 2027
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">My Journey</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      As a passionate technology enthusiast, I'm dedicated to bridging the gap between 
                      creative design and intelligent functionality. My academic journey in AI, combined 
                      with hands-on experience in web development, has shaped my vision of creating 
                      solutions that are both innovative and user-centric.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Future Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I envision myself contributing to the next generation of smart applications 
                      that seamlessly integrate AI capabilities with exceptional user experiences, 
                      making technology more accessible and impactful for everyone.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="animate-fade-in-up delay-300">
            <Card className="card-gradient card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
                
                <div className="space-y-6 mb-8">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className="text-primary" size={20} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="hero-gradient h-2 rounded-full smooth-transition"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="smooth-transition hover:scale-105">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;