
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-16 space-y-4 max-w-2xl">
        <h2 className="text-nude-400 text-sm font-semibold tracking-widest uppercase">Competencies</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-nude-900">Technical Expertise</h1>
        <p className="text-nude-900/60 text-lg">
          A comprehensive overview of my technical toolkit, ranging from core programming to advanced AI and cloud infrastructure.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name} className="bg-nude-200 p-8 rounded-3xl space-y-6 hover:shadow-lg transition-shadow border border-nude-300/20">
            <h3 className="text-xl font-bold text-nude-900 border-b border-nude-300/50 pb-4">{category.name}</h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => {
                if (typeof skill === 'string') {
                  return (
                    <span key={idx} className="px-4 py-2 bg-nude-100 text-nude-900 rounded-full text-sm font-medium border border-nude-300/30">
                      {skill}
                    </span>
                  );
                } else {
                  return (
                    <div key={idx} className="w-full space-y-1 mt-2">
                       <span className="block font-bold text-nude-900 text-sm">{skill.name}</span>
                       <p className="text-nude-900/60 text-xs leading-relaxed">{skill.description}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
