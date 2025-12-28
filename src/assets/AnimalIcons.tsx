export const Frog = ({ size = 24, ...props }: any) => (
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
    <path d="M4 11c0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="currentColor" fillOpacity="0.1" />
    {/* Eyes */}
    <circle cx="7" cy="5" r="3" fill="white" stroke="currentColor" />
    <circle cx="7" cy="5" r="1" fill="currentColor" />
    <circle cx="17" cy="5" r="3" fill="white" stroke="currentColor" />
    <circle cx="17" cy="5" r="1" fill="currentColor" />
    {/* Mouth */}
    <path d="M8 14c1 1.5 5 1.5 8 0" strokeWidth="2.5" />
    {/* Feet */}
    <path d="M6 19c-1 1-2 1-3 1" />
    <path d="M18 19c1 1 2 1 3 1" />
  </svg>
);

export const Bee = ({ size = 24, ...props }: any) => (
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
    {/* Wings */}
    <path d="M12 10c-2-4-6-4-6-1s4 1 6 1" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 10c2-4 6-4 6-1s-4 1-6 1" fill="currentColor" fillOpacity="0.05" />
    {/* Body */}
    <rect x="7" y="10" width="10" height="9" rx="5" fill="currentColor" fillOpacity="0.2" />
    {/* Stripes */}
    <path d="M10 10v9" strokeWidth="3" />
    <path d="M14 10v9" strokeWidth="3" />
    {/* Antenna */}
    <path d="M10 7l-1-2" />
    <path d="M14 7l1-2" />
    {/* Stinger */}
    <path d="M12 19v2" strokeWidth="2" />
  </svg>
);

export const Bear = ({ size = 24, ...props }: any) => (
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
    <circle cx="7" cy="7" r="3" fill="currentColor" fillOpacity="0.1" />
    <circle cx="17" cy="7" r="3" fill="currentColor" fillOpacity="0.1" />
    {/* Face */}
    <circle cx="12" cy="13" r="8" fill="white" fillOpacity="0.5" />
    <circle cx="12" cy="13" r="8" />
    {/* Eyes */}
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
    {/* Snout */}
    <ellipse cx="12" cy="15" rx="3" ry="2" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="14.5" r="0.8" fill="currentColor" />
    <path d="M11 17c0.5 0.5 1.5 0.5 2 0" />
  </svg>
);

export const Fox = ({ size = 24, ...props }: any) => (
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
    {/* Head/Ears */}
    <path d="M12 21l-9-9 3-9 6 4 6-4 3 9-9 9z" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 21l-9-9 3-9 6 4 6-4 3 9-9 9z" />
    {/* White snout area */}
    <path d="M12 21l-4-4h8l-4 4z" fill="white" />
    {/* Eyes */}
    <circle cx="8" cy="11" r="1" fill="currentColor" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
    {/* Nose */}
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const Owl = ({ size = 24, ...props }: any) => (
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
    <path d="M12 3c-4 0-7 2-7 6v8c0 3 3 5 7 5s7-2 7-5V9c0-4-3-6-7-6z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 3c-4 0-7 2-7 6v8c0 3 3 5 7 5s7-2 7-5V9c0-4-3-6-7-6z" />
    {/* Eyes */}
    <circle cx="8.5" cy="9" r="3.5" fill="white" stroke="currentColor" />
    <circle cx="8.5" cy="9" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="9" r="3.5" fill="white" stroke="currentColor" />
    <circle cx="15.5" cy="9" r="1.5" fill="currentColor" />
    {/* Beak */}
    <path d="M12 11l-1.5 2.5h3z" fill="orange" stroke="orange" />
    {/* Ears/Tufts */}
    <path d="M5 6l2-2" />
    <path d="M19 6l-2-2" />
  </svg>
);
