"use client";

export default function SwingAnalysis({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width="600"
        height="500"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          {/* Swing arc gradient */}
          <linearGradient
            id="swing-arc-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
          </linearGradient>

          {/* Data label bg */}
          <linearGradient id="label-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
          </linearGradient>

          {/* Body glow */}
          <filter id="body-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Neon glow filter */}
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for connecting lines */}
          <filter id="line-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
          @keyframes arc-draw {
            0% { stroke-dashoffset: 600; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes label-fade {
            0%, 20% { opacity: 0; transform: translateY(4px); }
            40%, 100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-node {
            0%, 100% { r: 4; opacity: 0.8; }
            50% { r: 6; opacity: 1; }
          }
        `}</style>

        {/* ====== BACKGROUND GRID ====== */}
        {/* Subtle grid lines */}
        {Array.from({ length: 13 }).map((_, i) => (
          <line
            key={`vgrid-${i}`}
            x1={50 * i}
            y1="0"
            x2={50 * i}
            y2="500"
            stroke="#1E293B"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`hgrid-${i}`}
            x1="0"
            y1={50 * i}
            x2="600"
            y2={50 * i}
            stroke="#1E293B"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Ground line */}
        <line
          x1="100"
          y1="440"
          x2="500"
          y2="440"
          stroke="#1E293B"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* ====== SWING ARC ====== */}
        {/* Main swing path - large arc behind golfer */}
        <path
          d="M200 180 C180 120, 260 60, 340 80 C420 100, 450 180, 430 260"
          stroke="url(#swing-arc-grad)"
          strokeWidth="3"
          fill="none"
          filter="url(#neon-glow)"
          strokeDasharray="600"
          style={{
            animation: "arc-draw 2s ease-out forwards",
          }}
        />

        {/* Secondary arc trace (club head path) */}
        <path
          d="M195 190 C170 110, 270 40, 360 70 C440 95, 470 190, 440 280"
          stroke="#10B981"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          strokeDasharray="4 6"
        />

        {/* Impact zone highlight */}
        <circle cx="430" cy="260" r="15" fill="#10B981" opacity="0.05" />
        <circle cx="430" cy="260" r="8" fill="#10B981" opacity="0.08" />
        <circle cx="430" cy="260" r="3" fill="#10B981" opacity="0.3" />

        {/* ====== GOLFER SILHOUETTE ====== */}
        {/* Follow-through position - constructed from body segments */}
        <g filter="url(#body-glow)">
          {/* Head */}
          <circle cx="310" cy="155" r="16" fill="#94A3B8" opacity="0.15" />
          <circle
            cx="310"
            cy="155"
            r="16"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Neck */}
          <line
            x1="310"
            y1="171"
            x2="305"
            y2="185"
            stroke="#94A3B8"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* Torso - rotated in follow-through */}
          <path
            d="M305 185 C300 200, 290 230, 295 260 Q298 275, 310 285"
            stroke="#94A3B8"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />

          {/* Left shoulder to hands (follow-through: arms extended left-up) */}
          {/* Left arm - extended high in follow-through */}
          <path
            d="M298 195 C280 185, 250 170, 225 155 Q210 148, 200 145"
            stroke="#94A3B8"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />

          {/* Right arm - follows through */}
          <path
            d="M310 195 C295 185, 265 170, 240 158 Q220 150, 205 148"
            stroke="#94A3B8"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.3"
          />

          {/* Hands (club grip) */}
          <circle cx="200" cy="146" r="5" fill="#94A3B8" opacity="0.2" />

          {/* Club shaft */}
          <line
            x1="200"
            y1="146"
            x2="170"
            y2="110"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* Club head */}
          <rect
            x="162"
            y="100"
            width="14"
            height="8"
            rx="2"
            fill="#94A3B8"
            opacity="0.25"
            transform="rotate(-25, 169, 104)"
          />

          {/* Left leg - weight forward */}
          <path
            d="M300 280 C295 310, 290 350, 285 380 Q282 400, 280 440"
            stroke="#94A3B8"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />

          {/* Right leg - trailing */}
          <path
            d="M310 280 C325 310, 340 350, 350 380 Q355 410, 345 440"
            stroke="#94A3B8"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.3"
          />

          {/* Left foot */}
          <path
            d="M280 438 L265 442 L265 446 L285 446 L285 440"
            fill="#94A3B8"
            opacity="0.25"
          />

          {/* Right foot - on toe */}
          <path
            d="M345 438 L340 446 L355 446 L355 440"
            fill="#94A3B8"
            opacity="0.2"
          />
        </g>

        {/* ====== JOINT NODES ====== */}
        {/* Shoulder joint */}
        <circle cx="298" cy="195" r="4" fill="#10B981" opacity="0.8" />
        <circle cx="298" cy="195" r="7" fill="#10B981" opacity="0.15" />

        {/* Hands joint */}
        <circle cx="200" cy="146" r="4" fill="#10B981" opacity="0.8" />
        <circle cx="200" cy="146" r="7" fill="#10B981" opacity="0.15" />

        {/* Hip joint */}
        <circle cx="305" cy="280" r="4" fill="#10B981" opacity="0.8" />
        <circle cx="305" cy="280" r="7" fill="#10B981" opacity="0.15" />

        {/* Left knee joint */}
        <circle cx="287" cy="380" r="4" fill="#10B981" opacity="0.8" />
        <circle cx="287" cy="380" r="7" fill="#10B981" opacity="0.15" />

        {/* ====== ANGLE INDICATOR ARCS ====== */}
        {/* Shoulder angle arc */}
        <path
          d="M280 195 A20 20 0 0 1 298 178"
          stroke="#10B981"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          filter="url(#line-glow)"
        />

        {/* Hands angle arc */}
        <path
          d="M200 165 A20 20 0 0 1 182 152"
          stroke="#10B981"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          filter="url(#line-glow)"
        />

        {/* Hip angle arc */}
        <path
          d="M285 280 A22 22 0 0 1 305 260"
          stroke="#10B981"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          filter="url(#line-glow)"
        />

        {/* Left knee angle arc */}
        <path
          d="M270 385 A18 18 0 0 1 285 365"
          stroke="#10B981"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
          filter="url(#line-glow)"
        />

        {/* ====== CONNECTING DASHED LINES (joint to label) ====== */}
        <line
          x1="298"
          y1="195"
          x2="380"
          y2="175"
          stroke="#3B82F6"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.4"
        />
        <line
          x1="200"
          y1="146"
          x2="110"
          y2="120"
          stroke="#3B82F6"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.4"
        />
        <line
          x1="305"
          y1="280"
          x2="395"
          y2="290"
          stroke="#3B82F6"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.4"
        />
        <line
          x1="287"
          y1="380"
          x2="380"
          y2="388"
          stroke="#3B82F6"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.4"
        />

        {/* ====== DATA LABELS ====== */}

        {/* Shoulders: 45 degrees */}
        <g>
          <rect
            x="380"
            y="160"
            width="88"
            height="32"
            rx="8"
            fill="url(#label-bg)"
            stroke="#3B82F6"
            strokeWidth="0.8"
            opacity="0.9"
          />
          <text
            x="392"
            y="175"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
            letterSpacing="0.05em"
          >
            SHOULDERS
          </text>
          <text
            x="392"
            y="188"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#3B82F6"
          >
            45
            <tspan fontSize="10" fill="#94A3B8">
              {"  deg"}
            </tspan>
          </text>
        </g>

        {/* Hands: 75 degrees */}
        <g>
          <rect
            x="40"
            y="104"
            width="72"
            height="32"
            rx="8"
            fill="url(#label-bg)"
            stroke="#3B82F6"
            strokeWidth="0.8"
            opacity="0.9"
          />
          <text
            x="52"
            y="119"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
            letterSpacing="0.05em"
          >
            HANDS
          </text>
          <text
            x="52"
            y="132"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#3B82F6"
          >
            75
            <tspan fontSize="10" fill="#94A3B8">
              {"  deg"}
            </tspan>
          </text>
        </g>

        {/* Hips: 30 degrees */}
        <g>
          <rect
            x="395"
            y="274"
            width="72"
            height="32"
            rx="8"
            fill="url(#label-bg)"
            stroke="#3B82F6"
            strokeWidth="0.8"
            opacity="0.9"
          />
          <text
            x="407"
            y="289"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
            letterSpacing="0.05em"
          >
            HIPS
          </text>
          <text
            x="407"
            y="302"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#3B82F6"
          >
            30
            <tspan fontSize="10" fill="#94A3B8">
              {"  deg"}
            </tspan>
          </text>
        </g>

        {/* Left Knee: 15 degrees */}
        <g>
          <rect
            x="380"
            y="372"
            width="88"
            height="32"
            rx="8"
            fill="url(#label-bg)"
            stroke="#3B82F6"
            strokeWidth="0.8"
            opacity="0.9"
          />
          <text
            x="392"
            y="387"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
            letterSpacing="0.05em"
          >
            LEFT KNEE
          </text>
          <text
            x="392"
            y="400"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#3B82F6"
          >
            15
            <tspan fontSize="10" fill="#94A3B8">
              {"  deg"}
            </tspan>
          </text>
        </g>

        {/* ====== ADDITIONAL ANALYSIS DETAILS ====== */}

        {/* Speed indicator near club head path */}
        <g opacity="0.7">
          <rect
            x="125"
            y="60"
            width="72"
            height="24"
            rx="6"
            fill="#0B1120"
            stroke="#10B981"
            strokeWidth="0.6"
          />
          <text
            x="161"
            y="76"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="10"
            fontWeight="600"
            fill="#10B981"
          >
            98 mph
          </text>
        </g>

        {/* Attack angle near impact point */}
        <g opacity="0.6">
          <rect
            x="432"
            y="230"
            width="68"
            height="22"
            rx="6"
            fill="#0B1120"
            stroke="#10B981"
            strokeWidth="0.5"
          />
          <text
            x="466"
            y="245"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="9"
            fill="#10B981"
          >
            -4.2 deg
          </text>
        </g>

        {/* Ball flight trace from impact */}
        <path
          d="M433 262 Q460 250, 490 248 Q520 246, 550 252 Q570 256, 585 264"
          stroke="#D4A843"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          opacity="0.4"
        />
        <circle cx="585" cy="264" r="3" fill="#D4A843" opacity="0.4" />

        {/* Vertical reference line through spine */}
        <line
          x1="305"
          y1="140"
          x2="305"
          y2="445"
          stroke="#1E293B"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export { SwingAnalysis };
