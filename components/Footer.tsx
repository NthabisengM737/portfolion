
import React from 'react';
import { NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nude-100 py-12 border-t border-nude-200 no-print">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-nude-900/60 text-sm">
          &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
        <p className="text-nude-400 text-xs mt-2 font-medium uppercase tracking-widest">
          AI / ML & IT Professional
        </p>
      </div>
    </footer>
  );
};

export default Footer;
