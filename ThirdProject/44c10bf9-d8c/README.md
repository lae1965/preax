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
4. Пришло в рекомендациях: "Не увидел в коде определение системы пользователя - win/mac". Смотрите src/util/constdnts.ts стр. 14 - 17.
5. По просьбе одного из ревьюров разрешил в пароле кириллицу.