import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import logo from '../Assets/club.jpg';

const Footer = () => {
  return (
    <footer className="bg-purple-950/50 backdrop-blur-sm py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logo} 
              alt="ENTC Coding Club Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Empowering students through code, creativity, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-500 transition-colors">Events</a></li>
              <li><a href="/members" className="text-gray-300 hover:text-pink-500 transition-colors">Members</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Department of ENTC</li>
              <li>Engineering College</li>
              <li>University Campus</li>
              <li>contact@entccodingclub.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} ENTC Coding Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;