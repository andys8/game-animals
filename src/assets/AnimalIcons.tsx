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
    {/* Head/Body */}
    <path 
      d="M2 13c0-4 4.5-7 10-7s10 3 10 7-4.5 7-10 7-10-3-10-7z" 
      fill="currentColor" 
      fillOpacity="0.1" 
    />
    {/* Large protruding eyes */}
    <circle cx="7" cy="6" r="4" fill="white" stroke="currentColor" />
    <circle cx="17" cy="6" r="4" fill="white" stroke="currentColor" />
    {/* Pupils */}
    <circle cx="7" cy="6" r="1.5" fill="currentColor" />
    <circle cx="17" cy="6" r="1.5" fill="currentColor" />
    {/* Eye Highlights */}
    <circle cx="6" cy="5" r="0.5" fill="white" stroke="none" />
    <circle cx="16" cy="5" r="0.5" fill="white" stroke="none" />
    {/* Wide happy smile */}
    <path d="M7 14c2 3 9 3 10 0" strokeWidth="2.5" />
    {/* Cute cheeks */}
    <circle cx="5" cy="13" r="1.2" fill="currentColor" fillOpacity="0.3" stroke="none" />
    <circle cx="19" cy="13" r="1.2" fill="currentColor" fillOpacity="0.3" stroke="none" />
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
    <path d="M12 10c-3-6-9-4-9 1s6 2 9 1" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 10c3-6 9-4 9 1s-6 2-9 1" fill="currentColor" fillOpacity="0.05" />
    {/* Round Body */}
    <circle cx="12" cy="13" r="7" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="13" r="7" />
    {/* Stripes */}
    <path d="M7 11h10" strokeWidth="2.5" />
    <path d="M5.5 14h13" strokeWidth="2.5" />
    <path d="M7 17h10" strokeWidth="2.5" />
    {/* Antenna */}
    <path d="M10 7L9 4M14 7l1-3" />
    <circle cx="9" cy="4" r="0.8" fill="currentColor" />
    <circle cx="15" cy="4" r="0.8" fill="currentColor" />
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
    {/* Rounded Ears */}
    <circle cx="6" cy="7" r="3.5" fill="currentColor" fillOpacity="0.1" />
    <circle cx="6" cy="7" r="3.5" />
    <circle cx="18" cy="7" r="3.5" fill="currentColor" fillOpacity="0.1" />
    <circle cx="18" cy="7" r="3.5" />
    {/* Face */}
    <circle cx="12" cy="13" r="9" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="13" r="9" />
    {/* Snout Area */}
    <ellipse cx="12" cy="16" rx="4" ry="3" fill="white" stroke="currentColor" />
    {/* Black Nose */}
    <circle cx="12" cy="15.5" r="1.2" fill="black" stroke="black" />
    {/* Small Eyes */}
    <circle cx="8.5" cy="11" r="1" fill="currentColor" />
    <circle cx="15.5" cy="11" r="1" fill="currentColor" />
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
    {/* Big Pointy Ears */}
    <path d="M4 10L2 3l7 4M20 10l2-7-7 4" fill="currentColor" fillOpacity="0.1" />
    {/* Face Shape */}
    <path d="M12 21l-9-9c0-4 4-8 9-8s9 4 9 8l-9 9z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 21l-9-9c0-4 4-8 9-8s9 4 9 8l-9 9z" />
    {/* White Cheek/Snout Patches */}
    <path d="M12 21l-7-7c1-1 3-1 7 0s6 1 7 0l-7 7z" fill="white" />
    {/* Eyes */}
    <circle cx="8" cy="12" r="1.2" fill="currentColor" />
    <circle cx="16" cy="12" r="1.2" fill="currentColor" />
    {/* Black Nose Tip */}
    <path d="M11 19h2l-1 2z" fill="black" stroke="black" />
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
    {/* Round Body */}
    <circle cx="12" cy="13" r="9" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="13" r="9" />
    {/* Eye Circles */}
    <circle cx="8" cy="10" r="4.5" fill="white" stroke="currentColor" />
    <circle cx="16" cy="10" r="4.5" fill="white" stroke="currentColor" />
    {/* Pupils */}
    <circle cx="8" cy="10" r="2" fill="currentColor" />
    <circle cx="16" cy="10" r="2" fill="currentColor" />
    {/* Eye Highlights */}
    <circle cx="7.2" cy="9" r="0.6" fill="white" stroke="none" />
    <circle cx="15.2" cy="9" r="0.6" fill="white" stroke="none" />
    {/* Beak */}
    <path d="M12 12l-1.5 3 1.5 1 1.5-1z" fill="orange" stroke="orange" />
    {/* Ear Tufts */}
    <path d="M5 6l-2-3 4 2M19 6l2-3-4 2" />
  </svg>
);
