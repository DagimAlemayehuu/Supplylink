import React from 'react';

/**
 * Gane & Sarson Data Store (Red Noir Theme)
 * Open-ended rectangle with warm amber/gold neon accents and extra-large typography.
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
          d={`M ${x + w + 10} ${y - 10} L ${x - 10} ${y - 10} L ${x - 10} ${y + h + 10} L ${x + w + 10} ${y + h + 10}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="4"
          filter="drop-shadow(0 0 24px rgba(245, 158, 11, 0.8))"
        />
      )}

      {/* Background fill */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#2a1a05' : '#0a0a0e'}
        className="transition-colors duration-200"
      />

      {/* ID section fill on left */}
      <rect
        x={x}
        y={y}
        width={idWidth}
        height={h}
        fill={isActive ? '#522e06' : '#221504'}
      />

      {/* Top horizontal border (full width) */}
      <line
        x1={x}
        y1={y}
        x2={x + w}
        y2={y}
        stroke={isActive ? '#fbbf24' : '#f59e0b'}
        strokeWidth={isActive ? '4' : '2.8'}
      />

      {/* Bottom horizontal border (full width) */}
      <line
        x1={x}
        y1={y + h}
        x2={x + w}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#f59e0b'}
        strokeWidth={isActive ? '4' : '2.8'}
      />

      {/* Left vertical border */}
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#f59e0b'}
        strokeWidth={isActive ? '4' : '2.8'}
      />

      {/* Inner vertical dividing line for ID box */}
      <line
        x1={x + idWidth}
        y1={y}
        x2={x + idWidth}
        y2={y + h}
        stroke="#f59e0b"
        strokeWidth="2.8"
      />

      {/* Notice: RIGHT END IS OPEN as per Gane & Sarson specification */}

      {/* Store ID (e.g. D1, D2) - Extra Large */}
      <text
        x={x + idWidth / 2}
        y={y + h / 2 + 9}
        textAnchor="middle"
        className="font-manrope font-black fill-amber-300 select-none"
        style={{ fontSize: '28px' }}
      >
        {storeId}
      </text>

      {/* Store Name & description - Extra Large & High Contrast */}
      <foreignObject
        x={x + idWidth + 14}
        y={y}
        width={w - idWidth - 18}
        height={h}
      >
        <div className="w-full h-full flex flex-col justify-center select-none pl-1">
          <span
            className="font-manrope font-black text-white leading-tight"
            style={{ fontSize: '24px', letterSpacing: '-0.01em' }}
          >
            {name}
          </span>
          {desc && (
            <span className="text-amber-200/90 text-base mt-0.5 truncate font-inter font-semibold">
              {desc}
            </span>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
