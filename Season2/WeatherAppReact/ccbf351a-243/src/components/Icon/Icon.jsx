import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClearIcon,
  LogoIcon,
  LogoTablet,
  SearchIcon,
  DeleteBasketIcon,
} from '../UI';
import createImg from '../../utils/createImg';

const icons = ({
  icon = '',
  className = '',
  ext = 'png',
  alt = 'Иконка',
  ...props
}) => {
  switch (icon) {
    case 'chevron-left':
      return <ChevronLeftIcon className={className} {...props} />;

    case 'chevron-right':
      return <ChevronRightIcon className={className} {...props} />;

    case 'clear':
      return <ClearIcon className={className} {...props} />;

    case 'search':
      return <SearchIcon className={className} {...props} />;

    case 'logo':
      return <LogoIcon className={className} {...props} />;

    case 'logo-tablet':
      return <LogoTablet className={className} {...props} />;

    case 'delete':
      return <DeleteBasketIcon className={className} {...props} />;

    default:
      const src = require(`../../assets/${icon}.${ext}`);

      if (!src) return '';

      return createImg({ src, className, alt, ...props });
  }
};

export const Icon = ({ className = '', icon = '', alt = '', ...props }) => {
  return icons({ className, icon, alt, ...props });
};
