import {
  CartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClearIcon,
  LogoIcon,
  LogoTablet,
  SearchIcon,
} from '../UI';
import createImg from '../../utils/createImg';

const icons = ({
  icon = '',
  className = '',
  ext = 'png',
  alt = 'Иконка',
  onClick,
}) => {
  switch (icon) {
    case 'chevron-left':
      return <ChevronLeftIcon className={className} />;

    case 'chevron-right':
      return <ChevronRightIcon className={className} />;

    case 'clear':
      return <ClearIcon className={className} />;

    case 'search':
      return <SearchIcon className={className} />;

    case 'logo':
      return <LogoIcon className={className} />;

    case 'logo-tablet':
      return <LogoTablet className={className} />;

    case 'cart':
      return <CartIcon className={className} />;

    default:
      const src = require(`../../assets/${icon}.${ext}`);

      if (!src) return '';

      return createImg({ src, className, alt, onClick });
  }
};

export const Icon = ({ className = '', icon = '', alt = '', onClick }) => {
  return icons({ className, icon, alt, onClick });
};
