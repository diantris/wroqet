'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import diAv from '../public/images/di-av.png';

// --- Main Page ---

export default function ProfessionalPortfolio() {
  const [isVerified, setIsVerified] = useState(false);
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
          <h3 className="text-2xl font-bold mb-1">Your QA/QE/SDET</h3>
          <p className="text-sm text-gray-300 mb-3">Katarzyna Jaworska</p>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Whether I'm on the baize or in the Sprint, I am the guardian of the game's integrity. Just like a snooker referee, as a QA/QE I do more than catch bugs - I manage the "state of the table". I borrow heavily from Product Owner strategy and Scrum Master facilitation to ensure the rules are clear, the environment is stable, the "break" is not interrupted and every delivery is as clinical as a total clearance.
          </p>
        </motion.div>
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-8 md:p-12 flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Exposing critical flaws before your users do.
          </h1>
        </motion.section>

        {/* EXPERIENCE STATS */}
        <div className="grid grid-rows-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-6 flex flex-col items-center justify-center text-center"
          >
            <span className="text-5xl font-bold mb-1">10</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">Years of Experience</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-6 flex flex-col items-center justify-center text-center"
          >
            <span className="text-5xl font-bold text-[#30d158] mb-1">4</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">Years of Automation Focus</span>
          </motion.div>
        </div>

        {/* PRIMARY TECH STACK - Spans multiple rows on the right */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:row-span-4 bg-[#1c1c1e] border border-[#38383a] rounded-[32px] p-8 flex flex-col"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-500 font-bold">Previous_experience_with_tools;</span>
          
          <div className="mt-4 space-y-7 flex-1">
            {/* Strategy & Product */}
            <div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2.5">Strategy & Product</div>
              <div className="flex flex-wrap gap-2">
                {['Jira', 'Confluence', 'Miro', 'Figma', 'Slack', 'Teams'].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-[#2c2c2e] border border-[#38383a] rounded-full text-[10px] text-gray-300 font-medium hover:border-[#30d158]/40 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Engineering & Logic */}
            <div className="mt-7">
              <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2.5">Engineering & Logic</div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'SQL', 'Bash', 'Cucumber/Gherkin', 'VSCode', 'IntelliJ', 'Java'].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-[#2c2c2e] border border-[#38383a] rounded-full text-[10px] text-gray-300 font-medium hover:border-[#30d158]/40 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Modern Automation */}
            <div className="mt-7">
              <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2.5">Modern Automation</div>
              <div className="flex flex-wrap gap-2">
                {['Playwright', 'BrowserStack', 'Xcode', 'Android Studio', 'Firebase', 'Axe'].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-[#2c2c2e] border border-[#38383a] rounded-full text-[10px] text-gray-300 font-medium hover:border-[#30d158]/40 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Network & Security */}
            <div className="mt-7">
              <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2.5">Network & Security</div>
              <div className="flex flex-wrap gap-2">
                {['Postman', 'Swagger', 'Charles Proxy', 'DevTools', 'OWASP 10', 'Kafka'].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-[#2c2c2e] border border-[#38383a] rounded-full text-[10px] text-gray-300 font-medium hover:border-[#30d158]/40 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Ops & Observability */}
            <div className="mt-7">
              <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-2.5">Ops & Observability</div>
              <div className="flex flex-wrap gap-2">
                {['Jenkins', 'CircleCI', 'Docker', 'Dynatrace', 'Kibana', 'Crashlytics'].map(tool => (
                  <span key={tool} className="px-3 py-1 bg-[#2c2c2e] border border-[#38383a] rounded-full text-[10px] text-gray-300 font-medium hover:border-[#30d158]/40 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
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
            Specialisations
            <span className="w-2 h-2 bg-[#30d158] rounded-full animate-pulse" />
          </h3>
          <div className="w-full space-y-2 text-left">
            <div className="flex flex-wrap gap-2">
              {['Exploratory Testing', 'Test Automation', 'UAT Facilitation', 'E2E Testing', 'Shift-Left Approach','Testing Strategy', 'AI-assisted testing', 'Team Leadership'].map((spec) => (
                <span key={spec} className="px-3 py-1 bg-[#30d158]/10 border border-[#30d158]/30 rounded-full text-[10px] text-[#30d158] font-medium hover:border-[#30d158]/60 transition-colors">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* DEFINITION OF DONE - Centerpiece Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`bg-[#1c1c1e] border rounded-[32px] p-8 transition-colors ${isVerified ? 'border-[#30d158]/50' : 'border-[#38383a]'}`}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-500 font-bold mb-4 block">Definition_of_done;</span>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl font-semibold leading-tight transition-colors ${isVerified ? 'text-[#30d158]' : 'text-gray-500'}`}>
              {isVerified ? "...to Verified ✓" : "From Incomplete..."}
            </h3>
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
          <div className={`space-y-2.5 transition-opacity ${isVerified ? 'opacity-100' : 'opacity-60'}`}>
            <div className="flex items-center gap-2.5 text-xs pl-0.5">
              <div className={`h-1.5 w-1.5 rounded-full transition-colors flex-shrink-0 ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              <span className={isVerified ? 'text-gray-300' : 'text-gray-500'}>Traceability: Requirements mapped to test evidence.</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs pl-0.5">
              <div className={`h-1.5 w-1.5 rounded-full transition-colors flex-shrink-0 ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              <span className={isVerified ? 'text-gray-300' : 'text-gray-500'}>Test Proof: Automated and manual suites green.</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs pl-0.5">
              <div className={`h-1.5 w-1.5 rounded-full transition-colors flex-shrink-0 ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              <span className={isVerified ? 'text-gray-300' : 'text-gray-500'}>Contract Validation: No service-to-service "miscues".</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs pl-0.5">
              <div className={`h-1.5 w-1.5 rounded-full transition-colors flex-shrink-0 ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              <span className={isVerified ? 'text-gray-300' : 'text-gray-500'}>Compliance: Axe (A11y) & OWASP 10 verified.</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs pl-0.5">
              <div className={`h-1.5 w-1.5 rounded-full transition-colors flex-shrink-0 ${isVerified ? 'bg-[#30d158]' : 'bg-red-500'}`} />
              <span className={isVerified ? 'text-gray-300' : 'text-gray-500'}>Observability: Telemetry & Logging hooks active.</span>
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
      <footer className="mt-20 text-center text-gray-600 text-[10px]">
        © 2026 Katarzyna Jaworska
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