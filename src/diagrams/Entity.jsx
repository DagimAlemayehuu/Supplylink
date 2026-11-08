import React from 'react';

/**
 * Gane & Sarson External Entity (Red Noir Theme)
 * Plain rectangle with high-contrast borders and large projector-ready typography.
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
          x={x - 10}
          y={y - 10}
          width={w + 20}
          height={h + 20}
          fill="none"
          stroke="#06b6d4"
          strokeWidth="4"
          strokeOpacity="0.8"
          filter="drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))"
        />
      )}

      {/* Main Gane & Sarson plain rectangle */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#042129' : '#08080d'}
        stroke={isActive ? '#06b6d4' : '#0891b2'}
        strokeWidth={isActive ? '4' : '2.8'}
        className="transition-colors duration-200"
      />

      {/* Top neon indicator banner */}
      <rect
        x={x}
        y={y}
        width={w}
        height="8"
        fill="#06b6d4"
      />

      {/* Entity Title - Extra Large & Punchy */}
      <text
        x={x + w / 2}
        y={y + (h > 150 ? 64 : 52)}
        textAnchor="middle"
        className="font-manrope font-black fill-white select-none"
        style={{ fontSize: '38px', letterSpacing: '-0.02em' }}
      >
        {name}
      </text>

      {/* Subtitle / Role Tag */}
      {subtitle && (
        <g transform={`translate(${x + w / 2}, ${y + (h > 150 ? 104 : 88)})`}>
          <rect
            x="-90"
            y="-18"
            width="180"
            height="36"
            rx="18"
            fill="#083344"
            stroke="#06b6d4"
            strokeWidth="1.8"
          />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            className="fill-cyan-300 font-extrabold select-none uppercase tracking-wider font-manrope"
            style={{ fontSize: '17px' }}
          >
            {subtitle}
          </text>
        </g>
      )}

      {/* Description text */}
      {description && h > 200 && (
        <foreignObject x={x + 12} y={y + 135} width={w - 24} height={h - 145}>
          <div className="text-center text-zinc-200 text-lg leading-snug px-2 flex items-center justify-center h-full font-inter font-medium">
            <span>{description}</span>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
