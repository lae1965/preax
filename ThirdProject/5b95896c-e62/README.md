Task 1: _vagif_
Task 2: termonj
Task 3: scang
-debug 1: исправил баги | добавил private и public routes | добавил classNames из discord (лежит в utils)
Начинал делать задание с требованием очищать localStorage только при первой загрузке. Если хотите, чтобы localStorage очищался при каждой загрузке нужно убрать пару строк в useEffect в App.tsx.
В дальнейшем localStorage все равно не будет использвоаться поэтому оставил так, чтобы лучше работал функционал.

Task 4: lashkevicha
-debag 1:

1. Добавил пользовательскую кнопку глаза, убрал библиотечную для input[type="password"]
2. Поправил padding в поле пароля.
3. В двух ревью пришел баг по-поводу того, что кнопка очистки поля смещена вниз. Я этого не вижу. Приподнял на 1px. Но если приподнять выше, она уже будет задрана вверх.
4. Пришло в рекомендациях: "Не увидел в коде определение системы пользователя - win/mac". Смотрите src/util/constants.ts стр. 14 - 17.
5. По просьбе одного из ревьюров разрешил в пароле кириллицу.

Task 5: scang
Не нашел в макете стили для list item, по совету использовал filter взамен.
--Debug 1:

1. Исправил сброс тем при выходе
2. Добавил обработку ошибок и loader во время загрузки
3. Изменил стили у li теперь подсвечиваются когда выбраны 3 темы, сделал border как в макете
4. Рекомендовали обернуть li в button для доступности/семантики, но так делать нельзя, поэтому button поместил внутрь li.
5. Переместил из ThemeList все лишнее на страницу Themes
6. Исправил обработку нажатия alt + enter когда выбрана тема через табуляцию
7. Вынес в useThemes логику выбора тем, сброс тем и селекоторы для удобства
8. Писали в баг что лоадер не по макету, поменял
   --Debug 2:
9. При переходе на /main и возвращении обратно на страницу выбора тем, карточки доступны для выбора // исправил
10. При уменьшении высоты окна просмотра ломается форма авторизации // исправил
11. При переходе на /main и возвращении обратно на страницу выбора тем, карточки становятся недоступными для выбора // исправил
12. grid-template-columns лучше repeat(auto-fit, minmax(239px, 1fr)) // исправил
13. Подредактирорвать фильтры, вижу не первый круг, значит есть где подсмотреть стили // не увидел где подсмотреть, сделал максимально близко к макету.
14. В логике редакса заменил undefined на null

Task 6: angelina.makoveyeva

Task 7: lashkevicha

Я прочитал дебаты в дискорде по-поводу скрола, и сделал следующим образом: если текст не убирается, то скрол появляется, если убирается, то исчезает. Зафиксировать скрол, чтобы он был всегда, очень просто: в модуле Layout у класса layoutWrapper поменять значение свойства overflow-y с auto на scroll. Для наглядности вкладку "Главная" я заполнил текстом, а вкладку "Рейтинг" оставил пустой. Так что переключаясь можно посмотреть работу в обоих режимах.

debug:

Замечание: Когда на странице много контента(твой Lorem ipsum) перекрываются border-radius у контейнера сначала снизу, а если немного проскролить то и сверху.
К сожалению, я не знаю как устранить это замечание. Сколько бы дополнительных контейнеров я ни создавал, все равно тот, что с текстом, будет самым верхним и накроет радиусы. Если кто-то догадается, как это пофиксить, напишите пож в личку.
