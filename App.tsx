import React from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { GlassCard } from './components/GlassCard';
import { Logo } from './components/Logo';
import { CONTACT_INFO, SERVICE_CATEGORIES } from './constants';
import { ArrowRight, Construction } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-porcelain text-slate-900 overflow-hidden flex items-center justify-center font-sans">
      
      {/* 1. Dynamic Ambient Lighting (Porcelain/White Theme) */}
      <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-white rounded-full blur-[120px] opacity-80 animate-blob mix-blend-multiply" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-slate-200/50 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s', animationDuration: '25s' }} />
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[90px] animate-blob" style={{ animationDelay: '8s', animationDuration: '22s' }} />
      <div className="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-rose-50/40 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '12s', animationDuration: '28s' }} />
      <div className="absolute bottom-[20%] left-[30%] w-[450px] h-[450px] bg-gray-100/60 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '16s', animationDuration: '18s' }} />
      
      {/* 2. The "Shop" Background (Blurred & Grayscale) */}
      <BackgroundGrid />

      {/* 3. The Main Glass Overlay */}
      <div className="relative z-20 p-6 w-full max-w-xl mx-auto animate-float">
        <GlassCard className="p-8 md:p-12 text-center backdrop-blur-3xl bg-white/65 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="mb-8 scale-110">
                <Logo />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.03] text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 font-display">
              <Construction className="w-3 h-3" />
              <span>Digital Storefront Incoming</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter mb-4 leading-none">
              Experience <br className="md:hidden" /> upgraded.
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              We are currently enhancing our digital storefront. Our workshop is fully operational for all your premium repair needs.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mb-10">
            <div className="grid grid-cols-3 gap-4 border-t border-b border-black/[0.05] py-10">
              {SERVICE_CATEGORIES.map((service) => (
                <div key={service.id} className="flex flex-col items-center text-center group cursor-default">
                  <div className="mb-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:scale-110 group-hover:shadow-xl group-hover:border-black/5 transition-all duration-500">
                    <service.icon className="w-6 h-6 text-slate-800" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[11px] font-display font-bold text-slate-900 mb-1 uppercase tracking-widest">{service.title}</h3>
                  <p className="text-[10px] text-slate-400 hidden md:block max-w-[100px] font-medium leading-tight">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-2 text-center">
              Direct Access
            </p>

            {CONTACT_INFO.map((contact, idx) => (
              <a 
                key={idx}
                href={contact.actionUrl}
                target={contact.type === 'whatsapp' ? '_blank' : undefined}
                rel="noreferrer"
                className="group relative flex items-center p-5 bg-white hover:bg-black text-slate-900 hover:text-white border border-gray-100 hover:border-black shadow-sm hover:shadow-2xl rounded-xl transition-all duration-500 overflow-hidden"
              >
                {/* Micro-shimmer on hover button */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                
                <contact.icon className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                
                <div className="flex-1 text-left flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 group-hover:text-white/60 transition-colors font-display font-bold">{contact.label}</span>
                  <span className="text-sm font-bold tracking-tight">{contact.value}</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Minimal Footer */}
          <div className="mt-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
             <p className="text-[9px] text-slate-900 font-display uppercase tracking-[0.4em] font-bold">
               Apple-4all &copy; {new Date().getFullYear()} / Established Reliability
             </p>
          </div>

        </GlassCard>
      </div>

    </div>
  );
};

export default App;