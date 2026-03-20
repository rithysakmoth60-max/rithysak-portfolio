import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const nameBlur = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white pb-20 overflow-hidden">
      
      {/* NAVBAR */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 py-4 flex justify-between items-center"
      >
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl font-black tracking-tighter"
          style={{ color: "#ffffff", textShadow: "0px 0px 10px rgba(255,255,255,0.4)" }}
        >
          MOTH<span className="text-indigo-500" style={{ textShadow: "none" }}>.DEV</span>
        </motion.h1>
        
        <div className="space-x-6 text-sm font-bold text-slate-400">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex-1 text-center md:text-left">
          
          <motion.p variants={fadeUp} className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-3">
            Hi, my name is
          </motion.p>
          
          <motion.h2 
            variants={nameBlur} 
            className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
            style={{ color: "#ffffff", textShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
          >
            Moth Rithysak.
          </motion.h2>
          
          <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-500 mb-6 tracking-tight">
            I build scalable web & backend systems.
          </motion.h3>
          
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
            I am a 21-year-old <span className="text-white font-bold">Software Engineering</span> student at BELTEI International University actively seeking a <span className="text-white font-bold">Backend Developer Internship</span>. While I am looking for my first official tech role, I don't just study theory—I spend my free time engineering complex, full-stack systems like ACID-compliant banking APIs and retail platforms.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a href="#projects" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1">
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        {/* PROFILE PHOTO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} 
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="shrink-0 relative group"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 bg-indigo-500 rounded-3xl translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
          ></motion.div>
          <motion.img 
            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            src="/sak.jpg" alt="Moth Rithysak" 
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border-2 border-slate-800 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </header>

      {/* ABOUT & EXPERIENCE SECTION */}
      <motion.section 
        id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/50"
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="text-indigo-500">01.</span> Domain Background
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              As a 4th-year student seeking my first software engineering internship, I bring something highly valuable to the table: <span className="text-white font-bold">real-world business domain knowledge</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My current role in <span className="text-white font-bold">Accounting at the SERC</span> taught me the strict rules of financial data, which is exactly what enabled me to engineer a secure, deadlock-proof Banking API. Previously, working as a <span className="text-white font-bold">Stock Officer at Lucky Supermarket</span> gave me a deep understanding of retail inventory, which directly inspired the architecture of my Zando E-commerce clone. I don't just write code; I understand the real-world business problems my code needs to solve.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="text-indigo-500">02.</span> Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Backend & APIs</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>Python (FastAPI)</li>
                  <li>Java & C#.net</li>
                  <li>RESTful Architecture</li>
                  <li>JWT Security</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Databases</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>PostgreSQL (Async)</li>
                  <li>MySQL</li>
                  <li>MS SQL Server</li>
                  <li>Oracle (PL/SQL)</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Web & Mobile</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>React.js & Vite</li>
                  <li>TypeScript / JS</li>
                  <li>Flutter (Mobile)</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Tools & DevOps</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>Docker Containerization</li>
                  <li>Git & GitHub</li>
                  <li>Pytest (Automated QA)</li>
                  <li>Alembic Migrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FEATURED PROJECTS SECTION */}
      <motion.section 
        id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/50"
      >
        <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
          <span className="text-indigo-500">03.</span> Featured Projects
        </h3>
        
        <div className="space-y-16">
          
          {/* PROJECT 1: CORE BANKING API */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8 flex flex-col hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="flex flex-col lg:flex-row gap-10 items-center mb-10">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
                <div className="col-span-2 aspect-[16/9] bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-950 z-0"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-indigo-400 font-mono text-sm mb-2">/api/v1/transactions</div>
                    <div className="text-2xl font-black text-white tracking-widest">$500.00</div>
                    <div className="text-xs text-slate-500 mt-2 uppercase">Secure Transfer Protocol</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-2">High-Performance Backend</h4>
                <h5 className="text-3xl font-black text-white mb-4">Core Banking API System</h5>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  An internship-grade, ACID-compliant banking backend designed to handle highly concurrent financial transactions. Engineered to strictly prevent database deadlocks and race conditions using row-level locking. Includes a modern React/Vite dashboard for observability.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">FastAPI</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">PostgreSQL</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">React + Vite</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">JWT Security</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">Docker</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">Pytest</span>
                </div>
                
                <a href="https://github.com/rithysakmoth60-max/core-banking-system" target="_blank" rel="noreferrer" className="text-white font-bold text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                  View GitHub Repository
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2: ZANDO CLONE */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8 flex flex-col hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/10">
            <div className="flex flex-col lg:flex-row gap-10 items-center mb-10">
              <div className="w-full lg:w-1/2 aspect-video bg-black rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden group p-0 relative shadow-inner">
                 <video 
                   src="/project-demo.mp4" 
                   autoPlay loop muted playsInline
                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
              </div>
              
              <div className="flex-1">
                <h4 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-2">Full-Stack Ecosystem</h4>
                <h5 className="text-3xl font-black text-white mb-4">Zando E-Commerce Clone</h5>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  A production-ready retail ecosystem built entirely from scratch. Features a modern React web storefront and a Flutter admin dashboard, connected to a highly scalable Python FastAPI backend. Integrated with Relational Databases for inventory management, Firebase for secure authentication, and Stripe for payment processing.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">React</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">Flutter</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">FastAPI</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">MySQL</span>
                  <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800">Firebase</span>
                </div>
                
                <a href="https://zando-storefront.vercel.app" target="_blank" rel="noreferrer" className="text-white font-bold text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                  View Live Web Storefront Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest text-center md:text-left">System Architecture</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                  <img src="/customer.png" alt="React Storefront" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">React Store</p>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                  <img src="/admin.png" alt="Flutter Admin Dashboard" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">Flutter Admin</p>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                  <img src="/firebase.png" alt="Firebase Authentication" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">Firebase Auth</p>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                  <img src="/payment.png" alt="Stripe Payment Processing" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">Stripe API</p>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group col-span-2 md:col-span-1">
                  <img src="/api.png" alt="Python FastAPI Backend" className="object-cover object-left w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">FastAPI</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}
        className="max-w-3xl mx-auto px-6 py-32 text-center"
      >
        <h3 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-3">04. What's Next?</h3>
        <h4 className="text-4xl md:text-5xl font-black text-white mb-6">Get In Touch</h4>
        <p className="text-slate-400 mb-10 text-lg">
          I am actively looking to bring my clean code, backend system design skills, and cross-platform experience to your engineering team. My inbox is always open.
        </p>
        
        {/* THE QR CODE */}
        <div className="mb-10 flex justify-center">
          <div className="bg-white p-2 rounded-3xl shadow-[0_0_30px_rgba(42,171,238,0.15)] hover:scale-105 transition-transform duration-300">
            {/* Reads the tg-qr.jpg file from your public folder */}
            <img src="/tg-qr.jpg" alt="Scan to message on Telegram" className="w-48 h-48 rounded-2xl object-cover" />
          </div>
        </div>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          
          {/* EMAIL BUTTON */}
          <a href="mailto:Rithysakmoth60@gmail.com" className="flex items-center gap-3 border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 hover:text-white transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Email Me
          </a>

          {/* TELEGRAM BUTTON */}
          <a href="https://t.me/RITHYSAKMOTH" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-2 border-[#2AABEE] text-[#2AABEE] px-8 py-4 rounded-xl font-bold hover:bg-[#2AABEE] hover:text-white transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(42,171,238,0.3)]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"></path></svg>
            Telegram
          </a>
          
        </div>
      </motion.section>

    </div>
  );
}

export default App;