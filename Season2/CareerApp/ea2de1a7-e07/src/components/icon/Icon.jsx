import React from 'react';
import { Logo } from './icons/Logo';
import { Plane } from './icons/Plane';
import { BriefCase } from './icons/BriefCase';
import { Filter } from './icons/Filter';
import { Chevron } from './icons/Chevron';
import { SlashEye } from './icons/SlashEye';
import { Star } from './icons/Star';
import { Clear } from './icons/Clear';
import { Calendar } from './icons/Calendar';
import { Clock } from './icons/Clock';
import { Stack } from './icons/Stack';
import { Graduation } from './icons/Graduation';
import { Salary } from './icons/Salary';
import { TomeJob } from './icons/TomeJob';
import { MoreFilters } from './icons/MoreFilters';
import { Eye } from './icons/Eye';
import { EyeVisible } from './icons/EyeVisible';
import { EyeBalckList } from './icons/EyeBalckList';
import { Burger } from './icons/Burger';

const Icon = ({ className, name, onClick }) => {
  switch (name) {
    case 'logo':
      return <Logo className={className} />;
    case 'plane':
      return <Plane className={className} />;
    case 'briefCase':
      return <BriefCase className={className} />;
    case 'filter':
      return <Filter className={className} />;
    case 'chevron':
      return <Chevron className={className} />;
    case 'slashEye':
      return <SlashEye className={className} />;
    case 'star':
      return <Star className={className} />;
    case 'clear':
      return <Clear className={className} onClick={onClick} />;
    case 'calendar':
      return <Calendar className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'stack':
      return <Stack className={className} />;
    case 'graduation':
      return <Graduation className={className} />;
    case 'salary':
      return <Salary className={className} />;
    case 'tomeJob':
      return <TomeJob className={className} />;
    case 'moreFilters':
      return <MoreFilters className={className} />;
    case 'eye':
      return <Eye className={className} />;
    case 'eyeVis':
      return <EyeVisible className={className} />;
    case 'eyeBlackList':
      return <EyeBalckList className={className} />;
    case 'burger':
      return <Burger className={className} onClick={onClick} />;

    default:
      return null;
  }
};

export default Icon;
