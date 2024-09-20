import { useEffect, useState } from 'react';
import { constPagination } from '@constants/constPagination';

export const usePaginateMask = (totalPages, curPage) => {
  const [paginateMask, setPaginateMask] = useState([]);

  useEffect(() => {
    let mask;
    if (totalPages === 1) mask = [];
    else if (totalPages < 6)
      mask = Array.from({ length: totalPages }, (_, index) => ({
        inner: index + 1,
        status:
          curPage === index ? constPagination.active : constPagination.default,
      }));
    else if (curPage < 3)
      mask = Array.from({ length: 6 }, (_, index) => {
        switch (index) {
          case 4:
            return { inner: '...', status: constPagination.disabled };
          case 5:
            return {
              inner: totalPages,
              status:
                curPage === index
                  ? constPagination.active
                  : constPagination.default,
            };
          default:
            return {
              inner: index + 1,
              status:
                curPage === index
                  ? constPagination.active
                  : constPagination.default,
            };
        }
      });
    else if (totalPages - curPage < 4)
      mask = Array.from({ length: 6 }, (_, index) => {
        switch (index) {
          case 0:
            return {
              inner: 1,
              status:
                curPage + 1 === totalPages - 5 + index
                  ? constPagination.active
                  : constPagination.default,
            };
          case 1:
            return { inner: '...', status: constPagination.disabled };
          default:
            return {
              inner: totalPages - 5 + index,
              status:
                curPage + 1 === totalPages - 5 + index
                  ? constPagination.active
                  : constPagination.default,
            };
        }
      });
    else
      mask = Array.from({ length: 7 }, (_, index) => {
        switch (index) {
          case 0:
            return { inner: 1, status: constPagination.default };
          case 1:
          case 5:
            return { inner: '...', status: constPagination.disabled };
          case 6:
            return { inner: totalPages, status: constPagination.default };
          default:
            return {
              inner: curPage + index - 2,
              status:
                index === 3 ? constPagination.active : constPagination.default,
            };
        }
      });
    setPaginateMask(mask);
  }, [totalPages, curPage]);

  return paginateMask;
};
