import Card from '../card';
import styles from './styles.module.css';

const weatherMock = [{
  code: 'humidity',
  name: 'Влажность',
  value: '75%',
  progress: {
    view: 'scale',
    value: 20,
    type: 'normal'
  },
},
{
  code: 'barometr',
  name: 'Давление',
  value: 761,
  progress: {
    value: 70,
    type: 'high'
  },
  description: 'Повышенное'
},
{
  code: 'visibility',
  name: 'Видимость',
  value: '28 км',
  progress: {
    value: 80,
    type: 'normal'
  },
  description: 'Нормальная'
},
{
  code: 'sunrise',
  name: 'Рассвет',
  value: '8:42',
  description: 'Прошло: 02:47'
},
{
  code: 'sunset',
  name: 'Закат',
  value: '16:37',
  description: 'Осталось: 05:08'
},
{
  code: 'direction',
  name: 'Сила ветра',
  value: '2 м/с',
  description: 'Северо-западный'
}
];

const CardList = () => {
  return (
    <ul className={`list-reset ${styles.cards}`}>
      {weatherMock.map(item => (
        <Card key={item.code} item={item} />
      ))}
    </ul>
  );
};

export default CardList;