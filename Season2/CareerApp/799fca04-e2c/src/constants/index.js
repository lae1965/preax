import { BriefCaseSVG } from '@components/UI/IconsSVG/BriefCaseSVG';
import { CalendarSVG } from '@components/UI/IconsSVG/CalendarSVG';
import { FilterSVG } from '@components/UI/IconsSVG/FilterSVG';
import { GraduationSVG } from '@components/UI/IconsSVG/GraduationSVG';
import { LocationSVG } from '@components/UI/IconsSVG/LocationSVG';
import { MoreFiltersSVG } from '@components/UI/IconsSVG/MoreFiltersSVG';
import { SalarySVG } from '@components/UI/IconsSVG/SalarySVG';
import { StackSVG } from '@components/UI/IconsSVG/StackSVG';
import { StarSVG } from '@components/UI/IconsSVG/StarSVG';
import { TimeSVG } from '@components/UI/IconsSVG/TimeSVG';
import { TomeJobSVG } from '@components/UI/IconsSVG/TomeJobSVG';

export const APP_PAGE = {
  main: '/',
  vacancy: '/vacancy'
}

export const LIMIT_CARD_FOR_MAIN_PAGE = 18
export const LIMIT_CAR_FOR_SIMILARY = 6
export const URL_VACANCIES_CONSTANT_PART = 'https://api.hh.ru/vacancies?order_by=publication_time';

