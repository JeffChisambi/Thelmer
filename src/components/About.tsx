import React from 'react';
import { User, Coffee, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time',
    },
    {
      icon: Heart,
      title: 'User-Centered',
      description: 'Designing experiences that users love and find intuitive',
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <User className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Hi, I'm Thelmer – a creative developer who loves turning ideas into reality.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With over 3 years of experience in web development, I specialize in creating 
                beautiful, functional, and user-friendly applications. I believe that great 
                software should not only work flawlessly but also provide an exceptional 
                user experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-500">50+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-emerald-500">100%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">What I Value</h3>
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <value.icon className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;