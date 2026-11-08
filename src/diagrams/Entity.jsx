import React from 'react';

/**
 * Standard DFD External Entity (Monochrome)
 * Plain sharp rectangle with centered uppercase entity name.
 * Supports active highlight and background dimming.
 */
export default function Entity({ node, isActive = false, isDimmed = false }) {
  const { x, y, w, h, name } = node;

  return (
    <g
      id={`entity-${node.id}`}
      className={`transition-opacity duration-300 ${
        isDimmed ? 'opacity-15' : 'opacity-100'
      }`}
    >
      {/* Standard sharp rectangle */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isActive ? '#2d2d32' : '#252528'}
        stroke={isActive ? '#a1a1aa' : '#71717a'}
        strokeWidth={isActive ? '3.5' : '2.5'}
        className="transition-colors duration-200"
      />

      {/* Entity Name - Centered */}
      <text
        x={x + w / 2}
        y={y + h / 2 + 10}
        textAnchor="middle"
        className="font-headline font-extrabold select-none uppercase tracking-wide"
        style={{ fontSize: w > 200 ? '32px' : '28px', fill: '#ffffff' }}
      >
        {name}
      </text>
    </g>
  );
}
