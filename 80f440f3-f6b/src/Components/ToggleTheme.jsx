import React, { useEffect, useState } from 'react';

export const ToggleTheme = () => {
  const [isThemeDark, setIsThemeDark] = useState(
    !!+localStorage.getItem(`theme${process.env.REACT_APP_STORAGE_POSTFIX}`) ||
      false
  );
  const bodyClassList = document.body.classList;
  const darkTheme = 'dark-theme';

  useEffect(() => {
    if (isThemeDark) bodyClassList.add(darkTheme);
    else bodyClassList.remove(darkTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTheme = () => {
    localStorage.setItem(
      `theme${process.env.REACT_APP_STORAGE_POSTFIX}`,
      (+!isThemeDark).toString()
    );
    setIsThemeDark(!isThemeDark);
    setTimeout(() => {
      bodyClassList.toggle(darkTheme);
    }, 200);
  };

  return (
    <div className='theme-switch' onClick={handleTheme}>
      <div
        className={`theme-switch__ellipce ${
          isThemeDark ? 'theme-switch__dark' : ''
        }`}
      >
        <svg
          width='13'
          height='13'
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.6067 2.12132C9.83451 1.34916 8.89689 0.8358 7.9126 0.572756C8.44717 2.57528 7.93381 4.79418 6.36403 6.36396C4.79425 7.93374 2.57535 8.4471 0.572826 7.91253C0.83587 8.89682 1.34923 9.83444 2.12139 10.6066C4.46333 12.9485 8.26473 12.9485 10.6067 10.6066C12.9486 8.26466 12.9486 4.46326 10.6067 2.12132Z'
            fill={isThemeDark ? '#212331' : '#E6E6E6'}
          />
        </svg>
      </div>
    </div>
  );
};
