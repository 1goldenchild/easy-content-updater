import React from 'react';

const FooterStars = () => {
  return (
    <div className="w-full h-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1A1F2C]">
          <svg className="w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="starGlowBright" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="starGlowSoft" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[...Array(20)].map((_, i) => {
              const size = Math.random() * 4 + 2;
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const delay = Math.random() * 3;
              const duration = Math.random() * 3 + 2;
              
              return (
                <circle
                  key={`bright-${i}`}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={size}
                  fill="url(#starGlowBright)"
                  className="animate-[twinkle_3s_ease-in-out_infinite]"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
            {[...Array(40)].map((_, i) => {
              const size = Math.random() * 2 + 0.5;
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const delay = Math.random() * 3;
              const duration = Math.random() * 3 + 2;
              
              return (
                <circle
                  key={`soft-${i}`}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={size}
                  fill="url(#starGlowSoft)"
                  className="animate-[twinkle_3s_ease-in-out_infinite]"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FooterStars;