import React from 'react';
import { MOCK_SERVICES } from '../constants';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30 blur-[6px] select-none pointer-events-none grayscale contrast-75">
        {/* Animated Container for the Parallax Drift Effect */}
        <div className="w-[115%] h-[115%] absolute -top-[7%] -left-[7%] animate-subtle-drift flex flex-col">
            {/* Navigation Bar simulation */}
            <div className="w-full h-24 border-b border-black/[0.03] flex items-center justify-between px-16">
                <div className="w-40 h-10 bg-black/[0.04] rounded-lg"></div>
                <div className="flex space-x-12">
                    <div className="w-24 h-4 bg-black/[0.04] rounded-full"></div>
                    <div className="w-24 h-4 bg-black/[0.04] rounded-full"></div>
                    <div className="w-24 h-4 bg-black/[0.04] rounded-full"></div>
                </div>
            </div>

            {/* Hero Section Simulation */}
            <div className="max-w-[1400px] mx-auto mt-20 px-12 w-full">
                <div className="w-full h-[400px] bg-gray-200/40 rounded-[40px] mb-20 flex items-center justify-center border border-white/30 shadow-inner">
                    <h2 className="text-[12rem] font-display font-extrabold text-black/[0.02] tracking-tighter uppercase select-none">
                      SHOP
                    </h2>
                </div>

                {/* Grid of Mock Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[...MOCK_SERVICES, ...MOCK_SERVICES].map((service, idx) => (
                        <div key={`${service.id}-${idx}`} className="bg-white/30 border border-white/50 p-8 rounded-[32px] flex flex-col items-start gap-6 h-80 shadow-sm">
                            <div className="p-4 bg-white/80 rounded-2xl shadow-sm border border-black/[0.02]">
                                <service.icon className="w-8 h-8 text-black/10" />
                            </div>
                            <div className="w-4/5 h-8 bg-black/[0.04] rounded-md"></div>
                            <div className="w-full h-24 bg-black/[0.04] rounded-xl"></div>
                            <div className="mt-auto w-24 h-8 bg-black/[0.06] rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};