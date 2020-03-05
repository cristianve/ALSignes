var fs = require("fs");
var mysql = require('mysql');

// Create Connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'alsignos',
  port: '55030'
});

connection.connect();


var query = connection.query('create table image(id int, name varchar(50), type int, img longblob)', function(err, result){
    console.log(result);
})

//TYPES
//1 - HOME
//2 - APRENENTATGE
//3- LLICO
//3 - PRACTICA
//4 - DASHBOARD

// HOME
var homePractica = {
    img: fs.readFileSync("/home/isanchez/Escritorio/data/images/homePractica.png"),
    name: 'homePractica',
    id:1,
    type:1,
};

var homeAprendizaje = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/homeAprendizaje.png"),
  name: 'homeAprendizaje',
  id:2,
  type:1,
};

var homeBuscador = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/homeBuscador.png"),
  name: 'homeBuscador',
  id:3,
  type:1,
};




// LLICO
var lliconsColors = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/lliconsColors.png"),
  name: 'lliconsColors',
  id:4,
  type:3,
};

var lliconsCultura = {
img: fs.readFileSync("/home/isanchez/Escritorio/data/images/lliconsCultura.png"),
name: 'lliconsCultura',
id:5,
type:3,
};

var lliconsFormes = {
img: fs.readFileSync("/home/isanchez/Escritorio/data/images/lliconsFormes.png"),
name: 'lliconsFormes',
id:6,
type:3,
};


var lliconsLletres = {
    img: fs.readFileSync("/home/isanchez/Escritorio/data/images/lliconsLletres.png"),
    name: 'lliconsLletres',
    id:7,
    type:3,
};
// Micro image blob
var lliconsNumeros = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/lliconsNumeros.png"),
  name: 'lliconsNumeros',
  id:8,
  type:3,
};

//APRENENTATGE

var aprenentatgeLlico = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/lecciones.jpg"),
  name: 'aprenentatgeLlico',
  id:9,
  type:2,
};

var aprennetatgeJocs = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/juego.png"),
  name: 'aprennetatgeJocs',
  id:10,
  type:2,
};
//PRACTICA

var practicaMicro = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/microfono.png"),
  name: 'practicaMicro',
  id:11,
  type:4,
};

var practicaCamera = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/camera.jpeg"),
  name: 'practicaCamera',
  id:12,
  type:4,
};

//DASHBOARD

var dashboardLlico = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/libro.png"),
  name: 'dashboardLlico',
  id:13,
  type:5,
};

var dashboardProgres = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/objetivo.png"),
  name: 'dashboardProgres',
  id:14,
  type:5,
};


//BACKGROUND

var background = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/background-blue.jpg"),
  name: 'background',
  id:15,
  type:7,
};

var background1 = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/background-blue1.jpg"),
  name: 'background1',
  id:16,
  type:7,
};


//LOGO

var logo = {
  img: fs.readFileSync("/home/isanchez/Escritorio/data/images/logo.png"),
  name: 'logo',
  id:17,
  type:8,
};





// Query to insert camera blob in image table
var query = connection.query('INSERT INTO image SET ?', homePractica, function(err, result){
    console.log(result);
})
var query = connection.query('INSERT INTO image SET ?', homeAprendizaje, function(err, result){
  console.log(result);
})
var query = connection.query('INSERT INTO image SET ?', homeBuscador, function(err, result){
  console.log(result);
})

// Query to insert micro blob in image table
var query = connection.query('INSERT INTO image SET ?', lliconsColors, function(err, result){
    console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', lliconsCultura, function(err, result){
    console.log(result);
})

// Query to insert micro blob in image table
var query = connection.query('INSERT INTO image SET ?', lliconsFormes, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', lliconsLletres, function(err, result){
  console.log(result);
})


// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', lliconsNumeros, function(err, result){
  console.log(result);
})



// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', aprenentatgeLlico, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', aprennetatgeJocs, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', practicaMicro, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', practicaCamera, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', dashboardLlico, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', dashboardProgres, function(err, result){
  console.log(result);
})


// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', background, function(err, result){
  console.log(result);
})

// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', background1, function(err, result){
  console.log(result);
})// Query to insert microfono blob in image table
var query = connection.query('INSERT INTO image SET ?', logo, function(err, result){
  console.log(result);
})