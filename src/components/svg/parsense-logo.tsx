"use client";

interface ParsenseLogoProps {
  className?: string;
  variant?: "icon" | "full";
}

export function ParsenseLogo({
  className = "",
  variant = "full",
}: ParsenseLogoProps) {
  const iconSize = variant === "icon" ? 48 : 40;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ParSense logo"
      >
        <defs>
          {/* Main gradient: emerald to blue */}
          <linearGradient
            id="parsense-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          {/* Subtle glow gradient */}
          <radialGradient id="parsense-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>

          {/* Clip path for the left hemisphere (dimples) */}
          <clipPath id="left-half">
            <rect x="0" y="0" width="50" height="100" />
          </clipPath>

          {/* Clip path for the right hemisphere (neural) */}
          <clipPath id="right-half">
            <rect x="50" y="0" width="50" height="100" />
          </clipPath>

          {/* Circle clip for whole logo */}
          <clipPath id="circle-clip">
            <circle cx="50" cy="50" r="44" />
          </clipPath>
        </defs>

        {/* Outer glow */}
        <circle cx="50" cy="50" r="48" fill="url(#parsense-glow)" />

        {/* Main circle border with gradient */}
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="url(#parsense-grad)"
          strokeWidth="2"
        />

        {/* Background fill inside circle */}
        <circle cx="50" cy="50" r="43" fill="#0B1120" />

        {/* ====== LEFT SIDE: Golf Ball Dimples ====== */}
        <g clipPath="url(#left-half)">
          <g clipPath="url(#circle-clip)">
            {/* Dimple pattern - hexagonal arrangement */}
            {/* Row 1 */}
            <circle cx="18" cy="22" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.6" />
            <circle cx="32" cy="22" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.5" />
            <circle cx="46" cy="22" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.4" />

            {/* Row 2 */}
            <circle cx="11" cy="35" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.7" />
            <circle cx="25" cy="35" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.6" />
            <circle cx="39" cy="35" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.5" />

            {/* Row 3 - center */}
            <circle cx="18" cy="48" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.7" />
            <circle cx="32" cy="50" r="5.5" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.8" />
            <circle cx="46" cy="50" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.35" />

            {/* Row 4 */}
            <circle cx="11" cy="62" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.7" />
            <circle cx="25" cy="62" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.6" />
            <circle cx="39" cy="62" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.45" />

            {/* Row 5 */}
            <circle cx="18" cy="75" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.6" />
            <circle cx="32" cy="75" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.5" />
            <circle cx="46" cy="75" r="5" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.3" />

            {/* Inner dimple highlights */}
            <circle cx="18" cy="22" r="2" fill="#10B981" opacity="0.15" />
            <circle cx="32" cy="22" r="2" fill="#10B981" opacity="0.12" />
            <circle cx="11" cy="35" r="2" fill="#10B981" opacity="0.18" />
            <circle cx="25" cy="35" r="2" fill="#10B981" opacity="0.15" />
            <circle cx="18" cy="48" r="2" fill="#10B981" opacity="0.18" />
            <circle cx="32" cy="50" r="2.5" fill="#10B981" opacity="0.2" />
            <circle cx="11" cy="62" r="2" fill="#10B981" opacity="0.18" />
            <circle cx="25" cy="62" r="2" fill="#10B981" opacity="0.15" />
            <circle cx="18" cy="75" r="2" fill="#10B981" opacity="0.12" />
            <circle cx="32" cy="75" r="2" fill="#10B981" opacity="0.1" />
          </g>
        </g>

        {/* ====== CENTER DIVIDER: Transition zone ====== */}
        <line
          x1="50"
          y1="8"
          x2="50"
          y2="92"
          stroke="url(#parsense-grad)"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="2 3"
        />

        {/* ====== RIGHT SIDE: Neural Network ====== */}
        <g clipPath="url(#right-half)">
          <g clipPath="url(#circle-clip)">
            {/* Neural network connections (lines first, behind nodes) */}
            {/* Layer connections */}
            <line x1="58" y1="28" x2="72" y2="22" stroke="#3B82F6" strokeWidth="0.7" opacity="0.35" />
            <line x1="58" y1="28" x2="72" y2="40" stroke="#3B82F6" strokeWidth="0.7" opacity="0.3" />
            <line x1="58" y1="28" x2="85" y2="30" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />

            <line x1="55" y1="45" x2="72" y2="22" stroke="#3B82F6" strokeWidth="0.7" opacity="0.25" />
            <line x1="55" y1="45" x2="72" y2="40" stroke="#3B82F6" strokeWidth="0.7" opacity="0.4" />
            <line x1="55" y1="45" x2="72" y2="58" stroke="#3B82F6" strokeWidth="0.7" opacity="0.35" />
            <line x1="55" y1="45" x2="85" y2="50" stroke="#3B82F6" strokeWidth="0.5" opacity="0.25" />

            <line x1="55" y1="62" x2="72" y2="40" stroke="#3B82F6" strokeWidth="0.7" opacity="0.25" />
            <line x1="55" y1="62" x2="72" y2="58" stroke="#3B82F6" strokeWidth="0.7" opacity="0.4" />
            <line x1="55" y1="62" x2="72" y2="75" stroke="#3B82F6" strokeWidth="0.7" opacity="0.3" />

            <line x1="58" y1="78" x2="72" y2="58" stroke="#3B82F6" strokeWidth="0.7" opacity="0.25" />
            <line x1="58" y1="78" x2="72" y2="75" stroke="#3B82F6" strokeWidth="0.7" opacity="0.35" />
            <line x1="58" y1="78" x2="85" y2="70" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />

            {/* Outer layer connections */}
            <line x1="72" y1="22" x2="85" y2="30" stroke="#3B82F6" strokeWidth="0.6" opacity="0.3" />
            <line x1="72" y1="40" x2="85" y2="30" stroke="#3B82F6" strokeWidth="0.6" opacity="0.25" />
            <line x1="72" y1="40" x2="85" y2="50" stroke="#3B82F6" strokeWidth="0.6" opacity="0.35" />
            <line x1="72" y1="58" x2="85" y2="50" stroke="#3B82F6" strokeWidth="0.6" opacity="0.35" />
            <line x1="72" y1="58" x2="85" y2="70" stroke="#3B82F6" strokeWidth="0.6" opacity="0.25" />
            <line x1="72" y1="75" x2="85" y2="70" stroke="#3B82F6" strokeWidth="0.6" opacity="0.3" />

            {/* Neural nodes - Input layer (transition from dimples) */}
            <circle cx="58" cy="28" r="3" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.7" />
            <circle cx="58" cy="28" r="1.5" fill="#3B82F6" opacity="0.5" />

            <circle cx="55" cy="45" r="3.5" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.8" />
            <circle cx="55" cy="45" r="1.8" fill="#3B82F6" opacity="0.6" />

            <circle cx="55" cy="62" r="3.5" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.8" />
            <circle cx="55" cy="62" r="1.8" fill="#3B82F6" opacity="0.6" />

            <circle cx="58" cy="78" r="3" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.7" />
            <circle cx="58" cy="78" r="1.5" fill="#3B82F6" opacity="0.5" />

            {/* Hidden layer */}
            <circle cx="72" cy="22" r="2.5" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
            <circle cx="72" cy="22" r="1.2" fill="#3B82F6" opacity="0.5" />

            <circle cx="72" cy="40" r="3" fill="#0B1120" stroke="#3B82F6" strokeWidth="1.2" opacity="0.8" />
            <circle cx="72" cy="40" r="1.5" fill="#3B82F6" opacity="0.7" />

            <circle cx="72" cy="58" r="3" fill="#0B1120" stroke="#3B82F6" strokeWidth="1.2" opacity="0.8" />
            <circle cx="72" cy="58" r="1.5" fill="#3B82F6" opacity="0.7" />

            <circle cx="72" cy="75" r="2.5" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
            <circle cx="72" cy="75" r="1.2" fill="#3B82F6" opacity="0.5" />

            {/* Output layer */}
            <circle cx="85" cy="30" r="2" fill="#0B1120" stroke="#3B82F6" strokeWidth="0.8" opacity="0.5" />
            <circle cx="85" cy="30" r="1" fill="#3B82F6" opacity="0.4" />

            <circle cx="85" cy="50" r="2.5" fill="#0B1120" stroke="#3B82F6" strokeWidth="1" opacity="0.7" />
            <circle cx="85" cy="50" r="1.3" fill="#3B82F6" opacity="0.6" />

            <circle cx="85" cy="70" r="2" fill="#0B1120" stroke="#3B82F6" strokeWidth="0.8" opacity="0.5" />
            <circle cx="85" cy="70" r="1" fill="#3B82F6" opacity="0.4" />
          </g>
        </g>

        {/* Outer ring accent */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#parsense-grad)"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>

      {/* Text portion - only in "full" variant */}
      {variant === "full" && (
        <svg
          width="120"
          height="28"
          viewBox="0 0 120 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="parsense-text-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          {/* "Par" in white */}
          <text
            x="0"
            y="21"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#FFFFFF"
            letterSpacing="-0.02em"
          >
            Par
          </text>
          {/* "Sense" in gradient */}
          <text
            x="42"
            y="21"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="url(#parsense-text-grad)"
            letterSpacing="-0.02em"
          >
            Sense
          </text>
        </svg>
      )}
    </div>
  );
}

export default ParsenseLogo;
