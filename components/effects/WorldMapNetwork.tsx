"use client";

import { motion } from "framer-motion";

type NodePoint = {
  id: string;
  x: number;
  y: number;
  size: number;
  hub?: boolean;
};

const nodes: NodePoint[] = [
  { id: "newyork", x: 24, y: 35, size: 0.72 },
  { id: "london", x: 45, y: 31, size: 0.72 },
  { id: "germany", x: 50, y: 34, size: 1.35, hub: true },
  { id: "dubai", x: 62, y: 47, size: 0.85 },
  { id: "dhaka", x: 73, y: 48, size: 0.9 },
  { id: "singapore", x: 78, y: 59, size: 0.72 },
  { id: "tokyo", x: 86, y: 40, size: 0.7 },
  { id: "sydney", x: 88, y: 68, size: 0.68 },
];

const connections = [
  ["newyork", "london"],
  ["london", "germany"],
  ["germany", "dubai"],
  ["dubai", "dhaka"],
  ["dhaka", "singapore"],
  ["dhaka", "tokyo"],
  ["singapore", "sydney"],
];

const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

export default function WorldMapNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(34,211,238,0.25),transparent_34%),radial-gradient(circle_at_80%_42%,rgba(99,102,241,0.24),transparent_34%)]" />

      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(103,232,249,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.45)_1px,transparent_1px)] [background-size:46px_46px]" />

      <div
        className="absolute inset-0 bg-no-repeat opacity-[0.38]"
        style={{
          backgroundImage: "url('/images/world-map-dots.svg')",
          backgroundSize: "1550px auto",
          backgroundPosition: "66% center",
        }}
      />

      <svg
        viewBox="0 0 100 75"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-100"
      >
        <defs>
          <radialGradient id="nodeGlowEnterprise" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
            <stop offset="45%" stopColor="#67e8f9" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
          </radialGradient>

          <linearGradient
            id="lineGlowEnterprise"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="45%" stopColor="#67e8f9" stopOpacity="1" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {connections.map(([from, to], index) => {
          const a = nodeById[from];
          const b = nodeById[to];

          if (!a || !b) return null;

          const controlX = (a.x + b.x) / 2;
          const controlY =
            Math.min(a.y, b.y) - Math.max(7, Math.abs(a.x - b.x) * 0.14);

          const path = `M ${a.x} ${a.y} Q ${controlX} ${controlY} ${b.x} ${b.y}`;

          return (
            <g key={`${from}-${to}`}>
              <path
                d={path}
                fill="none"
                stroke="rgba(103,232,249,0.22)"
                strokeWidth="0.36"
              />

              <motion.path
                d={path}
                fill="none"
                stroke="url(#lineGlowEnterprise)"
                strokeWidth="0.78"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4.4,
                  delay: index * 0.38,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {nodes.map((node, index) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * (node.hub ? 4.5 : 3.1)}
              fill="url(#nodeGlowEnterprise)"
              opacity={node.hub ? 0.9 : 0.58}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.hub ? "#cffafe" : "#67e8f9"}
              animate={{
                scale: [1, node.hub ? 1.45 : 1.25, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: node.hub ? 2 : 2.8,
                delay: index * 0.12,
                repeat: Infinity,
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 2}
              fill="none"
              stroke="#67e8f9"
              strokeWidth="0.22"
              animate={{
                scale: [0.8, node.hub ? 2.8 : 2],
                opacity: [0.55, 0],
              }}
              transition={{
                duration: node.hub ? 2.3 : 3,
                delay: index * 0.18,
                repeat: Infinity,
              }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/68 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_44%,rgba(2,6,23,0.02)_0%,rgba(2,6,23,0.22)_44%,rgba(2,6,23,0.82)_100%)]" />
    </div>
  );
}
