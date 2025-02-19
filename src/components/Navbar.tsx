import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/club.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'events','Members', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Contact', id: 'contact' },
    { name: 'Members', path: '/members' },
  ];


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span><img src={logo} alt="logo" className='h-11'/></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              link.path ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative font-mono text-sm transition-colors text-text hover:text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id!)}
                  className={`relative font-mono text-sm transition-colors ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-text hover:text-primary'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full h-0.5 w-full bg-primary"
                    />
                  )}
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md"
      >
        <div className="px-4 py-4 space-y-4">
          {links.map((link) => (
            link.path ? (
              <Link
                key={link.path}
                to={link.path}
                className="block w-full text-left font-mono transition-colors text-text hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id!)}
                className={`block w-full text-left font-mono transition-colors ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-text hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            )
          ))}
          
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;