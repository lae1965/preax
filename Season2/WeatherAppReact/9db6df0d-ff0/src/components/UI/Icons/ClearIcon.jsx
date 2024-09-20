import React from 'react';

export const ClearIcon = ({ className = '', onClick }) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <path
        d='M4.65041 5.95141C4.2912 5.59221 4.29119 5.00983 4.65039 4.65062C5.00958 4.29141 5.59197 4.2914 5.95118 4.65059L19.3496 18.0485C19.7088 18.4077 19.7088 18.9901 19.3496 19.3493C18.9904 19.7085 18.408 19.7086 18.0488 19.3494L4.65041 5.95141Z'
        fill='#545454'
        stroke='#545454'
        strokeWidth='0.5'
      />
      <path
        d='M4.65084 19.3496C4.29163 18.9904 4.29161 18.408 4.65081 18.0488L18.0488 4.6504C18.408 4.29119 18.9903 4.29118 19.3496 4.65038C19.7088 5.00957 19.7088 5.59196 19.3496 5.95117L5.95163 19.3496C5.59243 19.7088 5.01005 19.7088 4.65084 19.3496Z'
        fill='#545454'
        stroke='#545454'
        strokeWidth='0.5'
      />
    </svg>
  );
};
