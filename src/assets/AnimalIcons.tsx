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
    {/* Round Body */}
    <circle cx="12" cy="13" r="6" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="13" r="6" />
    {/* Legs - Left */}
    <path d="M7 10l-4-2M6 13l-4 0M7 16l-4 2" />
    {/* Legs - Right */}
    <path d="M17 10l4-2M18 13l4 0M17 16l4 2" />
    {/* Eyes */}
    <g fill="currentColor" stroke="none">
      <circle cx="10" cy="11" r="1" />
      <circle cx="14" cy="11" r="1" />
    </g>
    {/* Smile */}
    <path d="M10 15c0.5 1 3.5 1 4 0" strokeWidth="1.5" />
  </svg>
);