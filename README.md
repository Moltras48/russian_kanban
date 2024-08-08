# russian_kanban

За основу был взят проект "https://github.com/adrian-kalinin/fastapi-react-kanban/tree/main?tab=readme-ov-file". Переведен на русский язык и немного видоизменён инферфейс.

Бекенд написан на фреймворке FastAPI.

Фронтенд написан на фреймворке React.

База данных Postgresql.

Вебсервер Nginx.

В каждой папке есть свой DockerFile для удобства настройки

Для запуска клонируйте создайте файл .env и задайте настройки для базы данных.

Пример:

POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=Password1
POSTGRES_HOST=database
POSTGRES_PORT=5432
POSTGRES_DBNAME=postgres
JWT_SECRET=myjwtsecret

Запускайте docker-compose up