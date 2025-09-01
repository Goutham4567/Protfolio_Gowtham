import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      title: "Industrial Training",
      company: "MICROLINK INDUSTRIAL TRAINING",
      duration: "2024",
      description: "Completed hands-on training in embedded systems and industrial automation",
      achievements: [
        "Gained practical experience with PLCs, IoT modules, and hardware testing",
        "Worked on real-time industry projects focusing on problem-solving",
        "Applied theoretical knowledge to practical challenges",
        "Developed skills in industrial automation and control systems"
      ]
    }
  ];

  const projects = [
    {
      title: "LDR Based Street Light",
      description: "Automated street lighting system using Light Dependent Resistor sensors",
      technologies: ["Arduino", "LDR Sensors", "Relay Module", "C++"]
    },
    {
      title: "Smart Class Room",
      description: "Intelligent classroom automation system with IoT integration",
      technologies: ["IoT", "Sensors", "Automation", "Embedded Systems"]
    },
    {
      title: "Smart Parking System",
      description: "Automated parking management system with sensor-based detection",
      technologies: ["Microcontrollers", "Sensors", "Display Systems", "C Programming"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-4">
            Work <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span> & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                      {experience.title}
                    </h4>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {experience.duration}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
            Key Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-500/10 to-indigo-600/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
