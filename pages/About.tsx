
import React from 'react';
import { NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="space-y-12">
        <header className="space-y-4 text-center">
          <h2 className="text-nude-400 text-sm font-semibold tracking-widest uppercase animate-fade-in">The Story</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-nude-900 tracking-tight">About Me</h1>
          <div className="w-20 h-1.5 bg-nude-400 mx-auto rounded-full"></div>
        </header>

        <div className="space-y-8 text-nude-900/80 leading-relaxed text-xl font-light">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-nude-900 first-letter:mr-3 first-letter:float-left">
            My journey began in the world of <strong>IT Network Design and Administration</strong>, where I developed a deep appreciation for the architecture and integrity of technical systems. Managing complex network environments taught me the value of scalability, security, and precision—skills that became the bedrock of my transition into data science.
          </p>
          <p>
            As I advanced in my career, I grew fascinated by the data flowing through those networks. This curiosity led me to embark on an intensive <strong>AI / ML Bootcamp</strong>, where I translated my administrative background into a passion for predictive modeling, computer vision, and natural language processing.
          </p>
          <p>
            Today, I specialize in building intelligent solutions that aren't just technically sound but also strategically viable. My dual-background allows me to understand both the infrastructure requirements and the algorithmic complexity needed to deliver enterprise-grade AI applications.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-nude-200">
           <div className="bg-nude-200/50 p-8 rounded-3xl border border-nude-300/20">
              <h4 className="font-bold text-nude-900 text-lg mb-2">Primary Focus</h4>
              <p className="text-nude-900/60">Artificial Intelligence, Machine Learning, Data Analytics, and Enterprise Networking.</p>
           </div>
           <div className="bg-nude-200/50 p-8 rounded-3xl border border-nude-300/20">
              <h4 className="font-bold text-nude-900 text-lg mb-2">Technical Education</h4>
              <p className="text-nude-900/60">Diploma in IT Network Design & Administration from CTU Training Solutions.</p>
           </div>
        </div>

        <div className="text-center pt-8">
          <blockquote className="text-2xl font-serif italic text-nude-400">
            "Bridging the gap between stable infrastructure and intelligent algorithms."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
