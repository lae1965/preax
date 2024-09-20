import React from 'react';
import { SearchIcon, RightArrowIcon, LeftArrowIcon, ClearIcon } from './icons';

export const Icon = ({ className, name }) => {
  switch (name) {
    case 'search':
      return <SearchIcon className={className} />;
    case 'clear':
      return <ClearIcon className={className} />;
    case 'right':
      return <RightArrowIcon className={className} />;
    case 'left':
      return <LeftArrowIcon className={className} />;
    default:
      <></>;
  }
};
