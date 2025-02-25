import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users2, Trophy } from 'lucide-react';

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

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div  id="about" className="min-h-screen pt-10 md:pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-20"
        >
          {/* About Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              <span className="text-primary">About</span>{' '}
              <span className="text-secondary">Us</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              ENTC Coding Club is a vibrant community of passionate developers, innovators, and tech enthusiasts. 
              We believe in learning through collaboration, hands-on projects, and peer-to-peer knowledge sharing.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12"
          >
            <StatCounter end={50} label="Active Members" />
            <StatCounter end={100} label="participation" />
            <StatCounter end={15} label="Events Organized" />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <Code2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-orbitron font-semibold mb-4">Technical Excellence</h3>
              <p className="text-text/80">
                We focus on practical coding skills and modern technologies that matter in the industry.
              </p>
            </div>
            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors">
              <Users2 className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-orbitron font-semibold mb-4">Community First</h3>
              <p className="text-text/80">
                Our strength lies in our diverse community and collaborative learning environment.
              </p>
            </div>
            <div className="bg-background/40 backdrop-blur-sm p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <Trophy className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-orbitron font-semibold mb-4">Project-Based Learning</h3>
              <p className="text-text/80">
                Learn by doing through real-world projects and hands-on workshops.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;