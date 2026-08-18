export function GlovePullArtwork() {
  return (
    <svg viewBox="0 0 420 250" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="pull-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d9dcda" />
          <stop offset="100%" stopColor="#c6c7c1" />
        </linearGradient>
        <linearGradient id="skin-a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b68466" />
          <stop offset="100%" stopColor="#d3a184" />
        </linearGradient>
        <linearGradient id="glove-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d89c3" />
          <stop offset="100%" stopColor="#1c6d98" />
        </linearGradient>
      </defs>
      <rect width="420" height="250" rx="28" fill="url(#pull-bg)" />
      <rect
        x="-28"
        y="104"
        width="164"
        height="42"
        rx="21"
        fill="url(#skin-a)"
        transform="rotate(12 -28 104)"
      />
      <ellipse
        cx="185"
        cy="109"
        rx="64"
        ry="42"
        fill="url(#glove-a)"
        transform="rotate(23 185 109)"
      />
      <rect
        x="128"
        y="89"
        width="58"
        height="62"
        rx="22"
        fill="#146f9f"
        transform="rotate(18 128 89)"
      />
      <rect
        x="156"
        y="114"
        width="132"
        height="48"
        rx="24"
        fill="url(#glove-a)"
        transform="rotate(14 156 114)"
      />
      <rect
        x="224"
        y="103"
        width="28"
        height="62"
        rx="14"
        fill="#2292cb"
        transform="rotate(23 224 103)"
      />
      <rect
        x="250"
        y="118"
        width="22"
        height="54"
        rx="11"
        fill="#2292cb"
        transform="rotate(28 250 118)"
      />
      <rect
        x="271"
        y="130"
        width="20"
        height="46"
        rx="10"
        fill="#2393cc"
        transform="rotate(34 271 130)"
      />
      <rect
        x="123"
        y="102"
        width="34"
        height="38"
        rx="16"
        fill="#0d547a"
        transform="rotate(-24 123 102)"
      />
    </svg>
  )
}

export function OpenPalmArtwork() {
  return (
    <svg viewBox="0 0 420 280" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="open-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dcedf3" />
          <stop offset="100%" stopColor="#f4eee2" />
        </linearGradient>
        <linearGradient id="glove-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1ea0ff" />
          <stop offset="100%" stopColor="#0f76cd" />
        </linearGradient>
        <linearGradient id="skin-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f1bb8f" />
          <stop offset="100%" stopColor="#e0a67f" />
        </linearGradient>
      </defs>
      <rect width="420" height="280" rx="28" fill="url(#open-bg)" />
      <rect x="258" y="120" width="188" height="64" rx="32" fill="url(#skin-b)" />
      <ellipse
        cx="198"
        cy="144"
        rx="116"
        ry="78"
        fill="url(#glove-b)"
        transform="rotate(6 198 144)"
      />
      <rect
        x="90"
        y="58"
        width="34"
        height="120"
        rx="17"
        fill="#269cff"
        transform="rotate(-18 90 58)"
      />
      <rect
        x="124"
        y="44"
        width="34"
        height="116"
        rx="17"
        fill="#2ea6ff"
        transform="rotate(-10 124 44)"
      />
      <rect
        x="159"
        y="36"
        width="34"
        height="116"
        rx="17"
        fill="#35acff"
        transform="rotate(-2 159 36)"
      />
      <rect
        x="194"
        y="42"
        width="34"
        height="112"
        rx="17"
        fill="#31a6fb"
        transform="rotate(8 194 42)"
      />
      <rect
        x="87"
        y="108"
        width="46"
        height="98"
        rx="21"
        fill="#1280d8"
        transform="rotate(32 87 108)"
      />
      <rect x="250" y="106" width="60" height="88" rx="24" fill="#1177cc" />
      <rect x="278" y="114" width="38" height="74" rx="16" fill="#1484de" />
    </svg>
  )
}

export function RaisedHandsArtwork() {
  return (
    <svg viewBox="0 0 420 360" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="hands-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d3d5d2" />
          <stop offset="100%" stopColor="#efeee9" />
        </linearGradient>
        <linearGradient id="glove-c" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#136889" />
          <stop offset="100%" stopColor="#29a0d0" />
        </linearGradient>
      </defs>
      <rect width="420" height="360" rx="28" fill="url(#hands-bg)" />
      <HandUpright transform="translate(102 152) rotate(-8)" gradientId="glove-c" />
      <HandUpright transform="translate(307 152) rotate(8) scale(-1 1)" gradientId="glove-c" />
    </svg>
  )
}

export function SuitGloveArtwork() {
  return (
    <svg viewBox="0 0 420 240" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="suit-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8d6d1" />
          <stop offset="100%" stopColor="#efefeb" />
        </linearGradient>
        <linearGradient id="glove-d" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2639b6" />
          <stop offset="100%" stopColor="#526dff" />
        </linearGradient>
      </defs>
      <rect width="420" height="240" rx="28" fill="url(#suit-bg)" />
      <path
        d="M0 240V148c28-10 56-8 84 7 18 10 32 24 46 44l13 41Z"
        fill="#f6f6f3"
      />
      <path
        d="M49 127c18 4 36 13 52 28l-8 26c-15-16-31-26-51-30Z"
        fill="#d8d9d8"
      />
      <HandUpright transform="translate(202 130) rotate(22)" gradientId="glove-d" />
      <rect
        x="146"
        y="144"
        width="44"
        height="94"
        rx="18"
        fill="url(#glove-d)"
        transform="rotate(-24 146 144)"
      />
    </svg>
  )
}