export const filterItems = [
  {
    type: 'input',
    name: 'area',
    text: 'Город',
    icon: LocationSVG,
  },
  {
    type: 'dropdown',
    name: 'employment',
    text: 'Тип занятости',
    icon: BriefCaseSVG,
    items: [
      {
        type: 'checkbox',
        name: 'employment',
        value: 'full',
        text: 'Полная занятость',
      },
      {
        type: 'checkbox',
        name: 'employment',
        value: 'part',
        text: 'Частичная занятость',
      },
      {
        type: 'checkbox',
        name: 'employment',
        value: 'probation',
        text: 'Стажировка',
      },
      {
        type: 'checkbox',
        name: 'employment',
        value: 'project',
        text: 'Проектная работа',
      },
    ],
  },
  {
    type: 'dropdown',
    name: 'additional',
    text: 'Дополнительные фильтры',
    icon: FilterSVG,
    items: [
      {
        type: 'dropdown',
        name: 'period',
        text: 'Дата публикации вакансии',
        icon: CalendarSVG,
        items: [
          {
            type: 'radio',
            name: 'period',
            value: 'none',
            text: 'За все время',
          },
          {
            type: 'radio',
            name: 'period',
            value: '30',
            text: 'За месяц',
          },
          {
            type: 'radio',
            name: 'period',
            value: '7',
            text: 'За неделю',
          },
          {
            type: 'radio',
            name: 'period',
            value: '3',
            text: 'За последние 3 дня',
          },
          {
            type: 'radio',
            name: 'period',
            value: '1',
            text: 'За сутки',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'experience',
        text: 'Опыт работы',
        icon: StarSVG,
        items: [
          {
            type: 'radio',
            name: 'experience',
            value: 'none',
            text: 'Не имеет значения',
          },
          {
            type: 'radio',
            name: 'experience',
            value: 'noExperience',
            text: 'Нет опыта',
          },
          {
            type: 'radio',
            name: 'experience',
            value: 'between1And3',
            text: 'От 1 года до 3 лет',
          },
          {
            type: 'radio',
            name: 'experience',
            value: 'between3And6',
            text: 'От 3 до 6 лет',
          },
          {
            type: 'radio',
            name: 'experience',
            value: 'moreThan6',
            text: 'Более 6 лет',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'schedule',
        text: 'График работы',
        icon: TimeSVG,
        items: [
          {
            type: 'checkbox',
            name: 'schedule',
            value: 'fullDay',
            text: 'Полный день',
          },
          {
            type: 'checkbox',
            name: 'schedule',
            value: 'flyInFlyOut',
            text: 'Вахтовый метод',
          },
          {
            type: 'checkbox',
            name: 'schedule',
            value: 'shift',
            text: 'Сменный график',
          },
          {
            type: 'checkbox',
            name: 'schedule',
            value: 'flexible',
            text: 'Гибкий график',
          },
          {
            type: 'checkbox',
            name: 'schedule',
            value: 'remote',
            text: 'Удаленная работа',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'text',
        text: 'Теги технологий',
        icon: StackSVG,
        items: [
          {
            type: 'checkbox',
            name: 'text',
            value: 'JQuery',
            text: 'JQuery',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'JavaScript',
            text: 'JavaScript',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'CSS3',
            text: 'CSS3',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'React',
            text: 'React',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'Git',
            text: 'Git',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'Vue',
            text: 'Vue',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'Flexbox',
            text: 'Flexbox',
          },
          {
            type: 'checkbox',
            name: 'text',
            value: 'HTML5',
            text: 'HTML5',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'education',
        text: 'Образование',
        icon: GraduationSVG,
        items: [
          {
            type: 'checkbox',
            name: 'education',
            value: 'not_required_or_not_specified',
            text: 'Не требуется или не указано',
          },
          {
            type: 'checkbox',
            name: 'education',
            value: 'special_secondary',
            text: 'Среднее профессиональное',
          },
          {
            type: 'checkbox',
            name: 'education',
            value: 'higher',
            text: 'Высшее',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'salary',
        text: 'Уровень дохода',
        icon: SalarySVG,
        items: [
          {
            type: 'radio',
            name: 'salary',
            value: 'none',
            text: 'Не имеет значения',
          },
          {
            type: 'radio',
            name: 'salary',
            value: '25000',
            text: 'от 25 000 ₽',
          },
          {
            type: 'radio',
            name: 'salary',
            value: '50000',
            text: 'от 50 000 ₽',
          },
          {
            type: 'radio',
            name: 'salary',
            value: '100000',
            text: 'от 100 000 ₽',
          },
          {
            type: 'radio',
            name: 'salary',
            value: '150000',
            text: 'от 150 000 ₽',
          },
          {
            type: 'checkbox',
            name: 'only_with_salary',
            value: false,
            text: 'Указан доход',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'part_time',
        text: 'Подработка',
        icon: TomeJobSVG,
        items: [
          {
            type: 'checkbox',
            name: 'part_time',
            value: 'employment_part',
            text: 'Неполный день',
          },
          {
            type: 'checkbox',
            name: 'part_time',
            value: 'from_four_to_six_hours_in_a_day',
            text: 'От 4 часов в день',
          },
          {
            type: 'checkbox',
            name: 'part_time',
            value: 'start_after_sixteen',
            text: 'По вечерам',
          },
          {
            type: 'checkbox',
            name: 'part_time',
            value: 'only_saturday_and_sunday',
            text: 'По выходным',
          },
          {
            type: 'checkbox',
            name: 'part_time',
            value: 'employment_project',
            text: 'Разовое задание',
          },
        ],
      },
      {
        type: 'dropdown',
        name: 'label',
        text: 'Другие параметры',
        icon: MoreFiltersSVG,
        items: [
          {
            type: 'checkbox',
            name: 'label',
            value: 'accept_handicapped',
            text: 'Доступные людям с инвалидностью',
          },
          {
            type: 'checkbox',
            name: 'show_hidden',
            value: 'false',
            text: 'Включая скрытые вакансии',
          },
          {
            type: 'checkbox',
            name: 'label',
            value: 'accredited_it',
            text: 'От аккредитованных ИТ компаний',
          },
          {
            type: 'checkbox',
            name: 'label',
            value: 'not_from_agency',
            text: 'Без вакансий от кадровых агенств',
          },
        ],
      },
    ],
  },
];
