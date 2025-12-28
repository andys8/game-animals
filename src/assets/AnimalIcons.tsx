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
    {/* Integrated rounded ears with depth */}
    <circle cx="7" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="17" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
    
    {/* Big round face */}
    <circle cx="12" cy="13" r="9" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="13" r="9" />

    {/* Expressive eyes with highlights */}
    <g fill="currentColor" stroke="none">
      <circle cx="8.5" cy="11" r="1.5" />
      <circle cx="15.5" cy="11" r="1.5" />
    </g>
    <g fill="white" stroke="none">
      <circle cx="8" cy="10.2" r="0.5" />
      <circle cx="15" cy="10.2" r="0.5" />
    </g>

    {/* Muzzle area */}
    <ellipse cx="12" cy="16" rx="4.5" ry="3.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Soft dark nose */}
    <path d="M10.5 15.5c0-1 3-1 3 0s-1.5 1.5-1.5 1.5-1.5-.5-1.5-1.5z" fill="currentColor" stroke="none" />
    
    {/* Gentle smile */}
    <path d="M10.5 18c0.5 0.5 2.5 0.5 3 0" strokeWidth="1.5" />
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

export const Spider = ({ size = 24, ...props }: any) => (
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
    {/* Large round body with depth */}
    <circle cx="12" cy="13" r="8" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="13" r="8" />
    
    {/* 8 Characterful Legs with joints */}
    <g strokeWidth="1.5">
      {/* Left side */}
      <path d="M7 8L4 5L2 7" />
      <path d="M5 11L2 11L1 13" />
      <path d="M5 15L2 16L2 19" />
      <path d="M7 18L5 21L7 23" />
      {/* Right side */}
      <path d="M17 8L20 5L22 7" />
      <path d="M19 11L22 11L23 13" />
      <path d="M19 15L22 16L22 19" />
      <path d="M17 18L19 21L17 23" />
    </g>

    {/* Expressive eyes (consistent with Frog/Owl) */}
    <circle cx="9" cy="10" r="2.5" fill="white" stroke="currentColor" />
    <circle cx="15" cy="10" r="2.5" fill="white" stroke="currentColor" />
    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
    
    {/* Eye Highlights */}
    <circle cx="8.5" cy="9.2" r="0.4" fill="white" stroke="none" />
    <circle cx="14.5" cy="9.2" r="0.4" fill="white" stroke="none" />
    
    {/* Friendly smile */}
    <path d="M9 14c1 2 5 2 6 0" strokeWidth="2" />
    
    {/* Back markings for extra detail */}
    <circle cx="12" cy="18" r="1" fill="currentColor" fillOpacity="0.2" stroke="none" />
  </svg>
);