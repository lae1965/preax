export const clsx = (...classNames: (string | undefined)[]): string => {
  return [...classNames].filter((item) => item).join(' ');
};
