var express = require('express')
var app = express()
var request = require('request');
var mysql = require('mysql');
var path = require('path');
var bodyParser=require("body-parser")

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dl0268',
  database : 'kisafintech'
});

connection.connect();
app.use(bodyParser.json());//app.use가 미들웨어를 설치해주는 것
app.use(bodyParser.urlencoded({extended : false}));

console.log(__dirname);
app.use(express.static(path.join(__dirname, 'views')))
//app.use(express.json);
//app.use(express.urlencoded({extended : false}));
app.set('views', path.join(__dirname, 'views'));//__dirname은 views라는 나의 폴더아래에 있다라고 알려주는 것
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	connection.query('SELECT * FROM USER', function (error, results, fields) {
		if (error) throw error;
		res.send(results);
	  });
})


app.get('/test', function(req, res){
	console.log(req.header);
	res.send('Hello2');
	console.log('zzzz');
})

app.get('/ejs', function(req, res){
	res.render('index');
	console.log('ejs 바꿔봤습니다');
})
app.get('/request',function(req, res){
	request('https://www.naver.com', function (error, response, body) {
		res.send(body);
	});
})

app.post('/user', function(req,res){

})

app.get('/user', function(req, res){
	res.send('<input type="text" name="t1"></input><br>'
				+ '<button>submit</button>');
})

app.get('/join', function(req, res){
	res.render('join');
})

app.post('/userJoin', function(req, res){
	console.log("여기 들어왔습니다");
	var name = req.body.nameajax;
	var weight = req.body.weightajax;
	var age = req.body.ageajax;

	connection.query("INSERT INTO user(id, name, user_id, user_name, user_address) VALUES(?,?,?,'123','koreaa8@va')", [name,weight,age],
	function(err,result){
		if(err){
			console.error(err);
			throw err;
		}else{
			res.json("DATA INPUT");
		}
	} 
	);
	console.log(name);
	console.log(weight);
	console.log(age);
	
});
app.listen(3001)