const express = require('express'); // llamo al modulo express
const app = express(); // lo ejecuto, esto me devuelve un objeto que me permitira crear mi sv
const path = require('path'); // verifica en que SO estoy laburando


//settings
app.set('port', 3000);
app.set('views', path.join(__dirname,'views')); // configuro las views
app.set('view engine', 'ejs'); // motor de plantillas

//middlewares (funciones que se ejecutan antes de que las rutas procesen algo)


//routes
app.use(require('./routes/index')); 

//static files (para mejorar el front)
app.use(express.static(path.join(__dirname,'public')));


//listening the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port')); 
});

