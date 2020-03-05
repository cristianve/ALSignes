var fs = require("fs");
var mysql = require('mysql');

// Create Connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'alsignos',
  port: '3306'
});

connection.connect();


/*
Este es el archivo para subir los videos a la base de datos, introduce los paths y lo subira a la BDD. 
He puesto dos de ejemplo (countdown y earth) editalos para subir los mp4 que tu quieras. 

*/
// Query to create table
var query = connection.query('create table video(wordID int, name varchar(64), type int, media longblob, description text)', function(err, result){
    console.log(result);

})

// Camera countdown video blob
var A = {
    wordID:1,
    name: 'A',
    type:1,                 
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/A.mp4"),
    description: 'Nom de la primera lletra de l\'alfabet català' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Alberg = {
    wordID:2,
    name: 'Alberg',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Alberg.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Arquitectura = {
    wordID:3,
    name: 'Arquitectura',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Arquitectura.mp4"),
    description: 'Art de projectar i construir edificis i obres semblants' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Art = {
    wordID:4,
    name: 'Art',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Art.mp4"),
    description: 'Habilitat, destresa, a fer certes coses adquirida amb l\'estudi, l\'experiència, l\'abnegació' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Artista = {
    wordID:5,
    name: 'Artista',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Artista.mp4"),
    description: 'Persona que practica un art, especialment una de les belles arts' //Aqui metes el path del filesystem donde esté el video
    
    
};

var B = {
    wordID:6,
    name: 'B',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/B.mp4"),
    description: 'Nom de la segona lletra de l\'alfabet català' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Beix = {
    wordID:7,
    name: 'Beix',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Beix.mp4"),
    description: 'D\'un gris groguenc' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Blanc = {
    wordID:8,
    name: 'Blanc',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Blanc.mp4"),
    description: 'Color blanc' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Blau = {
    wordID:9,
    name: 'Blau',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Blau.mp4"),
    description: 'Color blau, un dels colors que hom distingeix en l\'espectre solar, entre el verd i el violeta' //Aqui metes el path del filesystem donde esté el video
    
    
};

var C = {
    wordID:10,
    name: 'C',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/C.mp4"),
    description: 'Nom de la tercera lletra de l\'alfabet català' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Catorze = {
    wordID:11,
    name: 'Catorze',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Catorze.mp4"),
    description: 'El nombre catorze, 14' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cent = {
    wordID:12,
    name: 'Cent',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cent.mp4"),
    description: 'El nombre cent, 100' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cercle = {
    wordID:13,
    name: 'Cercle',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cercle.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Ciencia = {
    wordID:14,
    name: 'Ciencia',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Ciencia.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinccents = {
    wordID:15,
    name: 'Cinc-cents',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cinc-cents.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinc = {
    wordID:16,
    name: 'Cinc',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cinc.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinema = {
    wordID:17,
    name: 'Cinema',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cinema.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cinquanta = {
    wordID:18,
    name: 'Cinquanta',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cinquanta.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Color = {
    wordID:19,
    name: 'Color',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Color.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cor = {
    wordID:20,
    name: 'Cor',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cor.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Cultura = {
    wordID:21,
    name: 'Cultura',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Cultura.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var D = {
    wordID:22,
    name: 'D',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/D.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Deu = {
    wordID:23,
    name: 'Deu',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Deu.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Diari = {
    wordID:24,
    name: 'Diari',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Diari.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Diccionari = {
    wordID:25,
    name: 'Diccionari',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Diccionari.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Dinou = {
    wordID:26,
    name: 'Dinou',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Dinou.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Disset = {
    wordID:27,
    name: 'Disset',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Disset.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Divuit = {
    wordID:28,
    name: 'Divuit',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Divuit.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Dos = {
    wordID:29,
    name: 'Dos',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Dos.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Dotze = {
    wordID:30,
    name: 'Dotze',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Dotze.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var E = {
    wordID:31,
    name: 'E',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/E.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Escultura = {
    wordID:32,
    name: 'Escultura',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Escultura.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Estrella = {
    wordID:33,
    name: 'Estrella',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Estrella.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Exposicio = {
    wordID:34,
    name: 'Exposicio',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Exposicio.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var F = {
    wordID:35,
    name: 'F',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/F.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Festa = {
    wordID:36,
    name: 'Festa',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Festa.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Forma = {
    wordID:37,
    name: 'Forma',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Forma.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Fotografia = {
    wordID:38,
    name: 'Fotografia',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Fotografia.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var G = {
    wordID:39,
    name: 'G',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/G.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Gramatica = {
    wordID:40,
    name: 'Gramatica',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Gramatica.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Gris = {
    wordID:41,
    name: 'Gris',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Gris.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};

var Groc = {
    wordID:42,
    name: 'Groc',
    type:1,
    media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Groc.mp4"),
    description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
    
    
};
var Guia = {
  wordID:43,
  name: 'Guia',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Guia.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var H = {
  wordID:44,
  name: 'H',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/H.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Historia = {
  wordID:45,
  name: 'Historia',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Historia.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var I = {
  wordID:46,
  name: 'I',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/I.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var J = {
  wordID:47,
  name: 'J',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/J.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var K = {
  wordID:48,
  name: 'K',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/K.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var L = {
  wordID:49,
  name: 'L',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/L.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Lila = {
  wordID:50,
  name: 'Lila',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Lila.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Literatura = {
  wordID:51,
  name: 'Literatura',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Literatura.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var LL = {
  wordID:52,
  name: 'LL',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/LL.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Llibre = {
  wordID:53,
  name: 'Llibre',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Llibre.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Llibreria = {
  wordID:54,
  name: 'Llibreria',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Llibreria.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//WTF?
var LuL = {
  wordID:55,
  name: 'L·L',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/L·L.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var M = {
  wordID:56,
  name: 'M',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/M.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Marro = {
  wordID:57,
  name: 'Marro',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Marro.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Mil = {
  wordID:58,
  name: 'Mil',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Mil.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Milio = {
  wordID:59,
  name: 'Milio',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Milio.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//CUIDADO
var Mitjalluna = {
  wordID:60,
  name: 'Mitja lluna',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Mitja lluna.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Monument = {
  wordID:61,
  name: 'Monument',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Monument.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Museu = {
  wordID:62,
  name: 'Museu',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Museu.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Musica = {
  wordID:63,
  name: 'Musica',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Musica.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var N = {
  wordID:64,
  name: 'N',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/N.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Negre = {
  wordID:65,
  name: 'Negre',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Negre.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Nou = {
  wordID:66,
  name: 'Nou',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Nou.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var NY = {
  wordID:67,
  name: 'NY',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/NY.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var O = {
  wordID:68,
  name: 'O',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/O.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Onze = {
  wordID:69,
  name: 'Onze',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Onze.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Oval = {
  wordID:70,
  name: 'Oval',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Oval.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var P = {
  wordID:71,
  name: 'P',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/P.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Pintura = {
  wordID:72,
  name: 'Pintura',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Pintura.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//TAKE CARE
var P2 = {
  wordID:73,
  name: 'P_2',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/P_2.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Q = {
  wordID:74,
  name: 'Q',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Q.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Quadrat = {
  wordID:75,
  name: 'Quadrat',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Quadrat.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Quatre = {
  wordID:76,
  name: 'Quatre',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Quatre.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Quinze = {
  wordID:77,
  name: 'Quinze',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Quinze.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var R = {
  wordID:78,
  name: 'R',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/R.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Rectangle = {
  wordID:79,
  name: 'Rectangle',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Rectangle.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Rombe = {
  wordID:80,
  name: 'Rombe',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Rombe.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Ros = {
  wordID:81,
  name: 'Ros',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Ros.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var Rosa = {
  wordID:82,
  name: 'Rosa',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Rosa.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


var RR = {
  wordID:83,
  name: 'RR',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/RR.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var S = {
  wordID:84,
  name: 'S',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/S.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
//TAKE CARE
var SET = {
  wordID:85,
  name: 'Set',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Set.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Setze = {
  wordID:86,
  name: 'Setze',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Setze.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Sis = {
  wordID:87,
  name: 'Sis',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Sis.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var SS = {
  wordID:88,
  name: 'SS',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/SS.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var T = {
  wordID:89,
  name: 'T',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/T.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Taronja = {
  wordID:90,
  name: 'Taronja',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Taronja.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Teatre = {
  wordID:91,
  name: 'Teatre',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Teatre.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Tradicio = {
  wordID:92,
  name: 'Tradicio',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Tradicio.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Tres = {
  wordID:93,
  name: 'Tres',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Tres.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};
var Tretze = {
  wordID:94,
  name: 'Tretze',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Tretze.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Triangle = {
  wordID:94,
  name: 'Triangle',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Triangle.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Turisme = {
  wordID:95,
  name: 'Turisme',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Turisme.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var TX = {
  wordID:96,
  name: 'TX',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/TX.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var U = {
  wordID:97,
  name: 'U',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/U.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Un = {
  wordID:98,
  name: 'Un',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Un.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var V = {
  wordID:99,
  name: 'V',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/V.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Verd = {
  wordID:100,
  name: 'Verd',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Verd.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Vermell = {
  wordID:101,
  name: 'Vermell',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Vermell.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Vint = {
  wordID:102,
  name: 'Vint',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Vint.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Vuit = {
  wordID:103,
  name: 'Vuit',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Vuit.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var W = {
  wordID:104,
  name: 'W',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/W.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var X = {
  wordID:105,
  name: 'X',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/X.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Y = {
  wordID:106,
  name: 'Y',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Y.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Z = {
  wordID:107,
  name: 'Z',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Z.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};

var Zero = {
  wordID:108,
  name: 'Zero',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Zero.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};


/*
//TAKE CARE
var Euro = {
  wordID:109,
  name: 'Euro',
  type:1,
  media: fs.readFileSync("C:/Users/cvegasan/Desktop/SERN/public/videos/Euro.mp4"),
  description: 'Edifici, establiment, on una persona troba allotjament' //Aqui metes el path del filesystem donde esté el video
  
  
};*/











// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', A, function(err, result){
    console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Alberg, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Arquitectura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Art, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Artista, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', B, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Beix, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Blanc, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Blau, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', C, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Catorze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cent, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cercle, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Ciencia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cinccents, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cinc, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cinema, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cinquanta, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Color, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cor, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Cultura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', D, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Deu, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Diari, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Diccionari, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Dinou, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Disset, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Divuit, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Dos, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Dotze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', E, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Escultura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Estrella, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Exposicio, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', F, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Festa, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Forma, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Fotografia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', G, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Gramatica, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Gris, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Groc, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Guia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', H, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Historia, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', I, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', J, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', K, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', L, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Lila, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Llibre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', LL, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Llibre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Llibreria, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', LuL, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', M, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Marro, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Mil, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Milio, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Mitjalluna, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Monument, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Museu, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Musica, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', N, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Negre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Nou, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', NY, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', O, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Onze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Oval, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', P, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Pintura, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', P2, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Q, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Quadrat, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Quatre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Quinze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', R, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Rectangle, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Rombe, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Ros, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Rosa, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', RR, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', S, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', SET, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Setze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Sis, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', SS, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', T, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Taronja, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Teatre, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Tradicio, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Tres, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Tretze, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Triangle, function(err, result){
  console.log(result);
})
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Turisme, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', TX, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', U, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Un, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', V, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Verd, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Vermell, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Vint, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Vuit, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', W, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', X, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Y, function(err, result){
  console.log(result);
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Z, function(err, result){
  console.log(result);
  
})

// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Zero, function(err, result){
  console.log(result);

})

/*
// Query to insert countdown blob in video table
var query = connection.query('INSERT INTO video SET ?', Euro, function(err, result){
  console.log(result);
})*/

