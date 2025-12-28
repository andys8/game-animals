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
    {/* Large Fluffy Wings */}
    <path d="M12 10c-4-6-10-4-10 2s6 3 10 1" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 10c4-6 10-4 10 2s-6 3-10 1" fill="currentColor" fillOpacity="0.05" />
    {/* Round Body */}
    <circle cx="12" cy="13" r="8" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="13" r="8" />
    {/* Bold Stripes */}
    <path d="M6 11h12" strokeWidth="3" />
    <path d="M4.5 14h15" strokeWidth="3" />
    <path d="M6 17h12" strokeWidth="3" />
    {/* Friendly Eyes (consistent with Frog/Owl) */}
    <circle cx="9" cy="10" r="2.5" fill="white" stroke="currentColor" />
    <circle cx="15" cy="10" r="2.5" fill="white" stroke="currentColor" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    {/* Antenna */}
    <path d="M10 6L9 3M14 6l1-3" />
    <circle cx="9" cy="3" r="1" fill="currentColor" />
    <circle cx="15" cy="3" r="1" fill="currentColor" />
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
    {/* Rounded Ears with Inner Detail */}
    <circle cx="6" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="6" cy="7" r="4" />
    <circle cx="18" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
    <circle cx="18" cy="7" r="4" />
    {/* Big Round Face */}
    <circle cx="12" cy="13" r="9" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="13" r="9" />
    {/* Muzzle Area (consistent style) */}
    <circle cx="12" cy="16" r="4.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
    {/* Big Soft Nose */}
    <circle cx="12" cy="15" r="1.5" fill="black" />
    {/* Kind Eyes */}
    <circle cx="8.5" cy="11" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="11" r="1.2" fill="currentColor" />
    {/* Smile */}
    <path d="M10.5 18c1 1 2 1 3 0" />
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
    {/* Iconic Large Pointy Ears */}
    <path d="M3 8L2 2l8 5M21 8l1-6-8 5" fill="currentColor" fillOpacity="0.1" />
    <path d="M3 8L2 2l8 5M21 8l1-6-8 5" />
    {/* Diamond Face Shape */}
    <path d="M12 22l-9-10c0-5 4-9 9-9s9 4 9 9l-9 10z" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 22l-9-10c0-5 4-9 9-9s9 4 9 9l-9 10z" />
    {/* Large White Fur Patches */}
    <path d="M12 22l-7-8c2-2 12-2 14 0l-7 8z" fill="white" stroke="currentColor" strokeWidth="1" />
    {/* Intense but Cute Eyes */}
    <circle cx="8" cy="12" r="1.5" fill="currentColor" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" />
    {/* Black Nose Tip */}
    <circle cx="12" cy="20" r="1.5" fill="black" />
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