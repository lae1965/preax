export const generateSceleton = () => ([
  {
    date: '',
    vacancy: Array.from({ length: 9 }, () => ({
      title: '',
      income: null,
      company: '',
      city: '',
      exp: '',
    })),
  },
])