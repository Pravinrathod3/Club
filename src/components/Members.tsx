
import { Users } from 'lucide-react';

const Members = () => {
  const members = [
    {
      name: "Sarah Chen",
      role: "Club President",
      year: "Final Year",
      skills: ["Python", "Machine Learning", "Web Development"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Alex Kumar",
      role: "Technical Lead",
      year: "Third Year",
      skills: ["React", "Node.js", "Cloud Computing"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      year: "Second Year",
      skills: ["UI/UX Design", "JavaScript", "Flutter"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-200 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-pink-500" />
            Our Members
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Meet our talented community of coders and creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-pink-500"
              />
              <h3 className="text-xl font-semibold text-pink-500">{member.name}</h3>
              <p className="text-yellow-200 mb-2">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.year}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-purple-800/50 text-pink-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;