import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Code2, Zap, Shield, Smartphone, Globe } from 'lucide-react';

const Code: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const codeText = `const createAwesomeProject = () => {
  return {
    frontend: ['React', 'TypeScript', 'Tailwind'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    deployment: ['Vercel', 'Netlify', 'AWS'],
    performance: 'Optimized',
    accessibility: 'WCAG Compliant',
    responsive: true
  };
};`;

  const techStack = [
    { name: 'React', color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'TypeScript', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Node.js', color: 'text-green-500', bg: 'bg-green-50' },
    { name: 'Next.js', color: 'text-gray-800', bg: 'bg-gray-50' },
    { name: 'TailwindCSS', color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'MongoDB', color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const codeFeatures = [
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Lightning-fast loading times and smooth interactions',
    },
    {
      icon: Shield,
      title: 'Secure & Robust',
      description: 'Enterprise-grade security and error handling',
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs',
    },
  ];

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

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < codeText.length) {
          setTypedText(codeText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, codeText]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [techStack.length]);

  return (
    <section id="code" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Terminal className="w-8 h-8 text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Code</h2>
          </div>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Clean, efficient, and maintainable code that powers exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Editor */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-300">project.js</span>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                  <code>
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Code Features */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            {codeFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technologies I Love</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
                  index === currentTechIndex
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-600'
                    : 'border-slate-600 bg-slate-800 text-slate-300 hover:border-slate-500'
                }`}
              >
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Code;