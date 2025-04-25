import { getBezierPath, EdgeProps } from 'reactflow';
import { motion } from 'framer-motion';

export default function AnimatedEdge({ id, sourceX, sourceY, targetX, targetY, style = {}, markerEnd }: EdgeProps) {
  const [edgePath] = getBezierPath({ sourceX, sourceY, targetX, targetY });

  return (
    <g>
      <motion.path
        d={edgePath}
        stroke="url(#animated-gradient)"
        strokeWidth={3}
        fill="none"
        style={style}
        initial={{ strokeDasharray: '10 10', strokeDashoffset: 100 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        markerEnd={markerEnd}
      />
      <defs>
        <linearGradient id="animated-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00cfd1"/>
          <stop offset="100%" stopColor="#0a1a2f"/>
        </linearGradient>
      </defs>
    </g>
  );
}
