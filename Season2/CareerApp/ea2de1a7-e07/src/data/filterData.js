export const otherFiltersData = [
  {
    icon: 'briefCase',
    query: 'employment',
    title: 'Тип занятости',
    id: '0',
    checkbox: [
      {
        value: 'Полная занятость',
        id: 'full',
        query: 'employment'
      },
      {
        value: 'Частичная  занятость',
        id: 'part',
        query: 'employment'
      },
      {
        value: 'Стажировка',
        id: 'probation',
        query: 'employment'
      },
      {
        value: 'Проектная работа',
        id: 'project',
        query: 'employment'
      },

    ]
  },
  {
    icon: 'calendar',
    query: 'period',
    title: 'Дата публикации вакансии',
    id: '1',
    radio: [
      {
        query: 'period',
        id: '0',
        withOutUrl: true,
        value: 'За все время',
      },
      {
        query: 'period',
        id: '30',
        value: 'За месяц',
      },
      {
        query: 'period',
        id: '7',
        value: 'За неделю',
      },
      {
        query: 'period',
        id: '3',
        value: 'За последние 3 дня',
      },
      {
        query: 'period',
        id: '1',
        value: 'За сутки',
      },
    ],
  },
  {
    icon: 'star',
    query: 'experience',
    title: 'Опыт работы',
    id: '2',
    radio: [
      {
        query: 'experience',
        id: 'noExperience',
        withOutUrl: true,
        value: 'Не имеет значения',
      },
      {
        query: 'experience',
        id: 'between1And3',
        value: 'От 1 года до 3 лет',
      },
      {
        query: 'experience',
        id: 'between3And6',
        value: 'От 3 до 6 лет',
      },
      {
        query: 'experience',
        id: 'moreThan6',
        value: 'Более 6 лет',
      },
    ],
  },
  {
    icon: 'clock',
    query: 'schedule',
    title: 'График работы',
    id: '3',
    checkbox: [
      {
        query: 'schedule',
        id: 'fullDay',
        value: 'Полный день',
      },
      {
        query: 'schedule',
        id: 'flyInFlyOut',
        value: 'Вахтовый метод',
      },
      {
        query: 'schedule',
        id: 'shift',
        value: 'Сменный график',
      },
      {
        query: 'schedule',
        id: 'flexible',
        value: 'Гибкий график',
      },
      {
        query: 'schedule',
        id: 'remote',
        value: 'Удаленная работа',
      },
    ],
  },
  {
    icon: 'stack',
    query: 'text',
    title: 'Теги технологий',
    id: '4',
    checkbox: [
      {
        query: 'text',
        id: 'jquery',
        value: 'JQuery',
      },
      {
        query: 'text',
        id: 'js',
        value: 'JavaScript',
      },
      {
        query: 'text',
        id: 'css3',
        value: 'CSS3',
      },
      {
        query: 'text',
        id: 'react',
        value: 'React',
      },
      {
        query: 'text',
        id: 'git',
        value: 'Git',
      },
      {
        query: 'text',
        id: 'vue',
        value: 'Vue',
      },
      {
        query: 'text',
        id: 'flexbox',
        value: 'Flexbox',
      },
      {
        query: 'text',
        id: 'html5',
        value: 'HTML5',
      },
    ],
  },
  {
    icon: 'graduation',
    query: 'education',
    title: 'Образование',
    id: '5',
    checkbox: [
      {
        query: 'education',
        id: 'not_required_or_not_specified',
        value: 'Не требуется или не указано',
      },
      {
        query: 'education',
        id: 'special_secondary',
        value: 'Среднее профессиональное',
      },
      {
        query: 'education',
        id: 'higher',
        value: 'Высшее',
      },
    ],
  },
  {
    icon: 'salary',
    query: 'salary',
    title: 'Уровень дохода',
    id: '6',
    radio: [
      {
        query: 'salary',
        id: '10',
        withOutUrl: true,
        value: 'Не имеет значения',
      },
      {
        query: 'salary',
        id: '25000',
        value: 'от 25 000 ₽',
      },
      {
        query: 'salary',
        id: '50000',
        value: 'от 50 000 ₽',
      },
      {
        query: 'salary',
        id: '100000',
        value: 'от 100 000 ₽',
      },
      {
        query: 'salary',
        id: '150000',
        value: 'от 150 000 ₽',
      },

    ],
    checkbox: [
      {
        query: 'only_with_salary',
        additionally: 'salary',
        id: 'true',
        value: 'Указан доход',
      },
    ],
  },
  {
    icon: 'tomeJob',
    query: 'part_time',
    title: 'Подработка',
    id: '7',
    checkbox: [
      {
        query: 'part_time',
        id: 'employment_part',
        value: 'Неполный день',
      },
      {
        query: 'part_time',
        id: 'from_four_to_six_hours_in_a_day',
        value: 'От 4 часов в день',
      },
      {
        query: 'part_time',
        id: 'start_after_sixteen',
        value: 'По вечерам',
      },
      {
        query: 'part_time',
        id: 'only_saturday_and_sunday',
        value: 'По выходным',
      },
      {
        query: 'part_time',
        id: 'employment_project',
        value: 'Разовое задание',
      },
    ],
  },
  {
    icon: 'moreFilters',
    query: 'label',
    title: 'Другие параметры',
    id: '8',
    checkbox: [
      {
        query: 'label',
        id: 'accept_handicapped',
        value: 'Доступные людям с инвалидностью',
      },
      {
        query: 'label',
        id: 'hidden',
        value: 'Скрытые вакансии',
      },
      {
        query: 'label',
        id: 'accredited_it',
        value: 'От аккредитованных ИТ компаний',
      },
      {
        query: 'label',
        id: 'not_from_agency',
        value: 'Без вакансий от кадровых агенств',
      },
    ],
  },
];

export const briefCase = [
  { value: 'Полная занятость', id: 'full', query: 'employment' },
  { value: 'Частичная  занятость', id: 'part', query: 'employment' },
  { value: 'Стажировка', id: 'probation', query: 'employment' },
  { value: 'Проектная работа', id: 'project', query: 'employment' },
];
