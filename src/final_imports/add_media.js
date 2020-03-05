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


// Query to create table
var query = connection.query('create table media(wordID int, name varchar(64), type int, video longblob,foto longblob, description text)', function(err, result){
    console.log(result);

})

// Camera countdown video blob
var A = {
    wordID:1,
    name: 'A',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/A.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/A.JPG"),
    description: 'Nom de la primera lletra de l\'alfabet català' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Alberg = {
    wordID:2,
    name: 'Alberg',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Alberg.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/alberg.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Arquitectura = {
    wordID:3,
    name: 'Arquitectura',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Arquitectura.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/arquitectura.png"),
    description: 'Art de projectar i construir edificis i obres semblants' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Art = {
    wordID:4,
    name: 'Art',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Art.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/art.png"),
    description: 'Habilitat, destresa, a fer certes coses adquirida amb l\'estudi, l\'experiència, l\'abnegació' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Artista = {
    wordID:5,
    name: 'Artista',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Artista.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/artista.png"),
    description: 'Persona que practica un art, especialment una de les belles arts' //Aqui metes el path del filesystem donde esté el video
    
    
};

var B = {
    wordID:6,
    name: 'B',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/B.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/B.JPG"),
    description: 'Nom de la segona lletra de l\'alfabet català' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Beix = {
    wordID:7,
    name: 'Beix',
    type:1,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Beix.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/beix.jpg"),
    description: 'D\'un gris groguenc' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Blanc = {
    wordID:8,
    name: 'Blanc',
    type:1,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Blanc.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/blanc.png"),
    description: 'Color blanc' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Blau = {
    wordID:9,
    name: 'Blau',
    type:1,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Blau.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/blau.jpg"),
    description: 'Color blau, un dels colors que hom distingeix en l\'espectre solar, entre el verd i el violeta' //Aqui metes el path del filesystem donde esté el video
    
    
};

var C = {
    wordID:10,
    name: 'C',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/C.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/C.JPG"),
    description: 'Nom de la tercera lletra de l\'alfabet català' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Catorze = {
    wordID:11,
    name: 'Catorze',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Catorze.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Catorze.png"),
    description: 'El nombre catorze, 14' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cent = {
    wordID:12,
    name: 'Cent',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cent.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Cent.png"),
    description: 'El nombre cent, 100' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cercle = {
    wordID:13,
    name: 'Cercle',
    type:3,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cercle.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/cercle.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Ciencia = {
    wordID:14,
    name: 'Ciencia',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Ciencia.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/ciencia.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinccents = {
    wordID:15,
    name: 'Cinc-cents',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cinc-cents.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Cinc-cents.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinc = {
    wordID:16,
    name: 'Cinc',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cinc.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Cinc.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinema = {
    wordID:17,
    name: 'Cinema',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cinema.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/cinema.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinquanta = {
    wordID:18,
    name: 'Cinquanta',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cinquanta.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Cinquanta.jpg"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Color = {
    wordID:19,
    name: 'Color',
    type:1,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Color.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/color.jpg"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cor = {
    wordID:20,
    name: 'Cor',
    type:3,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cor.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/cor.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cultura = {
    wordID:21,
    name: 'Cultura',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Cultura.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/cultura.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var D = {
    wordID:22,
    name: 'D',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/D.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/D.JPG"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Deu = {
    wordID:23,
    name: 'Deu',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Deu.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Deu.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Diari = {
    wordID:24,
    name: 'Diari',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Diari.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/diari.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Diccionari = {
    wordID:25,
    name: 'Diccionari',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Diccionari.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/diccionari.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Dinou = {
    wordID:26,
    name: 'Dinou',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Dinou.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Dinou.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Disset = {
    wordID:27,
    name: 'Disset',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Disset.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Disset.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Divuit = {
    wordID:28,
    name: 'Divuit',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Divuit.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Divuit.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Dos = {
    wordID:29,
    name: 'Dos',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Dos.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Dos.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Dotze = {
    wordID:30,
    name: 'Dotze',
    type:5,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Dotze.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Dotze.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var E = {
    wordID:31,
    name: 'E',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/E.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/E.JPG"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Escultura = {
    wordID:32,
    name: 'Escultura',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Escultura.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/escultura.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Estrella = {
    wordID:33,
    name: 'Estrella',
    type:3,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Estrella.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/estrella.jpg"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Exposicio = {
    wordID:34,
    name: 'Exposicio',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Exposicio.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Exposicio.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var F = {
    wordID:35,
    name: 'F',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/F.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/F.JPG"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Festa = {
    wordID:36,
    name: 'Festa',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Festa.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/festa.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Forma = {
    wordID:37,
    name: 'Forma',
    type:3,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Forma.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/forma.jpg"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Fotografia = {
    wordID:38,
    name: 'Fotografia',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Fotografia.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Fotografia.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var G = {
    wordID:39,
    name: 'G',
    type:4,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/G.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/G.JPG"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Gramatica = {
    wordID:40,
    name: 'Gramatica',
    type:2,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Gramatica.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Gramatica.png"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Gris = {
    wordID:41,
    name: 'Gris',
    type:1,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Gris.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/gris.jpg"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Groc = {
    wordID:42,
    name: 'Groc',
    type:1,
    video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Groc.mp4"),
    foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/groc.jpg"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};
var Guia = {
  wordID:43,
  name: 'Guia',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Guia.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/guia.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var H = {
  wordID:44,
  name: 'H',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/H.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/H.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Historia = {
  wordID:45,
  name: 'Historia',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Historia.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/historia.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var I = {
  wordID:46,
  name: 'I',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/I.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/I.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var J = {
  wordID:47,
  name: 'J',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/J.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/J.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var K = {
  wordID:48,
  name: 'K',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/K.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/K.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var L = {
  wordID:49,
  name: 'L',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/L.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/L.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Lila = {
  wordID:50,
  name: 'Lila',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Lila.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/lila.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Literatura = {
  wordID:51,
  name: 'Literatura',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Literatura.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/literatura.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var LL = {
  wordID:52,
  name: 'LL',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/LL.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/LL.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Llibre = {
  wordID:53,
  name: 'Llibre',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Llibre.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/llibre.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Llibreria = {
  wordID:54,
  name: 'Llibreria',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Llibreria.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/llibreria.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//WTF?
var LuL = {
  wordID:55,
  name: 'L·L',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/L·L.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/LL.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var M = {
  wordID:56,
  name: 'M',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/M.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/M.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Marro = {
  wordID:57,
  name: 'Marro',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Marro.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/marro.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Mil = {
  wordID:58,
  name: 'Mil',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Mil.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Mil.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Milio = {
  wordID:59,
  name: 'Milio',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Milio.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Milio.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//CUIDADO
var Mitjalluna = {
  wordID:60,
  name: 'Mitja lluna',
  type:3,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Mitja lluna.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/mitjalluna.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Monument = {
  wordID:61,
  name: 'Monument',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Monument.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Monument.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Museu = {
  wordID:62,
  name: 'Museu',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Museu.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Museu.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Musica = {
  wordID:63,
  name: 'Musica',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Musica.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Musica.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var N = {
  wordID:64,
  name: 'N',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/N.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/N.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Negre = {
  wordID:65,
  name: 'Negre',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Negre.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/negre.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Nou = {
  wordID:66,
  name: 'Nou',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Nou.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Nou.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var NY = {
  wordID:67,
  name: 'NY',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/NY.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/NY.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var O = {
  wordID:68,
  name: 'O',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/O.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/O.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Onze = {
  wordID:69,
  name: 'Onze',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Onze.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Onze.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Oval = {
  wordID:70,
  name: 'Oval',
  type:3,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Oval.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/oval.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var P = {
  wordID:71,
  name: 'P',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/P.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/P.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Pintura = {
  wordID:72,
  name: 'Pintura',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Pintura.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Pintura.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//TAKE CARE
var P2 = {
  wordID:73,
  name: 'P_2',
  type:99,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/P_2.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Q = {
  wordID:74,
  name: 'Q',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Q.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/Q.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Quadrat = {
  wordID:75,
  name: 'Quadrat',
  type:3,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Quadrat.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/quadrat.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Quatre = {
  wordID:76,
  name: 'Quatre',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Quatre.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Quatre.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Quinze = {
  wordID:77,
  name: 'Quinze',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Quinze.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Quinze.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var R = {
  wordID:78,
  name: 'R',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/R.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/R.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Rectangle = {
  wordID:79,
  name: 'Rectangle',
  type:3,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Rectangle.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/rectangle.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Rombe = {
  wordID:80,
  name: 'Rombe',
  type:3,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Rombe.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/rombe.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Ros = {
  wordID:81,
  name: 'Ros',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Ros.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/ros.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Rosa = {
  wordID:82,
  name: 'Rosa',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Rosa.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/rosa.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var RR = {
  wordID:83,
  name: 'RR',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/RR.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/RR.jpg"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var S = {
  wordID:84,
  name: 'S',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/S.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/S.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//TAKE CARE
var SET = {
  wordID:85,
  name: 'Set',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Set.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Set.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Setze = {
  wordID:86,
  name: 'Setze',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Setze.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Setze.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Sis = {
  wordID:87,
  name: 'Sis',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Sis.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Sis.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var SS = {
  wordID:88,
  name: 'SS',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/SS.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/S.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var T = {
  wordID:89,
  name: 'T',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/T.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/T.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Taronja = {
  wordID:90,
  name: 'Taronja',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Taronja.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/taronja.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Teatre = {
  wordID:91,
  name: 'Teatre',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Teatre.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Teatre.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Tradicio = {
  wordID:92,
  name: 'Tradicio',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Tradicio.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Tradicio.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Tres = {
  wordID:93,
  name: 'Tres',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Tres.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Tres.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Tretze = {
  wordID:94,
  name: 'Tretze',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Tretze.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Tretze.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Triangle = {
  wordID:94,
  name: 'Triangle',
  type:3,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Triangle.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Formes/triangle.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Turisme = {
  wordID:95,
  name: 'Turisme',
  type:2,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Turisme.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Cultura/Turisme.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var TX = {
  wordID:96,
  name: 'TX',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/TX.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/T.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var U = {
  wordID:97,
  name: 'U',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/U.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/U.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Un = {
  wordID:98,
  name: 'Un',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Un.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Un.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var V = {
  wordID:99,
  name: 'V',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/V.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/V.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Verd = {
  wordID:100,
  name: 'Verd',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Verd.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/verd.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Vermell = {
  wordID:101,
  name: 'Vermell',
  type:1,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Vermell.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Colors/vermell.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Vint = {
  wordID:102,
  name: 'Vint',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Vint.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Vint.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Vuit = {
  wordID:103,
  name: 'Vuit',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Vuit.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Vuit.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var W = {
  wordID:104,
  name: 'W',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/W.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/W.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var X = {
  wordID:105,
  name: 'X',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/X.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/X.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Y = {
  wordID:106,
  name: 'Y',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Y.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/Y.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Z = {
  wordID:107,
  name: 'Z',
  type:4,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Z.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/alfabet/Z.JPG"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Zero = {
  wordID:108,
  name: 'Zero',
  type:5,
  video: fs.readFileSync("/home/isanchez/Escritorio/data/videos/Zero.mp4"),
  foto: fs.readFileSync("/home/isanchez/Escritorio/data/images/Numeros/Zero.png"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};







// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', A, function(err, result){
    console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Alberg, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Arquitectura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Art, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Artista, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', B, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Beix, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Blanc, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Blau, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', C, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Catorze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cent, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cercle, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Ciencia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cinccents, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cinc, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cinema, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cinquanta, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Color, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cor, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Cultura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', D, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Deu, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Diari, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Diccionari, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Dinou, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Disset, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Divuit, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Dos, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Dotze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', E, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Escultura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Estrella, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Exposicio, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', F, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Festa, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Forma, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Fotografia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', G, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Gramatica, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Gris, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Groc, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Guia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', H, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Historia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', I, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', J, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', K, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', L, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Lila, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Literatura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Llibre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', LL, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Llibre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Llibreria, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', LuL, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', M, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Marro, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Mil, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Milio, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Mitjalluna, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Monument, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Museu, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Musica, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', N, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Negre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Nou, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', NY, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', O, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Onze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Oval, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', P, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Pintura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', P2, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Q, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Quadrat, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Quatre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Quinze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', R, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Rectangle, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Rombe, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Ros, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Rosa, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', RR, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', S, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', SET, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Setze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Sis, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', SS, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', T, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Taronja, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Teatre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Tradicio, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Tres, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Tretze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Triangle, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Turisme, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', TX, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', U, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Un, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', V, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Verd, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Vermell, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Vint, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Vuit, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', W, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', X, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Y, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Z, function(err, result){
  console.log(result);
  
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Zero, function(err, result){
  console.log(result);

})

/*
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO media SET ?', Euro, function(err, result){
  console.log(result);
})*/
