import React from 'react';

export default function RadarChart({ scores = { R: 60, I: 85, A: 70, S: 50, E: 75, C: 45 } }) {
  const axes = [
    { key: 'R', label: 'Thực tế (R)', angle: 0 },
    { key: 'I', label: 'Nghiên cứu (I)', angle: 60 },
    { key: 'A', label: 'Nghệ thuật (A)', angle: 120 },
    { key: 'S', label: 'Xã hội (S)', angle: 180 },
    { key: 'E', label: 'Quản lý (E)', angle: 240 },
    { key: 'C', label: 'Nghiệp vụ (C)', angle: 300 }
  ];

  const size = 320;
  const center = size / 2;
  const radius = 105;

  const getCoordinates = (value, angleDeg) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angleRad),
      y: center + r * Math.sin(angleRad)
    };
  };

  // Polygon points
  const points = axes.map(axis => {
    const val = Math.min(100, Math.max(15, scores[axis.key] || 30));
    const { x, y } = getCoordinates(val, axis.angle);
    return `${x},${y}`;
  }).join(' ');

  // Grid circles / polygons
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px auto' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.25" />
          </linearGradient>
          <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid webs */}
        {gridLevels.map((level, i) => {
          const gridPoints = axes.map(axis => {
            const { x, y } = getCoordinates(level * 100, axis.angle);
            return `${x},${y}`;
          }).join(' ');
          return (
            <polygon
              key={i}
              points={gridPoints}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.2"
              strokeDasharray={i === 3 ? "none" : "3,3"}
            />
          );
        })}

        {/* Axis radial lines */}
        {axes.map((axis, i) => {
          const { x, y } = getCoordinates(100, axis.angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#CBD5E1"
              strokeWidth="1.2"
            />
          );
        })}

        {/* Value Polygon */}
        <polygon
          points={points}
          fill="url(#radarFill)"
          stroke="#4F46E5"
          strokeWidth="2.5"
          filter="url(#radarGlow)"
          style={{ transition: 'all 0.5s ease' }}
        />

        {/* Data points & Labels */}
        {axes.map((axis, i) => {
          const val = scores[axis.key] || 30;
          const { x, y } = getCoordinates(val, axis.angle);
          const labelCoord = getCoordinates(126, axis.angle);

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="4.5"
                fill="#FFFFFF"
                stroke="#4F46E5"
                strokeWidth="2.5"
                style={{ transition: 'all 0.5s ease' }}
              />
              <text
                x={labelCoord.x}
                y={labelCoord.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="11.5"
                fontWeight="700"
                fill="#1E293B"
                fontFamily="var(--font-ui)"
              >
                {axis.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: '600', marginTop: '4px' }}>
        Biểu đồ phân tích 6 chiều Holland (RIASEC)
      </div>
    </div>
  );
}
