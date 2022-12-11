import html from "../assets/img/icons/frontendIcons/file_type_html_icon_130541.png";
import css from "../assets/img/icons/frontendIcons/file_type_css_icon_130661.png";
import scss from "../assets/img/icons/frontendIcons/file_type_scss_icon_130177.png";
import js from "../assets/img/icons/frontendIcons/javascript_icon_130900.png";
import react from "../assets/img/icons/frontendIcons/react_original_logo_icon_146374.png";
import routerDom from "../assets/img/icons/frontendIcons/folder_react_icon_161285.png";
import lazy from "../assets/img/icons/frontendIcons/loading_icon_149916.png";
import toolkit from "../assets/img/icons/frontendIcons/redux_original_logo_icon_146365.png";
import query from "../assets/img/icons/frontendIcons/media-query_102936.png";
import persist from "../assets/img/icons/frontendIcons/rocket_univers_galaxia_stars_moon_rocketman_astronaut_icon_141228.png";
import typescript from "../assets/img/icons/frontendIcons/file_type_typescript_official_icon_130107.png";
import webpack from "../assets/img/icons/frontendIcons/webpack_original_logo_icon_146300.png";
import nodeJs from "../assets/img/icons/backendIcons/file_type_node_icon_130301.png";
import express from "../assets/img/icons/backendIcons/express_original_wordmark_logo_icon_146528.png";
import mongoDb from "../assets/img/icons/backendIcons/mongodb_original_wordmark_logo_icon_146425.png";
import mongoose from "../assets/img/icons/backendIcons/folder_type_mongodb_opened_icon_129878.png";
import cloudinary from "../assets/img/icons/backendIcons/iconfinder-green-work-4341273_120576.png";
import schedule from "../assets/img/icons/backendIcons/Tasks_43553.png";
import restApi from "../assets/img/icons/backendIcons/api_icon_129131.png";
import jwt from "../assets/img/icons/backendIcons/json_115517.png";
import typeBackend from "../assets/img/icons/backendIcons/file_type_typescript_official_icon_130107.png";
import validator from "../assets/img/icons/backendIcons/businessapplication_database_database_accepteitheracceptthedatabase_connect_connectdatabase_negocios_aplicacion_basededato_2310.png";
import postman from "../assets/img/icons/backendIcons/postman_macos_bigsur_icon_189815.png";
import { SkillsType } from "models";

const descriptionFrontend: SkillsType[] = [
  {
    url: 'https://html.com/html5/',
    key: "Язык разметки",
    property: "HTML",
    image: html,
    text: "стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора",
  },
  {
    url: 'https://www.w3.org/Style/CSS/Overview.en.html',
    key: "Таблицы стилей",
    property: "CSS",
    image: css,
    text: "формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML).",
  },
  {
    url: 'https://sass-lang.com/',
    key: "Препроцессор",
    property: "SCSS",
    image: scss,
    text: "это отдельный формат файла, в котором пишутся стили для сайта",
  },
  {
    url: 'https://www.javascript.com',
    key: "JavaScript",
    property: "Язык програмирования",
    image: js,
    text: "это язык программирования, который используют для написания frontend - и backend-частей сайтов, а также мобильных приложений. Часто в текстах и обучающих материалах название языка сокращают до JS. Это язык программирования высокого уровня, то есть код на нем понятный и хорошо читается",
  },
  {
    url: 'https://reactjs.org/',
    key: "Библиотека",
    property: "React",
    image: react,
    text: "JavaScript-библиотека для создания пользовательских интерфейсов",
  },
  {
    url: 'https://reactrouter.com/en/main',
    key: "Маршрутизация по сайту",
    property: "React Router DOM",
    image: routerDom,
    text: "React Router DOM — это модуль узла, который предназначен для маршрутизации в веб-приложениях",
  },
  {
    url: 'https://reactjs.org/docs/code-splitting.html',
    key: "Разделение бандла",
    property: "lazy loading React",
    image: lazy,
    text: "Lazy loading (ленивая загрузка) - это стратегия, направленная на определение ресурсов как неблокирующих (не критических) для того, чтобы отложить загрузку этих ресурсов на тот момент, когда они действительно необходимы",
  },
  {
    url: 'https://redux-toolkit.js.org/',
    key: "Контейнер состояния",
    property: "Redux Toolkit",
    image: toolkit,
    text: "это инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях JavaScript с большим количеством сущностей",
  },
  {
    url: 'https://redux-toolkit.js.org/rtk-query/overview',
    key: "Работа с данными Api",
    property: "RTK Query",
    image: query,
    text: "это мощный инструмент извлечения и кэширования данных. Он предназначен для упрощения распространенных случаев загрузки данных в веб-приложение, устраняя необходимость ручной записи логики извлечения и кэширования данных самостоятельно",
  },
  {
    url: 'https://www.npmjs.com/package/redux-persist',
    key: "Работа с Locale Storage",
    property: "Redux Persist",
    image: persist,
    text: "Redux Persist берет ваш объект состояния Redux и сохраняет его в постоянное хранилище. Затем при запуске приложения он извлекает это постоянное состояние и сохраняет его обратно в redux.",
  },
  {
    url: 'https://www.typescriptlang.org/',
    key: "Синтаксис",
    property: "TypeScript",
    image: typescript,
    text: "строго типизированный язык программирования, основанный на JavaScript. Синтаксис TypeScript позволяет разработчику элегантно выразить решение задачи в виде текста в файле .ts или .tsx. Он является эволюцией синтаксиса JavaScript, поэтому любая программа JS синтаксически корректна на TypeScript",
  },
  {
    url: 'https://webpack.js.org/',
    key: "Сборщик",
    property: "Webpack",
    image: webpack,
    text: "это инструмент, позволяющий скомпилировать, например, JavaScript модули в единый JS-файл. Webpack также известен как сборщик модулей",
  },
];

