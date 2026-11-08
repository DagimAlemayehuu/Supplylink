import React from 'react';
import Entity from './Entity';
import Process from './Process';
import DataStore from './DataStore';
import Flow from './Flow';

/**
 * Reusable Diagram component (Neon Velocity Theme).
 * Renders data-driven SVG diagrams with Gane & Sarson shapes on a deep noir canvas
 * with high-visibility neon lime (#BFFF00) flows and pulses.
 */
export default function Diagram({
  data,
  activeNodes = [],
  activeFlows = [],
  visibleNodes = null,
  visibleFlows = null,
  dimOthers = false,
  className = ""
}) {
  if (!data) return null;

  const { viewBox = "0 0 1920 1080", nodes = [], flows = [] } = data;

  const renderedNodes = visibleNodes
    ? nodes.filter(n => visibleNodes.includes(n.id))
    : nodes;

  const renderedFlows = visibleFlows
    ? flows.filter(f => visibleFlows.includes(f.id))
    : flows;

  return (
    <div className={`w-full h-full flex items-center justify-center relative ${className}`}>
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Default Silver/Zinc Arrowhead */}
          <marker
            id="arrow-noir-default"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#94a3b8" />
          </marker>

          {/* Reverse Default Arrowhead */}
          <marker
            id="arrow-noir-default-rev"
            viewBox="0 0 10 10"
            refX="2"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M 9 1.5 L 0 5 L 9 8.5 z" fill="#94a3b8" />
          </marker>

          {/* Active Neon Lime Arrowhead */}
          <marker
            id="arrow-noir-active"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#BFFF00" />
          </marker>

          {/* Reverse Active Neon Lime Arrowhead */}
          <marker
            id="arrow-noir-active-rev"
            viewBox="0 0 10 10"
            refX="2"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            orient="auto"
          >
            <path d="M 9 1.5 L 0 5 L 9 8.5 z" fill="#BFFF00" />
          </marker>

          {/* Neon Lime Radial Ambient Refraction Glow */}
          <radialGradient id="neon-ambient-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#BFFF00" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#BFFF00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx="960" cy="540" r="650" fill="url(#neon-ambient-glow)" pointerEvents="none" />

        {/* 1. Flows Layer (behind nodes) */}
        <g id="layer-flows">
          {renderedFlows.map(flow => {
            const isActive = activeFlows.includes(flow.id);
            const isDimmed = dimOthers && activeFlows.length > 0 && !isActive;

            return (
              <Flow
                key={flow.id}
                flow={flow}
                isActive={isActive}
                isDimmed={isDimmed}
              />
            );
          })}
        </g>

        {/* 2. Nodes Layer */}
        <g id="layer-nodes">
          {renderedNodes.map(node => {
            const isActive = activeNodes.includes(node.id);
            const isDimmed = dimOthers && activeNodes.length > 0 && !isActive;

            if (node.type === 'entity') {
              return (
                <Entity
                  key={node.id}
                  node={node}
                  isActive={isActive}
                  isDimmed={isDimmed}
                />
              );
            }

            if (node.type === 'process') {
              return (
                <Process
                  key={node.id}
                  node={node}
                  isActive={isActive}
                  isDimmed={isDimmed}
                />
              );
            }

            if (node.type === 'store') {
              return (
                <DataStore
                  key={node.id}
                  node={node}
                  isActive={isActive}
                  isDimmed={isDimmed}
                />
              );
            }

            return null;
          })}
        </g>
      </svg>
    </div>
  );
}
