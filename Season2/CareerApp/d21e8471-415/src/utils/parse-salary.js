import { currency } from "./parse-vacancy";

export const parseSalary = (salaryObject) => {
  if (!salaryObject) return 'Доход не указан';

  const locale = 'ru-RU';
  const obj = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  let salary = '';

  if (salaryObject.from === salaryObject.to) salary += `${salaryObject.from.toLocaleString(locale, obj)} `;
  else {
    if (salaryObject.from) salary += `от ${salaryObject.from.toLocaleString(locale, obj)} `;
    if (salaryObject.to) salary += `до ${salaryObject.to.toLocaleString(locale, obj)} `;
  }

  salary += currency[salaryObject.currency];

  if (salaryObject.gross) salary += ' до уплаты налогов';
  else salary += ' на руки';

  return salary;
}