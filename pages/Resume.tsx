
import React from 'react';
import { NAME, CONTACT_INFO, SKILL_CATEGORIES } from '../constants';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Triggers the browser's print dialog which allows "Save as PDF"
    window.print();
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 no-print">
        <h1 className="text-4xl font-bold text-nude-900">Professional Resume</h1>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-nude-900 text-nude-100 rounded-full font-semibold hover:bg-nude-400 transition-colors shadow-lg"
          title="Print or Save as PDF"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm border-t-8 border-nude-900 font-serif text-gray-800 printable-area">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 border-b-2 border-gray-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-nude-900 tracking-tight">{NAME}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 font-sans">
            <span>{CONTACT_INFO.email}</span>
            <span>•</span>
            <span>{CONTACT_INFO.homePhone}</span>
            <span>•</span>
            <span>Johannesburg, South Africa</span>
          </div>
          <div className="flex justify-center gap-6 text-sm text-nude-400 font-semibold font-sans uppercase tracking-widest">
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Summary */}
          <section>
            <h2 className="text-lg font-bold text-nude-900 uppercase tracking-widest border-l-4 border-nude-400 pl-4 mb-4 font-sans">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-gray-700 italic">
              Results-driven professional with a strong foundation in IT Network Design and Administration, now specialized in AI/ML solutions. Proven ability to translate complex business problems into technical roadmaps using predictive modeling, computer vision, and NLP. Adept at bridging the gap between infrastructure stability and algorithmic intelligence to drive technical excellence.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              {/* Experience */}
              <section className="space-y-6">
                <h2 className="text-lg font-bold text-nude-900 uppercase tracking-widest border-l-4 border-nude-400 pl-4 mb-4 font-sans">Experience</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">IT Support Associate</h3>
                      <p className="text-gray-600 text-sm">CAPACITI</p>
                    </div>
                    <span className="text-xs font-semibold text-nude-400 font-sans">Nov 2024 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-2">
                    <li>Provide mission-critical technical support for diverse IT infrastructures.</li>
                    <li>Collaborate on systems optimization and network security protocols.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">Electoral Officer</h3>
                      <p className="text-gray-600 text-sm">Independent Electoral Commission</p>
                    </div>
                    <span className="text-xs font-semibold text-nude-400 font-sans">May 29, 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-2">
                    <li>Managed data integrity and operational transparency for national election processes.</li>
                    <li>Ensured strict adherence to technical and regulatory compliance standards.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">Work Integrated Learning (WIL) Project</h3>
                      <p className="text-gray-600 text-sm">CTU: Training Solutions</p>
                    </div>
                    <span className="text-xs font-semibold text-nude-400 font-sans">Oct 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-2">
                    <li>Developed comprehensive network design strategies for simulated enterprise environments.</li>
                    <li>Executed end-to-end infrastructure testing and documentation.</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="space-y-6">
                <h2 className="text-lg font-bold text-nude-900 uppercase tracking-widest border-l-4 border-nude-400 pl-4 mb-4 font-sans">Education</h2>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-gray-900">Diploma in IT Network Design & Administration</h3>
                    <span className="text-xs font-semibold text-nude-400 font-sans">Graduated: May 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm">CTU: Training Solutions (2021 – 2023)</p>
                </div>
              </section>
            </div>

            <div className="space-y-12">
              {/* Skills Sidebar */}
              <section className="space-y-6">
                 <h2 className="text-lg font-bold text-nude-900 uppercase tracking-widest border-l-4 border-nude-400 pl-4 mb-4 font-sans">Skills</h2>
                 {SKILL_CATEGORIES.map(cat => (
                   <div key={cat.name} className="space-y-2">
                      <h4 className="text-xs font-bold text-nude-400 uppercase tracking-tight">{cat.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((s, idx) => (
                          <span key={idx} className="text-[10px] text-gray-700 font-sans border border-gray-100 px-2 py-1 bg-gray-50">
                            {typeof s === 'string' ? s : s.name}
                          </span>
                        ))}
                      </div>
                   </div>
                 ))}
              </section>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-12 text-nude-900/40 text-xs font-sans no-print italic">
        This document is optimized for Applicant Tracking Systems (ATS) and professional evaluation.
      </p>
    </div>
  );
};

export default Resume;
