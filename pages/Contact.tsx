
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-16 space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-nude-400 text-sm font-semibold tracking-widest uppercase">Connectivity</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-nude-900">Get in Touch</h1>
        <p className="text-nude-900/60 text-lg">
          I'm currently open to new opportunities in AI / ML, Data Science, and IT infrastructure. Let's start a conversation.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-nude-900">Direct Contact</h3>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.homePhone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center group-hover:bg-nude-400 transition-colors">
                  <svg className="w-5 h-5 text-nude-900 group-hover:text-nude-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                   <p className="text-xs font-bold text-nude-400 uppercase tracking-widest">Home Call</p>
                   <p className="text-nude-900 font-medium">{CONTACT_INFO.homePhone}</p>
                </div>
              </a>
              <a href={`tel:${CONTACT_INFO.workPhone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center group-hover:bg-nude-400 transition-colors">
                  <svg className="w-5 h-5 text-nude-900 group-hover:text-nude-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                   <p className="text-xs font-bold text-nude-400 uppercase tracking-widest">Work Call</p>
                   <p className="text-nude-900 font-medium">{CONTACT_INFO.workPhone}</p>
                </div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center group-hover:bg-nude-400 transition-colors">
                  <svg className="w-5 h-5 text-nude-900 group-hover:text-nude-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                   <p className="text-xs font-bold text-nude-400 uppercase tracking-widest">Email Address</p>
                   <p className="text-nude-900 font-medium">{CONTACT_INFO.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-nude-900">Social Presence</h3>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 bg-nude-200 text-nude-900 rounded-2xl font-bold hover:bg-nude-400 hover:text-nude-100 transition-all">
                LinkedIn
              </a>
              <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 bg-nude-200 text-nude-900 rounded-2xl font-bold hover:bg-nude-400 hover:text-nude-100 transition-all">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-nude-200 rounded-[2.5rem] p-8 md:p-12 border border-nude-300/30">
          <h3 className="text-3xl font-bold text-nude-900 mb-8">Send a Message</h3>
          
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <p className="text-2xl font-bold text-nude-900">Message Sent!</p>
              <p className="text-nude-900/60">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-nude-900 uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-nude-100 border border-nude-300/50 rounded-2xl p-4 focus:ring-2 focus:ring-nude-400 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-nude-900 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-nude-100 border border-nude-300/50 rounded-2xl p-4 focus:ring-2 focus:ring-nude-400 outline-none transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-nude-900 uppercase tracking-widest">Your Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-nude-100 border border-nude-300/50 rounded-2xl p-4 focus:ring-2 focus:ring-nude-400 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-nude-900 text-nude-100 rounded-full font-bold text-lg hover:bg-nude-400 hover:scale-[1.02] transition-all shadow-xl"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
