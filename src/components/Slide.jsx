import React from 'react';
import { motion } from 'framer-motion';

/**
 * Full-screen Slide Component (Neon Velocity Master Theme).
 * Deep black (#050505), vibrant neon lime (#BFFF00), noise texture,
 * and high-contrast brutalist typography.
 */
export default function Slide({
  title,
  subtitle,
  category = "SYSTEM ARCHITECTURE",
  children,
  className = "",
  contentClassName = "",
  headerExtra = null
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`w-screen h-screen flex flex-col justify-between pt-12 pb-4 px-6 lg:px-10 bg-[#050505] text-white relative overflow-hidden select-none font-body ${className}`}
    >
      {/* Neon Velocity Visual Effects: Ambient Refraction Glow & Noise Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep ambient background */}
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Large, blurred radial gradient glow (#BFFF00 at 12% opacity) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-[#BFFF00]/10 rounded-full blur-[170px]" />
        
        {/* Subtle brutalist grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)]" />

        {/* SVG Fractal Noise Overlay at 3.5% opacity */}
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-screen" />
      </div>

      {/* Slide Section Header (Brutalist Minimal) */}
      {title && (
        <header className="border-b border-white/10 pb-3 mb-2 z-10 relative flex-shrink-0 flex items-end justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tightest uppercase font-headline leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm lg:text-base text-zinc-400 font-light font-body max-w-4xl mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {headerExtra && (
            <div className="hidden md:flex items-center gap-3">
              {headerExtra}
            </div>
          )}
        </header>
      )}

      {/* Main Content Area - Fullscreen bleed */}
      <main className={`flex-1 relative w-full h-full min-h-0 overflow-hidden z-10 flex flex-col ${contentClassName}`}>
        {children}
      </main>
    </motion.section>
  );
}
