import React, { useEffect, useRef, useState } from 'react';
import { Mail, Calendar, ArrowRight, Sparkles, Clock, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

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
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 3000);

    return () => clearInterval(pulseInterval);
  }, []);

  const benefits = [
    'Free consultation call',
    'Custom project proposal',
    'Transparent pricing',
    'Ongoing support included',
  ];

  return (
    <section id="cta" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Sparkles className="w-8 h-8 text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Build Together</h2>
          </div>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Ready to transform your vision into reality? I'm here to help you create something extraordinary.
          </p>
        </div>

        {/* Scarcity Indicator */}
        <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Limited Availability</span>
          </div>
          <p className="text-white text-sm">
            Currently accepting <strong>1 new project</strong> per month to ensure premium quality and personal attention.
          </p>
        </div>

        {/* Benefits */}
        <div className={`grid md:grid-cols-2 gap-4 mb-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="space-y-4">
            <button
              className={`group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                isPulsing ? 'animate-pulse' : ''
              }`}
              style={{
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
              }}
            >
              <Mail className="w-6 h-6 group-hover:animate-bounce" />
              <span>Start Your Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-5 h-5" />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Digital Signature */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative">
            <div className="text-4xl font-bold text-emerald-400 mb-2" style={{ fontFamily: 'cursive' }}>
              Jeffrey C.
            </div>
            <div className="text-slate-300 text-sm">
              Creative Developer & Digital Craftsman
            </div>
            <div className="absolute -top-2 -right-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Contact Info */}
        <div className={`mt-12 text-center space-y-2 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-slate-300 text-sm">
            Email: <a href="mailto:hello@jeffreyc.dev" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200">hello@jeffreyc.dev</a>
          </p>
          <p className="text-slate-300 text-sm">
            Response time: Within 24 hours ⚡
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;