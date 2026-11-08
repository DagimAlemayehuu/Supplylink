import React from 'react';

/**
 * Gane & Sarson Process (Neon Velocity Theme)
 * Rounded rectangle divided by a horizontal line with Neon Lime accents and Plus Jakarta Sans 800.
 */
export default function Process({ node, isActive, isDimmed }) {
  const { x, y, w, h, procId, name, category, description } = node;
  const isSystem = procId === "0";
  const idHeight = isSystem ? 52 : 38;

  return (
    <g
      id={`process-${node.id}`}
      className={`transition-all duration-300 ${
        isDimmed ? 'opacity-20' : 'opacity-100'
      }`}
    >
      {/* Outer Neon Glow when active */}
      {isActive && (
        <rect
          x={x - 8}
          y={y - 8}
          width={w + 16}
          height={h + 16}
          rx={isSystem ? 26 : 20}
          ry={isSystem ? 26 : 20}
          fill="none"
          stroke="#BFFF00"
          strokeWidth="3.5"
          filter="drop-shadow(0 0 28px rgba(191, 255, 0, 0.9))"
        />
      )}

      {/* Main Gane & Sarson rounded rectangle body */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={isSystem ? 22 : 16}
        ry={isSystem ? 22 : 16}
        fill={isActive ? '#101d03' : '#080808'}
        stroke={isActive ? '#BFFF00' : '#84cc16'}
        strokeWidth={isActive ? '3.5' : '2.5'}
        className="transition-colors duration-200"
      />

      {/* Top section background for ID */}
      <path
        d={`M ${x} ${y + idHeight} L ${x} ${y + 16} Q ${x} ${y} ${x + 16} ${y} L ${x + w - 16} ${y} Q ${x + w} ${y} ${x + w} ${y + 16} L ${x + w} ${y + idHeight} Z`}
        fill={isSystem ? '#BFFF00' : '#142403'}
      />

      {/* Dividing line separating ID section and Name section */}
      <line
        x1={x}
        y1={y + idHeight}
        x2={x + w}
        y2={y + idHeight}
        stroke={isSystem ? '#000000' : '#84cc16'}
        strokeWidth="2.5"
      />

      {/* Process ID - In Geist Mono */}
      <text
        x={x + 22}
        y={y + (isSystem ? 36 : 27)}
        className={`font-mono font-black select-none tabular-nums ${
          isSystem ? 'fill-black' : 'fill-[#BFFF00]'
        }`}
        style={{ fontSize: isSystem ? '28px' : '22px' }}
      >
        {procId}
      </text>

      {/* System Boundary Badge on context diagram */}
      {isSystem && (
        <text
          x={x + w - 22}
          y={y + 36}
          textAnchor="end"
          className="fill-black font-extrabold select-none uppercase tracking-widestTechnical font-mono"
          style={{ fontSize: '13px' }}
        >
          SYSTEM BOUNDARY
        </text>
      )}

      {/* Process Name (Verb Phrase) - Plus Jakarta Sans 800 Uppercase */}
      <foreignObject
        x={x + 10}
        y={y + idHeight + 2}
        width={w - 20}
        height={h - idHeight - 4}
      >
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-2">
          <span
            className="font-headline font-extrabold leading-tight text-white select-none uppercase tracking-tight"
            style={{ fontSize: isSystem ? '36px' : '23px' }}
          >
            {name}
          </span>
          {description && isSystem && (
            <span className="text-zinc-300 text-sm mt-2 max-w-md font-body font-normal">
              {description}
            </span>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
