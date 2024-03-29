# Проектная работа. МБОУ АЛГОСОШ им. Фибоначчи

## Цель проекта

Одностраничное React-приложение позволяет пользователю визуально ознакомиться с работой следующих алгоритмов:

- **разворот строки**;
- **расчет последовательности Фибоначчи**. Количество чисел последовательности определяет пользователь в пределах от 1 до 19;
- **сортировка массива**. Реализовано два способа сортировки: "пузырьком" и "выбором". Сортировка возможна как по возрастанию, так и по убыванию. Способ и направление сортировки определяет пользователь;
- **стек**. Реализовано добавление и удаление элементов в структуру данных стек;
- **очередь**. Пользователь может осуществить добавление и удаление элементов в структуру данных очередь;
- **связный список**. С помощью элеменов управления возможно добавление и удаление элементов в связном списке.

## Учебные цели проекта

Проект является учебным и выполнялся на курсе в Яндекс.Практикуме в два этапа.

Задача первого этапа заключалась в визуальзации изучаемых алгоритмов на основе представленной Яндекс.Практикумом заготовки. В ходе работы было необходимо не только
написать код, который реализовывал алгоритм, но и обеспечить анимацию, поэтапное отражение работы алгоритма. Таким образом обучающийся должен был овладеть навыками анимации и организации планирования реализации кода, более глубоко понять порядок работы алгоритмов сортировки массивов, а также реализации таких структур данных, как стек, очередь, связный список.

На втором этапе работы с проектом, было необходимо написать определенные заданием unit- и e2e-тесты, закрепив таким образом начальные знания по тестированию кода.

## Использованные технологии

При реализации проекта использовались следующие технологии:
HTML, CSS, Typescript, React, Jest, Cypress.

## Доступные скрипты

Находясь в дирректории проекта, можно выполнить следующие команды:

### `npm run start`

Запуск проекта в режиме разработки, открывающийся в браузере по адресу http://localhost:3000. Страница перезагружается после сохранения изменений в коде.

### `npm run build`

Запуск сборки рабочего варианта проекта. Итог сборки помещается в папку `build` .

### `npm run test`

Запуск unit-тестов.

### `npm run cypress:open`

Запуск тестового окружения для реализации e2e-тестирования.\
**Важно!!!** Предварительно необходимо запустить проект в режиме разработки командой `npm run start`.

### `npm run deploy`

Размещение проекта на GitHub Pages

## Публикация проекта

Проект размещен для ознакомления с его функциональностью по [адресу](https://bobrikau.github.io/algososh/) .
