"use client";
import React, { useState, useEffect } from 'react';
import { 
  HardHat, Activity, Smartphone, Monitor, AlertTriangle, 
  ChevronDown, ShieldCheck, Database, Cpu, Users, Mail, 
  Send, Menu, X, ArrowRight
} from 'lucide-react';

export default function SmartMineLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeRole, setActiveRole] = useState('Site Manager');

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const roles = {
    "Site Manager": "Oversees live sensor data and operational decisions. Accesses high-level reports and controls emergency response activation.",
    "Safety Officer": "Focuses on gas levels and hazard indicators. Receives critical alerts and logs incident reports for compliance.",
    "System Administrator": "Manages hardware configurations, sets sensor thresholds, and maintains the secure data backbone."
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-amber-500/30">
      
      {/* NAVBAR */}
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-md py-3 shadow-2xl border-b border-slate-800' : 'bg-transparent py-6'}`}>
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
    
    {/* LOGO AREA */}
    <div 
      className="flex items-center cursor-pointer group" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img 
        src="SmartMine.png" 
        alt="SmartMine Logo" 
        className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
      />
      {/* If your logo image already contains the text "SmartMine", 
         you can leave this as is. If it's just an icon, you can 
         uncomment a span here for the text.
      */}
    </div>

    {/* NAVIGATION LINKS */}
    <div className="hidden md:flex items-center gap-10">
      {['About', 'Problem', 'Solution', 'Contact'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className="text-xs font-black uppercase tracking-[0.2em] text-slate-300 hover:text-amber-500 transition-colors duration-200"
        >
          {item}
        </a>
      ))}
    </div>

    {/* MOBILE MENU ICON (Optional visual filler) */}
    <div className="md:hidden text-amber-500">
      <Menu size={28} />
    </div>

  </div>
</nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 space-y-6">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
            SMART<span className="text-amber-500 tracking-normal">MINE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            The next evolution of mineral extraction. Real-time intelligence for the modern Rwandan mine.
          </p>
          <div className="pt-10">
            <ChevronDown className="mx-auto text-amber-500 animate-bounce" size={40} />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white text-slate-900 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.3em] mb-4">The Vision</h2>
          <p className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-8">
            SmartMine is a real-time intelligent monitoring system designed to improve safety and efficiency through IoT.
          </p>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              The system continuously collects environmental and structural data using smart sensors and transmits it to a cloud-based platform. 
              Authorized users—Site Managers, Engineers, and Safety Officers—can monitor live conditions and receive instant alerts.
            </p>
            <p className="font-semibold text-slate-800">
              SmartMine transforms traditional mining operations into a data-driven, smart, and safer ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section id="problem" className="py-32 bg-slate-50 text-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 tracking-tight">Mining is inherently <span className="text-red-600 underline">dangerous.</span></h2>
              <div className="space-y-6 text-slate-600 text-lg">
                <p>
                  Mining sites face constant threats from toxic gas leaks like Methane and Carbon Monoxide, alongside oxygen deficiency and tunnel collapses. 
                  Extremes in temperature and poor ventilation create high-risk zones for every worker underground.
                </p>
                <p>
                  Currently, many mines rely on manual inspections and non-centralized reporting. This lack of real-time visibility leads to 
                  delayed emergency responses, reactive safety management, and tragic, preventable fatalities.
                </p>
                <p>
                  Beyond the human cost, these inefficiencies result in massive equipment damage, production delays, and heavy regulatory penalties. 
                  SmartMine introduces predictive safety analysis to stop these disasters before they happen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {['Gas Leaks', 'Tunnel Collapse', 'Manual Delays'].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex items-center gap-4">
                  <AlertTriangle className="text-red-500" />
                  <span className="font-bold text-xl">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-32 bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">The Smart Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Integrating hardware, communication, and AI to protect lives.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-all">
              <Cpu className="text-amber-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-white">1. Sensor Layer</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Gas Sensors (CH₄, CO, O₂)</li>
                <li>• Vibration & Seismic Sensors</li>
                <li>• ESP32 / Arduino Microcontrollers</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-all">
              <Activity className="text-amber-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-white">2. Communication</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• LoRaWAN (Long Distance)</li>
                <li>• GSM / WiFi Integration</li>
                <li>• Real-time WebSockets</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-amber-500 transition-all">
              <Monitor className="text-amber-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-white">3. Intelligent Backend</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• AI-Based Risk Analysis</li>
                <li>• Node.js / PostgreSQL Pipeline</li>
                <li>• Automated Compliance Reports</li>
              </ul>
            </div>
          </div>

          {/* ROLE BASED ACCESS SUB-SECTION */}
          <div className="mt-24 bg-amber-500 rounded-3xl p-1 md:p-12 text-slate-900">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 space-y-4 px-6 md:px-0">
                <h4 className="text-3xl font-black uppercase italic">Role-Based Access</h4>
                {Object.keys(roles).map((role) => (
                  <button 
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`block w-full text-left px-6 py-3 rounded-xl font-bold transition-all ${activeRole === role ? 'bg-slate-900 text-white translate-x-2' : 'hover:bg-amber-600'}`}
                  >
                    {role}
                  </button>
                ))}
              </div>
              <div className="md:w-2/3 bg-white/20 backdrop-blur-md p-8 rounded-2xl min-h-[200px] flex flex-col justify-center">
                <Users size={40} className="mb-4" />
                <h5 className="text-2xl font-bold mb-2">{activeRole}</h5>
                <p className="text-lg opacity-90">{roles[activeRole as keyof typeof roles]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-slate-950">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="mx-auto text-amber-500 mb-6" size={48} />
          <h2 className="text-4xl font-black text-white mb-4">Secure Your Mine Today</h2>
          <p className="text-slate-400 mb-10">Ready to digitalize? Our team in Kigali is ready to deploy your custom SmartMine network.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-none focus:border-amber-500" />
            <input type="email" placeholder="Work Email" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-none focus:border-amber-500" />
            <textarea placeholder="Message" rows={4} className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-none focus:border-amber-500"></textarea>
            <button className="w-full bg-amber-500 text-slate-900 font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition">
              SEND INQUIRY <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© 2026 SmartMine Technologies. Kigali, Rwanda. All systems operational.</p>
      </footer>
    </main>
  );
}