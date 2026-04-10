// California Road Sign SVG Components
export default function SignImage({ type, size = 120 }) {
  const s = size

  const signs = {
    // ── Regulatory ──────────────────────────────────────────────
    stop: (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="35,10 85,10 110,35 110,85 85,110 35,110 10,85 10,35"
          fill="#CC0000" stroke="white" strokeWidth="4"/>
        <polygon points="37,15 83,15 105,37 105,83 83,105 37,105 15,83 15,37"
          fill="none" stroke="white" strokeWidth="2"/>
        <text x="60" y="66" textAnchor="middle" fill="white"
          fontSize="22" fontWeight="800" fontFamily="Arial,sans-serif" letterSpacing="1">STOP</text>
      </svg>
    ),

    yield: (
      <svg width={s} height={s * 0.9} viewBox="0 0 120 108" className="sign-svg">
        <polygon points="60,4 116,104 4,104" fill="white" stroke="#CC0000" strokeWidth="7"/>
        <polygon points="60,18 104,98 16,98" fill="none" stroke="#CC0000" strokeWidth="3"/>
        <text x="60" y="82" textAnchor="middle" fill="#CC0000"
          fontSize="17" fontWeight="800" fontFamily="Arial,sans-serif" letterSpacing="1">YIELD</text>
      </svg>
    ),

    'do-not-enter': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <circle cx="60" cy="60" r="55" fill="#CC0000" stroke="white" strokeWidth="4"/>
        <rect x="18" y="48" width="84" height="24" rx="3" fill="white"/>
        <text x="60" y="65" textAnchor="middle" fill="#CC0000"
          fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="1.5">DO NOT ENTER</text>
      </svg>
    ),

    'wrong-way': (
      <svg width={s} height={s * 0.65} viewBox="0 0 120 78" className="sign-svg">
        <rect x="2" y="2" width="116" height="74" rx="6" fill="#CC0000" stroke="white" strokeWidth="3"/>
        <text x="60" y="34" textAnchor="middle" fill="white"
          fontSize="18" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="1">WRONG</text>
        <text x="60" y="58" textAnchor="middle" fill="white"
          fontSize="18" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="3">WAY</text>
      </svg>
    ),

    'one-way': (
      <svg width={s * 1.4} height={s * 0.55} viewBox="0 0 168 66" className="sign-svg">
        <rect x="2" y="2" width="164" height="62" rx="5" fill="#1a1a1a" stroke="white" strokeWidth="2"/>
        <text x="52" y="40" textAnchor="middle" fill="white"
          fontSize="20" fontWeight="800" fontFamily="Arial,sans-serif" letterSpacing="1">ONE WAY</text>
        <polygon points="116,33 145,33 145,22 165,33 145,44 145,33" fill="white"/>
      </svg>
    ),

    'speed-25': (
      <svg width={s * 0.72} height={s} viewBox="0 0 86 120" className="sign-svg">
        <rect x="2" y="2" width="82" height="116" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <rect x="8" y="8" width="70" height="104" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        <text x="43" y="36" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">SPEED</text>
        <text x="43" y="52" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">LIMIT</text>
        <text x="43" y="92" textAnchor="middle" fill="#1a1a1a"
          fontSize="44" fontWeight="900" fontFamily="Arial,sans-serif">25</text>
      </svg>
    ),

    'speed-35': (
      <svg width={s * 0.72} height={s} viewBox="0 0 86 120" className="sign-svg">
        <rect x="2" y="2" width="82" height="116" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <rect x="8" y="8" width="70" height="104" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        <text x="43" y="36" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">SPEED</text>
        <text x="43" y="52" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">LIMIT</text>
        <text x="43" y="92" textAnchor="middle" fill="#1a1a1a"
          fontSize="44" fontWeight="900" fontFamily="Arial,sans-serif">35</text>
      </svg>
    ),

    'speed-55': (
      <svg width={s * 0.72} height={s} viewBox="0 0 86 120" className="sign-svg">
        <rect x="2" y="2" width="82" height="116" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <rect x="8" y="8" width="70" height="104" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        <text x="43" y="36" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">SPEED</text>
        <text x="43" y="52" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">LIMIT</text>
        <text x="43" y="92" textAnchor="middle" fill="#1a1a1a"
          fontSize="44" fontWeight="900" fontFamily="Arial,sans-serif">55</text>
      </svg>
    ),

    'speed-65': (
      <svg width={s * 0.72} height={s} viewBox="0 0 86 120" className="sign-svg">
        <rect x="2" y="2" width="82" height="116" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <rect x="8" y="8" width="70" height="104" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        <text x="43" y="36" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">SPEED</text>
        <text x="43" y="52" textAnchor="middle" fill="#1a1a1a"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">LIMIT</text>
        <text x="43" y="92" textAnchor="middle" fill="#1a1a1a"
          fontSize="44" fontWeight="900" fontFamily="Arial,sans-serif">65</text>
      </svg>
    ),

    'min-speed': (
      <svg width={s * 0.72} height={s} viewBox="0 0 86 120" className="sign-svg">
        <rect x="2" y="2" width="82" height="116" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <rect x="8" y="8" width="70" height="104" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        <text x="43" y="30" textAnchor="middle" fill="#1a1a1a"
          fontSize="9.5" fontWeight="700" fontFamily="Arial,sans-serif">MINIMUM</text>
        <text x="43" y="46" textAnchor="middle" fill="#1a1a1a"
          fontSize="9.5" fontWeight="700" fontFamily="Arial,sans-serif">SPEED</text>
        <text x="43" y="92" textAnchor="middle" fill="#1a1a1a"
          fontSize="44" fontWeight="900" fontFamily="Arial,sans-serif">45</text>
      </svg>
    ),

    'no-u-turn': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <circle cx="60" cy="60" r="55" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <path d="M40,80 L40,50 Q40,28 65,28 Q90,28 90,50 L90,80" fill="none"
          stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
        <polygon points="75,75 90,90 90,60" fill="#1a1a1a"/>
        <line x1="18" y1="18" x2="102" y2="102" stroke="#CC0000" strokeWidth="7" strokeLinecap="round"/>
      </svg>
    ),

    'no-left-turn': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <circle cx="60" cy="60" r="55" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <path d="M80,75 L80,55 Q80,35 55,35 L45,35" fill="none"
          stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
        <polygon points="50,22 35,35 50,48" fill="#1a1a1a"/>
        <line x1="18" y1="18" x2="102" y2="102" stroke="#CC0000" strokeWidth="7" strokeLinecap="round"/>
      </svg>
    ),

    'no-right-turn': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <circle cx="60" cy="60" r="55" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <path d="M40,75 L40,55 Q40,35 65,35 L75,35" fill="none"
          stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
        <polygon points="70,22 85,35 70,48" fill="#1a1a1a"/>
        <line x1="18" y1="18" x2="102" y2="102" stroke="#CC0000" strokeWidth="7" strokeLinecap="round"/>
      </svg>
    ),

    'no-parking': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <circle cx="60" cy="60" r="55" fill="white" stroke="#CC0000" strokeWidth="5"/>
        <text x="60" y="75" textAnchor="middle" fill="#1a1a1a"
          fontSize="52" fontWeight="900" fontFamily="Arial,sans-serif">P</text>
        <line x1="18" y1="18" x2="102" y2="102" stroke="#CC0000" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    ),

    'keep-right': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="white" stroke="#1a1a1a" strokeWidth="4"/>
        <polygon points="60,14 106,60 60,106 14,60" fill="none" stroke="#1a1a1a" strokeWidth="2"/>
        <circle cx="60" cy="60" r="20" fill="none" stroke="#1a1a1a" strokeWidth="6"/>
        <polygon points="58,50 75,60 58,70" fill="#1a1a1a"/>
      </svg>
    ),

    // ── Warning (Yellow Diamond) ────────────────────────────────
    'ped-crossing': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Person */}
        <circle cx="60" cy="38" r="7" fill="black"/>
        <line x1="60" y1="45" x2="60" y2="68" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="60" y1="55" x2="48" y2="65" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="55" x2="72" y2="65" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="68" x2="50" y2="83" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="68" x2="70" y2="83" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        {/* Ground */}
        <line x1="40" y1="85" x2="80" y2="85" stroke="black" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),

    'school': (
      <svg width={s} height={s * 1.05} viewBox="0 0 120 126" className="sign-svg">
        {/* Pentagon */}
        <polygon points="60,4 116,44 94,116 26,116 4,44"
          fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <text x="60" y="58" textAnchor="middle" fill="black"
          fontSize="11" fontWeight="800" fontFamily="Arial,sans-serif">SCHOOL</text>
        {/* Two walking children */}
        <circle cx="44" cy="65" r="5" fill="black"/>
        <line x1="44" y1="70" x2="44" y2="84" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="44" y1="76" x2="36" y2="81" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <line x1="44" y1="76" x2="52" y2="81" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <line x1="44" y1="84" x2="38" y2="95" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="44" y1="84" x2="50" y2="95" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="68" cy="63" r="5" fill="black"/>
        <line x1="68" y1="68" x2="68" y2="82" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="68" y1="74" x2="60" y2="79" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <line x1="68" y1="74" x2="76" y2="79" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <line x1="68" y1="82" x2="62" y2="93" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="68" y1="82" x2="74" y2="93" stroke="black" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),

    'railroad-advance': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <circle cx="60" cy="60" r="54" fill="#FFCC00" stroke="black" strokeWidth="4"/>
        <line x1="60" y1="10" x2="60" y2="110" stroke="black" strokeWidth="8" strokeLinecap="round"/>
        <line x1="10" y1="60" x2="110" y2="60" stroke="black" strokeWidth="8" strokeLinecap="round"/>
        <text x="60" y="42" textAnchor="middle" fill="black"
          fontSize="10" fontWeight="800" fontFamily="Arial,sans-serif">RR</text>
      </svg>
    ),

    'railroad-crossbuck': (
      <svg width={s * 1.3} height={s * 0.7} viewBox="0 0 156 84" className="sign-svg">
        <rect x="2" y="2" width="152" height="80" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
        <line x1="10" y1="38" x2="146" y2="20" stroke="white" strokeWidth="14" strokeLinecap="round"/>
        <line x1="10" y1="38" x2="146" y2="20" stroke="#CC0000" strokeWidth="10" strokeLinecap="round"/>
        <line x1="10" y1="46" x2="146" y2="64" stroke="white" strokeWidth="14" strokeLinecap="round"/>
        <line x1="10" y1="46" x2="146" y2="64" stroke="#CC0000" strokeWidth="10" strokeLinecap="round"/>
        <text x="78" y="46" textAnchor="middle" fill="#1a1a1a"
          fontSize="8" fontWeight="800" fontFamily="Arial,sans-serif">RAILROAD</text>
        <text x="78" y="58" textAnchor="middle" fill="#1a1a1a"
          fontSize="8" fontWeight="800" fontFamily="Arial,sans-serif">CROSSING</text>
      </svg>
    ),

    'curve-right': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <path d="M50,88 Q50,40 75,32" fill="none" stroke="black" strokeWidth="7" strokeLinecap="round"/>
        <polygon points="68,22 84,38 84,22" fill="black"/>
      </svg>
    ),

    'curve-left': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <path d="M70,88 Q70,40 45,32" fill="none" stroke="black" strokeWidth="7" strokeLinecap="round"/>
        <polygon points="52,22 36,38 36,22" fill="black"/>
      </svg>
    ),

    'winding-road': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <path d="M55,90 Q45,72 60,60 Q75,48 60,32" fill="none"
          stroke="black" strokeWidth="7" strokeLinecap="round"/>
        <polygon points="52,22 68,22 60,32" fill="black"/>
      </svg>
    ),

    'slippery': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Skidding car top-view */}
        <rect x="42" y="34" width="28" height="18" rx="4" fill="black"/>
        <rect x="44" y="52" width="7" height="10" rx="2" fill="black"/>
        <rect x="69" y="52" width="7" height="10" rx="2" fill="black"/>
        <rect x="44" y="24" width="7" height="10" rx="2" fill="black"/>
        <rect x="69" y="24" width="7" height="10" rx="2" fill="black"/>
        {/* Skid marks */}
        <path d="M55,65 Q52,75 48,90" fill="none" stroke="black" strokeWidth="3" strokeDasharray="4,3"/>
        <path d="M65,65 Q68,75 72,90" fill="none" stroke="black" strokeWidth="3" strokeDasharray="4,3"/>
      </svg>
    ),

    'merge': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Two lanes merging into one */}
        <path d="M45,88 L45,55 Q45,38 60,30" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M75,88 L75,55 Q75,38 60,30" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="60" y1="30" x2="60" y2="20" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <polygon points="53,24 67,24 60,12" fill="black"/>
      </svg>
    ),

    'lane-ends': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <line x1="50" y1="90" x2="50" y2="40" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="72" y1="90" x2="72" y2="58" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M72,58 Q72,42 58,36 L50,32" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <polygon points="43,36 57,28 50,42" fill="black"/>
      </svg>
    ),

    'signal-ahead': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Traffic light */}
        <rect x="47" y="26" width="26" height="56" rx="5" fill="black"/>
        <circle cx="60" cy="38" r="7" fill="#CC0000"/>
        <circle cx="60" cy="54" r="7" fill="#FFCC00"/>
        <circle cx="60" cy="70" r="7" fill="#00AA00"/>
        <line x1="60" y1="82" x2="60" y2="90" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="46" y1="90" x2="74" y2="90" stroke="black" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),

    'deer': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Deer silhouette */}
        <ellipse cx="60" cy="68" rx="20" ry="12" fill="black"/>
        <ellipse cx="62" cy="46" rx="10" ry="10" fill="black"/>
        {/* Legs */}
        <line x1="50" y1="78" x2="46" y2="94" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="56" y1="80" x2="54" y2="94" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="66" y1="80" x2="68" y2="94" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="72" y1="78" x2="76" y2="94" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        {/* Head/neck */}
        <line x1="64" y1="56" x2="68" y2="38" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="70" cy="34" rx="8" ry="7" fill="black"/>
        {/* Antlers */}
        <line x1="68" y1="28" x2="62" y2="14" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="62" y1="22" x2="56" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        <line x1="76" y1="28" x2="82" y2="14" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="80" y1="22" x2="86" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),

    'hill': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <path d="M30,84 L60,36 L90,84" fill="none" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50,84 L70,84" stroke="black" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    ),

    'divided-begins': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Two arrows splitting */}
        <line x1="60" y1="90" x2="60" y2="55" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M60,55 Q60,38 45,30" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M60,55 Q60,38 75,30" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <polygon points="38,34 52,26 45,40" fill="black"/>
        <polygon points="82,34 68,26 75,40" fill="black"/>
        {/* Center barrier */}
        <line x1="56" y1="90" x2="64" y2="90" stroke="black" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    ),

    'divided-ends': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Two arrows merging */}
        <path d="M45,90 Q45,65 60,55" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M75,90 Q75,65 60,55" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="60" y1="55" x2="60" y2="32" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <polygon points="53,36 67,36 60,24" fill="black"/>
      </svg>
    ),

    'two-way': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <polygon points="28,50 50,38 50,46 70,46 70,38 92,50 70,62 70,54 50,54 50,62" fill="black"/>
      </svg>
    ),

    'narrow-bridge': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Two lines converging then parallel narrow */}
        <line x1="32" y1="88" x2="50" y2="40" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="88" y1="88" x2="70" y2="40" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="50" y1="40" x2="50" y2="28" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="70" y1="40" x2="70" y2="28" stroke="black" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    ),

    // ── Construction (Orange Diamond) ──────────────────────────
    'construction': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FF7F00" stroke="black" strokeWidth="3"/>
        {/* Worker with shovel */}
        <circle cx="60" cy="34" r="7" fill="black"/>
        <line x1="60" y1="41" x2="60" y2="62" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <line x1="60" y1="50" x2="46" y2="58" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="50" x2="72" y2="42" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="62" x2="50" y2="78" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="62" x2="70" y2="78" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        {/* Shovel */}
        <line x1="72" y1="42" x2="82" y2="30" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="85" cy="26" rx="6" ry="5" fill="black" transform="rotate(-30,85,26)"/>
      </svg>
    ),

    // ── No Passing (Pennant) ────────────────────────────────────
    'no-passing': (
      <svg width={s * 1.2} height={s * 0.7} viewBox="0 0 144 84" className="sign-svg">
        <polygon points="4,42 140,10 140,74" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <text x="90" y="46" textAnchor="middle" fill="black"
          fontSize="11" fontWeight="800" fontFamily="Arial,sans-serif">NO</text>
        <text x="90" y="60" textAnchor="middle" fill="black"
          fontSize="11" fontWeight="800" fontFamily="Arial,sans-serif">PASSING</text>
        <text x="90" y="74" textAnchor="middle" fill="black"
          fontSize="11" fontWeight="800" fontFamily="Arial,sans-serif">ZONE</text>
      </svg>
    ),

    // ── Bicycle Crossing ────────────────────────────────────────
    'bicycle-crossing': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        {/* Bicycle */}
        <circle cx="45" cy="72" r="14" fill="none" stroke="black" strokeWidth="4"/>
        <circle cx="75" cy="72" r="14" fill="none" stroke="black" strokeWidth="4"/>
        <circle cx="45" cy="72" r="3" fill="black"/>
        <circle cx="75" cy="72" r="3" fill="black"/>
        <line x1="45" y1="72" x2="60" y2="55" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="55" x2="75" y2="72" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="55" x2="60" y2="44" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <line x1="55" y1="44" x2="65" y2="44" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="60" cy="40" r="5" fill="black"/>
      </svg>
    ),

    // ── HOV Diamond ────────────────────────────────────────────
    'hov': (
      <svg width={s * 0.75} height={s * 0.75} viewBox="0 0 90 90" className="sign-svg">
        <polygon points="45,4 86,45 45,86 4,45" fill="white" stroke="#1a1a1a" strokeWidth="3"/>
        <text x="45" y="52" textAnchor="middle" fill="#1a1a1a"
          fontSize="24" fontWeight="900" fontFamily="Arial,sans-serif">◆</text>
      </svg>
    ),

    // ── Four-way Stop ───────────────────────────────────────────
    'four-way-stop': (
      <svg width={s} height={s * 1.3} viewBox="0 0 120 156" className="sign-svg">
        <polygon points="35,10 85,10 110,35 110,85 85,110 35,110 10,85 10,35"
          fill="#CC0000" stroke="white" strokeWidth="4"/>
        <text x="60" y="66" textAnchor="middle" fill="white"
          fontSize="22" fontWeight="800" fontFamily="Arial,sans-serif" letterSpacing="1">STOP</text>
        <rect x="20" y="115" width="80" height="36" rx="5" fill="white" stroke="#1a1a1a" strokeWidth="3"/>
        <text x="60" y="130" textAnchor="middle" fill="#1a1a1a"
          fontSize="10" fontWeight="700" fontFamily="Arial,sans-serif">4-WAY</text>
        <text x="60" y="144" textAnchor="middle" fill="#1a1a1a"
          fontSize="10" fontWeight="700" fontFamily="Arial,sans-serif">ALL WAY</text>
      </svg>
    ),

    // ── Blue info signs ─────────────────────────────────────────
    'hospital': (
      <svg width={s * 0.7} height={s} viewBox="0 0 84 120" className="sign-svg">
        <rect x="2" y="2" width="80" height="116" rx="6" fill="#003DA5" stroke="white" strokeWidth="3"/>
        <text x="42" y="78" textAnchor="middle" fill="white"
          fontSize="72" fontWeight="900" fontFamily="Arial,sans-serif">H</text>
      </svg>
    ),

    'ev-charging': (
      <svg width={s * 0.7} height={s} viewBox="0 0 84 120" className="sign-svg">
        <rect x="2" y="2" width="80" height="116" rx="6" fill="#003DA5" stroke="white" strokeWidth="3"/>
        <text x="42" y="60" textAnchor="middle" fill="white"
          fontSize="24" fontWeight="900" fontFamily="Arial,sans-serif">EV</text>
        <text x="42" y="88" textAnchor="middle" fill="#7FFF00"
          fontSize="36" fontWeight="900" fontFamily="Arial,sans-serif">⚡</text>
      </svg>
    ),

    // ── Disabled Parking ───────────────────────────────────────
    'handicap': (
      <svg width={s * 0.7} height={s} viewBox="0 0 84 120" className="sign-svg">
        <rect x="2" y="2" width="80" height="116" rx="6" fill="#003DA5" stroke="white" strokeWidth="3"/>
        {/* Wheelchair icon */}
        <circle cx="42" cy="30" r="8" fill="white"/>
        <path d="M42,38 L42,62 L58,62" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34,50 L50,50" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="38" cy="78" r="12" fill="none" stroke="white" strokeWidth="5"/>
        <line x1="56" y1="60" x2="64" y2="76" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <line x1="48" y1="88" x2="54" y2="100" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="54" cy="104" r="8" fill="none" stroke="white" strokeWidth="4"/>
      </svg>
    ),

    // ── Slow Moving Vehicle ─────────────────────────────────────
    'slow-vehicle': (
      <svg width={s} height={s * 0.9} viewBox="0 0 120 108" className="sign-svg">
        <polygon points="60,4 116,104 4,104" fill="#FF6600" stroke="white" strokeWidth="4"/>
        <polygon points="60,18 104,98 16,98" fill="none" stroke="white" strokeWidth="2.5"/>
        <text x="60" y="78" textAnchor="middle" fill="white"
          fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif">SLOW</text>
        <text x="60" y="92" textAnchor="middle" fill="white"
          fontSize="10" fontWeight="700" fontFamily="Arial,sans-serif">MOVING</text>
      </svg>
    ),

    // ── Roundabout ──────────────────────────────────────────────
    'roundabout': (
      <svg width={s} height={s} viewBox="0 0 120 120" className="sign-svg">
        <polygon points="60,4 116,60 60,116 4,60" fill="#FFCC00" stroke="black" strokeWidth="3"/>
        <circle cx="60" cy="60" r="18" fill="none" stroke="black" strokeWidth="5"/>
        <circle cx="60" cy="60" r="6" fill="black"/>
        {/* Arrow going counterclockwise */}
        <path d="M60,38 A22,22 0 1,1 38,60" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <polygon points="34,52 34,68 48,60" fill="black"/>
      </svg>
    ),
  }

  const sign = signs[type]
  if (!sign) return null
  return <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{sign}</div>
}
