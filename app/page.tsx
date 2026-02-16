'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import diAv from '../public/images/di-av.png';

// --- Components & Icons ---

const PlaywrightTSLogo = () => (
  <div className="flex items-center gap-2 text-[#30d158]">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
    </svg>
    <span className="text-2xl font-bold tracking-tighter text-white">TS</span>
  </div>
);

// --- Main Page ---

export default function ProfessionalPortfolio() {
  const [isVerified, setIsVerified] = useState(false);

  const secondaryTools = ['Jenkins', 'JMeter', 'Postman', 'Git/Bitbucket', 'Docker', 'Xray', 'Jira'];
  const projectTypes = ['Mobile Apps', 'Web Pages', 'Standalone Software', 'SaaS', 'CRM Systems', 'Enterprise Solutions'];

  return (
    <main className="min-h-screen bg-[#000000] text-white p-4 md:p-12 lg:p-20 selection:bg-[#30d158]/30 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* YOUR QA/QE PROFILE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:row-span-2 bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-8 flex flex-col items-center text-center"
        >
          <div className="mb-6 relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#30d158] to-[#1c1c1e] border-2 border-[#38383a] overflow-hidden flex-shrink-0 relative">
              <Image src={diAv} alt="Profile photo" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#30d158] rounded-full border-2 border-[#000000]" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Your QA/QE Profile</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Replace this with your professional photo and bio. Showcase your expertise and personality.
          </p>
          <div className="w-full space-y-2 text-left">
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Specializations</div>
            <div className="flex flex-wrap gap-2">
              {['Test Automation', 'Quality Strategy', 'Team Leadership'].map((spec) => (
                <span key={spec} className="px-3 py-1 bg-[#30d158]/10 border border-[#30d158]/30 rounded-full text-[10px] text-[#30d158] font-medium">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-8 md:p-12 flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Exposing critical flaws before your users do.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            10 years of precision testing. 4 years of deep automation. 
            Integrating quality into your Definition of Done.
          </p>
        </motion.section>

        {/* EXPERIENCE STATS */}
        <div className="grid grid-rows-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-6 flex flex-col items-center justify-center text-center"
          >
            <span className="text-5xl font-bold mb-1">10</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">Years Experience</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-6 flex flex-col items-center justify-center text-center"
          >
            <span className="text-5xl font-bold text-[#30d158] mb-1">4</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">Automation Focus</span>
          </motion.div>
        </div>

        {/* PRIMARY TECH STACK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-8"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Primary Engine</span>
          <div className="mt-6 mb-8">
            <PlaywrightTSLogo />
            <p className="text-sm text-gray-400 mt-2">End-to-end type-safe automation.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {secondaryTools.map(tool => (
              <span key={tool} className="px-3 py-1 bg-black/50 border border-[#38383a] rounded-full text-[10px] text-gray-400 font-medium">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* AI-POWERED TESTING */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] border border-[#38383a] rounded-[32px] p-8 relative overflow-hidden group"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#30d158] opacity-[0.03] blur-3xl group-hover:opacity-10 transition-opacity" />
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            AI-Powered Testing
            <span className="w-2 h-2 bg-[#30d158] rounded-full animate-pulse" />
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Utilizing LLMs for autonomous test data generation and self-healing selector strategies.
          </p>
        </motion.div>

        {/* THE EVIDENCE GATE (Toggle Component) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">The Standard</span>
            <button 
              onClick={() => setIsVerified(!isVerified)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isVerified ? 'bg-[#30d158]' : 'bg-[#3a3a3c]'}`}
            >
              <motion.span 
                animate={{ x: isVerified ? 22 : 4 }}
                className="h-4 w-4 rounded-full bg-white shadow-lg"
              />
            </button>
          </div>
          <h3 className="text-xl font-semibold mb-4 leading-tight">
            {isVerified ? "Verified Definition of Done" : "Incomplete PR Evidence"}
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className={`h-1.5 w-1.5 rounded-full ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              Verifiable Test Proof
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className={`h-1.5 w-1.5 rounded-full ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              CI/CD Pipeline Green
            </div>
          </div>
        </motion.div>

        {/* PROJECT VARIETY MARQUEE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-3 mt-4 py-8 border-y border-[#1c1c1e] overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {[...projectTypes, ...projectTypes].map((type, i) => (
              <span key={i} className="text-sm font-bold uppercase tracking-[0.3em] text-gray-700">
                {type}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-gray-600 text-[10px] uppercase tracking-widest">
        Available for Selective High-Impact Projects • 2026
      </footer>

      {/* MARQUEE STYLES */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </main>
  );
}