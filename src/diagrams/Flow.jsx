import React from 'react';

/**
 * Gane & Sarson Data Flow (Red Noir Theme)
 * Labeled arrows with extra-large high-contrast text badges and animated crimson pulses.
 */
export default function Flow({ flow, isActive, isDimmed }) {
  const { id, path, label, items, labelPos, bidirectional } = flow;

  const strokeColor = isActive ? '#ef233c' : '#82828e';
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
        stroke={isActive ? 'rgba(239, 35, 60, 0.45)' : '#000000'}
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
          stroke="#ff4d6d"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="animate-flow-dash"
        />
      )}

      {/* Traveling pulse dot along active flow */}
      {isActive && (
        <circle r="7.5" fill="#ef233c" stroke="#ffffff" strokeWidth="2.5" filter="drop-shadow(0 0 12px #ef233c)">
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
                    rx="14"
                    fill={isActive ? '#1c0407' : '#08080d'}
                    stroke={isActive ? '#ef233c' : 'rgba(255, 255, 255, 0.35)'}
                    strokeWidth={isActive ? '3' : '2'}
                    filter="drop-shadow(0 8px 24px rgba(0,0,0,0.95))"
                  />
                  {items.map((item, idx) => (
                    <text
                      key={idx}
                      x="20"
                      y={28 + idx * lineSpacing}
                      className={`select-none font-inter font-black ${
                        isActive ? 'fill-red-100' : 'fill-white'
                      }`}
                      style={{ fontSize: '19px' }}
                    >
                      • {item}
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
                    rx="10"
                    fill={isActive ? '#250508' : '#09090e'}
                    stroke={isActive ? '#ef233c' : 'rgba(255, 255, 255, 0.35)'}
                    strokeWidth={isActive ? '3' : '2'}
                    filter="drop-shadow(0 6px 18px rgba(0,0,0,0.9))"
                  />
                  <text
                    x={badgeWidth / 2}
                    y="25"
                    textAnchor="middle"
                    className={`select-none font-inter font-black ${
                      isActive ? 'fill-red-100' : 'fill-white'
                    }`}
                    style={{ fontSize: '18px' }}
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
