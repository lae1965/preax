import BriefCase from "@components/UI/icons/BriefCase";
import TagTechn from "@components/UI/icons/TagTechn";
import FilterSolid from "@components/UI/icons/FilterSolid";
import DatePublished from "@components/UI/icons/DatePublished";
import Time from "@components/UI/icons/Time";
import Education from "@components/UI/icons/Education";
import Finance from "@components/UI/icons/Finance";
import OtherWork from "@components/UI/icons/OtherWork";
import PartTime from "@components/UI/icons/PartTime";
import Exp from "@components/UI/icons/Exp";

const dataBagFilter = {
  type: 'checkbox',
  filterOption: [
    { value: 'Полная занятость', id: 'fullTime' },
    { value: 'Частичная занятость', id: 'partTime' },
    { value: 'Стажировка', id: 'internship' },
    { value: 'Проектная работа', id: 'projectWork' }
  ]
}

const dataTechnologiesFilter = {
  type: 'checkbox',
  filterOption: [
    { value: 'jQuery', id: 'jQuery' },
    { value: 'JavaScript', id: 'JavaScript' },
    { value: 'CSS3', id: 'CSS3' },
    { value: 'React', id: 'React' },
    { value: 'Git', id: 'Git' },
    { value: 'Vue', id: 'Vue' },
    { value: 'FlexBox', id: 'FlexBox' },
    { value: 'HTML5', id: 'HTML5' }
  ]
}

const dataDatePublished = {
  type: 'radio',
  filterOption: [
    { value: 'За все время', id: 'allTime' },
    { value: 'За месяц', id: 'LastMonth' },
    { value: 'За неделю', id: 'lastWeek' },
    { value: 'За последние 3 дня', id: 'lastThreeDAys' },
    { value: 'За стуки', id: 'lastday' }
  ]
}

const dataDateExp = {
  type: 'radio',
  filterOption: [
    { value: 'Не имеет значения', id: 'notImportant' },
    { value: 'Нет опыта', id: 'notExp' },
    { value: 'От 1 года до 3 лет', id: '1-3' },
    { value: 'От 3 до 6 лет', id: '3-6' },
    { value: 'Более 6 лет', id: 'more' }
  ]
}

const dataTime = {
  type: 'checkbox',
  filterOption: [
    { value: 'Полный день', id: 'fullTime' },
    { value: 'Вахтовый метод', id: 'shiftMonth' },
    { value: 'Сменный график', id: 'shift' },
    { value: 'Гибкий график', id: 'flex' },
    { value: 'Удаленная работа', id: 'remote' }
  ]
}

const dataEducation = {
  type: 'checkbox',
  filterOption: [
    { value: 'Не требуется или не указано', id: 'any' },
    { value: 'Срднее профессиональное', id: 'normal' },
    { value: 'Высшее', id: 'hight' }
  ]
}

const dataIncomeLvl = {
  type: 'radio',
  filterOption: [
    { value: 'Не имеет значения', id: 'any' },
    { value: 'От 25 000 ₽', id: '25000' },
    { value: 'От 50 000 ₽', id: '50000' },
    { value: 'От 100 000 ₽', id: '100000' },
    { value: 'От 150 000 ₽', id: '150000' },
    { value: 'Указан доход', id: 'something' },
  ]
}

const dataPartTime = {
  type: 'checkbox',
  filterOption: [
    { value: 'Неполный день', id: 'any' },
    { value: 'От 4 часов в день', id: 'half' },
    { value: 'По вечерам', id: 'evening' },
    { value: 'По выходным', id: 'weekend' },
    { value: 'Разовое задание', id: 'oneQuest' }
  ]
}

const dataOther = {
  type: 'checkbox',
  filterOption: [
    { value: 'Доступные людям с инвалидностью', id: 'availability' },
    { value: 'Скрытие вакансии', id: 'hidden' },
    { value: 'От 4 часов в день', id: 'halfOther' },
    { value: 'От аккредитованных IT компаний', id: 'accredited' },
    { value: 'Без вакансий от кадровых агенств', id: 'noRecruitmentAgency' }
  ]
}

const dataOptionalFilter = [
  {
    id: 2,
    name: "Теги технологий",
    icon: TagTechn,
    expandable: true,
    filterItem: dataTechnologiesFilter,
  },
  {
    id: 3,
    name: "Дата публикации",
    icon: DatePublished,
    expandable: true,
    filterItem: dataDatePublished,
  },
  {
    id: 4,
    name: "Опыт работы",
    icon: Exp,
    expandable: true,
    filterItem: dataDateExp,
  },
  {
    id: 5,
    name: "График работы",
    icon: Time,
    expandable: true,
    filterItem: dataTime,
  },
  {
    id: 6,
    name: "Образование",
    icon: Education,
    expandable: true,
    filterItem: dataEducation,
  },
  {
    id: 9,
    name: "Подработка",
    icon: PartTime,
    expandable: true,
    filterItem: dataPartTime,
  },
  {
    id: 7,
    name: "Уровень дохода",
    icon: Finance,
    expandable: true,
    filterItem: dataIncomeLvl,
  },
  {
    id: 8,
    name: "Другие параметры",
    icon: OtherWork,
    expandable: true,
    filterItem: dataOther,
  },
]

export const dataFilter = [
  {
    id: 2,
    name: "Тип занятости",
    icon: BriefCase,
    expandable: true,
    filterItem: dataBagFilter,
  }, {
    id: 3,
    name: "Дополнительные фильтры",
    icon: FilterSolid,
    expandable: true,
    filterList: dataOptionalFilter
  }
]