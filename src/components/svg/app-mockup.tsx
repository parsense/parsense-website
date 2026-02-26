"use client";

export default function AppMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{
        transform: "perspective(1200px) rotateY(-8deg) rotateX(4deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <svg
        width="320"
        height="640"
        viewBox="0 0 320 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          {/* Phone frame gradient */}
          <linearGradient id="phone-frame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A3344" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#151D2E" />
          </linearGradient>

          {/* Fairway gradient */}
          <linearGradient id="fairway-green" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#134E2A" />
            <stop offset="100%" stopColor="#0F3D22" />
          </linearGradient>

          {/* Green (putting green) gradient */}
          <radialGradient id="putting-green" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1A7A42" />
            <stop offset="100%" stopColor="#146B38" />
          </radialGradient>

          {/* Water hazard */}
          <linearGradient id="water-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
          </linearGradient>

          {/* Player glow */}
          <radialGradient id="player-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>

          {/* Pin glow */}
          <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </radialGradient>

          {/* Screen edge shadow */}
          <linearGradient id="screen-top-shadow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0B1120" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B1120" stopOpacity="0" />
          </linearGradient>

          {/* Card gradient */}
          <linearGradient id="card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>

          {/* Clip for screen content */}
          <clipPath id="screen-clip">
            <rect x="12" y="12" width="296" height="616" rx="32" />
          </clipPath>
        </defs>

        {/* ====== PHONE FRAME ====== */}
        {/* Outer shell */}
        <rect
          x="0"
          y="0"
          width="320"
          height="640"
          rx="44"
          fill="url(#phone-frame)"
          stroke="#3A4556"
          strokeWidth="1"
        />

        {/* Side button accents */}
        <rect x="0" y="150" width="2" height="40" rx="1" fill="#3A4556" />
        <rect x="0" y="210" width="2" height="60" rx="1" fill="#3A4556" />
        <rect x="318" y="180" width="2" height="50" rx="1" fill="#3A4556" />

        {/* Screen bezel */}
        <rect
          x="8"
          y="8"
          width="304"
          height="624"
          rx="38"
          fill="#0B1120"
          stroke="#1E293B"
          strokeWidth="1"
        />

        {/* ====== SCREEN CONTENT ====== */}
        <g clipPath="url(#screen-clip)">
          {/* Screen background */}
          <rect x="12" y="12" width="296" height="616" fill="#0B1120" />

          {/* Course terrain background (dark earth tones) */}
          <rect x="12" y="60" width="296" height="500" fill="#0A0F1A" />

          {/* ====== GOLF HOLE LAYOUT ====== */}

          {/* Rough / surrounding area */}
          <rect x="12" y="60" width="296" height="500" fill="#0D1A12" opacity="0.5" />

          {/* Fairway - main corridor */}
          <path
            d="M130 530 C125 480, 110 420, 120 370 C130 320, 150 280, 160 240 C170 200, 165 170, 175 140 C185 120, 200 110, 190 100"
            stroke="none"
            fill="none"
          />
          <path
            d="M100 530 Q95 450, 100 380 Q105 320, 125 260 Q140 210, 148 160 Q152 130, 165 105
               L210 105 Q198 130, 195 160 Q190 210, 200 260 Q215 320, 215 380 Q218 450, 210 530 Z"
            fill="url(#fairway-green)"
            opacity="0.7"
          />

          {/* Fairway center line (mow pattern) */}
          <path
            d="M155 520 Q150 440, 155 370 Q160 310, 170 250 Q178 200, 175 150 Q173 125, 185 108"
            stroke="#1A7A42"
            strokeWidth="0.5"
            opacity="0.4"
            fill="none"
          />

          {/* ====== PUTTING GREEN ====== */}
          <ellipse
            cx="185"
            cy="108"
            rx="32"
            ry="22"
            fill="url(#putting-green)"
            opacity="0.8"
          />
          {/* Green fringe */}
          <ellipse
            cx="185"
            cy="108"
            rx="36"
            ry="25"
            fill="none"
            stroke="#1A7A42"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* ====== BUNKERS ====== */}
          {/* Left fairway bunker */}
          <ellipse
            cx="95"
            cy="300"
            rx="18"
            ry="12"
            fill="#D4A843"
            opacity="0.25"
            stroke="#D4A843"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          {/* Greenside bunker */}
          <ellipse
            cx="155"
            cy="118"
            rx="14"
            ry="8"
            fill="#D4A843"
            opacity="0.25"
            stroke="#D4A843"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          {/* Right bunker */}
          <ellipse
            cx="225"
            cy="240"
            rx="15"
            ry="10"
            fill="#D4A843"
            opacity="0.2"
            stroke="#D4A843"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />

          {/* ====== WATER HAZARD ====== */}
          <path
            d="M230 340 Q260 330, 280 350 Q295 370, 285 400 Q275 420, 250 415 Q235 410, 230 390 Q225 370, 230 340 Z"
            fill="url(#water-blue)"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity="0.5"
          />

          {/* ====== PIN / FLAG ====== */}
          {/* Pin glow */}
          <circle cx="188" cy="100" r="12" fill="url(#pin-glow)" />
          {/* Flag pole */}
          <line x1="188" y1="92" x2="188" y2="108" stroke="#EF4444" strokeWidth="1.5" />
          {/* Flag */}
          <path d="M188 92 L198 96 L188 100" fill="#EF4444" opacity="0.9" />

          {/* ====== PLAYER POSITION ====== */}
          {/* Player glow */}
          <circle cx="155" cy="470" r="18" fill="url(#player-glow)" />
          {/* Player dot */}
          <circle cx="155" cy="470" r="5" fill="#10B981" />
          <circle cx="155" cy="470" r="3" fill="#10B981" opacity="0.8" />
          <circle cx="155" cy="470" r="8" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.3" />

          {/* ====== SHOT TRAJECTORY ====== */}
          <path
            d="M155 465 Q152 400, 158 340 Q163 280, 170 230 Q176 180, 180 150 Q183 130, 187 110"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.6"
            fill="none"
          />
          {/* Trajectory end dot */}
          <circle cx="187" cy="110" r="3" fill="#10B981" opacity="0.5" />

          {/* ====== DISTANCE LABEL ====== */}
          {/* Distance line midpoint label */}
          <rect
            x="100"
            y="275"
            width="56"
            height="24"
            rx="12"
            fill="#0B1120"
            stroke="#10B981"
            strokeWidth="0.8"
            opacity="0.9"
          />
          <text
            x="128"
            y="291"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="11"
            fontWeight="600"
            fill="#10B981"
          >
            187 yd
          </text>

          {/* ====== FLOATING CLUB RECOMMENDATION CARD ====== */}
          <g>
            {/* Card shadow */}
            <rect
              x="172"
              y="420"
              width="120"
              height="72"
              rx="12"
              fill="#000"
              opacity="0.3"
            />
            {/* Card background */}
            <rect
              x="170"
              y="418"
              width="120"
              height="72"
              rx="12"
              fill="url(#card-bg)"
              stroke="#1E293B"
              strokeWidth="1"
            />
            {/* AI badge */}
            <rect
              x="180"
              y="426"
              width="24"
              height="14"
              rx="4"
              fill="#3B82F6"
              opacity="0.2"
            />
            <text
              x="192"
              y="436"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="8"
              fontWeight="700"
              fill="#3B82F6"
            >
              AI
            </text>

            {/* Club name */}
            <text
              x="210"
              y="436"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="9"
              fill="#94A3B8"
            >
              Recommended
            </text>
            <text
              x="180"
              y="456"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="#FFFFFF"
            >
              8 Iron
            </text>

            {/* Wind info */}
            <text
              x="180"
              y="478"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="10"
              fill="#94A3B8"
            >
              {/* Wind icon (inline) */}
              <tspan fill="#3B82F6">{"~"}</tspan>
              {" 12 mph NE"}
            </text>
          </g>

          {/* ====== TOP STATUS BAR ====== */}
          <rect x="12" y="12" width="296" height="50" fill="url(#screen-top-shadow)" />

          {/* Hole number */}
          <text
            x="30"
            y="42"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="13"
            fontWeight="600"
            fill="#FFFFFF"
          >
            Hole 7
          </text>
          <text
            x="80"
            y="42"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="11"
            fill="#94A3B8"
          >
            Par 4
          </text>

          {/* Top right - score indicator */}
          <text
            x="260"
            y="42"
            textAnchor="end"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="11"
            fill="#94A3B8"
          >
            -2
          </text>
          <circle cx="272" cy="38" r="3" fill="#10B981" opacity="0.6" />

          {/* ====== BOTTOM NAV BAR ====== */}
          <rect x="12" y="570" width="296" height="58" fill="#0B1120" opacity="0.9" />
          <line x1="12" y1="570" x2="308" y2="570" stroke="#1E293B" strokeWidth="0.5" />

          {/* Nav icons (simplified) */}
          {/* Map icon */}
          <rect x="55" y="582" width="14" height="14" rx="2" fill="none" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="62" cy="589" r="2" fill="#10B981" opacity="0.5" />
          <text
            x="62"
            y="608"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#10B981"
          >
            Map
          </text>

          {/* Stats icon */}
          <rect x="130" y="586" width="3" height="10" rx="1" fill="#94A3B8" opacity="0.5" />
          <rect x="136" y="582" width="3" height="14" rx="1" fill="#94A3B8" opacity="0.5" />
          <rect x="142" y="584" width="3" height="12" rx="1" fill="#94A3B8" opacity="0.5" />
          <text
            x="137"
            y="608"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
          >
            Stats
          </text>

          {/* Clubs icon */}
          <line x1="215" y1="582" x2="215" y2="596" stroke="#94A3B8" strokeWidth="1.5" opacity="0.5" />
          <circle cx="215" cy="580" r="3" fill="none" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
          <text
            x="215"
            y="608"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
          >
            Clubs
          </text>

          {/* Score icon */}
          <rect x="275" y="582" width="14" height="14" rx="2" fill="none" stroke="#94A3B8" strokeWidth="1" opacity="0.5" />
          <text
            x="282"
            y="593"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="9"
            fontWeight="600"
            fill="#94A3B8"
            opacity="0.5"
          >
            S
          </text>
          <text
            x="282"
            y="608"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="8"
            fill="#94A3B8"
          >
            Score
          </text>

          {/* Home indicator */}
          <rect
            x="120"
            y="622"
            width="80"
            height="4"
            rx="2"
            fill="#FFFFFF"
            opacity="0.2"
          />
        </g>

        {/* ====== DYNAMIC ISLAND / NOTCH ====== */}
        <rect
          x="115"
          y="16"
          width="90"
          height="24"
          rx="12"
          fill="#000000"
        />
      </svg>
    </div>
  );
}

export { AppMockup };
