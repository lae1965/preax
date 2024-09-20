# WeatherApp VendI1K

### устновка заивисимостей `npm i`

### запуск проекта `npm run start`

### сборка в build версию `npm run build`

task-1

- Карточки не стал рендерить через map, тк их кол-во не зависит от ответа API и в каждую карточку нужно будет просто вставить пару значений
- Блок с табами и слайдером не отрисовывал, потому что нет в ТЗ

Task 2: Михаил, m1sh43799
add: ProgressBar, Icon, TabBar, Tab, Slider
add: UI Icons
feature: Tab toggle, Slider toggle
removed: archive
fix: CityList

Task 2 debugging: Михаил, m1sh43799
fix: в ProgressBar переменая переделана на useState
add: В Icon добавлены иконки

Task 3: Игорь, igorschetinkin
Перед началом работы над таской поместите СВОЙ API-ключ в файл .env

Task 4: Павел, VendI1K

- При клике на город в недавно просмотренных, запрос уходит сразу на погоду, тк данные(lon, lat) о городе уже получены ранее
- Перед началом работы над таской поместите СВОЙ API-ключ в файл .env

Task 5: Андрей, lashkevicha

- Не понял в тз первый пункт: Учитывать и корректно (посимвольно) отображать длинные названия городов, например: «Кременчуг-Константиновское». Вроде бы и так все отражается корректно, что значит посимвольно отображать?
- "Прогресс-бар видимости показывает значения от 0 до 200 км. Среднее значение 10-20 км. На 15 км ползунок должен быть расположен на 50% шкалы" - тоже не совсем понятно. Я сделал два кейса: если значение от 10 до 20км, то прогресс-бар работает в этих пределах, если выше или ниже - то от 0 до 200.

Функционально все работает согласно тз. После ревью независимо от результатов немного поддебажу, чтобы задача была в заданном ранее стиле - добавлю кастомных хуков, утилит, вынесу константы в отдельный файл и т.п. Прошу строго за стилистику и архитектуру не судить, просто уже нет времени в данный момент.

Debug 1:

- устранил "дёрганье" приложения во время первичной загрузки;
- если зайти в дропдаун и тут же выйти из него, ничего не выбирая, пропадал текущий город, его имя исчезало из приложения - устранил;
- при выборе нового города автоматически запускался поиск по погоде - побочный эффект от хука - устранил;
- подкрутил прогресс-бар - при значении current = 100% точка прогресса выезжала за пределы прогресс-бара;
- не согласился с замечаниями:
  1."направление индикатора силы ветра должно совпадать со стороной света, указанной в description, т.е. если ветер восточный, то индикатор соответственно должен быть направлен вправо".
  На самом деле существует два подхода отрисовки направления ветра - навигационный и метеорологический. При навигационном ветер дует "в компас", т.е. стрелка должна быть направлена туда, откуда ветер дует. А при метеорологическом "из компаса". То есть северный ветер дует с севера на юг, и стрелка должна показывать на юг. Привожу цитату из тз: "Индикатор силы ветра в карточке должен поворачиваться на значение угла полученного из запроса API Openweathermap + 180deg" Соответсвенно, для этого приложения выбран метеорологический метод, и при восточном ветре индикатор как раз таки должен показывать на запад, т.е. влево. 2.
  2."время рассвета и заката должно отображаться корректно у всех пользователей независимо от их временной зоны".
  Я считаю, что все корректно. В Хабаровске при запросе про Москву время заката и рассвета в Москве показано по Хабаровскому времени. А как должно быть? В тз про это ни слова, соответственно это не бага, а пожелание, причем я так и не понял, что тебе хотелось бы увидеть?