import React, { useEffect, useRef, useState } from 'react';
import { Palette, Smartphone, Monitor, Tablet, Eye, Layers } from 'lucide-react';

const Design: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDevice, setActiveDevice] = useState('desktop');

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

  const devices = [
    { id: 'desktop', icon: Monitor, label: 'Desktop' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile' },
  ];

  const designPrinciples = [
    {
      icon: Eye,
      title: 'Visual Hierarchy',
      description: 'Clear information architecture that guides users naturally',
    },
    {
      icon: Layers,
      title: 'Consistent Systems',
      description: 'Unified design language across all touchpoints',
    },
    {
      icon: Palette,
      title: 'Brand Alignment',
      description: 'Designs that reflect your brand personality and values',
    },
  ];

  return (
    <section id="design" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Palette className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Design</h2>
          </div>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Where creativity meets functionality. I craft beautiful, intuitive interfaces that users love to interact with.
          </p>
        </div>

        {/* Design Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {designPrinciples.map((principle, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <principle.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{principle.title}</h3>
              <p className="text-slate-600">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Responsive Design Showcase */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Responsive Design Excellence</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every design adapts beautifully across all devices, ensuring your users have a consistent experience everywhere.
            </p>
          </div>

          {/* Device Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {devices.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeDevice === device.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <device.icon className="w-5 h-5" />
                <span className="font-medium">{device.label}</span>
              </button>
            ))}
          </div>

          {/* Device Preview */}
          <div className="flex justify-center">
            <div className={`transition-all duration-500 transform ${
              activeDevice === 'desktop' ? 'scale-100' : 'scale-95 opacity-50'
            }`}>
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className={`bg-gradient-to-br from-blue-500 to-emerald-500 rounded transition-all duration-500 ${
                  activeDevice === 'desktop' ? 'w-96 h-64' : 
                  activeDevice === 'tablet' ? 'w-64 h-80' : 'w-48 h-96'
                }`}>
                  <div className="p-6 text-white">
                    <div className="h-4 bg-white/20 rounded mb-3"></div>
                    <div className="h-3 bg-white/15 rounded mb-2"></div>
                    <div className="h-3 bg-white/15 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-white/10 rounded"></div>
                      <div className="h-16 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;