"use client";

export default function HeroBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial fade overlay */}
          <radialGradient id="hero-fade" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#0B1120" stopOpacity="0" />
            <stop offset="70%" stopColor="#0B1120" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0B1120" stopOpacity="0.95" />
          </radialGradient>

          {/* Emerald glow for nodes */}
          <radialGradient id="node-glow-emerald" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>

          {/* Blue glow for nodes */}
          <radialGradient id="node-glow-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes float-fast {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-6px) translateX(3px); }
            66% { transform: translateY(-3px) translateX(-2px); }
          }
          @keyframes pulse-soft {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          .float-slow { animation: float-slow 8s ease-in-out infinite; }
          .float-medium { animation: float-medium 6s ease-in-out infinite; }
          .float-fast { animation: float-fast 5s ease-in-out infinite; }
          .pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
        `}</style>

        {/* ====== LAYER 1: Topographic Contour Lines ====== */}
        {/* These represent stylized golf course elevation contours */}

        {/* Outer contour lines - very subtle */}
        <path
          d="M-50 650 C200 600, 400 680, 600 620 S900 580, 1100 640 S1300 600, 1500 660"
          stroke="#10B981"
          strokeWidth="0.8"
          opacity="0.08"
          fill="none"
        />
        <path
          d="M-50 680 C180 640, 380 710, 580 660 S880 620, 1080 680 S1280 640, 1500 690"
          stroke="#10B981"
          strokeWidth="0.7"
          opacity="0.06"
          fill="none"
        />
        <path
          d="M-50 710 C160 680, 360 740, 560 700 S860 660, 1060 720 S1260 680, 1500 720"
          stroke="#10B981"
          strokeWidth="0.6"
          opacity="0.05"
          fill="none"
        />

        {/* Mid-section contour cluster (green area) */}
        <path
          d="M200 400 C350 360, 500 420, 650 380 S850 340, 1000 400 S1150 360, 1250 420"
          stroke="#10B981"
          strokeWidth="1"
          opacity="0.1"
          fill="none"
        />
        <path
          d="M180 430 C330 395, 480 450, 630 415 S830 380, 980 430 S1130 395, 1230 450"
          stroke="#10B981"
          strokeWidth="0.9"
          opacity="0.08"
          fill="none"
        />
        <path
          d="M220 460 C360 430, 510 480, 660 450 S860 420, 1010 460 S1160 430, 1260 480"
          stroke="#10B981"
          strokeWidth="0.8"
          opacity="0.07"
          fill="none"
        />
        <path
          d="M240 490 C370 465, 520 510, 670 480 S870 455, 1020 490 S1170 465, 1270 510"
          stroke="#10B981"
          strokeWidth="0.7"
          opacity="0.06"
          fill="none"
        />

        {/* Upper contour lines - blue tinted */}
        <path
          d="M100 200 C300 170, 500 230, 700 190 S1000 160, 1200 220 S1350 180, 1500 210"
          stroke="#3B82F6"
          strokeWidth="0.7"
          opacity="0.07"
          fill="none"
        />
        <path
          d="M80 230 C280 205, 480 260, 680 225 S980 195, 1180 250 S1330 215, 1500 240"
          stroke="#3B82F6"
          strokeWidth="0.6"
          opacity="0.06"
          fill="none"
        />
        <path
          d="M120 260 C310 240, 500 290, 700 258 S1000 230, 1200 280 S1360 248, 1500 270"
          stroke="#3B82F6"
          strokeWidth="0.5"
          opacity="0.05"
          fill="none"
        />

        {/* Tight contour cluster (bunker/hill area) */}
        <path
          d="M700 300 C750 280, 820 310, 870 290 S940 270, 980 300"
          stroke="#10B981"
          strokeWidth="1"
          opacity="0.12"
          fill="none"
        />
        <path
          d="M720 315 C760 300, 825 325, 870 310 S930 295, 960 315"
          stroke="#10B981"
          strokeWidth="0.9"
          opacity="0.1"
          fill="none"
        />
        <path
          d="M740 328 C770 318, 830 338, 870 325 S920 315, 945 330"
          stroke="#10B981"
          strokeWidth="0.8"
          opacity="0.08"
          fill="none"
        />

        {/* Bottom terrain contours */}
        <path
          d="M-50 780 C200 750, 450 800, 700 760 S1050 730, 1300 780 S1400 760, 1500 790"
          stroke="#3B82F6"
          strokeWidth="0.6"
          opacity="0.06"
          fill="none"
        />
        <path
          d="M-50 810 C220 785, 470 830, 720 795 S1070 770, 1320 810 S1420 795, 1500 820"
          stroke="#3B82F6"
          strokeWidth="0.5"
          opacity="0.04"
          fill="none"
        />

        {/* ====== LAYER 2: Data Nodes - Group A (slow float) ====== */}
        <g className="float-slow">
          {/* Node cluster - upper left */}
          <circle cx="180" cy="180" r="8" fill="url(#node-glow-emerald)" />
          <circle cx="180" cy="180" r="2" fill="#10B981" opacity="0.7" />

          <circle cx="320" cy="140" r="6" fill="url(#node-glow-blue)" />
          <circle cx="320" cy="140" r="1.5" fill="#3B82F6" opacity="0.6" />

          <circle cx="250" cy="220" r="5" fill="url(#node-glow-emerald)" />
          <circle cx="250" cy="220" r="1.5" fill="#10B981" opacity="0.5" />

          {/* Connecting lines between nodes */}
          <line
            x1="180"
            y1="180"
            x2="320"
            y2="140"
            stroke="#10B981"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <line
            x1="180"
            y1="180"
            x2="250"
            y2="220"
            stroke="#10B981"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <line
            x1="320"
            y1="140"
            x2="250"
            y2="220"
            stroke="#3B82F6"
            strokeWidth="0.4"
            opacity="0.07"
          />

          {/* Distant node */}
          <circle cx="460" cy="160" r="4" fill="url(#node-glow-blue)" />
          <circle cx="460" cy="160" r="1" fill="#3B82F6" opacity="0.4" />
          <line
            x1="320"
            y1="140"
            x2="460"
            y2="160"
            stroke="#3B82F6"
            strokeWidth="0.3"
            opacity="0.06"
          />
        </g>

        {/* ====== LAYER 2: Data Nodes - Group B (medium float) ====== */}
        <g className="float-medium">
          {/* Node cluster - center right */}
          <circle cx="1050" cy="280" r="7" fill="url(#node-glow-blue)" />
          <circle cx="1050" cy="280" r="2" fill="#3B82F6" opacity="0.6" />

          <circle cx="1180" cy="240" r="5" fill="url(#node-glow-emerald)" />
          <circle cx="1180" cy="240" r="1.5" fill="#10B981" opacity="0.5" />

          <circle cx="1120" cy="350" r="6" fill="url(#node-glow-blue)" />
          <circle cx="1120" cy="350" r="1.5" fill="#3B82F6" opacity="0.55" />

          <circle cx="1260" cy="310" r="4" fill="url(#node-glow-emerald)" />
          <circle cx="1260" cy="310" r="1" fill="#10B981" opacity="0.4" />

          {/* Connections */}
          <line
            x1="1050"
            y1="280"
            x2="1180"
            y2="240"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <line
            x1="1050"
            y1="280"
            x2="1120"
            y2="350"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <line
            x1="1180"
            y1="240"
            x2="1260"
            y2="310"
            stroke="#10B981"
            strokeWidth="0.4"
            opacity="0.07"
          />
          <line
            x1="1120"
            y1="350"
            x2="1260"
            y2="310"
            stroke="#10B981"
            strokeWidth="0.4"
            opacity="0.06"
          />
        </g>

        {/* ====== LAYER 2: Data Nodes - Group C (fast float) ====== */}
        <g className="float-fast">
          {/* Scattered nodes - lower area */}
          <circle cx="600" cy="550" r="6" fill="url(#node-glow-emerald)" />
          <circle cx="600" cy="550" r="1.5" fill="#10B981" opacity="0.5" />

          <circle cx="750" cy="500" r="5" fill="url(#node-glow-blue)" />
          <circle cx="750" cy="500" r="1.3" fill="#3B82F6" opacity="0.45" />

          <circle cx="520" cy="480" r="4" fill="url(#node-glow-blue)" />
          <circle cx="520" cy="480" r="1" fill="#3B82F6" opacity="0.35" />

          <circle cx="680" cy="620" r="5" fill="url(#node-glow-emerald)" />
          <circle cx="680" cy="620" r="1.3" fill="#10B981" opacity="0.4" />

          {/* Connections */}
          <line
            x1="600"
            y1="550"
            x2="750"
            y2="500"
            stroke="#10B981"
            strokeWidth="0.4"
            opacity="0.08"
          />
          <line
            x1="600"
            y1="550"
            x2="520"
            y2="480"
            stroke="#3B82F6"
            strokeWidth="0.4"
            opacity="0.06"
          />
          <line
            x1="600"
            y1="550"
            x2="680"
            y2="620"
            stroke="#10B981"
            strokeWidth="0.4"
            opacity="0.07"
          />
          <line
            x1="750"
            y1="500"
            x2="520"
            y2="480"
            stroke="#3B82F6"
            strokeWidth="0.3"
            opacity="0.05"
          />
        </g>

        {/* ====== LAYER 2: Additional scattered individual nodes ====== */}
        <g className="float-slow" style={{ animationDelay: "2s" }}>
          <circle cx="100" cy="450" r="3" fill="url(#node-glow-emerald)" />
          <circle cx="100" cy="450" r="0.8" fill="#10B981" opacity="0.3" />

          <circle cx="1350" cy="500" r="4" fill="url(#node-glow-blue)" />
          <circle cx="1350" cy="500" r="1" fill="#3B82F6" opacity="0.3" />

          <circle cx="400" cy="700" r="3" fill="url(#node-glow-blue)" />
          <circle cx="400" cy="700" r="0.8" fill="#3B82F6" opacity="0.25" />

          <circle cx="900" cy="150" r="3.5" fill="url(#node-glow-emerald)" />
          <circle cx="900" cy="150" r="0.9" fill="#10B981" opacity="0.3" />
        </g>

        {/* Pulsing accent nodes */}
        <g className="pulse-soft">
          <circle cx="720" cy="350" r="3" fill="#10B981" opacity="0.15" />
          <circle cx="720" cy="350" r="1" fill="#10B981" opacity="0.4" />

          <circle cx="380" cy="350" r="2.5" fill="#3B82F6" opacity="0.12" />
          <circle cx="380" cy="350" r="0.8" fill="#3B82F6" opacity="0.35" />
        </g>

        {/* ====== LAYER 3: Radial Fade Overlay ====== */}
        <rect
          x="0"
          y="0"
          width="1440"
          height="900"
          fill="url(#hero-fade)"
        />

        {/* Edge fade - top */}
        <rect
          x="0"
          y="0"
          width="1440"
          height="120"
          fill="url(#hero-fade)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export { HeroBackground };
