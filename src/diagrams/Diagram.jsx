import React from 'react';
import Entity from './Entity';
import Process from './Process';
import DataStore from './DataStore';
import Flow from './Flow';

/**
 * Standard DFD Diagram Canvas (Monochrome with Phase Focus)
 * Supports highlighting specific active flows and nodes while dimming others.
 */
export default function Diagram({
  data,
  activeNodes = null,
  activeFlows = null,
  viewBoxOverride = null,
  className = "",
  theme = 'light'
}) {
  if (!data) return null;

  const isLight = theme === 'light';
  const { viewBox: defaultViewBox = "0 0 1920 1080", nodes = [], flows = [] } = data;
  const viewBox = viewBoxOverride || defaultViewBox;
  const hasFilter = activeNodes !== null && activeNodes !== undefined;

  return (
    <div className={`w-full h-full flex items-center justify-center relative ${className}`}>
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        style={{ overflow: 'hidden' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Default Arrowhead Marker */}
          <marker
            id="arrow-dfd-marker"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={isLight ? '#52525b' : '#767682'} />
          </marker>

          {/* Active Highlighted Arrowhead Marker */}
          <marker
            id="arrow-dfd-marker-active"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill={isLight ? '#09090b' : '#ffffff'} />
          </marker>

          {/* Reverse Marker */}
          <marker
            id="arrow-dfd-marker-rev"
            viewBox="0 0 10 10"
            refX="2"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M 9 1.5 L 0 5 L 9 8.5 z" fill={isLight ? '#52525b' : '#767682'} />
          </marker>
        </defs>

        {/* 1. Flows Layer */}
        <g id="layer-flows">
          {flows.map(flow => {
            const isActive = hasFilter && activeFlows && activeFlows.includes(flow.id);
            const isDimmed = hasFilter && !isActive;
            return (
              <Flow
                key={flow.id}
                flow={flow}
                isActive={isActive}
                isDimmed={isDimmed}
                theme={theme}
              />
            );
          })}
        </g>

        {/* 2. Nodes Layer */}
        <g id="layer-nodes">
          {nodes.map(node => {
            const isActive = hasFilter && activeNodes && activeNodes.includes(node.id);
            const isDimmed = hasFilter && !isActive;

            switch (node.type) {
              case 'entity':
                return (
                  <Entity
                    key={node.id}
                    node={node}
                    isActive={isActive}
                    isDimmed={isDimmed}
                    theme={theme}
                  />
                );
              case 'process':
                return (
                  <Process
                    key={node.id}
                    node={node}
                    isActive={isActive}
                    isDimmed={isDimmed}
                    theme={theme}
                  />
                );
              case 'store':
                return (
                  <DataStore
                    key={node.id}
                    node={node}
                    isActive={isActive}
                    isDimmed={isDimmed}
                    theme={theme}
                  />
                );
              default:
                return null;
            }
          })}
        </g>
      </svg>
    </div>
  );
}
