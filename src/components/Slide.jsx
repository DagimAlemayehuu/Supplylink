import React from 'react';
import { motion } from 'framer-motion';

/**
 * Slide Component (Industrial Noir Theme).
 * Clean, distraction-free architectural canvas maximizing vertical and horizontal diagram space.
 * Zero space dust, zero fake radial blur orbs.
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
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`w-screen h-screen flex flex-col justify-between pt-10 pb-3 px-6 lg:px-10 bg-[#0a0b0d] text-white relative overflow-hidden select-none font-inter ${className}`}
    >
      {/* Background Architectural Canvas: Deep matte obsidian with fine hairline grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0a0b0d]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Subtle, restrained top edge vignette */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Slide Section Header (Clean, authoritative & compact) */}
      {title && (
        <header className="border-b border-white/10 pb-2.5 mb-2.5 z-10 relative flex-shrink-0 flex items-end justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-headline leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm lg:text-base text-zinc-400 font-normal font-inter max-w-4xl mt-0.5">
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

      {/* Main Content Canvas */}
      <main className={`flex-1 relative w-full h-full min-h-0 overflow-hidden z-10 flex flex-col ${contentClassName}`}>
        {children}
      </main>
    </motion.section>
  );
}
