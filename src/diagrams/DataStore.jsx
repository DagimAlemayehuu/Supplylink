import React from 'react';

/**
 * Standard DFD Data Store (Gane & Sarson Notation - Monochrome)
 * Open-ended rectangle (right side open) with a left ID box and store name.
 * Supports active highlight and background dimming.
 */
export default function DataStore({ node, isActive = false, isDimmed = false, theme = 'light' }) {
  const { x, y, w, h, storeId, name } = node;
  const isLight = theme === 'light';
  const idWidth = 64;

  const strokeColor = isLight
    ? (isActive ? '#09090b' : '#3f3f46')
    : (isActive ? '#a1a1aa' : '#80808a');
  const strokeWidth = isActive ? (isLight ? '4' : '3.5') : (isLight ? '2.8' : '2.5');
  const bodyFill = isLight
    ? '#ffffff'
    : (isActive ? '#2b2b30' : '#232326');
  const idFill = isLight
    ? (isActive ? '#18181b' : '#e4e4e7')
    : (isActive ? '#3e3e46' : '#333338');
  const idTextColor = isLight
    ? (isActive ? '#ffffff' : '#09090b')
    : '#ffffff';
  const nameTextColor = isLight ? '#09090b' : '#ffffff';

  return (
    <g
      id={`store-${node.id}`}
      className={`transition-opacity duration-300 ${
        isDimmed ? (isLight ? 'opacity-20' : 'opacity-15') : 'opacity-100'
      }`}
    >
      {/* Background fill */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={bodyFill}
        className="transition-colors duration-200"
      />

      {/* Left ID compartment fill */}
      <rect
        x={x}
        y={y}
        width={idWidth}
        height={h}
        fill={idFill}
      />

      {/* Top horizontal border (full width) */}
      <line
        x1={x}
        y1={y}
        x2={x + w}
        y2={y}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Bottom horizontal border (full width) */}
      <line
        x1={x}
        y1={y + h}
        x2={x + w}
        y2={y + h}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Left vertical border */}
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + h}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Vertical divider separating ID box from store name */}
      <line
        x1={x + idWidth}
        y1={y}
        x2={x + idWidth}
        y2={y + h}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* (Right side is OPEN as per Gane & Sarson specification) */}

      {/* Store ID (e.g. D1, D2) */}
      <text
        x={x + idWidth / 2}
        y={y + h / 2 + 8}
        textAnchor="middle"
        className="font-headline font-bold select-none tabular-nums"
        style={{ fontSize: '24px', fill: idTextColor }}
      >
        {storeId}
      </text>

      {/* Store Name - Centered in open compartment */}
      <foreignObject
        x={x + idWidth + 8}
        y={y}
        width={w - idWidth - 12}
        height={h}
      >
        <div className="w-full h-full flex items-center justify-center text-center px-2">
          <span
            className="font-headline font-bold leading-tight select-none uppercase tracking-tight"
            style={{ fontSize: '19px', color: nameTextColor }}
          >
            {name}
          </span>
        </div>
      </foreignObject>
    </g>
  );
}
