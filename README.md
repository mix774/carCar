Активные таски

Добавить кнопку в админе  "Добавить объявление" https://mui.com/material-ui/react-button/, 
добавить таблицу https://mui.com/material-ui/react-table/



посмотреть зачем нужен check

Не возвращает поля при populate

Ошибка Cannot set headers after they are sent to the client = под вопросом

Как вывести значение поля через ссылку 

Эндпоинт принимает айди поста и картинки, будет удалять картинку по айди картинки из коллекции картинок и удаление ссылки на картинку из поля images соответствующего поста

Посмотреть альтернативы фигме 

Посмотреть компоненты react

Добавить новые эндпоинты userController: 
//пока не нада-добавить пост в фаворитес params
//пока не нада-удалить пост из фаворатиес params

flexbox и ccs-grid, react

fetch api 

Сделать макет страницы где отображаются посты

Как импортировать данные в таблицу (mongo) из файла

И выгрузить в гит 
________________________________________________________________________
Итоги тестов
postController
update
Тормозит приложение, если не указан айди (решено добавлением return в проверяющие if)
Выводит ошибку, если указать что то в айди не похожее на стандартный айди
delete 
Краш если не указать в пути айди
________________________________________________________________________
Вопросы
Новые:

Решенные:
Стоит ли удалять бренды по названию, а не по айди => решено ничего не делать 

Как лучше err.message или просто error => решено использовать err.message

Нужно ли менять модели данных => изменено

Скорректировать модель данных => скорректировано

Возвращает null если указать пустые кавычки => не указывать в объявлении

Нужно ли заключать тип намбер в кавычки => без разницы
________________________________________________________________________
Решенные таски:

Добавить контроллеры и руты для карМодел => +

Как сделать референсе => +

Переименовать кар в ad и добавить поле карМодел => +

Поменять с сенд на джисон => +

Заполнить базу брендами и моделями => +

Тесты эндпоинтов => + (добавлены return в проверяющих if, дополнительные проверки)

Создать подпапки в постман => +

Добавить новые эндпоинты postController: 
-активировать объявление byPostId params => +
-деактивировать объявление по постайди params => +
-увеличить количество просмотров поста по постайди на +1 params => +

Добавить новые эндпоинты userController: 
-получить все посты в фаворатиес params => +

Добавить поле фаворитес в юзер типа ссылка на пост (массив айди постов) => +

Пройтись по статус кодам => +, добавлены новые статусы и присвоены соответствующим обработчикам ошибок

Сделать авторизацию и логин => +

Убрать поле бренд из поста (почистить контроллери в постмэн) => +

Как добавить эндпоинт по загрузке картинки и сохранять ее в базу => +, реализовано

Как в монгодб реализована связь мэни то мэни => +, реализовано

Сделать папку с картинками => +

Сделать описание поста => +

Сделать чистку постмэн = +, структура запросов соответствует структуре документа бд
________________________________________________________________________
in future

Реализовать резерв на просмотр

Чат

Подписка на обновления

Список технологий 

client: react, совместно с material ui библиотекой