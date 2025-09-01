import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "LDR Based Street Light",
      description: "An automated street lighting system that uses Light Dependent Resistor (LDR) sensors to detect ambient light levels and automatically control street lights. The system ensures energy efficiency by only illuminating lights when necessary.",
      technologies: ["Arduino", "LDR Sensors", "Relay Module", "C++", "Circuit Design"],
      features: [
        "Automatic light detection and control",
        "Energy-efficient operation",
        "Real-time sensor monitoring",
        "Reliable circuit design"
      ]
    },
    {
      title: "Smart Class Room",
      description: "An intelligent classroom automation system that integrates IoT technology to create a modern learning environment. The system includes automated lighting, climate control, and interactive displays.",
      technologies: ["IoT", "Sensors", "Automation", "Embedded Systems", "Wireless Communication"],
      features: [
        "Automated environmental control",
        "IoT integration for remote monitoring",
        "Interactive display systems",
        "Energy management features"
      ]
    },
    {
      title: "Smart Parking System",
      description: "An automated parking management system that uses sensors to detect vehicle presence and provides real-time parking availability information. The system includes display boards and automated guidance.",
      technologies: ["Microcontrollers", "Sensors", "Display Systems", "C Programming", "LED Indicators"],
      features: [
        "Real-time parking detection",
        "Automated guidance system",
        "Digital display boards",
        "Efficient space utilization"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-4">
            Featured <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Key Features:</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
