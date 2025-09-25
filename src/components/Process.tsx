import React, { useState } from 'react';
import { 
  Brain, 
  FileText, 
  Handshake, 
  FolderOpen, 
  Palette, 
  Code, 
  Search, 
  Rocket, 
  BookOpen, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep] = useState(0);

  const processSteps = [
    {
      icon: Brain,
      title: 'Discovery & Consultation',
      subtitle: 'We start with a quick chat to understand your needs.',
      description: 'Whether it\'s a call, video meeting, or email, I\'ll ask key questions to learn about your business, goals, audience, and style. You\'ll share inspiration, required features, and your budget expectations.',
      color: 'blue',
      details: ['Business goals analysis', 'Target audience research', 'Feature requirements', 'Budget planning']
    },
    {
      icon: FileText,
      title: 'Proposal & Quote',
      subtitle: 'Based on our discussion, I\'ll send you a detailed proposal.',
      description: 'This includes a breakdown of deliverables, timelines, cost, technology stack, and terms of service. You\'ll know exactly what to expect.',
      color: 'emerald',
      details: ['Detailed deliverables', 'Clear timelines', 'Transparent pricing', 'Technology recommendations']
    },
    {
      icon: Handshake,
      title: 'Agreement & Onboarding',
      subtitle: 'Once you approve the proposal, we\'ll sign a simple contract.',
      description: 'I\'ll request a starting deposit (usually 30–50%) and guide you through onboarding, collecting your logo, brand assets, content, and access credentials.',
      color: 'purple',
      details: ['Contract signing', 'Deposit collection', 'Asset gathering', 'Access setup']
    },
    {
      icon: FolderOpen,
      title: 'Planning & Structure',
      subtitle: 'Next, we map out your website with a visual sitemap.',
      description: 'We\'ll create low-fidelity wireframes that define the structure and layout — so you can see how your site will flow before we build it.',
      color: 'orange',
      details: ['Site architecture', 'User flow mapping', 'Wireframe creation', 'Content structure']
    },
    {
      icon: Palette,
      title: 'Design',
      subtitle: 'Here\'s where the magic begins!',
      description: 'I\'ll design a beautiful, modern interface based on your branding and preferences. We\'ll start with the homepage — once approved, I\'ll move on to the rest.',
      color: 'pink',
      details: ['Visual design', 'Brand integration', 'UI components', 'Design revisions']
    },
    {
      icon: Code,
      title: 'Development',
      subtitle: 'Now I\'ll turn the design into a fully functional website.',
      description: 'Using clean, responsive code and the latest technologies, I\'ll bring your site to life — fast, secure, and mobile-ready. Basic SEO and performance optimization are always included.',
      color: 'indigo',
      details: ['Clean coding', 'Responsive design', 'Performance optimization', 'SEO implementation']
    },
    {
      icon: Search,
      title: 'Review & Revisions',
      subtitle: 'You\'ll get access to a live preview of your site.',
      description: 'We\'ll go through it together, check for any needed tweaks, and make final revisions. I\'ll also test the site on all major devices and browsers.',
      color: 'cyan',
      details: ['Live preview', 'Cross-browser testing', 'Mobile testing', 'Final revisions']
    },
    {
      icon: Rocket,
      title: 'Launch',
      subtitle: 'Once you approve the final version, it\'s launch time!',
      description: 'I\'ll handle everything — from connecting your domain to setting up hosting and SSL security. Your site goes live, fully tested and ready for visitors.',
      color: 'green',
      details: ['Domain setup', 'Hosting configuration', 'SSL security', 'Final testing']
    },
    {
      icon: BookOpen,
      title: 'Handover & Training',
      subtitle: 'I\'ll provide a walkthrough so you know how to manage your website.',
      description: 'You\'ll receive login credentials, a guide or training video, and backup files. Optional ongoing support & maintenance plans are also available.',
      color: 'yellow',
      details: ['Training session', 'Documentation', 'Backup files', 'Support options']
    },
    {
      icon: Users,
      title: 'Follow-Up & Support',
      subtitle: 'I won\'t disappear after launch.',
      description: 'I\'ll check in to make sure everything is running smoothly and offer help if needed. If you\'re happy, I\'d love to feature your project in my portfolio!',
      color: 'red',
      details: ['Post-launch support', 'Performance monitoring', 'Portfolio feature', 'Testimonial request']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      pink: 'bg-pink-50 text-pink-600 border-pink-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      red: 'bg-red-50 text-red-600 border-red-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">How I Work</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            My Web Design & Development Process
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-4">
            Building a website is more than just code and visuals — it's about understanding your goals, your audience, and crafting an experience that works.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                activeStep === index ? 'ring-2 ring-blue-500 ring-opacity-20 shadow-xl' : ''
              }`}>
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Step Number & Icon */}
                  <div className="md:col-span-2 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                      activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                    } transition-all duration-300`}>
                      {index + 1}
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(step.color)} transition-all duration-300`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-blue-600 font-medium mb-3">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-3 flex justify-center">
                    {index < processSteps.length - 1 && (
                      <ArrowRight className={`w-8 h-8 transition-all duration-300 ${
                        activeStep === index ? 'text-blue-500 animate-pulse' : 'text-gray-300'
                      }`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">In Summary</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My goal is to make the website process smooth, collaborative, and completely tailored to you. 
              You get clarity, creativity, and reliable communication at every stage.
            </p>
            <button className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-500 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-600">
              <span>Let's build something amazing</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;