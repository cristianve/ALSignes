const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var fs = require('fs');
const bodyParser = require('body-parser')
var mysql = require('mysql');
var session = require('express-session');
const https = require('https');
var bcrypt = require('bcryptjs');
const saltRounds = 10;


//HTTPS KEYS
var options = {
	key: fs.readFileSync('./localhost.key'),
	cert: fs.readFileSync('./localhost.cert'),
	requestCert: false,
	rejectUnauthorized: false
};

//DEFAULT PORT
var port = process.env.PORT || 55000;
var server = https.createServer(options, app);


server.listen(port, function () {
	console.log('Express server listening on port ' + server.address().port);
});


//HTTPS
app.use(function (req, res, next) {
	if (req.secure) {
		next();
	} else {
		res.redirect('https://' + req.headers.host + req.url);
	}
});

//SESSION
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	//cookie: {secure:true} //TRUE IF HTTPS
}));



////// Settings
app.set('port', process.env.PORT || 55000);


////// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////// Routes
app.use('/api', require('./routes/task.routes'));


////// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('public'))
app.use('/videos', express.static('public/videos'))


//// CONECT DB
var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'alsignos',
	port: '3306'
});

//LOGIN REGISTER
app.get('/login', function (request, response) {

	var email = request.query.email;
	var password = request.query.password;

	if (email && password) {
		connection.query('SELECT password,username FROM users WHERE email = ?', [email], function (error, results, fields) {
			if (results != "") {
				console.log(results);
				var resultArr = JSON.parse(JSON.stringify(results));
				var hashedpsswd = resultArr[0].password;
				bcrypt.compare(password, hashedpsswd, function (err, result) {

					if (result == true) {
						request.session.loggedin = true;
						request.session.username = resultArr[0].username;
						response.redirect('/');

					} else {
						response.redirect('/api/alertLogin'); //Incorrect Username and Password
					}
					response.end();
				});

			} else {

				response.redirect('/api/alertUsuario'); //Incorrect Username
				response.end();
			}
		});
		//connection.end();
	} else {
		response.redirect('/api/alertLogin');
		response.end();
	}
});

app.post('/register', function (request, response) {

	var name = request.body.name;
	var email = request.body.email;
	var experiencia = request.body.experiencia;

	bcrypt.hash(request.body.password, saltRounds, function (err, hash) {

		var password = hash;
		connection.query('INSERT INTO users (userID,username,password,userRank,email,prevExp) VALUES (null, ? , ? , 0, ?, 1)', [name, password, email, experiencia], function (error, results, fields) {

			if (!error) {
				request.session.loggedin = true;
				request.session.username = name;
				response.redirect('/');

			} else {
				response.redirect('/alertRegister') //Incorrect Username and/or Password!
			}
			response.end();
		});

	});
});


//////PYTHON MODULE

const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/python/fotos')
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now())+
    cb(null, file.originalname + ".png")

  }
})

app.get('/python',executePython3);

const { exec } = require('child_process');

function runPythonScript(req,res){
	var name = req.query.name;
	console.log(name);
    return new Promise((resolve, reject) => {
        exec('python ' +__dirname + '/python/recognise.py '+ name, (err, stdout, stderr) => {
            if(err) reject(err);

            resolve(stdout);
        });
    });
}

function executePython3(req,res){
	runPythonScript(req,res).then(result => res.send(result))
}

var ps = require('python-shell');

function executePython2(req, res) { 
      
    
	var spawn = require("child_process").spawn; 
		
	
	var name = req.query.name;
	
	ps.PythonShell.run(__dirname +'/recognise.py',name,function (error,data){
		console.log(data);
		res.send(data); 

	});

}

function executePython(req, res) { 
      
    
	var spawn = require("child_process").spawn; 
		
	// Parameters passed in spawn - 
	// 1. type_of_script 
	// 2. list containing Path of the script 
	//    and arguments for the script  
		
	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	var name = req.query.name;
	var process = spawn('python',[__dirname +'/python/recognise.py',name]); 
	console.log('process');
	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
 
	process.stdout.on('data', function(data) { 
			console.log(data.toString());
			res.send(data.toString()); 
	} );

}

var upload = multer({ storage: storage });

function saveAndDoPythonThings(req,res){

	upload.single(req.file);
	executePython(req,res);


}

app.post('/upload', 
upload.single("file" /* name attribute of <file> element in your form */),
(req, res) => {
  console.log("Trying to save image");
	//req.file.filename = "hola.png";
	//console.log(req);
  //console.log(req.file.filename);
  
  
  /*const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "./uploads/");
  
  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }*/
  res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
});

//RUTAS NO ESPECIFICADAS
app.get('*', function (req, res) {
	res.redirect('/');
});