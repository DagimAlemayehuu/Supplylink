import React from 'react';

/**
 * Gane & Sarson External Entity (Industrial Noir Edition)
 * Plain rectangle with high-contrast borders and clear typography.
 * Strictly external to the software boundary.
 */
export default function Entity({ node, isActive, isDimmed }) {
  const { x, y, w, h, name, subtitle, description } = node;

  return (
    <g
      id={`entity-${node.id}`}
      className={`transition-opacity duration-200 ${
        isDimmed ? 'opacity-20' : 'opacity-100'
      }`}
    >
      {/* Active Focus Frame */}
      {isActive && (
        <rect
          x={x - 6}
          y={y - 6}
          width={w + 12}
          height={h + 12}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />
      )}

      {/* Main Gane & Sarson plain rectangle */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#0c1a24' : '#10131a'}
        stroke={isActive ? '#38bdf8' : '#0284c7'}
        strokeWidth={isActive ? '3' : '2'}
      />

      {/* Top steel indicator strip */}
      <rect
        x={x}
        y={y}
        width={w}
        height="6"
        fill="#38bdf8"
      />

      {/* Entity Title */}
      <text
        x={x + w / 2}
        y={y + (h > 150 ? 58 : 48)}
        textAnchor="middle"
        className="font-headline font-bold fill-white select-none"
        style={{ fontSize: '34px', letterSpacing: '-0.02em' }}
      >
        {name}
      </text>

      {/* Subtitle / Role Tag */}
      {subtitle && (
        <text
          x={x + w / 2}
          y={y + (h > 150 ? 94 : 80)}
          textAnchor="middle"
          className="font-mono font-medium fill-sky-400 select-none uppercase"
          style={{ fontSize: '13px', letterSpacing: '0.15em' }}
        >
          {subtitle}
        </text>
      )}

      {/* Dividing rule for tall entities */}
      {h > 200 && (
        <line
          x1={x + 20}
          y1={y + 115}
          x2={x + w - 20}
          y2={y + 115}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
        />
      )}

      {/* Descriptive role summary */}
      {description && h > 200 && (
        <foreignObject
          x={x + 14}
          y={y + 125}
          width={w - 28}
          height={h - 135}
        >
          <div className="text-zinc-300 text-[13px] leading-relaxed text-center font-inter h-full flex flex-col justify-center px-1">
            <span className="font-semibold text-white mb-1">External Boundary:</span>
            {description}
          </div>
        </foreignObject>
      )}
    </g>
  );
}
