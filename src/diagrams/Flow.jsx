import React from 'react';

/**
 * Standard DFD Data Flow (Monochrome)
 * Strictly unidirectional with clear, single-concept noun phrase label badges.
 * Supports active highlight and background dimming.
 */
export default function Flow({ flow, isActive = false, isDimmed = false }) {
  const { id, path, label, labelPos } = flow;

  const strokeColor = isActive ? '#ffffff' : '#767682';
  const strokeWidth = isActive ? 3.0 : 2.2;
  const markerEnd = isActive ? 'url(#arrow-dfd-marker-active)' : 'url(#arrow-dfd-marker)';

  // Calculate clean badge dimensions to prevent overlap
  const textLength = label ? label.length : 12;
  const badgeWidth = Math.max(120, textLength * 8.8 + 26);
  const badgeHeight = 26;

  return (
    <g
      id={`flow-${id}`}
      className={`transition-opacity duration-300 ${
        isDimmed ? 'opacity-15' : 'opacity-100'
      }`}
    >
      {/* Background shadow path for contrast against canvas and crossings */}
      <path
        d={path}
        fill="none"
        stroke="#1c1c1f"
        strokeWidth={strokeWidth + 5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main unidirectional flow line */}
      <path
        id={`path-${id}`}
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={markerEnd}
      />

      {/* Flow Label Badge (Centered at labelPos) */}
      {labelPos && label && (
        <g transform={`translate(${labelPos.x}, ${labelPos.y})`}>
          <g transform={`translate(${-badgeWidth / 2}, ${-badgeHeight / 2})`}>
            {/* Badge container */}
            <rect
              width={badgeWidth}
              height={badgeHeight}
              rx="6"
              fill={isActive ? '#2a2a2f' : '#1e1e22'}
              stroke={isActive ? '#ffffff' : '#52525b'}
              strokeWidth={isActive ? '1.8' : '1.5'}
            />
            {/* Flow name in pure white text */}
            <text
              x={badgeWidth / 2}
              y={17}
              textAnchor="middle"
              className="select-none font-body font-semibold tracking-wide"
              style={{ fontSize: '12px', fill: '#ffffff' }}
            >
              {label}
            </text>
          </g>
        </g>
      )}
    </g>
  );
}
