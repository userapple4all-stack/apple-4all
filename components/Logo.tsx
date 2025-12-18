import React, { useState } from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {!imageError ? (
        <img 
          src="/image_0.png" 
          alt="Apple-4all" 
          className="h-32 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
      ) : (
        // Fallback only appears if the image fails to load
        <span className="font-display text-3xl font-bold tracking-tighter text-slate-900">
          apple-4all
        </span>
      )}
    </div>
  );
};