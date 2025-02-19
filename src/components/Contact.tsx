import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="contact"  className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              <span className="text-primary">Get in</span>{' '}
              <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-orbitron text-lg">Location</h3>
                  <p className="text-text/80">Department of Electronic and Telecommunication Engineering</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-orbitron text-lg">Email</h3>
                  <p className="text-text/80">entccodingclub@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-text hover:text-primary transition-colors">
                <Github className="h-8 w-8" />
              </a>
              <a href="#" className="text-text hover:text-primary transition-colors">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="#" className="text-text hover:text-primary transition-colors">
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-background/40 backdrop-blur-sm rounded-xl border border-primary/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/60 border border-primary/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/60 border border-primary/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background/60 border border-primary/20 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-background font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;