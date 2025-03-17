import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, Code2, Users2, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import About from './About';
import Events from './Events';
import Contact from './Contact';

// Stats Counter Component
const StatCounter = ({ end, label, duration = 2 }: { end: number; label: string; duration?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">
        {count}+
      </div>
      <div className="text-sm sm:text-base text-text/80">{label}</div>
    </div>
  );
};

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-first lg:order-1"
            >
              <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                <span className="text-primary block lg:inline">Empowering</span>{' '}
                <TypeAnimation
                  sequence={[
                    'Coders',
                    2000,
                    'Developers',
                    2000,
                    'Innovators',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-secondary"
                />
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                One Line at a Time! Be part of a community that pushes the boundaries of technology.
              </p>
              <a
                href="https://dsawithjava.vercel.app/"
                className="inline-flex items-center gap-2 bg-transparent text-primary px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-colors text-sm sm:text-base"
              >
                Explore Events
                <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2"
            >
              <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 p-3 xs:p-4 sm:p-6 lg:p-8 w-full">
                    {[
                      {
                        icon: Code2,
                        title: "Learn to Code",
                        description: "Master programming through hands-on projects",
                        borderColor: "primary"
                      },
                      {
                        icon: Terminal,
                        title: "Build Projects",
                        description: "Create real-world applications",
                        borderColor: "secondary"
                      },
                      {
                        icon: Users2,
                        title: "Community",
                        description: "Connect with fellow developers",
                        borderColor: "secondary"
                      },
                      {
                        icon: Trophy,
                        title: "Compete",
                        description: "Participate in coding challenges",
                        borderColor: "primary"
                      }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`bg-background/80 backdrop-blur-sm p-2 xs:p-3 sm:p-4 lg:p-6 rounded-xl border border-${item.borderColor}/30 hover:border-${item.borderColor}/60 transition-colors`}
                      >
                        <item.icon className={`h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-${item.borderColor} mb-1 xs:mb-2 lg:mb-4`} />
                        <h3 className="font-orbitron text-xs xs:text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-[10px] xs:text-xs sm:text-sm opacity-80">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Events />
      <Contact />
    </div>
  );
};

export default Home;
