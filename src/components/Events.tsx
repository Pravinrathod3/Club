import event1 from '../Assets/WhatsApp Image 2025-02-19 at 11.23.49 (1).jpeg';
import event2 from '../Assets/WhatsApp Image 2025-02-20 at 23.14.08.jpeg';
import { Calendar, MapPin, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import event3 from '../Assets/IMG_20240823_161439.jpg';

const Events = () => {
  const pastEvents = [
    {
      title: "AI Workshop Series",
      date: "January 28-29, 2025",
      location: "ENTC Department",
      description: "Two-day workshop on artificial intelligence and machine learning fundamentals.",
      image: event1,
      participants: 70,
      highlights: ["Hands-on ML Projects", "Expert Speakers", "Certificate Program"]
    },
    {
      title: "DSA Contest",
      date: "January 30, 2025",
      location: "ENTC Department",
      description: "Data structures and algorithms contest with problems across different difficulty levels.",
      image: event2,
      participants: 50,
      highlights: ["2 Rounds", "6000 rupees worth prizes", "Certificate Program"]
    },
    {
      title: "Guest Lecture on Data analytics",
      date: "August 20, 2024",
      location: "Computer Lab",
      description: "Competitive programming event with challenges across different difficulty levels.",
      image: event3,
      participants: 80,
      highlights: ["5 Rounds", "Real-time Leaderboard", "Industry Problems"]
    }
  ];

  return (
    <div id="events" className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
            <span className="text-primary">Event</span>{' '}
            <span className="text-secondary">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our past events that have helped shape our community and create lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </p>
                      <p className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </p>
                      <p className="flex items-center gap-2 text-gray-300">
                        <Camera className="h-4 w-4" />
                        {event.participants} Participants
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;