import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass-panel rounded-[32px] overflow-hidden relative ${className}`}>
      {/* Moving shimmer effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      </div>

      {/* Static top shine */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle border glow overlay */}
      <div className="absolute inset-0 border border-white/40 rounded-[32px] pointer-events-none z-20" />
    </div>
  );
};