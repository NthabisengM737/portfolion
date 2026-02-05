
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-16 space-y-4 text-center max-w-3xl mx-auto">
        <h2 className="text-nude-400 text-sm font-semibold tracking-widest uppercase">Portfolio</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-nude-900">Graduation Showcase</h1>
        <p className="text-nude-900/60 text-lg leading-relaxed">
          Four distinct projects demonstrating technical proficiency in AI, Machine Learning, and complex software engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-nude-200 rounded-[2.5rem] overflow-hidden group border border-nude-300/30 flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="p-8 md:p-12 space-y-8 flex-grow">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-nude-900 group-hover:text-nude-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-nude-900/80 leading-relaxed italic border-l-2 border-nude-400 pl-4">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold text-nude-900 tracking-wider">The Problem Statement</h4>
                  <p className="text-nude-900/70 text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs uppercase font-bold text-nude-900 tracking-wider mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-[10px] bg-nude-100 px-2 py-1 rounded text-nude-900/60 font-mono">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-nude-900 tracking-wider mb-2">Key Concepts</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.concepts.map(concept => (
                        <span key={concept} className="text-[10px] bg-nude-400/10 px-2 py-1 rounded text-nude-400 font-bold uppercase">{concept}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold text-nude-900 tracking-wider">Challenges & Solutions</h4>
                  <p className="text-nude-900/70 text-sm leading-relaxed italic">"{project.challenges}"</p>
                </div>

                <div className="space-y-1">
                   <h4 className="text-xs uppercase font-bold text-nude-900 tracking-wider">Results / Outcomes</h4>
                   <p className="text-nude-400 font-bold text-sm tracking-tight">{project.outcomes}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-nude-900/5 flex flex-col sm:flex-row gap-4 mt-auto">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-4 bg-nude-900 text-nude-100 rounded-full text-sm font-bold hover:bg-nude-400 transition-all transform hover:-translate-y-1"
                >
                  GitHub Repository
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-4 border border-nude-900 text-nude-900 rounded-full text-sm font-bold hover:bg-nude-100 transition-all transform hover:-translate-y-1"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
