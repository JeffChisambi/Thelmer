import React, { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Users, Target, Brain, Zap } from 'lucide-react';

const Discovery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const discoveries = [
    {
      icon: Users,
      title: 'User Research',
      description: 'Deep dive into user needs, behaviors, and pain points',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Target,
      title: 'Market Analysis',
      description: 'Competitive landscape and opportunity identification',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Brain,
      title: 'Strategy Planning',
      description: 'Technical architecture and solution roadmap',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section id="discovery" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Search className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Discovery</h2>
          </div>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Every great project begins with understanding. I dive deep into your vision, goals, and challenges to craft the perfect solution.
          </p>
        </div>

        {/* Discovery Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {discoveries.map((item, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Discovery Animation */}
        <div className={`relative bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Lightbulb className="w-8 h-8 text-emerald-500 animate-pulse" />
              <h3 className="text-2xl font-bold text-blue-900">The Discovery Process</h3>
            </div>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              I believe in collaborative discovery. Together, we'll uncover the insights that drive innovative solutions.
            </p>
            
            {/* Animated Process Flow */}
            <div className="flex justify-center items-center space-x-4 flex-wrap">
              {['Research', 'Analyze', 'Ideate', 'Validate'].map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold transform transition-all duration-500 hover:scale-110 ${
                      isVisible ? 'animate-pulse' : ''
                    }`} style={{ animationDelay: `${index * 200}ms` }}>
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-600 mt-2">{step}</span>
                  </div>
                  {index < 3 && (
                    <Zap className="w-6 h-6 text-emerald-400 animate-pulse hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;