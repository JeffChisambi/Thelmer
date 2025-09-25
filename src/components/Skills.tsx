import React from 'react';
import { Code2, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'blue',
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'emerald',
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'User Research'],
      color: 'purple',
    },
    {
      icon: Globe,
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Skills & Expertise</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-500 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(category.color)}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Always Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['GraphQL', 'React Native', 'Three.js', 'WebGL', 'Machine Learning', 'Blockchain'].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full border-2 border-gray-200 text-gray-600 font-medium hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;