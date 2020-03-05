const express = require('express');
const router = express();
var mysql = require('mysql');
var base64 = require('base64-arraybuffer');
const multer = require('multer');
var async = require('async');

var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'alsignos',
	port: '3306'//55030
});


//API AUTH LOGGED
router.get('/home', function (req, res) {
	if (req.session.loggedin) {
		res.json({ logged: true });
	} else
		res.json({ logged: false });
});

//API AUTH NAME
router.get('/name', function (req, res) {

	if (req.session.loggedin) {
		res.json({ name: req.session.username });
	} else
		res.json({ name: "empty" });
});


//API LOGOUT - CLOSE SESSION
router.get('/logout', function (request, res) {
	request.session.loggedin = false;
	res.redirect('/');
});



//GET ALL VIDEOS FROM CATEGORY TYPE
router.get('/getAllVideos', function (req, res) {

	connection.query('select * from media where type =' + JSON.stringify(req.query.num), function (err, result) {

		if (result != "") {

			var respuesta = [];

			for (var i = 0; i < result.length; i++) {

				var base64String = base64.encode(result[i].video);
				respuesta[i] = base64String;
			}

			res.json({ data: respuesta });
		}
		else {
			res.json({ data: null });
		}

	})
})


//GET ALL IMAGES FROM CATEGORY TYPE
router.get('/getAllImage', function (req, res) {

	connection.query('select * from media where type =' + JSON.stringify(req.query.num), function (err, result) {
		if (result != "") {

			var respuesta = [];
	
			for (var i = 0; i < result.length; i++) {

				var base64String = base64.encode(result[i].foto);
				respuesta[i] = base64String;
			}

			res.json({ data: respuesta });
		}
		else {
			res.json({ data: null });
		}

	})
})


//GET VIDEO FROM NAME
router.get('/getVideo', function (req, res) {

	connection.query('select * from media where name =' + JSON.stringify(req.query.name), function (err, result) {


		if (result != "") {
			var base64String = base64.encode(result[0].video);
			res.json({ data: base64String });
		}
		else {
			res.json({ data: null });
		}

	})
})

//GET VIDEO FROM NAME
router.get('/getImage', function (req, res) {

	connection.query('select * from image where id =' + JSON.stringify(req.query.num), function (err, result) {


		if (result != "") {
			var base64String = base64.encode(result[0].img);
			res.json({ data: base64String });
		}
		else {
			res.json({ data: null });
		}

	})
})


//GET ALL IMAGES FROM CATEGORY TYPE
router.get('/getAllImagenes', function (req, res) {

	connection.query('select * from image where type =' + JSON.stringify(req.query.num), function (err, result) {
		if (result != "") {

			var respuesta = [];
	
			for (var i = 0; i < result.length; i++) {

				var base64String = base64.encode(result[i].img);
				respuesta[i] = base64String;
			}
			res.json({ data: respuesta });
		}
		else {
			res.json({ data: null });
		}

	})
})



router.get('/getVideoBuscador', function(req, res){
	connection.query('select * from media where name ='+JSON.stringify(req.query.name), function(err, result){

	
		var dataToSend = [];

		if(result.length == 0){
			console.log('1');
			var query = req.query.name;
			var splitQuery = query.split("");
			// var uniqueValues = getUniqueValues(splitQuery);
			var uniqueValues = splitQuery;			
			console.log('splitQuery===============', uniqueValues);
					async.eachSeries(uniqueValues, function(data, callback){
						console.log('2');
						connection.query('select * from media where name ='+JSON.stringify(data), function(error, result){

							if (result != "") {
						if(error){
							console.log('error', error);
							console.log('er');
						}else{
							console.log('3');
							var encodedData = base64.encode(result[0].video);
							dataToSend.push(encodedData);
							callback();
						}
						}
					})
					}, function(err, results){
						console.log('4');
						res.json({data:dataToSend});
					})
					
				}

		else{
			console.log('5');
			var base64String = base64.encode(result[0].video);
			dataToSend.push(base64String);
			res.json({data: dataToSend});
		}
	
	})
	
})

function getUniqueValues(array){
	var uniqueArray = [];

	//Loop through array getUniqueValues
	for(i=0; i<array.length; i++){
		if(uniqueArray.indexOf(array[i]) === -1){
			uniqueArray.push(array[i]);
		}
	}
	return uniqueArray;
}



//ALERT LOGIN (TEMPORAL)
router.get('/alertLogin', function (req, res) {

	res.sendFile(__dirname + "/LoginError.html");

});

//ALERT REGISTER (TEMPORAL)
router.get('/alertRegister', function (req, res) {

	res.sendFile(__dirname + "/RegisterError.html");

});

//ALERT USUARIO (TEMPORAL)
router.get('/alertUsuario', function (req, res) {

	res.sendFile(__dirname + "/UsuarioError.html");

});

//GET VIDEOS CATEGORY FROM NUMERO
router.get('/getVideoCategory', function (req, res) {

	var num = req.query.num;

	connection.query('SELECT name FROM media WHERE type = ? ', [num], function (error, results, fields) {
		if (results != "") {
			console.log(results);
			res.send(results);
		} else {
			res.send('Error devolviendo categorias');
		}
		res.end();
	});

});

//GET ALL CATEGORYES 
router.get('/getCategory', function (req, res) {

	connection.query('SELECT * from category', function (error, results, fields) {
		if (results != "") {
			res.send(results);
		} else {
			res.redirect('error query')
		}
		res.end();
	});

});

//PYTHON - MODULE
router.get('/python', executePython);

function executePython(req, res) {


	var spawn = require("child_process").spawn;

	// Parameters passed in spawn - 
	// 1. type_of_script 
	// 2. list containing Path of the script 
	//    and arguments for the script  

	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	var name = req.query.name;
	var process = spawn('python', [__dirname + '/script.py', name]);
	console.log('process');
	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 

	process.stdout.on('data', function (data) {

		res.send(data.toString());
	})

}


var upload = multer({ storage: storage })
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploaaaaads/')
	},
	filename: function (req, file, cb) {
		//cb(null, file.fieldname + '-' + Date.now())+
		cb(null, file.originalname + ".png")

	}
})



function saveAndDoPythonThings(req, res) {

	upload.single(req.file);
	executePython(req, res);

}
router.post('/upload',
	upload.single("file" /* name attribute of <file> element in your form */),
	(req, res) => {
		console.log("Trying to save image");

		res
			.status(200)
			.contentType("text/plain")
			.end("File uploaded!");
	});



module.exports = router;

