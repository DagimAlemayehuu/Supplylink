import React from 'react';

/**
 * Gane & Sarson Data Store (Industrial Noir Edition)
 * Open-ended rectangle: top & bottom parallel borders, closed on the left with an ID compartment,
 * and open on the right to signify persistent storage.
 */
export default function DataStore({ node, isActive, isDimmed }) {
  const { x, y, w, h, storeId, name, desc } = node;
  const idWidth = 56;

  return (
    <g
      id={`store-${node.id}`}
      className={`transition-opacity duration-200 ${
        isDimmed ? 'opacity-20' : 'opacity-100'
      }`}
    >
      {/* Active Focus Frame */}
      {isActive && (
        <path
          d={`M ${x + w + 8} ${y - 6} L ${x - 6} ${y - 6} L ${x - 6} ${y + h + 6} L ${x + w + 8} ${y + h + 6}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />
      )}

      {/* Main Store Background */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#1a1306' : '#101216'}
      />

      {/* Left ID Compartment Background */}
      <rect
        x={x}
        y={y}
        width={idWidth}
        height={h}
        fill={isActive ? '#3d2505' : '#1c1508'}
      />

      {/* Top parallel border */}
      <line
        x1={x}
        y1={y}
        x2={x + w}
        y2={y}
        stroke={isActive ? '#fbbf24' : '#b45309'}
        strokeWidth={isActive ? '3' : '2'}
      />

      {/* Bottom parallel border */}
      <line
        x1={x}
        y1={y + h}
        x2={x + w}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#b45309'}
        strokeWidth={isActive ? '3' : '2'}
      />

      {/* Left closing border */}
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#b45309'}
        strokeWidth={isActive ? '3' : '2'}
      />

      {/* ID Compartment vertical divider */}
      <line
        x1={x + idWidth}
        y1={y}
        x2={x + idWidth}
        y2={y + h}
        stroke={isActive ? '#fbbf24' : '#b45309'}
        strokeWidth="1.5"
      />

      {/* Store ID (D1, D2, etc.) */}
      <text
        x={x + idWidth / 2}
        y={y + h / 2 + 6}
        textAnchor="middle"
        className="font-mono font-bold select-none fill-amber-300"
        style={{ fontSize: '20px', letterSpacing: '0.05em' }}
      >
        {storeId}
      </text>

      {/* Store Name */}
      <text
        x={x + idWidth + 16}
        y={y + (desc ? h / 2 - 2 : h / 2 + 7)}
        className="font-headline font-bold fill-white select-none"
        style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
      >
        {name}
      </text>

      {/* Optional store brief description */}
      {desc && (
        <text
          x={x + idWidth + 16}
          y={y + h / 2 + 18}
          className="font-inter fill-zinc-400 select-none"
          style={{ fontSize: '12px' }}
        >
          {desc}
        </text>
      )}
    </g>
  );
}
