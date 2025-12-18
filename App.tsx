import React from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { GlassCard } from './components/GlassCard';
import { Logo } from './components/Logo';
import { CONTACT_INFO, SERVICE_CATEGORIES } from './constants';
import { ArrowRight, Construction } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-porcelain text-slate-900 overflow-hidden flex items-center justify-center font-sans">
      
      {/* 1. Subtle Ambient Lighting (Porcelain/White Theme) */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-80 animate-blob mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '7s' }} />
      
      {/* 2. The "Shop" Background (Blurred & Grayscale) */}
      <BackgroundGrid />

      {/* 3. The Main Glass Overlay */}
      <div className="relative z-20 p-6 w-full max-w-xl mx-auto animate-float">
        <GlassCard className="p-8 md:p-12 text-center backdrop-blur-3xl bg-white/60 border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="mb-8 scale-110">
                <Logo />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-6 font-display">
              <Construction className="w-3 h-3" />
              <span>Site Under Development</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Experience upgraded.
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              We are currently enhancing our digital storefront. Our workshop is fully operational for all your Apple needs.
            </p>
          </div>

          {/* Service Categories (Clean Minimalist) */}
          <div className="mb-10">
            <div className="grid grid-cols-3 gap-4 border-t border-b border-black/5 py-8">
              {SERVICE_CATEGORIES.map((service) => (
                <div key={service.id} className="flex flex-col items-center text-center group cursor-default">
                  <div className="mb-4 p-4 rounded-full bg-white shadow-sm border border-gray-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <service.icon className="w-6 h-6 text-slate-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-display font-bold text-slate-900 mb-1 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-[10px] text-slate-400 hidden md:block max-w-[100px] font-medium">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Actions (High Contrast) */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
              Get in Touch
            </p>

            {CONTACT_INFO.map((contact, idx) => (
              <a 
                key={idx}
                href={contact.actionUrl}
                target={contact.type === 'whatsapp' ? '_blank' : undefined}
                rel="noreferrer"
                className="group relative flex items-center p-4 bg-white hover:bg-black text-slate-900 hover:text-white border border-gray-100 hover:border-black shadow-sm hover:shadow-lg rounded-none transition-all duration-300"
              >
                <contact.icon className="w-5 h-5 mr-4 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                
                <div className="flex-1 text-left flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-white/70 transition-colors font-display">{contact.label}</span>
                  <span className="text-sm font-bold tracking-wide">{contact.value}</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Minimal Footer */}
          <div className="mt-12 flex flex-col gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
             <p className="text-[10px] text-slate-900 font-display uppercase tracking-widest">
               Apple-4all &copy; {new Date().getFullYear()}
             </p>
          </div>

        </GlassCard>
      </div>

    </div>
  );
};

export default App;