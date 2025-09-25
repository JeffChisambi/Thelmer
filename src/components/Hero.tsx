import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Star } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50"
    >
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 2px, transparent 2px)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sticky Note */}
        <div className="absolute top-16 left-4 md:top-20 md:left-20 transform rotate-6 animate-float">
          <div className="bg-yellow-200 p-3 md:p-4 rounded-lg shadow-lg max-w-32 md:max-w-48">
            <p className="text-xs md:text-sm text-gray-700 font-handwriting">
              Creative solutions for complex problems ✨
            </p>
          </div>
        </div>

        {/* Code Block */}
        <div className="absolute top-24 right-4 md:top-32 md:right-20 transform -rotate-3 animate-float-delayed">
          <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-200">
            <div className="flex space-x-2 mb-2">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-red-400 rounded-full"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="font-mono text-xs md:text-sm text-gray-600">
              <div className="text-blue-600">const</div>
              <div className="text-purple-600">developer</div>
              <div className="text-gray-400">= "Jeff Chisambi"</div>
            </div>
          </div>
        </div>

        {/* Task Card */}
        <div className="absolute bottom-24 left-4 md:bottom-32 md:left-32 transform rotate-2 animate-float">
          <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-200 max-w-40 md:max-w-56">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Active Project
              </span>
            </div>
            <p className="text-xs text-gray-600">
              Building amazing web experiences
            </p>
            <div className="mt-2 bg-gray-100 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Integration Icons */}
        <div className="absolute bottom-16 right-4 md:bottom-20 md:right-32 transform -rotate-6 animate-float-delayed">
          <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-200">
            <div className="text-xs text-gray-500 mb-2">Tech Stack</div>
            <div className="flex space-x-2">
              <div className="w-6 md:w-8 h-6 md:h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">R</span>
              </div>
              <div className="w-6 md:w-8 h-6 md:h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <div className="w-6 md:w-8 h-6 md:h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
              <span className="inline-block">Think, build, and</span>
              <br />
              <span className="inline-block text-gray-400">ship amazing</span>
              <br />
              <span className="inline-block text-blue-500">
                web experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Creative developer crafting digital solutions that blend
              innovation with cutting-edge technology.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-6 md:space-x-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                50+
              </div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-500">
                3+
              </div>
              <div className="text-gray-500 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-2xl md:text-3xl font-bold text-yellow-500">
                  5.0
                </span>
              </div>
              <div className="text-gray-500 text-sm">Rating</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/JeffChisambi#:~:text=Nick-,Thelmer,-JeffChisambi%20%C2%B7%20he"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <Github className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https.linkedin.com/in/jeffrey-chisambi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="mailto:chisambijeffrey3@gmail.com"
              className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <Mail className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="https://wa.me/265990342842"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-green-500"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={scrollToNext}
              className="px-6 md:px-8 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Get Started Now!
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
