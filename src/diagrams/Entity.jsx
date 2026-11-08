import React from 'react';

/**
 * Gane & Sarson External Entity (Neon Velocity Theme)
 * Plain rectangle with high-contrast borders and brutalist uppercase typography.
 */
export default function Entity({ node, isActive, isDimmed }) {
  const { x, y, w, h, name, subtitle, description } = node;

  return (
    <g
      id={`entity-${node.id}`}
      className={`transition-all duration-300 ${
        isDimmed ? 'opacity-20' : 'opacity-100'
      }`}
    >
      {/* Outer Neon Glow when active */}
      {isActive && (
        <rect
          x={x - 8}
          y={y - 8}
          width={w + 16}
          height={h + 16}
          fill="none"
          stroke="#BFFF00"
          strokeWidth="3.5"
          filter="drop-shadow(0 0 25px rgba(191, 255, 0, 0.85))"
        />
      )}

      {/* Main Gane & Sarson plain rectangle */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#0c1603' : '#080808'}
        stroke={isActive ? '#BFFF00' : 'rgba(255, 255, 255, 0.4)'}
        strokeWidth={isActive ? '3.5' : '2.5'}
        className="transition-colors duration-200"
      />

      {/* Top neon indicator stripe */}
      <rect
        x={x}
        y={y}
        width={w}
        height="6"
        fill={isActive ? '#BFFF00' : 'rgba(255, 255, 255, 0.7)'}
      />

      {/* Entity Title - Plus Jakarta Sans 800 Uppercase */}
      <text
        x={x + w / 2}
        y={y + (h > 150 ? 64 : 52)}
        textAnchor="middle"
        className="font-headline font-extrabold fill-white select-none uppercase tracking-tight"
        style={{ fontSize: '36px' }}
      >
        {name}
      </text>

      {/* Subtitle / Role Tag in Geist Mono */}
      {subtitle && (
        <g transform={`translate(${x + w / 2}, ${y + (h > 150 ? 104 : 88)})`}>
          <rect
            x="-85"
            y="-16"
            width="170"
            height="32"
            rx="6"
            fill={isActive ? '#182b03' : '#141414'}
            stroke={isActive ? '#BFFF00' : 'rgba(255, 255, 255, 0.2)'}
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            className="fill-[#BFFF00] font-mono font-bold select-none uppercase tracking-widestTechnical"
            style={{ fontSize: '13px' }}
          >
            {subtitle.toUpperCase().replace('&', '//')}
          </text>
        </g>
      )}

      {/* Description text */}
      {description && h > 200 && (
        <foreignObject x={x + 12} y={y + 135} width={w - 24} height={h - 145}>
          <div className="text-center text-zinc-300 text-base leading-snug px-2 flex items-center justify-center h-full font-body font-normal">
            <span>{description}</span>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
