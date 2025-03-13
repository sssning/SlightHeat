import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ color = '#000', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L20 8V16L12 22L4 16V8L12 2Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;