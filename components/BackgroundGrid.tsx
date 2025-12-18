import React from 'react';
import { MOCK_SERVICES } from '../constants';
import { ShoppingBag, Star, ShieldCheck } from 'lucide-react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-40 blur-[4px] select-none pointer-events-none grayscale">
        {/* Animated Container for the Drift Effect */}
        <div className="w-[110%] h-[110%] animate-subtle-drift">
            {/* Navigation Bar simulation */}
            <div className="w-full h-20 border-b border-black/5 flex items-center justify-between px-10">
                <div className="w-32 h-8 bg-black/5 rounded-md"></div>
                <div className="flex space-x-8">
                    <div className="w-20 h-4 bg-black/5 rounded-full"></div>
                    <div className="w-20 h-4 bg-black/5 rounded-full"></div>
                </div>
            </div>

            {/* Hero Section Simulation */}
            <div className="max-w-7xl mx-auto mt-12 px-6">
                <div className="w-full h-64 bg-gray-200/50 rounded-3xl mb-12 flex items-center justify-center border border-white/40">
                    <h2 className="text-8xl font-display font-bold text-black/5 tracking-tighter uppercase">APPLE-4ALL</h2>
                </div>

                {/* Grid of Mock Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_SERVICES.map((service) => (
                        <div key={service.id} className="bg-white/40 border border-white/60 p-6 rounded-2xl flex flex-col items-start gap-4 h-64 shadow-sm">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                <service.icon className="w-6 h-6 text-black/20" />
                            </div>
                            <div className="w-3/4 h-6 bg-black/5 rounded"></div>
                            <div className="w-full h-16 bg-black/5 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};