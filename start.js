// start.js - запуск сервера
// Велігорський Б. О., КІ-191

const app = require('./server.js');

app.listen(3000, () => {
    console.log('Server start at localhost:3000');
});