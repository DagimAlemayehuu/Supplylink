import React from 'react';
import { motion } from 'framer-motion';

/**
 * Full-screen Slide Component (Red Noir Minimal Theme).
 * Maximize vertical and horizontal real estate for unobstructed diagram viewing.
 */
export default function Slide({
  title,
  subtitle,
  category = "System Analysis & Design",
  children,
  className = "",
  contentClassName = "",
  headerExtra = null
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`w-screen h-screen flex flex-col justify-between pt-12 pb-4 px-6 lg:px-10 bg-black text-white relative overflow-hidden select-none font-inter ${className}`}
    >
      {/* Global Red Noir Background: Subtle Stars, Grid, and Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#140305] via-black to-black opacity-85" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_90%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[750px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Slide Section Header (Minimal & Tight to maximize canvas space) */}
      {title && (
        <header className="border-b border-white/10 pb-3 mb-2 z-10 relative flex-shrink-0 flex items-end justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight font-manrope leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base lg:text-lg text-zinc-300 font-normal font-inter max-w-4xl mt-0.5">
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

      {/* Main Content Area - Expands fully */}
      <main className={`flex-1 relative w-full h-full min-h-0 overflow-hidden z-10 flex flex-col ${contentClassName}`}>
        {children}
      </main>
    </motion.section>
  );
}
