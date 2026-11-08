import React from 'react';

/**
 * Gane & Sarson Data Store (Neon Velocity Theme)
 * Open-ended rectangle with amber/gold accents and brutalist uppercase typography.
 */
export default function DataStore({ node, isActive, isDimmed }) {
  const { x, y, w, h, storeId, name, desc } = node;
  const idWidth = 68;

  return (
    <g
      id={`store-${node.id}`}
      className={`transition-all duration-300 ${
        isDimmed ? 'opacity-20' : 'opacity-100'
      }`}
    >
      {/* Outer focus glow when active */}
      {isActive && (
        <path
          d={`M ${x + w + 8} ${y - 8} L ${x - 8} ${y - 8} L ${x - 8} ${y + h + 8} L ${x + w + 8} ${y + h + 8}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3.5"
          filter="drop-shadow(0 0 24px rgba(245, 158, 11, 0.85))"
        />
      )}

      {/* Background fill */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#241603' : '#080808'}
        className="transition-colors duration-200"
      />

      {/* ID section fill on left */}
      <rect
        x={x}
        y={y}
        width={idWidth}
        height={h}
        fill={isActive ? '#452604' : '#1c1203'}
      />

      {/* Top horizontal border (full width) */}
      <line
        x1={x}
        y1={y}
        x2={x + w}
        y2={y}
        stroke={isActive ? '#fbbf24' : '#f59e0b'}
        strokeWidth={isActive ? '3.5' : '2.5'}
      />

      {/* Bottom horizontal border (full width) */}
      <line
        x1={x}
        y1={y + h}
        x2={x + w}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#f59e0b'}
        strokeWidth={isActive ? '3.5' : '2.5'}
      />

      {/* Left vertical border */}
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#f59e0b'}
        strokeWidth={isActive ? '3.5' : '2.5'}
      />

      {/* Inner vertical dividing line for ID box */}
      <line
        x1={x + idWidth}
        y1={y}
        x2={x + idWidth}
        y2={y + h}
        stroke="#f59e0b"
        strokeWidth="2.5"
      />

      {/* NOTICE: RIGHT END IS OPEN as per Gane & Sarson notation specification */}

      {/* Store ID (e.g. D1, D2) in Geist Mono */}
      <text
        x={x + idWidth / 2}
        y={y + h / 2 + 8}
        textAnchor="middle"
        className="font-mono font-black fill-amber-300 select-none tabular-nums"
        style={{ fontSize: '26px' }}
      >
        {storeId}
      </text>

      {/* Store Name & description */}
      <foreignObject
        x={x + idWidth + 14}
        y={y}
        width={w - idWidth - 18}
        height={h}
      >
        <div className="w-full h-full flex flex-col justify-center select-none pl-1">
          <span
            className="font-headline font-extrabold text-white leading-tight uppercase tracking-tight"
            style={{ fontSize: '22px' }}
          >
            {name}
          </span>
          {desc && (
            <span className="text-amber-200/90 text-xs mt-0.5 truncate font-mono tracking-widestTechnical uppercase font-semibold">
              {desc}
            </span>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
