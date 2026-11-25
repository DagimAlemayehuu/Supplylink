import React from 'react';

/**
 * Conceptual ER Diagram SVG Canvas (High-Readability Monochrome Style)
 * - NO Foreign Keys
 * - Large, projector-readable typography (Entity 21px, PK 18px, Attr 16px, Verb 16px)
 * - Cleanly clips to zoomed viewBoxOverride
 */
export default function ErdDiagram({
  data,
  activeEntities = null,
  activeRelationships = null,
  viewBoxOverride = null,
  className = "",
  theme = 'light'
}) {
  if (!data) return null;

  const isLight = theme === 'light';
  const { viewBox: defaultViewBox = "0 0 1800 1160", entities = [], relationships = [] } = data;
  const viewBox = viewBoxOverride || defaultViewBox;
  const hasFilter = activeEntities !== null && activeEntities !== undefined;
  const dimmedClass = isLight ? 'opacity-[0.18]' : 'opacity-[0.06]';

  return (
    <div className={`w-full h-full flex items-center justify-center relative ${className}`}>
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        style={{ overflow: 'hidden' }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 1. Relationships Lines Layer */}
        <g id="layer-rel-lines">
          {relationships.map(rel => {
            const isActive = hasFilter && activeRelationships && activeRelationships.includes(rel.id);
            const isDimmed = hasFilter && !isActive;

            return (
              <g
                key={rel.id}
                className={`transition-opacity duration-300 ${
                  isDimmed ? dimmedClass : 'opacity-100'
                }`}
              >
                {/* Connecting Polyline */}
                <path
                  d={rel.path}
                  fill="none"
                  stroke={isLight ? (isActive ? '#09090b' : '#52525b') : (isActive ? '#ffffff' : '#65656e')}
                  strokeWidth={isActive ? (isLight ? '4' : '3.5') : (isLight ? '2.5' : '2.2')}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-200"
                />

                {/* Cardinality 1 */}
                {rel.card1 && (
                  <g transform={`translate(${rel.card1Pos.x}, ${rel.card1Pos.y})`}>
                    <rect
                      x="-24"
                      y="-14"
                      width="48"
                      height="28"
                      rx="5"
                      fill={isLight ? '#ffffff' : '#18181b'}
                      stroke={isLight ? (isActive ? '#09090b' : '#52525b') : (isActive ? '#d4d4d8' : '#45454d')}
                      strokeWidth={isLight ? '1.8' : '1.5'}
                    />
                    <text
                      x="0"
                      y="6"
                      textAnchor="middle"
                      className="font-headline font-bold select-none"
                      style={{ fontSize: '16px', fill: isLight ? '#09090b' : (isActive ? '#ffffff' : '#d4d4d8') }}
                    >
                      {rel.card1}
                    </text>
                  </g>
                )}

                {/* Cardinality 2 */}
                {rel.card2 && (
                  <g transform={`translate(${rel.card2Pos.x}, ${rel.card2Pos.y})`}>
                    <rect
                      x="-26"
                      y="-14"
                      width="52"
                      height="28"
                      rx="5"
                      fill={isLight ? '#ffffff' : '#18181b'}
                      stroke={isLight ? (isActive ? '#09090b' : '#52525b') : (isActive ? '#d4d4d8' : '#45454d')}
                      strokeWidth={isLight ? '1.8' : '1.5'}
                    />
                    <text
                      x="0"
                      y="6"
                      textAnchor="middle"
                      className="font-headline font-bold select-none"
                      style={{ fontSize: '16px', fill: isLight ? '#09090b' : (isActive ? '#ffffff' : '#d4d4d8') }}
                    >
                      {rel.card2}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>

        {/* 2. Relationship Diamonds Layer */}
        <g id="layer-rel-diamonds">
          {relationships.map(rel => {
            const isActive = hasFilter && activeRelationships && activeRelationships.includes(rel.id);
            const isDimmed = hasFilter && !isActive;
            const { x, y, w, h } = rel.diamond;

            const points = `${x},${y - h / 2} ${x + w / 2},${y} ${x},${y + h / 2} ${x - w / 2},${y}`;

            return (
              <g
                key={`diamond-${rel.id}`}
                className={`transition-opacity duration-300 ${
                  isDimmed ? dimmedClass : 'opacity-100'
                }`}
              >
                <polygon
                  points={points}
                  fill={isLight ? (isActive ? '#f4f4f5' : '#ffffff') : (isActive ? '#2c2c32' : '#222226')}
                  stroke={isLight ? (isActive ? '#09090b' : '#3f3f46') : (isActive ? '#ffffff' : '#71717a')}
                  strokeWidth={isActive ? (isLight ? '3.5' : '3') : (isLight ? '2.5' : '2')}
                  className="transition-colors duration-200"
                />

                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  className="font-headline font-bold select-none tracking-wider uppercase"
                  style={{
                    fontSize: '15.5px',
                    fill: isLight ? '#09090b' : (isActive ? '#ffffff' : '#d4d4d8')
                  }}
                >
                  {rel.name}
                </text>
              </g>
            );
          })}
        </g>

        {/* 3. Entities Layer */}
        <g id="layer-entities">
          {entities.map(ent => {
            const isActive = hasFilter && activeEntities && activeEntities.includes(ent.id);
            const isDimmed = hasFilter && !isActive;
            const { x, y, w, h, name, pk, attributes = [], isAssociative } = ent;

            const headerHeight = 46;
            const pkHeight = 38;

            return (
              <g
                key={ent.id}
                id={`entity-${ent.id}`}
                className={`transition-opacity duration-300 ${
                  isDimmed ? dimmedClass : 'opacity-100'
                }`}
              >
                {/* Associative Entity Outer Dashed Border */}
                {isAssociative && (
                  <rect
                    x={x - 7}
                    y={y - 7}
                    width={w + 14}
                    height={h + 14}
                    rx="14"
                    fill="none"
                    stroke={isLight ? (isActive ? '#09090b' : '#3f3f46') : (isActive ? '#d4d4d8' : '#52525b')}
                    strokeWidth={isLight ? '2.5' : '2'}
                    strokeDasharray="7,4"
                  />
                )}

                {/* Main Card Background */}
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                  rx="10"
                  fill={isLight ? '#ffffff' : (isActive ? '#242429' : '#1c1c1f')}
                  stroke={isLight ? (isActive ? '#09090b' : '#3f3f46') : (isActive ? '#ffffff' : '#52525b')}
                  strokeWidth={isActive ? (isLight ? '3.5' : '3') : (isLight ? '2.5' : '2')}
                  className="transition-colors duration-200"
                />

                {/* Header Container */}
                <path
                  d={`M ${x} ${y + 10} Q ${x} ${y} ${x + 10} ${y} L ${x + w - 10} ${y} Q ${x + w} ${y} ${x + w} ${y + 10} L ${x + w} ${y + headerHeight} L ${x} ${y + headerHeight} Z`}
                  fill={isLight ? (isActive ? '#09090b' : '#27272a') : (isActive ? '#34343b' : '#28282d')}
                  stroke={isLight ? (isActive ? '#09090b' : '#3f3f46') : (isActive ? '#ffffff' : '#52525b')}
                  strokeWidth={isActive ? '2.5' : '1.8'}
                />

                {/* Entity Name */}
                <text
                  x={x + w / 2}
                  y={y + 30}
                  textAnchor="middle"
                  className="font-headline font-black select-none uppercase tracking-wider"
                  style={{
                    fontSize: '21px',
                    fill: '#ffffff'
                  }}
                >
                  {name}
                </text>

                {/* Primary Key Divider */}
                <line
                  x1={x}
                  y1={y + headerHeight}
                  x2={x + w}
                  y2={y + headerHeight}
                  stroke={isLight ? '#09090b' : (isActive ? '#a1a1aa' : '#3f3f46')}
                  strokeWidth="1.5"
                />

                {/* Primary Key / Identifier (UNDERLINED) */}
                <g transform={`translate(${x + 16}, ${y + headerHeight + 25})`}>
                  <text
                    x="0"
                    y="0"
                    className="font-headline font-bold select-none"
                    style={{ fontSize: '17.5px', fill: isLight ? '#09090b' : '#ffffff' }}
                  >
                    {pk}
                  </text>
                  <line
                    x1="0"
                    y1="4"
                    x2={pk.length * 10.2}
                    y2="4"
                    stroke={isLight ? '#09090b' : '#ffffff'}
                    strokeWidth="2"
                  />
                </g>

                {/* Divider below PK */}
                <line
                  x1={x + 12}
                  y1={y + headerHeight + pkHeight}
                  x2={x + w - 12}
                  y2={y + headerHeight + pkHeight}
                  stroke={isLight ? '#d4d4d8' : '#38383e'}
                  strokeWidth="1"
                />

                {/* Descriptive Attributes */}
                <g transform={`translate(${x + 16}, ${y + headerHeight + pkHeight + 24})`}>
                  {attributes.map((attr, idx) => (
                    <text
                      key={idx}
                      x="0"
                      y={idx * 25}
                      className="font-body font-medium select-none"
                      style={{ fontSize: '16px', fill: isLight ? '#18181b' : '#e4e4e7' }}
                    >
                      • {attr}
                    </text>
                  ))}
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
