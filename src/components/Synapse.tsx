import { Connection, NodeData } from '../types';

interface SynapseProps {
  fromNode: NodeData;
  toNode: NodeData;
  connection: Connection;
}

export const Synapse = ({ fromNode, toNode, connection }: SynapseProps) => {
  // Offset to center of connection points
  const startX = fromNode.x + 256; // Node width
  const startY = fromNode.y + 60; // Approximate center height
  const endX = toNode.x;
  const endY = toNode.y + 60;

  const controlPoint1X = startX + (endX - startX) / 2;
  const controlPoint1Y = startY;
  const controlPoint2X = startX + (endX - startX) / 2;
  const controlPoint2Y = endY;

  const path = `M ${startX} ${startY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${endX} ${endY}`;

  return (
    <g>
      <path
        d={path}
        fill="none"
        opacity="0.4"
        stroke="#484849"
        strokeWidth="1.5"
      />
      {connection.animated && (
        <path
          className="action-potential-line"
          d={path}
          fill="none"
          stroke={connection.color || "#ffd709"}
          strokeWidth="2"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      )}
    </g>
  );
};
