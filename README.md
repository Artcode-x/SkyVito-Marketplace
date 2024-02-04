# SkyVito Marketplace

Финальный индивидуальный проект

Сайт объявлений, где пользователи могут зарегистрироваться, просматривать объявления, добавлять свои объявления и оставлять комментарии.

## Особенности

### Для незарегистрированных пользователей:

-   Возможность поиска товаров
-   Просмотр объявлений размещенных другими пользователями
-   Просмотр профиля продавца
-   Возможность просматривать номер телефона продавца
-   Возможность просматривать комментарии

### Для зарегистрированных пользователей:

-   Добавление отзывов о товаре
-   Добавление объявлений
-   Смена имени, фамилии, города, телефона, аватарки в личном кабинете
-   Возможность снять объявление с публикации
-   Возможность редактирования объявления. Добавления и удаления фото к объявлению

## Использованные библиотеки

В проекте были использованы следующие библиотеки:

-   **Axios**: библиотека JavaScript, которая обеспечивает простой и удобный способ взаимодействия с веб серверами и получения данных с удаленных ресурсов.
-   **React**: JavaScript-библиотека для создания пользовательских интерфейсов.
-   **Redux**: Библиотека для управления состоянием приложения в React.
-   **styled-components**: Библиотека для стилизации компонентов с использованием CSS внутри JavaScript.
-   **React Router**: Библиотека для навигации между компонентами React в приложении.
-   **Docker**: Платформа для разработки, доставки и выполнения приложений в контейнерах.

## Назначение директорий и файлов проекта

**/advpage** - Страница конкретного объявления
**/components** - Компоненты общие для всего проекта
**/helpers** - Функции для форматирования различных данных: - дат, времени и прочего
**/store** - Файлы, относящиеся к управлению состоянием приложения
**/api** - Реализация запросов и отправки данных в бэкенд.
**/App** - Главный компонент приложения, объединяющий все компоненты
**/components/protectedRoute** - Защищенный маршрут, на который может попасть только авторизированный пользователь.
**/components/modal** - Модульные окна приложения, которые открываются поверх основной страницы
**/components/modal/addAds** - Всплывающее окно, создание/добавление нового объявления.
**/components/modal/editAds** - Всплывающее окно, для редактирования объявления
**/components/modal/msg** - Для спец уведомлений о добавлении или завершения редактирования объявлений
**/components/custom-header** - В зависимости от страницы, отображает разное содержимое
**/components/up-menu** - Адаптивное меню под header-ом
**/components/footer** - Мобильное меню сайта, переиспользуемое на всех страницах  
**/components/settingsprofile** - Отдельно вынесена компонента с обновлением всей информации о пользователе
**/components/backend** - Файлы бэкенда.
**/components/reviews** - Отзывы о товаре, вынесенные в отдельный компонент

## Необходимое ПО для запуска проекта:

-   Docker

## Установка Docker-a и запуск Бэкенда

1. Установите Docker, следуя инструкциям для вашей операционной системы.
2. Запустите Docker с помощью ярлыка.
3. Откройте терминал и перейдите в папку SkyVito Marketplace.
4. Выполните в терминале команду: `docker-compose -f docker-compose-backend.yaml up -d`
5. После первого выполнения команды все образы подтянутся, но могут не запуститься, в этом случае повторно выполните команду: `docker-compose -f docker-compose-backend.yaml up -d`
6. После этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/

## Остановка бэкенда

Чтобы остановить работу бэкенда, выполните: `docker-compose -f docker-compose-backend.yaml down`

## Инструкция по локальному запуску приложения:

1. **Клонирование репозитория:**

    ```bash
    git clone https://github.com/Artcode-x/SkyVito-Marketplace.git
    ```

2. **Установка зависимостей :**

    ```bash
    npm install
    ```

3. **Запуск приложения:**

    ```bash
    npm run start
    ```

4. **Локальный сервер:**
   После выполнения команды `npm start`, приложение будет доступно по адресу [http://localhost:3000/](http://localhost:3000/).

Убедитесь, что у вас установлен Node.js и npm на вашем компьютере. Если нет, вы можете скачать их с [официального сайта Node.js](https://nodejs.org/).
