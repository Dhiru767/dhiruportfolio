import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update meta tags for SEO
    document.title = "Dhiraj Bohara - AI Student & Web Developer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Dhiraj Bohara - Tech-driven AI student and web developer passionate about creating innovative solutions. Specializing in web development, UI/UX design, and artificial intelligence at Birmingham City University.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dhiraj Bohara",
      "jobTitle": "AI Student & Web Developer",
      "description": "Tech-driven problem solver passionate about web development and artificial intelligence",
      "url": window.location.href,
      "sameAs": [
        "https://github.com/Dhiru767"
      ],
      "knowsAbout": [
        "Web Development",
        "Artificial Intelligence",
        "UI/UX Design",
        "Python Programming",
        "Machine Learning",
        "Database Management"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Birmingham City University"
      },
      "email": "dhirajbohara767@gmail.com",
      "telephone": "9762475537"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <head>
        <meta name="keywords" content="Dhiraj Bohara, web developer, AI student, artificial intelligence, Birmingham City University, portfolio, UI/UX design, Python, machine learning" />
        <meta name="author" content="Dhiraj Bohara" />
        <meta property="og:title" content="Dhiraj Bohara - AI Student & Web Developer Portfolio" />
        <meta property="og:description" content="Tech-driven AI student and web developer passionate about creating innovative solutions. Specializing in web development, UI/UX design, and artificial intelligence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </head>

      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;