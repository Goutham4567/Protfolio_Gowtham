import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 dark:text-white mb-4">
            About <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              A motivated and detail-oriented B.Tech student
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a passionate Electronic Communication Engineering student with a strong foundation in engineering principles and problem-solving skills. My academic journey has equipped me with both theoretical knowledge and practical experience in various domains of electronics and communication.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am eager to apply my academic knowledge to practical challenges and contribute effectively to team projects. With good technical aptitude, adaptability, and a willingness to learn new technologies, I am seeking opportunities to gain hands-on experience and grow in the field of engineering.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Strengths</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Strong foundation in engineering principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Excellent problem-solving skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Good technical aptitude</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-300">Adaptability and willingness to learn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Effective team collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
