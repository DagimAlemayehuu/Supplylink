import React from 'react';

/**
 * Slide Container (Monochrome)
 * Uses grey backgrounds and pure white text.
 */
export default function Slide({
  title,
  children,
  className = "",
  contentClassName = "",
  headerExtra = null
}) {
  return (
    <section
      className={`w-screen h-screen flex flex-col justify-between pt-14 pb-4 px-8 bg-[#161618] text-white relative overflow-hidden select-none font-body ${className}`}
    >
      {/* Slide Header */}
      {title && (
        <header className="border-b border-[#2d2d32] pb-3 mb-2 z-10 relative flex-shrink-0 flex items-center justify-between">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight uppercase font-headline">
            {title}
          </h1>

          {headerExtra && (
            <div className="flex items-center gap-3">
              {headerExtra}
            </div>
          )}
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 relative w-full h-full min-h-0 overflow-hidden z-10 flex flex-col ${contentClassName}`}>
        {children}
      </main>
    </section>
  );
}
