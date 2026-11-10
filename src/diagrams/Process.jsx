import React from 'react';

/**
 * Gane & Sarson Process (Industrial Noir Edition)
 * Rounded rectangle divided by a horizontal line separating the top ID from the process name.
 * Zero ungrounded glowing halos, crisp academic geometry.
 */
export default function Process({ node, isActive, isDimmed }) {
  const { x, y, w, h, procId, name, category, description } = node;
  const isSystem = procId === "0";
  const idHeight = isSystem ? 48 : 36;
  const cornerRadius = isSystem ? 18 : 12;

  return (
    <g
      id={`process-${node.id}`}
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
          rx={cornerRadius + 4}
          ry={cornerRadius + 4}
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />
      )}

      {/* Main Gane & Sarson rounded rectangle body */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={cornerRadius}
        ry={cornerRadius}
        fill={isActive ? '#18080a' : '#101216'}
        stroke={isActive ? '#dc2626' : '#7f1d1d'}
        strokeWidth={isActive ? '3' : '2'}
      />

      {/* Top section background for ID */}
      <path
        d={`M ${x} ${y + idHeight} L ${x} ${y + cornerRadius} Q ${x} ${y} ${x + cornerRadius} ${y} L ${x + w - cornerRadius} ${y} Q ${x + w} ${y} ${x + w} ${y + cornerRadius} L ${x + w} ${y + idHeight} Z`}
        fill={isSystem ? '#dc2626' : '#22080a'}
      />

      {/* Dividing line separating ID section and Name section */}
      <line
        x1={x}
        y1={y + idHeight}
        x2={x + w}
        y2={y + idHeight}
        stroke={isSystem ? '#ef4444' : '#7f1d1d'}
        strokeWidth="1.5"
      />

      {/* Process ID in top header */}
      <text
        x={x + w / 2}
        y={y + (idHeight / 2) + 5}
        textAnchor="middle"
        className="font-mono font-bold select-none fill-white"
        style={{ fontSize: isSystem ? '20px' : '15px', letterSpacing: '0.08em' }}
      >
        {isSystem ? "PROCESS 0 // MAIN SYSTEM" : `PROCESS ${procId}`}
      </text>

      {/* Process Name (Verb Phrase) */}
      <text
        x={x + w / 2}
        y={y + idHeight + (isSystem ? 70 : 54)}
        textAnchor="middle"
        className="font-headline font-bold fill-white select-none"
        style={{
          fontSize: isSystem ? '40px' : '24px',
          letterSpacing: '-0.02em',
        }}
      >
        {name}
      </text>

      {/* Process description or category */}
      {description && (
        <foreignObject
          x={x + 16}
          y={y + idHeight + (isSystem ? 100 : 70)}
          width={w - 32}
          height={h - idHeight - (isSystem ? 110 : 80)}
        >
          <div className="text-zinc-300 text-center font-inter leading-relaxed flex flex-col justify-center h-full px-2">
            <span style={{ fontSize: isSystem ? '18px' : '13px' }}>
              {description}
            </span>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