export function PatientCareArtwork() {
  return (
    <svg viewBox="0 0 420 250" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="care-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8d8d2" />
          <stop offset="100%" stopColor="#efefea" />
        </linearGradient>
        <linearGradient id="care-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5aa8ff" />
          <stop offset="100%" stopColor="#2f6fe2" />
        </linearGradient>
      </defs>
      <rect width="420" height="250" rx="24" fill="url(#care-bg)" />
      <rect x="38" y="116" width="222" height="54" rx="27" fill="#ffffff" opacity="0.92" />
      <rect x="132" y="100" width="160" height="78" rx="39" fill="#f4f4f1" />
      <rect x="108" y="84" width="154" height="88" rx="44" fill="url(#care-blue)" opacity="0.9" />
      <rect x="188" y="88" width="148" height="74" rx="37" fill="#ffffff" opacity="0.88" />
      <circle cx="305" cy="106" r="28" fill="#ffffff" opacity="0.9" />
      <path
        d="M52 173h205c38 0 72 20 88 51H29c4-19 11-33 23-42Z"
        fill="#d7e6ff"
        opacity="0.9"
      />
    </svg>
  )
}

export function SurgicalInstrumentArtwork() {
  return (
    <svg viewBox="0 0 420 250" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="surgical-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22456f" />
          <stop offset="100%" stopColor="#0f2a4c" />
        </linearGradient>
        <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fcff" />
          <stop offset="100%" stopColor="#b5c4d6" />
        </linearGradient>
      </defs>
      <rect width="420" height="250" rx="24" fill="url(#surgical-bg)" />
      <circle cx="210" cy="48" r="8" fill="#163657" />
      <rect x="206" y="46" width="8" height="104" rx="4" fill="#0a213f" />
      <path
        d="M183 150c0 19 12 32 27 32s27-13 27-32"
        fill="none"
        stroke="url(#metal)"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d="M190 122c-9 14-12 24-12 35 0 28 15 45 32 45s32-17 32-45c0-11-3-21-12-35"
        fill="none"
        stroke="url(#metal)"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <circle cx="210" cy="168" r="9" fill="#d9e5f0" />
      <path
        d="M144 220h132"
        fill="none"
        stroke="#6f93bd"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  )
}

export function SafetyWearArtwork() {
  return (
    <svg viewBox="0 0 420 250" className="artwork" aria-hidden="true">
      <defs>
        <linearGradient id="safety-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b6a97b" />
          <stop offset="35%" stopColor="#d7cfb0" />
          <stop offset="100%" stopColor="#6a8459" />
        </linearGradient>
      </defs>
      <rect width="420" height="250" rx="24" fill="url(#safety-bg)" />
      <rect x="0" y="0" width="420" height="250" fill="#ffffff" opacity="0.16" />
      <rect
        x="-28"
        y="118"
        width="186"
        height="42"
        rx="21"
        fill="#f5f6f8"
        transform="rotate(-4 -28 118)"
      />
      <ellipse
        cx="170"
        cy="140"
        rx="86"
        ry="42"
        fill="#fafbfd"
        transform="rotate(-6 170 140)"
      />
      <rect
        x="118"
        y="112"
        width="60"
        height="54"
        rx="22"
        fill="#f7f8fb"
        transform="rotate(10 118 112)"
      />
      <rect
        x="184"
        y="118"
        width="122"
        height="42"
        rx="21"
        fill="#ffffff"
        transform="rotate(-8 184 118)"
      />
      <rect
        x="246"
        y="102"
        width="28"
        height="58"
        rx="14"
        fill="#fdfefe"
        transform="rotate(-4 246 102)"
      />
      <rect
        x="269"
        y="96"
        width="24"
        height="56"
        rx="12"
        fill="#fbfcfd"
        transform="rotate(6 269 96)"
      />
      <rect
        x="292"
        y="94"
        width="22"
        height="50"
        rx="11"
        fill="#fafbfc"
        transform="rotate(18 292 94)"
      />
    </svg>
  )
}

function HandUpright({ transform, gradientId }) {
  return (
    <g transform={transform}>
      <rect x="-34" y="-12" width="82" height="106" rx="34" fill={`url(#${gradientId})`} />
      <rect x="-36" y="-102" width="16" height="92" rx="8" fill={`url(#${gradientId})`} />
      <rect x="-14" y="-110" width="16" height="100" rx="8" fill={`url(#${gradientId})`} />
      <rect x="8" y="-106" width="16" height="96" rx="8" fill={`url(#${gradientId})`} />
      <rect x="30" y="-94" width="16" height="84" rx="8" fill={`url(#${gradientId})`} />
      <rect
        x="-70"
        y="10"
        width="22"
        height="70"
        rx="11"
        fill={`url(#${gradientId})`}
        transform="rotate(-38 -70 10)"
      />
      <rect x="-20" y="82" width="54" height="72" rx="20" fill={`url(#${gradientId})`} />
    </g>
  )
}
