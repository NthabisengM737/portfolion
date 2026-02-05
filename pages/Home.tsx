
import React from 'react';
import { Link } from 'react-router-dom';
import { NAME, TITLE, TAGLINE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <p className="text-nude-400 font-medium tracking-[0.2em] uppercase text-sm animate-fade-in">
            Welcome to my Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-nude-900 tracking-tight">
            {NAME}
          </h1>
          <h2 className="text-xl md:text-2xl text-nude-900/70 font-light max-w-2xl mx-auto">
            {TITLE}
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-nude-900/60 max-w-xl mx-auto leading-relaxed italic">
          "{TAGLINE}"
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-nude-900 text-nude-100 rounded-full font-medium transition-all hover:bg-nude-400 hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-4 border border-nude-900 text-nude-900 rounded-full font-medium transition-all hover:bg-nude-200 hover:border-nude-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-px h-12 bg-nude-400/50 mx-auto"></div>
      </div>
    </div>
  );
};

export default Home;
