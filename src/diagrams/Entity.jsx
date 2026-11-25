import React from 'react';

/**
 * Standard DFD External Entity (Monochrome)
 * Plain sharp rectangle with centered uppercase entity name.
 * Supports active highlight and background dimming.
 */
export default function Entity({ node, isActive = false, isDimmed = false, theme = 'light' }) {
  const { x, y, w, h, name } = node;
  const isLight = theme === 'light';

  return (
    <g
      id={`entity-${node.id}`}
      className={`transition-opacity duration-300 ${
        isDimmed ? (isLight ? 'opacity-20' : 'opacity-15') : 'opacity-100'
      }`}
    >
      {/* Standard sharp rectangle */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={isLight ? (isActive ? '#f4f4f5' : '#ffffff') : (isActive ? '#2d2d32' : '#252528')}
        stroke={isLight ? (isActive ? '#09090b' : '#3f3f46') : (isActive ? '#a1a1aa' : '#71717a')}
        strokeWidth={isActive ? (isLight ? '4' : '3.5') : (isLight ? '3' : '2.5')}
        className="transition-colors duration-200"
      />

      {/* Entity Name - Centered */}
      <text
        x={x + w / 2}
        y={y + h / 2 + 10}
        textAnchor="middle"
        className="font-headline font-extrabold select-none uppercase tracking-wide"
        style={{ fontSize: w > 200 ? '32px' : '28px', fill: isLight ? '#09090b' : '#ffffff' }}
      >
        {name}
      </text>
    </g>
  );
}
