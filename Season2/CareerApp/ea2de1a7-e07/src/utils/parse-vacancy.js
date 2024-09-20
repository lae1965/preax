import { formatNumber } from "./format-number";

export const currency = {
  RUR: '₽',
  EUR: '€',
  USD: '$',
  JPY: '¥'
};

const parseSalary = (salary) => {
  let salaryString = '';

  if (salary) {
    if (salary.from && salary.to) {
      if (salary.from !== salary.to) {
        salaryString = [formatNumber(salary.from), `${formatNumber(salary.to)}`].join(' - ');
      } else {
        salaryString = formatNumber(salary.from);
      }

    } else if (salary.from) {
      salaryString = `от ${formatNumber(salary.from)}`;
    } else if (salary.to) {
      salaryString = `до ${formatNumber(salary.to)}`;
    }

    if (salaryString.length) {
      salaryString += currency[salary.currency] ? ' ' + currency[salary.currency] : '';
    } else salaryString = 'Доход не указан';
  } else salaryString = 'Доход не указан';

  return salaryString;
};

export const schemeResultVacancy = (arr = [], blackList = []) => {
  const newArr = [];
  arr.forEach((el) => {
    find = blackList.findIndex(itemId => itemId === el.id);
    if (find === -1) newArr.push({
      id: el.id,
      name: el.name,
      city: el.address ? el.address.city : el.area.name,
      published_at: el.published_at,
      experience: el.experience.name ? el.experience.name : '',
      company: el.employer ? el.employer.name : '',
      salary: parseSalary(el.salary),
    });
  });

  return newArr;
};

export const groupResultVacancyByDate = (arr = []) => {
  const groups = arr.reduce((groups, el) => {
    const date = el.published_at.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(el);
    return groups;
  }, {});


  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      items: groups[date]
    };
  });

  return groupArrays;
}