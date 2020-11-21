Created by Bryce Baker

DB_HOST=34.95.36.51
DB_PORT=3306
PORT=5050 || 8080
API URL: https://v2-296218.wm.r.appspot.com/
API endpoints:
GET: ENDPOINT:'/' - reports that the API is running
GET: ENDPOINT:'/api/:id' -GET reports all courses with given ID. Parameters: id. Use '11111111' for demonstration

POST: ENDPOINT:'/api/add' - POSTs course, taking params "id" and "name", writes new entry in course to id and name to name. Parameters: id, name

PUT: ENDPOINT: '/api/mod' - PUTs description, taking params "description" and "id", inserting description into entry with given id. Parameters: description, id

NOTE: id is database's primary key, and must be numerical only