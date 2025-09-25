import React from "react";
import {
  Mail,
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle,
  MessageSquare,
  Phone,
} from "lucide-react";

const Contact: React.FC = () => {
  const benefits = [
    "Free consultation call",
    "Custom project proposal",
    "Transparent pricing",
    "Ongoing support included",
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "chisambijeffrey3@gmail.com",
      action: "Send Email",
      href: "mailto:chisambijeffrey3@gmail.com",
      primary: true,
    },
    {
      icon: Phone,
      title: "Call",
      description: "+265990342842",
      action: "Call Now",
      href: "tel:+265990342842",
      primary: false,
    },
    {
      icon: MessageSquare,
      title: "Quick Chat",
      description: "WhatsApp",
      action: "Start Chat",
      href: "https://wa.me/265990342842",
      primary: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Let's Work Together
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </div>

        {/* Availability Notice */}
        <div className="bg-white rounded-2xl p-6 mb-12 text-center border border-gray-200 shadow-sm">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Clock className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-600 font-semibold">
              Currently Available
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Accepting <strong>1 new project</strong> this month • Response time:
            Within 24 hours
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                method.primary ? "ring-2 ring-blue-500 ring-opacity-20" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  method.primary ? "bg-blue-500" : "bg-gray-100"
                }`}
              >
                <method.icon
                  className={`w-6 h-6 ${
                    method.primary ? "text-white" : "text-gray-600"
                  }`}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  method.primary
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            What You Get
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <a
            href="mailto:chisambijeffrey3@gmail.com"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-blue-500 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-600"
          >
            <Mail className="w-6 h-6 group-hover:animate-bounce" />
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center space-y-4">
          <div className="relative">
            <div
              className="text-3xl font-bold text-blue-500 mb-2"
              style={{ fontFamily: "cursive" }}
            >
              Thelmer
            </div>
            <div className="text-gray-500 text-sm">
              Creative Developer & Digital Craftsman
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-500">
            <p>Based in San Francisco, working globally</p>
            <p>© 2024 Jeffrey C. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
