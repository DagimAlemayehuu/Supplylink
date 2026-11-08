import React from 'react';

/**
 * Gane & Sarson Data Flow (Neon Velocity Theme)
 * Labeled arrows with high-contrast text badges and animated Neon Lime pulses.
 */
export default function Flow({ flow, isActive, isDimmed }) {
  const { id, path, label, items, labelPos, bidirectional } = flow;

  const strokeColor = isActive ? '#BFFF00' : '#8892b0';
  const strokeWidth = isActive ? 4.2 : 2.8;
  const markerEnd = isActive ? 'url(#arrow-noir-active)' : 'url(#arrow-noir-default)';
  const markerStart = bidirectional
    ? isActive
      ? 'url(#arrow-noir-active-rev)'
      : 'url(#arrow-noir-default-rev)'
    : 'none';

  return (
    <g
      id={`flow-${id}`}
      className={`transition-all duration-300 ${
        isDimmed ? 'opacity-15' : 'opacity-100'
      }`}
    >
      {/* Background shadow stroke for line contrast */}
      <path
        d={path}
        fill="none"
        stroke={isActive ? 'rgba(191, 255, 0, 0.4)' : '#050505'}
        strokeWidth={strokeWidth + 8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main flow line */}
      <path
        id={`path-${id}`}
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={markerEnd}
        markerStart={markerStart}
      />

      {/* Traveling animated pulse line when active */}
      {isActive && (
        <path
          d={path}
          fill="none"
          stroke="#d9ff66"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="animate-flow-dash"
        />
      )}

      {/* Traveling pulse dot along active flow */}
      {isActive && (
        <circle r="7.5" fill="#BFFF00" stroke="#000000" strokeWidth="2.5" filter="drop-shadow(0 0 14px #BFFF00)">
          <animateMotion
            path={path}
            dur="2s"
            repeatCount="indefinite"
            rotate="auto"
          />
        </circle>
      )}

      {/* Flow Label Badge - High Contrast, Sized to Avoid Node Overlap */}
      {labelPos && (
        <g transform={`translate(${labelPos.x}, ${labelPos.y})`}>
          {items && items.length > 1 ? (
            // Multi-item grouped label badge (Context Diagram)
            (() => {
              const badgeWidth = 420;
              const lineSpacing = 32;
              const badgeHeight = 28 + items.length * lineSpacing;
              return (
                <g transform={`translate(${-badgeWidth / 2}, ${-badgeHeight / 2})`}>
                  <rect
                    width={badgeWidth}
                    height={badgeHeight}
                    rx="12"
                    fill={isActive ? '#0f1c03' : '#080808'}
                    stroke={isActive ? '#BFFF00' : 'rgba(255, 255, 255, 0.25)'}
                    strokeWidth={isActive ? '2.5' : '1.8'}
                    filter="drop-shadow(0 8px 24px rgba(0,0,0,0.95))"
                  />
                  {items.map((item, idx) => (
                    <text
                      key={idx}
                      x="20"
                      y={28 + idx * lineSpacing}
                      className={`select-none font-body font-bold ${
                        isActive ? 'fill-[#BFFF00]' : 'fill-white'
                      }`}
                      style={{ fontSize: '18px' }}
                    >
                      › {item}
                    </text>
                  ))}
                </g>
              );
            })()
          ) : (
            // Single flow label badge (Level 0 Diagram)
            (() => {
              const textLength = (label || '').length;
              const badgeWidth = Math.max(130, textLength * 11 + 26);
              const badgeHeight = 38;
              return (
                <g transform={`translate(${-badgeWidth / 2}, ${-badgeHeight / 2})`}>
                  <rect
                    width={badgeWidth}
                    height={badgeHeight}
                    rx="8"
                    fill={isActive ? '#111d03' : '#0a0a0a'}
                    stroke={isActive ? '#BFFF00' : 'rgba(255, 255, 255, 0.25)'}
                    strokeWidth={isActive ? '2.5' : '1.5'}
                    filter="drop-shadow(0 6px 18px rgba(0,0,0,0.9))"
                  />
                  <text
                    x={badgeWidth / 2}
                    y="25"
                    textAnchor="middle"
                    className={`select-none font-body font-bold ${
                      isActive ? 'fill-[#BFFF00]' : 'fill-white'
                    }`}
                    style={{ fontSize: '17px' }}
                  >
                    {label}
                  </text>
                </g>
              );
            })()
          )}
        </g>
      )}
    </g>
  );
}
