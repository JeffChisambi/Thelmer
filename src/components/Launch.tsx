import React, { useEffect, useRef, useState } from 'react';
import { Rocket, TrendingUp, Users, Award, Star, CheckCircle } from 'lucide-react';

const Launch: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [launchProgress, setLaunchProgress] = useState(0);

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
      const timer = setInterval(() => {
        setLaunchProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'Modern shopping experience with AI recommendations',
      impact: '+150% conversion rate',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Healthcare Dashboard',
      description: 'Patient management system for medical professionals',
      impact: '40% time savings',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Learning Management System',
      description: 'Interactive platform for online education',
      impact: '10k+ active users',
      tech: ['React', 'Express', 'Redis'],
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Jeffrey delivered beyond our expectations. The platform increased our efficiency by 300%.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, HealthTech',
      content: 'Outstanding technical skills and attention to detail. A true professional.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, EduSpace',
      content: 'The learning platform Jeffrey built transformed our business completely.',
      rating: 5,
    },
  ];

  return (
    <section id="launch" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Rocket className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Launch</h2>
          </div>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Where dreams become reality. See how my projects have transformed businesses and delighted users.
          </p>
        </div>

        {/* Launch Progress */}
        <div className={`bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 mb-16 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Project Launch Success Rate</h3>
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-600">Success Rate</span>
                <span className="text-sm font-medium text-emerald-600">{launchProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${launchProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">50+</div>
              <div className="text-slate-600">Projects Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-slate-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-blue-900 text-center mb-8 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200 + 600}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-emerald-500 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-lg font-bold">{project.impact}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{project.name}</h4>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">What Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-blue-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launch;