import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Folder,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";

const Projects: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: "FlowNest",
      description:
        "A productivity and organization app to streamline your workflow.",
      image: "/public/Screenshot 2025-09-25 at 10.33.50 AM.png",
      tech: ["React", "Node.js", "MongoDB", "Vercel"],
      stats: { users: "1k+", rating: 4.8, growth: "+120%" },
      links: {
        github: "https://github.com/JeffChisambi/FlowNest.git",
        live: "https://flow-nest-psi.vercel.app",
      },
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my work and skills.",
      image: "/public/Screenshot 2025-09-25 at 10.27.02 AM.png",
      tech: ["React", "TypeScript", "TailwindCSS", "Vercel"],
      stats: { users: "500+", rating: 4.9, growth: "+100%" },
      links: {
        github: "https://github.com/JeffChisambi/Portfolio-Website.git",
        live: "https://vercel.com/jeffchisambis-projects?repo=https://github.com/JeffChisambi/Portfolio-Website",
      },
      featured: true,
    },
    {
      title: "Farmer App",
      description:
        "An application for farmers to manage their crops and livestock.",
      image: "/public/Screenshot 2025-09-25 at 10.26.13 AM.png",
      tech: ["React", "Firebase", "Vercel"],
      stats: { users: "200+", rating: 4.7, growth: "+50%" },
      links: {
        github: "#",
        live: "https://v0-farmer-app-development.vercel.app/",
      },
      featured: false,
    },
    {
      title: "Learning Platform",
      description:
        "Interactive online education platform with video streaming and progress tracking.",
      image:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Firebase", "WebRTC", "Tailwind"],
      stats: { users: "8k+", rating: 4.9, growth: "+300%" },
      links: { github: "#", live: "#" },
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Folder className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the impact they've made
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="relative">
                      {!imagesLoaded[index] && (
                        <div className="w-full h-80 lg:h-full bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="text-gray-400">Loading...</div>
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          imagesLoaded[index] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(index)}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {project.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="text-sm md:text-lg font-bold text-blue-500">
                              {project.stats.users}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">Users</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm md:text-lg font-bold text-yellow-500">
                              {project.stats.rating}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm md:text-lg font-bold text-emerald-500">
                              {project.stats.growth}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">Growth</div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <a
                          href={project.links.github}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.links.live}
                          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative">
                    {!imagesLoaded[index + 100] && (
                      <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="text-gray-400">Loading...</div>
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-48 object-cover ${
                        imagesLoaded[index + 100] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(index + 100)}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <a
                        href={project.links.github}
                        className="flex items-center justify-center space-x-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.links.live}
                        className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
