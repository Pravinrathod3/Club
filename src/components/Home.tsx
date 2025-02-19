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
      <div className="text-4xl font-orbitron font-bold text-primary mb-2">
        {count}+
      </div>
      <div className="text-text/80">{label}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
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
              <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
                One Line at a Time! Be part of a community that pushes the boundaries of technology.
              </p>
              <a
                href="#events"
                className="inline-flex items-center gap-2 bg-transparent text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-colors"
              >
                Explore Events
                <Terminal className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[500px] mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 p-4 sm:p-8 w-full">
                    <div className="bg-background/80 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-colors">
                      <Code2 className="h-6 w-6 sm:h-10 sm:w-10 text-primary mb-2 sm:mb-4" />
                      <h3 className="font-orbitron text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Learn to Code</h3>
                      <p className="text-xs sm:text-sm opacity-80">Master programming through hands-on projects</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-secondary/30 hover:border-secondary/60 transition-colors">
                      <Terminal className="h-6 w-6 sm:h-10 sm:w-10 text-secondary mb-2 sm:mb-4" />
                      <h3 className="font-orbitron text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Build Projects</h3>
                      <p className="text-xs sm:text-sm opacity-80">Create real-world applications</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-secondary/30 hover:border-secondary/60 transition-colors">
                      <Users2 className="h-6 w-6 sm:h-10 sm:w-10 text-secondary mb-2 sm:mb-4" />
                      <h3 className="font-orbitron text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Community</h3>
                      <p className="text-xs sm:text-sm opacity-80">Connect with fellow developers</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-colors">
                      <Trophy className="h-6 w-6 sm:h-10 sm:w-10 text-primary mb-2 sm:mb-4" />
                      <h3 className="font-orbitron text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Compete</h3>
                      <p className="text-xs sm:text-sm opacity-80">Participate in coding challenges</p>
                    </div>
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