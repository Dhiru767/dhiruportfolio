import { Github, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold hero-gradient bg-clip-text text-transparent mb-4">
              Dhiraj Bohara
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tech-driven problem solver passionate about web development and artificial intelligence. 
              Building smart, scalable solutions that bridge creativity and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary smooth-transition"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:dhirajbohara767@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail size={18} />
                dhirajbohara767@gmail.com
              </a>
              <a
                href="tel:9762475537"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Phone size={18} />
                9762475537
              </a>
              <a
                href="https://github.com/Dhiru767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Github size={18} />
                github.com/Dhiru767
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Dhiraj Bohara. Made with <Heart className="text-red-500" size={16} /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;