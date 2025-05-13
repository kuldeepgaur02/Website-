import React from 'react';
import monitorCardBg from '../assets/monitor-card.webp';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiMonitor, FiClock, FiCalendar } from "react-icons/fi";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 mb-6 last:mb-0">
      <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-navy-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const MonitorSection = () => {
  const features = [
    {
      icon: <FiMonitor className="w-5 h-5" />,
      title: "Intelligent Scheduling",
      description: "Automate appointment bookings and optimize your calendar with AI-powered scheduling."
    },
    {
      icon: <FiClock className="w-5 h-5" />,
      title: "Time Management",
      description: "Track time spent on projects and activities with detailed analytics and reporting."
    },
    {
      icon: <FiCalendar className="w-5 h-5" />,
      title: "Team Availability",
      description: "Coordinate team schedules and manage resource allocation efficiently."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="md:w-1/2 w-full">
          <div className="max-w-lg">
            <span className="inline-block bg-green-50 text-green-600 font-semibold text-sm py-1 px-3 rounded-full mb-4">
              MONITOR
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Introduction to Best Mobile Carousels
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences.
            </p>
            
            <div className="mb-10 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
              <p className="text-blue-800 italic text-sm">
                "Our scheduling efficiency increased by 45% after implementing this solution."
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center mt-8 text-blue-600 font-semibold group"
            >
              <span>Explore Scheduling Features</span>
              <IoIosArrowRoundForward className="w-6 h-6 ml-1 group-hover:ml-3 transition-all duration-300" />
            </a>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-full opacity-70 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-50 rounded-full opacity-70 -z-10"></div>
            
            {/* Main image with shadow and border */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={monitorCardBg} 
                alt="Monitoring dashboard interface" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent opacity-60"></div>
            </div>
            
            {/* Stats badge */}
            <div className="absolute -bottom-5 -left-5 md:bottom-5 md:left-5 bg-white px-4 py-3 rounded-lg shadow-lg">
              <p className="text-xs text-gray-500">Analytics</p>
              <p className="text-navy-900 font-bold">+28% Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;