const descriptionBackend: SkillsType[] = [
  {
    url: 'https://nodejs.org/en/',
    key: "Сервер",
    property: "Node.js",
    image: nodeJs,
    text: "кроссплатформенная среда исполнения с открытым исходным кодом, которая позволяет разработчикам создавать всевозможные серверные инструменты и приложения используя язык JavaScript",
  },
  {
    url: 'https://expressjs.com/ru/',
    key: "Фреймворк",
    property: "express",
    image: express,
    text: "это минималистичный и гибкий веб-фреймворк для приложений Node.js, предоставляющий обширный набор функций для мобильных и веб-приложений. API.",
  },
  {
    url: 'https://www.mongodb.com/',
    key: "База данных NoSQL",
    property: "MongoDB",
    image: mongoDb,
    text: "это ориентированная на документы база данных NoSQL с открытым исходным кодом, которая использует для хранения структуру JSON.",
  },
  {
    url: 'https://www.mongoose.com/',
    key: "Работа с базой ORM",
    property: "Mongoose",
    image: mongoose,
    text: "это ORM (Object Relational Mapping - объектно-реляционное отображение или связывание) для MongoDB. Mongoose предоставляет в распоряжение разработчиков простое основанное на схемах решение для моделирования данных приложения, включающее встроенную проверку типов, валидацию, формирование запросов и хуки, отвечающие за реализацию дополнительной логики обработки запросов.",
  },
  {
    url: 'https://cloudinary.com/',
    key: "Работа с изображением",
    property: "Cloudinary",
    image: cloudinary,
    text: "это комплексное решение для управления изображениями для веб-сайтов и мобильных приложений. Приложение поддерживает загрузку изображений, облачное хранилище, манипуляции с изображениями, оптимизацию изображений для Интернета и доставку. Cloudinary предлагает API-интерфейсы и гибкие возможности администратора для интеграции с новыми и существующими веб-приложениями и мобильными приложениями.",
  },
  {
    url: 'https://github.com/node-schedule/node-schedule',
    key: "Работа с планированием",
    property: "Node Schedule",
    image: schedule,
    text: "это гибкая cron-подобная и разнородная библиотека для планирования задач для Node.js. Она позволяет планировать задачи (произвольные функции) на определенную дату и выполнять их циклически. Он использует только таймер в любой момент времени (вместо пересмотра задачи, которая будет выполняться каждую секунду / минуту).",
  },
  {
    url: 'https://www.restapitutorial.com/',
    key: "Технология запросов",
    property: "Rest Api",
    image: restApi,
    text: "это способ взаимодействия сайтов и веб-приложений с сервером. Его также называют RESTful.",
  },
  {
    url: 'https://jwt.io/',
    key: "Работа с токеном",
    property: "JSON Web Token",
    image: jwt,
    text: "для создания токенов доступа, основанный на формате JSON. Как правило, используется для передачи данных для аутентификации в клиент-серверных приложениях. Токены создаются сервером, подписываются секретным ключом и передаются клиенту, который в дальнейшем использует данный токен для подтверждения подлинности аккаунта",
  },
  {
    url: 'https://www.typescriptlang.org/',
    key: "Синтаксис",
    property: "TypeScript",
    image: typeBackend,
    text: "строго типизированный язык программирования, основанный на JavaScript. Синтаксис TypeScript позволяет разработчику элегантно выразить решение задачи в виде текста в файле .ts или .tsx. Он является эволюцией синтаксиса JavaScript, поэтому любая программа JS синтаксически корректна на TypeScript",
  },
  {
    url: 'https://express-validator.github.io/docs/',
    key: "Проверка данных",
    property: "Express Validator",
    image: validator,
    text: "это библиотека, которая обертывает validator.js и представляет его функции как набор промежуточного программного обеспечения.",
  },
  {
    url: 'https://www.postman.com/',
    key: "Тестирования Api",
    property: "Postman",
    image: postman,
    text: "это классическое приложение, способное выполнять запросы API к любому API HTTP. Он обычно используется для тестирования и изучения API-интерфейсов.",
  },
];

export { descriptionFrontend, descriptionBackend };
