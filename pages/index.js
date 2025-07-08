import { useState } from 'react';
import { X, Calendar, Video } from 'lucide-react';
import { projectData } from '../data/projects';
import { categoryLinks } from '../data/links';

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
  const getCategoryLinks = (category) => {
    return categoryLinks.find(link => link.category === category) || {};
  };

  const ProjectCard = ({ project, index, openModal }) => (
    <div
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-purple-400/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-purple-500/20"
      onClick={() => openModal(project)}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Live Indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/50">
        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
        <span className="text-xs font-bold text-white">LIVE</span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-w-16 aspect-h-10 overflow-hidden rounded-t-3xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <img
          src={project.poster}
          alt={project.name}
          className="h-[300px] w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
            <span className="text-white font-semibold text-sm">Click to Join Meeting</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
            {project.name}
          </h3>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-purple-300 font-semibold text-base">{project.groupName}</p>
          </div>
        </div>

        {/* Interactive Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm text-gray-300 font-medium">View Details</span>
          </div>

          {/* Meeting Links Indicator */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {/* {project.meetingLinks.map((_, linkIndex) => (
                <div
                  key={linkIndex}
                  className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${linkIndex * 200}ms`
                  }}
                ></div>
              ))} */}
            </div>
            <span className="text-xs text-purple-300 font-semibold">
              {/* {project.meetingLinks.length} Meeting{project.meetingLinks.length > 1 ? 's' : ''} */}
            </span>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-transparent group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-x-hidden from-indigo-900 via-purple-900 to-pink-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-1/4 w-96 max-w-full sm:w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 max-w-full sm:w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Top Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-black/40 via-transparent to-black/40 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-6 py-4 gap-4">
            {/* Left Logo */}
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300">
                <img
                  src="/Picture1.png"
                  alt="UCD Logo"
                  className="h-10 w-auto sm:h-12 filter drop-shadow-lg"
                />
              </div>
            </div>

            {/* Supervisor Section - Responsive */}
            <div className="flex items-center space-x-4 flex-shrink-0 w-full sm:w-auto ml-0 sm:ml-12 lg:ml-36 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg rounded-2xl px-4 sm:px-6 py-3 border border-white/25 shadow-2xl hover:from-white/20 hover:to-white/15 transition-all duration-300">
              <div className="relative">
                <img
                  src="/prof.jpeg"
                  alt="Supervisor"
                  className="h-12 w-12 rounded-full object-cover border-3 border-white/40 shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">Dr. Aaroud Abdessadek</p>
                <p className="text-xs text-purple-200 font-medium">Event Supervisor</p>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex space-x-2 items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300">
                <img
                  src="/023.png"
                  alt="FS Logo"
                  className="h-10 w-auto sm:h-12 filter drop-shadow-lg"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300">
                <img
                  src="/bibda.jpeg"
                  alt="FS Logo"
                  className="h-10 w-auto sm:h-12 filter drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-6 py-32 mx-auto max-w-7xl lg:px-8 pt-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 shadow-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-200 tracking-wide">LIVE EVENT • July 9, 2025</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 sm:text-7xl mb-6 drop-shadow-2xl">
              Innovation Showcase
              <span className="block text-4xl sm:text-6xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-extrabold">
                2025
              </span>
            </h1>

            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl rounded-lg"></div>
              <p className="relative text-xl font-bold tracking-wider text-white bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 shadow-2xl sm:text-2xl">
                UNLOCKING THE POWER OF AI & DEEP LEARNING
              </p>
              <p className="relative text-lg font-semibold text-purple-200 mt-2 tracking-wide">
                A VIRTUAL EVENT HIGHLIGHTING CUTTING-EDGE PROJECTS
              </p>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto font-medium">
              Join us for an exciting online event bringing together researchers, students, professionals, and AI enthusiasts
              to present and explore innovative projects in artificial intelligence and deep learning. This event showcases
              impactful, real-world applications across healthcare, education, agriculture, cryptography, recruitment, and sports analytics.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl hover:from-purple-500 hover:to-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative">Explore Projects</span>
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a href="#projects" className="group text-lg font-semibold text-white hover:text-purple-200 transition-colors duration-300 flex items-center">
                Learn more
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {/* Projects Grid - Categorized by Schedule */}
      <div id="projects" className="relative py-32 px-2 sm:px-6 w-full lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
        <div className="absolute top-20 left-10 w-72 max-w-full sm:w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 max-w-full sm:w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          {/* <div className="mx-auto max-w-4xl text-center mb-20">

            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-full border border-purple-400/30 shadow-2xl">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-bold text-purple-200 tracking-widest uppercase">Live Projects Showcase</span>
            </div>



            <div className="space-y-4 max-w-3xl mx-auto">


              <p className="text-lg text-purple-200 font-medium">
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Click on projects to join live meetings - Participants are waiting for you!
                </span>
              </p>
            </div>
          </div> */}

          <div className="mx-auto max-w-4xl text-center mb-20">
            <h2 className="text-4xl flex-col font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 sm:text-5xl mb-8">
              Event Plan
            </h2>
            <div className="flex-col space-y-2  justify-center gap-4 mb-8">
              {/* Healthcare */}
              <div
                className="flex items-center space-x-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-red-400/30 shadow-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => document.getElementById('category-healthcare').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Healthcare</h3>
                <div className="bg-red-500/20 rounded-full px-4 py-1 border border-red-400/30">
                  <span className="text-red-200 font-semibold text-sm">10:00 - 11:00 AM</span>
                </div>
              </div>
              {/* Education */}
              <div
                className="flex items-center space-x-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-blue-400/30 shadow-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => document.getElementById('category-education').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <div className="bg-blue-500/20 rounded-full px-4 py-1 border border-blue-400/30">
                  <span className="text-blue-200 font-semibold text-sm">11:00 - 11:30 AM</span>
                </div>
              </div>
              {/* Agriculture */}
              <div
                className="flex items-center space-x-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-green-400/30 shadow-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => document.getElementById('category-agriculture').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Agriculture</h3>
                <div className="bg-green-500/20 rounded-full px-4 py-1 border border-green-400/30">
                  <span className="text-green-200 font-semibold text-sm">11:30 - 11:40 AM</span>
                </div>
              </div>
              {/* Cryptography */}
              <div
                className="flex items-center space-x-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-yellow-400/30 shadow-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => document.getElementById('category-cryptography').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Cryptography</h3>
                <div className="bg-yellow-500/20 rounded-full px-4 py-1 border border-yellow-400/30">
                  <span className="text-yellow-200 font-semibold text-sm">11:40 - 11:50 AM</span>
                </div>
              </div>
              {/* Sports & Fitness */}
              <div
                className="flex items-center space-x-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-purple-400/30 shadow-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => document.getElementById('category-sports').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Sports & Fitness</h3>
                <div className="bg-purple-500/20 rounded-full px-4 py-1 border border-purple-400/30">
                  <span className="text-purple-200 font-semibold text-sm">11:50 - 12:10 AM</span>
                </div>
              </div>
              {/* AI for Recruitment */}
              <div
                className="flex items-center space-x-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-teal-400/30 shadow-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => document.getElementById('category-recruitment').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">AI for Recruitment</h3>
                <div className="bg-teal-500/20 rounded-full px-4 py-1 border border-teal-400/30">
                  <span className="text-teal-200 font-semibold text-sm">12:10 - 12:30 PM</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-200 font-medium leading-relaxed">
              Click a category to view its projects and join live meetings!
            </p>
          </div>


          {/* Categories */}
          <div className="space-y-16">
            {/* Healthcare Category */}
            <div id="category-healthcare" className="category-section">
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-red-400/30 shadow-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Healthcare</h3>
                  <div className="bg-red-500/20 rounded-full px-4 py-1 border border-red-400/30">
                    <span className="text-red-200 font-semibold text-sm">10:00 - 10:50</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {projectData.filter(project => project.category === "Healthcare").map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
                ))}
              </div>
            </div>

            {/* Education Category */}
            <div id="category-education" className="category-section">
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-blue-400/30 shadow-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Education</h3>
                  <div className="bg-blue-500/20 rounded-full px-4 py-1 border border-blue-400/30">
                    <span className="text-blue-200 font-semibold text-sm">10:50 - 11:10</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {projectData.filter(project => project.category === "Education").map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
                ))}
              </div>
            </div>

            {/* Agriculture Category */}
            <div id="category-agriculture" className="category-section">
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-green-400/30 shadow-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Agriculture</h3>
                  <div className="bg-green-500/20 rounded-full px-4 py-1 border border-green-400/30">
                    <span className="text-green-200 font-semibold text-sm">11:10 - 11:20</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {projectData.filter(project => project.category === "Agriculture").map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
                ))}
              </div>
            </div>

            {/* Cryptography Category */}
            <div id="category-cryptography" className="category-section">
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-yellow-400/30 shadow-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Cryptography</h3>
                  <div className="bg-yellow-500/20 rounded-full px-4 py-1 border border-yellow-400/30">
                    <span className="text-yellow-200 font-semibold text-sm">11:20 - 11:30</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {projectData.filter(project => project.category === "Cryptography").map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
                ))}
              </div>
            </div>

            {/* Sports & Fitness Category */}
            <div id="category-sports" className="category-section">
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-purple-400/30 shadow-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Sports & Fitness</h3>
                  <div className="bg-purple-500/20 rounded-full px-4 py-1 border border-purple-400/30">
                    <span className="text-purple-200 font-semibold text-sm">11:30 - 11:50</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {projectData.filter(project => project.category === "Sports & Fitness").map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
                ))}
              </div>
            </div>

            {/* AI for Recruitment Category */}
            <div id="category-recruitment" className="category-section">
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl px-6 py-3 border border-teal-400/30 shadow-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">AI for Recruitment</h3>
                  <div className="bg-teal-500/20 rounded-full px-4 py-1 border border-teal-400/30">
                    <span className="text-teal-200 font-semibold text-sm">11:50 - 12:10</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {projectData.filter(project => project.category === "AI for Recruitment").map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} openModal={openModal} />
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-purple-400/30 shadow-2xl">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-white font-semibold text-lg">
                All projects are live and ready for interaction!
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 overflow-x-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-1/3 w-72 max-w-full sm:w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 max-w-full sm:w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {/* Contact Us Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a href="mailto:contact@innovationshowcase.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                      bibda2025@innovationshowcase.space
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <p className="text-purple-300">+212 6 91 56 86 69</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-purple-300">Faculty of Sciences El Jadida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Team Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Organization Team
              </h3>
              <div className="space-y-4">
                <p className="text-white font-semibold">Hafsa Rouchdi</p>
                <p className="text-white font-semibold">Garrad Hicham</p>
                <p className="text-white font-semibold">Mohammed Mechdoud</p>
                <p className="text-white font-semibold">Oumaima Monsif</p>
                <p className="text-white font-semibold">HAMMOUDI Salah-eddine</p>
                <p className="text-white font-semibold">Douha Tissir</p>


              </div>
            </div>

            {/* Developed By Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Developed By
              </h3>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Hicham Garrad</h4>

                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:hichamgarrad21@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                        hichamgarrad21@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+212691568669" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                        +212 6 91568669
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <img src="/logo_UCD.png" alt="UCD Logo" className="h-8 w-auto opacity-80" />
                <div className="w-px h-8 bg-white/20"></div>
                <img src="/logo_FS.png" alt="FS Logo" className="h-8 w-auto opacity-80" />
              </div>
              <div className="text-center sm:text-right">
                <p className="text-gray-400 text-sm">
                  © 2025 Innovation Showcase. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Powered by AI & Deep Learning Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
                    {(() => {
                      const links = getCategoryLinks(selectedProject.category);
                      return (
                        <>
                          {links.link1 && (
                            <a
                              href={links.link1}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group mb-2"
                            >
                              <div className="flex items-center">
                                <Calendar className="h-5 w-5 text-white mr-3" />
                                <span className="text-white font-medium">Primary Meeting</span>
                              </div>
                              <div className="text-right">
                                <div className="text-white text-sm">Join</div>
                              </div>
                            </a>
                          )}
                          {links.link2 && (
                            <a
                              href={links.link2}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group"
                            >
                              <div className="flex items-center">
                                <Calendar className="h-5 w-5 text-white mr-3" />
                                <span className="text-white font-medium">Secondary Meeting</span>
                              </div>
                              <div className="text-right">
                                <div className="text-white text-sm">Join</div>
                              </div>
                            </a>
                          )}
                        </>
                      );
                    })()}
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