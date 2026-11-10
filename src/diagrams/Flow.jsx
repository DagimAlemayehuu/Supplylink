import React from 'react';

/**
 * Gane & Sarson Data Flow (Industrial Noir Edition)
 * Labeled directional vectors with clean high-contrast badges and disciplined trace indicators.
 * Supports split-layer rendering: renderPathOnly and renderBadgeOnly.
 */
export default function Flow({ flow, isActive, isDimmed, renderPathOnly = false, renderBadgeOnly = false }) {
  const { id, path, label, items, labelPos, bidirectional } = flow;

  const strokeColor = isActive ? '#dc2626' : '#94a3b8';
  const strokeWidth = isActive ? 3.5 : 2.2;
  const markerEnd = isActive ? 'url(#arrow-noir-active)' : 'url(#arrow-noir-default)';
  const markerStart = bidirectional
    ? isActive
      ? 'url(#arrow-noir-active-rev)'
      : 'url(#arrow-noir-default-rev)'
    : 'none';

  return (
    <g
      id={`flow-${id}`}
      className={`transition-opacity duration-200 ${
        isDimmed ? 'opacity-15' : 'opacity-100'
      }`}
    >
      {/* 1. PATH LAYER */}
      {!renderBadgeOnly && (
        <>
          {/* Background shadow stroke for line contrast against nodes */}
          <path
            d={path}
            fill="none"
            stroke="#0a0b0d"
            strokeWidth={strokeWidth + 6}
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
              stroke="#ef4444"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="animate-flow-dash"
            />
          )}

          {/* Traveling pulse indicator along active flow */}
          {isActive && (
            <circle r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="2">
              <animateMotion
                path={path}
                dur="2.2s"
                repeatCount="indefinite"
                rotate="auto"
              />
            </circle>
          )}
        </>
      )}

      {/* 2. BADGE LAYER */}
      {!renderPathOnly && labelPos && (
        <g transform={`translate(${labelPos.x}, ${labelPos.y})`}>
          {items && items.length > 1 ? (
            // Multi-item grouped label badge (Context Diagram)
            (() => {
              const badgeWidth = 400;
              const lineSpacing = 30;
              const badgeHeight = 24 + items.length * lineSpacing;
              return (
                <g transform={`translate(${-badgeWidth / 2}, ${-badgeHeight / 2})`}>
                  <rect
                    width={badgeWidth}
                    height={badgeHeight}
                    rx="10"
                    fill={isActive ? '#18080a' : '#101216'}
                    stroke={isActive ? '#dc2626' : 'rgba(255, 255, 255, 0.2)'}
                    strokeWidth={isActive ? '2.5' : '1.5'}
                  />
                  {items.map((item, idx) => (
                    <text
                      key={idx}
                      x="18"
                      y={26 + idx * lineSpacing}
                      className={`select-none font-inter font-bold ${
                        isActive ? 'fill-red-200' : 'fill-zinc-100'
                      }`}
                      style={{ fontSize: '18px' }}
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
              const badgeWidth = Math.max(120, textLength * 9.5 + 20);
              const badgeHeight = 32;
              return (
                <g transform={`translate(${-badgeWidth / 2}, ${-badgeHeight / 2})`}>
                  <rect
                    width={badgeWidth}
                    height={badgeHeight}
                    rx="8"
                    fill={isActive ? '#18080a' : '#101216'}
                    stroke={isActive ? '#dc2626' : 'rgba(255, 255, 255, 0.22)'}
                    strokeWidth={isActive ? '2.5' : '1.5'}
                  />
                  <text
                    x={badgeWidth / 2}
                    y="22"
                    textAnchor="middle"
                    className={`select-none font-inter font-bold ${
                      isActive ? 'fill-red-200' : 'fill-zinc-100'
                    }`}
                    style={{ fontSize: '15px' }}
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
