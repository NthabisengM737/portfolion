
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-nude-100 flex items-center justify-center z-[100] transition-opacity duration-1000">
      <div className="relative">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-nude-900 animate-pulse">
          NM<span className="text-nude-400">.</span>
        </h1>
        <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-nude-400/20">
          <div className="h-full bg-nude-400 animate-[loading_2s_ease-in-out]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
