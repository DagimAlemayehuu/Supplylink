import React from 'react';

/**
 * Gane & Sarson Process (Red Noir Theme)
 * Rounded rectangle divided by a horizontal line with large, projector-ready typography.
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
      {/* Outer Crimson Glow when active */}
      {isActive && (
        <rect
          x={x - 10}
          y={y - 10}
          width={w + 20}
          height={h + 20}
          rx={isSystem ? 26 : 20}
          ry={isSystem ? 26 : 20}
          fill="none"
          stroke="#ef233c"
          strokeWidth="4"
          filter="drop-shadow(0 0 28px rgba(239, 35, 60, 0.9))"
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
        fill={isActive ? '#250508' : '#0a0a0e'}
        stroke={isActive ? '#ef233c' : '#dc2626'}
        strokeWidth={isActive ? '4' : '2.8'}
        className="transition-colors duration-200"
      />

      {/* Top section background for ID */}
      <path
        d={`M ${x} ${y + idHeight} L ${x} ${y + 16} Q ${x} ${y} ${x + 16} ${y} L ${x + w - 16} ${y} Q ${x + w} ${y} ${x + w} ${y + 16} L ${x + w} ${y + idHeight} Z`}
        fill={isSystem ? '#ef233c' : '#33080c'}
      />

      {/* Dividing line separating ID section and Name section */}
      <line
        x1={x}
        y1={y + idHeight}
        x2={x + w}
        y2={y + idHeight}
        stroke="#ef233c"
        strokeWidth="2.8"
      />

      {/* Process ID - Large & Clear */}
      <text
        x={x + 22}
        y={y + (isSystem ? 36 : 27)}
        className="font-manrope font-black select-none fill-white"
        style={{ fontSize: isSystem ? '30px' : '24px' }}
      >
        {procId}
      </text>

      {/* System Badge on context diagram */}
      {isSystem && (
        <text
          x={x + w - 22}
          y={y + 36}
          textAnchor="end"
          className="fill-red-100 font-black select-none uppercase tracking-widest font-manrope"
          style={{ fontSize: '16px' }}
        >
          Central System Boundary
        </text>
      )}

      {/* Process Name (Verb Phrase) - Big, Bold, Projector-Ready */}
      <foreignObject
        x={x + 10}
        y={y + idHeight + 2}
        width={w - 20}
        height={h - idHeight - 4}
      >
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-2">
          <span
            className="font-manrope font-black leading-tight text-white select-none"
            style={{ fontSize: isSystem ? '40px' : '25px', letterSpacing: '-0.02em' }}
          >
            {name}
          </span>
          {description && isSystem && (
            <span className="text-zinc-200 text-lg mt-2 max-w-lg font-inter font-normal">
              {description}
            </span>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
