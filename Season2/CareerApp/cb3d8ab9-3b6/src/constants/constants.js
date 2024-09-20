export const currencySymbols = {
  'RUR': '₽',
  'USD': '$',
  'EUR': '€',
  'JPY': '¥'
};

export const dataFilter = [
  {
    id: 1,
    icon: 'location',
    text: 'Город',
    extraIcon: null,
    type: 'Input',
  },
  {
    id: 2,
    icon: 'bag',
    text: 'Тип занятости',
    extraIcon: 'arrow',
    type: 'Dropdown',
    options: [
      'Полная занятость',
      'Частичная занятость',
      'Стажировка',
      'Проектная работа',
    ],
  },
  {
    id: 3,
    icon: 'optional',
    text: 'Дополнительные фильтры',
    extraIcon: 'arrow',
    type: 'ExtraDropdown',
    options: [
      {
        icon: 'calendar',
        type: 'radio',
        name: 'Дата публикации вакансии',
        values: [
          'За неделю',
          'За все время',
          'За месяц',
          'За последние 3 дня',
          'За сутки',
        ],
      },
      {
        icon: 'star',
        type: 'radio',
        name: 'Опыт работы',
        values: [
          'Не имеет значения',
          'Нет опыта',
          'От 1 года до 3 лет',
          'От 3 до 6 лет',
          'Более 6 лет',
        ],
      },
      {
        icon: 'time',
        type: 'selector',
        name: 'График работы',
        values: [
          'Полный день',
          'Вахтовый метод',
          'Сменный график',
          'Гибкий график',
          'Удаленная работа',
        ],
      },
      {
        icon: 'bricks',
        type: 'selector',
        name: 'Теги технологий',
        values: [
          'jquery',
          'javascript',
          'css3',
          'react',
          'git',
          'vue',
          'flexbox',
          'html5',
        ],
      },
      {
        icon: 'graduation',
        type: 'selector',
        name: 'Образование',
        values: [
          'Не требуется или не указано',
          'Среднее профессиональное',
          'Высшее',
        ],
      },
      {
        icon: 'coins',
        type: 'radio',

        name: 'Уровень дохода',
        values: [
          'Не имеет значения',
          'от 25 000₽',
          'от 50 000₽',
          'от 100 000₽',
          'от 150 000₽',
        ],
      },
      {
        icon: 'tomeJob',
        type: 'selector',
        name: 'Подработка',
        values: [
          'Неполный день',
          'От 4 часов',
          'По вечерам',
          'По выходным',
          'Разовое задание',
        ],
      },
      {
        icon: 'others',
        type: 'selector',
        name: 'Другие параметры',
        values: [
          'Доступные людям с инвалидностью',
          'Скрытые вакансии',
          'От 4 часов в день',
          'От аккредитованных ИТ компаний',
          'Без вакансий кадровых агентств',
        ],
      },
    ],
  },
];

export const dataBar = [
  {
    navPage: 'vacancy',
    value: 'Поиск вакансий',
    id: 1,
  },
  {
    navPage: 'favourites',
    value: 'Избранные вакансии',
    id: 2,
  },
];

export const mockData = [
  {
    data: 'Сегодня, 28 апреля',
    vacancy: [
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle React',
        income: {
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
    ],
  },
  {
    data: '27 апреля',
    vacancy: [
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
    ],
  },
  {
    data: '26 апреля',
    vacancy: [
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
      {
        title: 'Junior Frontend-разработчик и еще много текста',
        income: {
          minValue: '30 000',
          maxValue: '70 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '1',
          maxValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: {
          minValue: '120 000',
          maxValue: '180 000',
        },
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: {
          minValue: '3',
        },
      },
      {
        title: 'Middle Frontend React разработчик и еще много текста',
        income: null,
        company: 'АО Группа компаний Орион',
        city: 'Москва',
        exp: null,
      },
    ],
  },
];
