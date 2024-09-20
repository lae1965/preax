import React from 'react';
import {
  ArrowIcon,
  BagIcon,
  LocationIcon,
  OptionallyIcon,
  StarIcon,
  HideIcon,
  CalendarIcon,
  TimeIcon,
  BricksIcon,
  GraduationIcon,
  CoinsIcon,
  OthersIcon,
  TomeJobIcon,
} from '../UI/Icons';

const Icon = ({ className, name, ...props }) => {
  switch (name) {
    case 'arrow':
      return <ArrowIcon className={className} {...props} />;
    case 'bag':
      return <BagIcon className={className} {...props} />;
    case 'location':
      return <LocationIcon className={className} {...props} />;
    case 'optional':
      return <OptionallyIcon className={className} {...props} />;
    case 'star':
      return <StarIcon className={className} {...props} />;
    case 'hide':
      return <HideIcon className={className} {...props} />;
    case 'calendar':
      return <CalendarIcon className={className} {...props} />;
    case 'time':
      return <TimeIcon className={className} {...props} />;
    case 'bricks':
      return <BricksIcon className={className} {...props} />;
    case 'graduation':
      return <GraduationIcon className={className} {...props} />;
    case 'coins':
      return <CoinsIcon className={className} {...props} />;
    case 'coins':
      return <CoinsIcon className={className} {...props} />;
    case 'tomeJob':
      return <TomeJobIcon className={className} {...props} />;
    case 'others':
      return <OthersIcon className={className} {...props} />;
    default:
      <></>;
  }
};

export default Icon;
