import React from 'react';

/**
 * Standard DFD Process (Gane & Sarson Notation - Monochrome)
 * Rounded rectangle with dedicated top compartment for Process ID
 * and lower compartment for Process Name (verb phrase).
 * Enlarged for commanding visual hierarchy over data stores.
 */
export default function Process({ node, isActive = false, isDimmed = false, theme = 'light' }) {
  const { x, y, w, h, procId, name } = node;
  const isLight = theme === 'light';
  const isSystem = procId === "0";
  const idHeight = isSystem ? 56 : 38;
  const cornerRadius = isSystem ? 24 : 18;

  const strokeColor = isLight
    ? (isActive ? '#09090b' : '#3f3f46')
    : (isActive ? '#ffffff' : '#888892');
  const strokeWidth = isActive ? (isLight ? '4' : '3.5') : (isLight ? '3' : '2.8');
  const bodyFill = isLight
    ? '#ffffff'
    : (isActive ? '#2f2f35' : '#27272b');
  const headerFill = isLight
    ? (isActive ? '#18181b' : '#e4e4e7')
    : (isActive ? '#46464e' : '#38383e');
  const idTextColor = isLight
    ? (isActive ? '#ffffff' : '#09090b')
    : '#ffffff';
  const nameTextColor = isLight ? '#09090b' : '#ffffff';

  return (
    <g
      id={`process-${node.id}`}
      className={`transition-opacity duration-300 ${
        isDimmed ? (isLight ? 'opacity-20' : 'opacity-15') : 'opacity-100'
      }`}
    >
      {/* Clip path for the top ID header matching the top rounded corners */}
      <defs>
        <clipPath id={`clip-process-${node.id}`}>
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            rx={cornerRadius}
            ry={cornerRadius}
          />
        </clipPath>
      </defs>

      {/* Main rounded rectangle body */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={cornerRadius}
        ry={cornerRadius}
        fill={bodyFill}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        className="transition-colors duration-200"
      />

      {/* Top ID compartment background */}
      <rect
        x={x}
        y={y}
        width={w}
        height={idHeight}
        fill={headerFill}
        clipPath={`url(#clip-process-${node.id})`}
      />

      {/* Dividing line separating ID section and Name section */}
      <line
        x1={x}
        y1={y + idHeight}
        x2={x + w}
        y2={y + idHeight}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Process ID */}
      <text
        x={x + 18}
        y={y + (isSystem ? 38 : 27)}
        className="font-headline font-bold select-none tabular-nums"
        style={{ fontSize: isSystem ? '28px' : '20px', fill: idTextColor }}
      >
        {procId}
      </text>

      {/* Process Name (Verb Phrase) */}
      <foreignObject
        x={x + 10}
        y={y + idHeight}
        width={w - 20}
        height={h - idHeight}
      >
        <div className="w-full h-full flex items-center justify-center text-center px-2">
          <span
            className="font-headline font-bold leading-tight select-none uppercase tracking-tight"
            style={{ fontSize: isSystem ? '34px' : '21px', color: nameTextColor }}
          >
            {name}
          </span>
        </div>
      </foreignObject>
    </g>
  );
}
