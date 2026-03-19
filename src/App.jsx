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
            I build scalable web & mobile solutions.
          </motion.h3>
          
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
            I am a 21-year-old software developer and a 4th-year <span className="text-white font-bold">Software Engineering</span> student at BELTEI International University. 
            I am currently seeking a <span className="text-white font-bold">Intern back-end Developer at your company</span> to apply my cross-platform skills in a fast-paced e-commerce environment.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a href="#projects" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1">
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        {/* PROFILE PHOTO WITH FLOAT ANIMATION */}
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
              <span className="text-indigo-500">01.</span> Background
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              As a 4th-year <span className="text-white font-bold">Software Engineering</span> student, I bring a unique blend of business domain knowledge and technical self-reliance. While I am seeking my first official role in software development, my professional background gives me a distinct advantage in building e-commerce systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              As a former <span className="text-white font-bold">Stock Officer at Lucky Supermarket</span>, I gained a deep, hands-on understanding of retail inventory logic and supply chains. In my current <span className="text-white font-bold">Accounting role at the SERC</span>, I have honed my extreme attention to detail and secure financial processing. This journey has developed my strong written and verbal communication skills <span className="text-white font-bold">(English: Upper Intermediate)</span>. I successfully merge this business knowledge with my technical skills to <span className="text-white font-bold">independently design and build full-stack retail applications.</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="text-indigo-500">02.</span> Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Languages</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>Java & C#.net</li>
                  <li>JavaScript (JS)</li>
                  <li>HTML & CSS</li>
                  <li>Dart & Python</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Databases</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>Relational Databases</li>
                  <li>MySQL</li>
                  <li>MS SQL Server</li>
                  <li>Oracle (PL/SQL)</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Web & Mobile</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>Flutter (Mobile App)</li>
                  <li>React.js (Web)</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive UI</li>
                </ul>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Tools</h4>
                <ul className="text-slate-400 text-xs font-medium space-y-1.5">
                  <li>Microsoft Visual Studio</li>
                  <li>Firebase & Stripe</li>
                  <li>FastAPI</li>
                  <li>Vercel / Cloud</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FEATURED PROJECT SECTION */}
      <motion.section 
        id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/50"
      >
        <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
          <span className="text-indigo-500">03.</span> Featured Projects
        </h3>
        
        {/* MAIN PROJECT CARD */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 md:p-8 flex flex-col hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/10">
          
          {/* TOP: VIDEO & TEXT */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-10">
            {/* AUTOPLAYING VIDEO */}
            <div className="w-full lg:w-1/2 aspect-video bg-black rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden group p-0 relative shadow-inner">
               <video 
                 src="/project-demo.mp4" 
                 autoPlay loop muted playsInline
                 className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            </div>
            
            {/* DESCRIPTION */}
            <div className="flex-1">
              <h4 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-2">Full-Stack Ecosystem</h4>
              <h5 className="text-3xl font-black text-white mb-4">Zando E-Commerce Clone</h5>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A production-ready retail ecosystem built entirely from scratch. Features a modern React web storefront and a Flutter admin dashboard, connected to a highly scalable Python FastAPI backend. Integrated with Relational Databases for inventory management, Firebase for secure authentication, and Stripe for payment processing.
              </p>
              
              {/* 👇 UPDATED SKILL TAGS (Firebase added!) 👇 */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 shadow-sm">React</span>
                <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 shadow-sm">Flutter</span>
                <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 shadow-sm">FastAPI</span>
                <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 shadow-sm">MySQL</span>
                <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 shadow-sm">Firebase</span>
                <span className="bg-slate-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-800 shadow-sm">Stripe API</span>
              </div>
              
              <a href="https://zando-storefront.vercel.app" target="_blank" rel="noreferrer" className="text-white font-bold text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors" style={{ textShadow: "0px 0px 8px rgba(255,255,255,0.3)" }}>
                View Live Web Storefront Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>
          </div>

          {/* BOTTOM: SYSTEM ARCHITECTURE GALLERY (NOW 5 IMAGES!) */}
          <div className="border-t border-slate-800 pt-8">
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest text-center md:text-left">System Architecture</h4>
            {/* 👇 Updated grid to 5 columns 👇 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              
              {/* IMAGE 1: React Customer */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                <img src="/customer.png" alt="React Storefront" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">React Storefront</p>
              </div>

              {/* IMAGE 2: Flutter Admin */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                <img src="/admin.png" alt="Flutter Admin Dashboard" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">Flutter Admin</p>
              </div>

              {/* IMAGE 3: Firebase Auth (NEW!) */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                <img src="/firebase.png" alt="Firebase Authentication" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">Firebase Auth</p>
              </div>

              {/* IMAGE 4: Stripe Payment */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group">
                <img src="/payment.png" alt="Stripe Payment Processing" className="object-cover object-top w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">Stripe Checkout</p>
              </div>

              {/* IMAGE 5: FastAPI Backend */}
              <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-700 relative group col-span-2 md:col-span-1">
                <img src="/api.png" alt="Python FastAPI Backend" className="object-cover object-left w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <p className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold text-white tracking-wide">FastAPI Backend</p>
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
          I am actively looking to bring my clean code, independent problem-solving skills, and cross-platform (Web & Mobile) experience to the Zando team. My inbox is always open.
        </p>
        <a href="mailto:your.email@example.com" className="inline-block border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 hover:text-white transition-all hover:-translate-y-1 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          Say Hello
        </a>
      </motion.section>

    </div>
  );
}

export default App;