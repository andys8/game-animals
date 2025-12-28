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
    <path d="M4 12c0 4 4 7 8 7s8-3 8-7-4-7-8-7-8 3-8 7z" fill="currentColor" fillOpacity="0.1" />
    {/* Eyes popping up */}
    <circle cx="7" cy="6" r="3.5" fill="white" stroke="currentColor" />
    <circle cx="7" cy="6" r="1.5" fill="currentColor" />
    <circle cx="17" cy="6" r="3.5" fill="white" stroke="currentColor" />
    <circle cx="17" cy="6" r="1.5" fill="currentColor" />
    {/* Smiling mouth */}
    <path d="M7 13c1 2 6 2 10 0" strokeWidth="2.5" />
    {/* Cheeks */}
    <circle cx="6" cy="12" r="1" fill="currentColor" fillOpacity="0.3" stroke="none" />
    <circle cx="18" cy="12" r="1" fill="currentColor" fillOpacity="0.3" stroke="none" />
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
    <path d="M10 10c-2-5-7-4-7 0s5 1 7 1" fill="currentColor" fillOpacity="0.1" />
    <path d="M14 10c2-5 7-4 7 0s-5 1-14 1" fill="currentColor" fillOpacity="0.1" />
    {/* Fluffy Body */}
    <rect x="8" y="9" width="8" height="11" rx="4" fill="currentColor" fillOpacity="0.2" />
    {/* Stripes */}
    <path d="M8 12h8" strokeWidth="3" />
    <path d="M8 16h8" strokeWidth="3" />
    {/* Eyes */}
    <circle cx="10" cy="11" r="0.8" fill="black" />
    <circle cx="14" cy="11" r="0.8" fill="black" />
    {/* Antenna */}
    <path d="M10 9l-1-3" />
    <path d="M14 9l1-3" />
    <circle cx="9" cy="5" r="1" fill="currentColor" />
    <circle cx="15" cy="5" r="1" fill="currentColor" />
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
    {/* Big Ears */}
    <circle cx="6" cy="6" r="3.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="18" cy="6" r="3.5" fill="currentColor" fillOpacity="0.2" />
    {/* Main Face */}
    <circle cx="12" cy="13" r="9" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="13" r="9" />
    {/* Snout Area */}
    <circle cx="12" cy="16" r="4" fill="white" fillOpacity="0.8" stroke="currentColor" strokeWidth="1" />
    {/* Nose */}
    <path d="M10 15h4l-2 2z" fill="currentColor" />
    {/* Eyes */}
    <circle cx="8.5" cy="11" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="11" r="1.2" fill="currentColor" />
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
    {/* Large Pointy Ears */}
    <path d="M5 3l4 7M19 3l-4 7" strokeWidth="3" />
    {/* Face Shape */}
    <path d="M3 11l9 10 9-10c0-4-4-7-9-7s-9 3-9 7z" fill="currentColor" fillOpacity="0.1" />
    <path d="M3 11l9 10 9-10c0-4-4-7-9-7s-9 3-9 7z" />
    {/* White Snout/Cheeks */}
    <path d="M12 21l-6-6c1-1 3-1 6 0s5 1 6 0l-6 6z" fill="white" />
    {/* Eyes */}
    <circle cx="8" cy="11" r="1" fill="currentColor" />
    <circle cx="16" cy="11" r="1" fill="currentColor" />
    {/* Nose */}
    <circle cx="12" cy="18" r="1.5" fill="black" />
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
    <rect x="5" y="6" width="14" height="15" rx="7" fill="currentColor" fillOpacity="0.05" />
    <rect x="5" y="6" width="14" height="15" rx="7" />
    {/* Ear Tufts */}
    <path d="M5 8l-2-3 4 2M19 8l2-3-4 2" />
    {/* Eye Mask Area */}
    <circle cx="8.5" cy="10" r="4" fill="white" stroke="currentColor" />
    <circle cx="15.5" cy="10" r="4" fill="white" stroke="currentColor" />
    {/* Pupils */}
    <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="10" r="1.5" fill="currentColor" />
    {/* Beak */}
    <path d="M12 12l-1.5 3h3z" fill="orange" stroke="orange" />
    {/* Wings */}
    <path d="M5 12c-1 2-1 5 0 7M19 12c1 2 1 5 0 7" />
  </svg>
);