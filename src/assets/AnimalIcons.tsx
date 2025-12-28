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
    <path d="M12 5c-3 0-5 2-5 5v2c0 3 2 5 5 5s5-2 5-5v-2c0-3-2-5-5-5z" />
    <path d="M7 8c-1-1-3-1-4 0" />
    <path d="M17 8c1-1 3-1 4 0" />
    <path d="M10 13h4" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
    <path d="M12 15v2" />
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
    <path d="M12 5c-2 0-4 1-4 3 0 1 .5 2 1 2.5-.5.5-1 1.5-1 2.5 0 2 2 3 4 3s4-1 4-3c0-1-.5-2-1-2.5.5-.5 1-1.5 1-2.5 0-2-2-3-4-3z" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <path d="M11 15h2" />
    <path d="M8 8c-1 0-2 .5-2 1.5s1 1.5 2 1.5" />
    <path d="M16 8c1 0 2 .5 2 1.5s-1 1.5-2 1.5" />
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
    <path d="M12 5c-4 0-7 3-7 7v3c0 2 2 4 5 4h4c3 0 5-2 5-4v-3c0-4-3-7-7-7z" />
    <path d="M5 12c-2 0-3 2-3 4s1 4 3 4" />
    <path d="M19 12c2 0 3 2 3 4s-1 4-3 4" />
    <path d="M12 15v4c0 1 1 2 2 2" />
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
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
    <circle cx="12" cy="12" r="6" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="10" cy="11" r="0.5" fill="currentColor" />
    <circle cx="14" cy="11" r="0.5" fill="currentColor" />
    <path d="M11 14h2" />
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
    <path d="M12 5c-3 0-5 2-5 5v2c0 1 1 2 3 2h6c2 0 3-1 3-2v-2c0-3-2-5-5-5z" />
    <path d="M7 10c-2 0-3 1-3 3s1 3 3 3h10c2 0 3-1 3-3s-1-3-3-3" />
    <circle cx="10" cy="9" r="1" fill="currentColor" />
    <path d="M15 10l2-1" />
  </svg>
);
