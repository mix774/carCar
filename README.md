Активные таски

Посмотреть альтернативы фигме

Добавить поле фаворитес в юзер типа ссылка на пост (массив айди постов) => +

добавить новые эндпоинты userController: 
//пока не нада-добавить пост в фаворитес params
//пока не нада-удалить пост из фаворатиес params


как в монгодб реализована связь мэни то мэни

Как добавить эндпоинт по загрузке картинки и сохранять ее в базу

flexbox и ccs-grid, react

fetch api 

сделать папку с картинками

сделать описание поста

Сделать макет страницы где отображаются посты

Как импортировать данные в таблицу (mongo) из файла

в брэндконтроллер обработать ошибку на строке 39-41

И выгрузить в гит 
________________________________________________________________________
Итоги тестов
postController
update
тормозит приложение, если не указан айди (решено добавлением return в проверяющие if)
выводит ошибку, если указать что то в айди не похожее на стандартный айди
delete 
краш если не указать в пути айди
________________________________________________________________________
Вопросы
Новые:

Решенные:
стоит ли удалять бренды по названию а не по айди => решено ничего не делать 
как лучше err.message или просто error => решено использовать err.message
Нужно ли менять модели данных => изменено
Скорректировать модель данных => скорректировано
________________________________________________________________________
Решенные таски:

Добавить контроллеры и руты для карМодел => +

Как сделать референсе => +

Переименовать кар в ad и добавить поле карМодел => +

Поменять с сенд на джисон => +

Заполнить базу брендами и моделями => +

Тесты эндпоинтов => + (добавлены return в проверяющих if, дополнительные проверки)

создать подпапки в постман => +

добавить новые эндпоинты postController: 
-активировать объявление byPostId params => +
-деактивировать объявление по постайди params => +
-увеличить количество просмотров поста по постайди на +1 params => +

добавить новые эндпоинты userController: 
-получить все посты в фаворатиес params => +
________________________________________________________________________
in future
Реализовать резерв на просмотр
Чат
Подписка на обновления