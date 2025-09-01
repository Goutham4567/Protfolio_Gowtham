import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electronic Communication Engineering",
      institution: "Lovely Professional University, Punjab",
      duration: "2025-2028",
      percentage: "82%",
      description: "Currently pursuing Bachelor of Technology in Electronic Communication Engineering"
    },
    {
      degree: "Diploma in Electronic Communication Engineering",
      institution: "Nuzvidu Polytechnic",
      duration: "2022-2025",
      percentage: "79%",
      description: "Completed Diploma in Electronic Communication Engineering with focus on practical applications"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Vignam Vihar E.M School",
      duration: "2021-2022",
      percentage: "N/A",
      description: "Completed secondary education with strong foundation in core subjects"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-4">
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education</span> & Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                    {education.institution}
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                  <div className="text-center">
                    <div className="text-sm text-slate-500 dark:text-slate-400">Duration</div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">{education.duration}</div>
                  </div>
                  {education.percentage !== "N/A" && (
                    <div className="text-center">
                      <div className="text-sm text-slate-500 dark:text-slate-400">Percentage</div>
                      <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {education.percentage}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
