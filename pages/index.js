import { useState } from 'react';
import { X, Calendar, Video } from 'lucide-react';
import { projectData } from '../data/projects';

export default function EventWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Innovation Showcase 2025
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Join us for an extraordinary event showcasing cutting-edge projects and innovative solutions.
              Discover groundbreaking ideas from talented teams and connect with the future of technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300">
                Explore Projects
              </button>
              <a href="#projects" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div id="projects" className="py-24 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover innovative solutions from our talented participants
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(project)}
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={project.poster}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-indigo-300 font-medium mb-4">{project.groupName}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Click to view details</span>
                  <div className="flex space-x-1">
                    {project.meetingLinks.map((_, index) => (
                      <div key={index} className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
              onClick={closeModal}
            ></div>

            <div className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
              <div className="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  className="rounded-md bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={closeModal}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="w-full">
                  <div className="mb-6">
                    <img
                      src={selectedProject.poster}
                      alt={selectedProject.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h3>
                  <p className="text-indigo-300 font-medium mb-4 text-lg">
                    {selectedProject.groupName}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Video className="h-5 w-5 mr-2" />
                      Meeting Sessions
                    </h4>
                    {selectedProject.meetingLinks.map((meeting, index) => (
                      <a
                        key={index}
                        href={meeting.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group"
                      >
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-white mr-3" />
                          <span className="text-white font-medium">{meeting.title}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm">{meeting.time}</div>
                          <div className="text-indigo-200 text-xs">{meeting.date}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mb-6 mt-8">
                    <h4 className="text-lg font-semibold text-white mb-2">Abstract</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.abstract}
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}