import { currencySymbols } from "../constants/constants";
import { formatDate } from "../util/formatDate";
import { formatMoney } from "../util/formatMoney";

export const vacancyAPI = async (city = '', isTodayOnly = false) => {
  try {
    let API = `https://api.hh.ru/vacancies?text=frontend%20${city}&only_with_salary=true&per_page=100&order_by=publication_time`
    if (isTodayOnly) API += `&date_from=${new Date(Date.now())
      .toLocaleDateString('zh-Hans-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '-')}`;
    const response = await fetch(API);
    if (!response.ok) throw new Error('Something wrong!');
    const vacancyFromAPI = await response.json();
    const vacancyData = [];
    let date = '';
    vacancyFromAPI.items.forEach((item) => {
      const itemDate = formatDate(item.published_at);
      if (itemDate !== date) {
        date = itemDate;
        vacancyData.push({
          date,
          vacancy: [],
        });
      }
      vacancyData[vacancyData.length - 1].vacancy.push({
        title: item.name,
        income: item.salary ? {
          minValue: formatMoney(item.salary.from),
          maxValue: formatMoney(item.salary.to),
          currency: currencySymbols[item.salary.currency] || item.salary.currency,
        } : null,
        company: item.employer.name,
        city: item.area.name,
        exp: item.experience.name,
      });
    });

    return vacancyData;
  } catch (error) {
    throw error;
  }
}