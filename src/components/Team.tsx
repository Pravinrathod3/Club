import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Club President',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Full-stack developer with a passion for AI and machine learning.',
    skills: ['Python', 'React', 'TensorFlow'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'sarah@example.com'
    }
  },
  {
    name: 'Alex Kumar',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Cloud architecture enthusiast and backend specialist.',
    skills: ['Node.js', 'AWS', 'Docker'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'alex@example.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'UI/UX designer with expertise in mobile app development.',
    skills: ['Flutter', 'Figma', 'Firebase'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'emily@example.com'
    }
  }
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
            <span className="text-primary">Our</span>{' '}
            <span className="text-secondary">Team</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Meet the passionate individuals who make our coding community thrive
          </p>
        </div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group"
            >
              <div className="relative h-[400px] perspective-1000">
                <div className="absolute inset-0 preserve-3d duration-500 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full bg-background/40 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden">
                      <div className="relative h-2/3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-orbitron font-semibold text-primary">
                          {member.name}
                        </h3>
                        <p className="text-secondary">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="h-full bg-background/40 backdrop-blur-sm rounded-xl border border-primary/20 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-orbitron font-semibold text-primary mb-4">
                          {member.name}
                        </h3>
                        <p className="mb-4">{member.bio}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.social.github}
                          className="text-text hover:text-primary transition-colors"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="text-text hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-text hover:text-primary transition-colors"
                        >
                          <Mail className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;