export const Cow = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Head */}
    <rect x="6" y="6" width="12" height="10" rx="4" />
    {/* Snout */}
    <rect x="8" y="12" width="8" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
    {/* Eyes */}
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    {/* Horns */}
    <path d="M8 6l-2-2" />
    <path d="M16 6l2-2" />
    {/* Ears */}
    <path d="M6 10l-3-1" />
    <path d="M18 10l3-1" />
  </svg>
);

export const Sheep = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Fluffy Body */}
    <path d="M12 4c-3 0-5 2-5 4 0 1 1 2 1 3-1 1-2 2-2 4 0 2 2 4 5 4s5-2 5-4c0-2-1-3-2-4 0-1 1-2 1-3 0-2-2-4-3-4z" fill="currentColor" fillOpacity="0.05" />
    {/* Head */}
    <rect x="9" y="10" width="6" height="7" rx="3" fill="white" />
    <rect x="9" y="10" width="6" height="7" rx="3" />
    {/* Eyes */}
    <circle cx="11" cy="13" r="0.5" fill="currentColor" />
    <circle cx="13" cy="13" r="0.5" fill="currentColor" />
    {/* Ears */}
    <path d="M9 11l-2-1" />
    <path d="M15 11l2-1" />
  </svg>
);

export const Elephant = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Ears */}
    <ellipse cx="6" cy="12" rx="4" ry="6" fill="currentColor" fillOpacity="0.1" />
    <ellipse cx="18" cy="12" rx="4" ry="6" fill="currentColor" fillOpacity="0.1" />
    {/* Head */}
    <circle cx="12" cy="12" r="6" fill="white" />
    <circle cx="12" cy="12" r="6" />
    {/* Trunk */}
    <path d="M12 15v5c0 1 1 2 2 2" />
    {/* Eyes */}
    <circle cx="10" cy="11" r="1" fill="currentColor" />
    <circle cx="14" cy="11" r="1" fill="currentColor" />
  </svg>
);

export const Lion = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Mane */}
    <circle cx="12" cy="12" r="9" strokeDasharray="2 2" fill="currentColor" fillOpacity="0.1" />
    {/* Face */}
    <circle cx="12" cy="12" r="6" fill="white" />
    <circle cx="12" cy="12" r="6" />
    {/* Eyes */}
    <circle cx="10" cy="11" r="1" fill="currentColor" />
    <circle cx="14" cy="11" r="1" fill="currentColor" />
    {/* Nose/Mouth */}
    <path d="M12 13v2" />
    <path d="M10 16c1 1 3 1 4 0" />
  </svg>
);

export const Duck = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Body */}
    <path d="M6 14c0 3 3 5 7 5s7-2 7-5-3-4-7-4-7 4-7 4z" fill="currentColor" fillOpacity="0.1" />
    {/* Head */}
    <circle cx="16" cy="8" r="4" fill="white" />
    <circle cx="16" cy="8" r="4" />
    {/* Bill/Beak */}
    <path d="M20 8h3l-1 2h-2z" fill="orange" stroke="orange" />
    {/* Eye */}
    <circle cx="17" cy="7" r="0.5" fill="currentColor" />
  </svg>
);
