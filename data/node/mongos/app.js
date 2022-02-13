const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoClient = require('mongodb').MongoClient
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongoose configuration
const mongoose = require('mongoose');
mongoose.connect('mongodb://52.78.185.196:27017/consert');

var db;
var databaseUrl = 'mongodb://52.78.185.196:27017/'

var mongo = require('./routes/mongo.js');
app.use('/', mongo);

app.get('/main', (req, res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0});
		}else{
			db = database.db('consert')
			db.collection('consert_fes').find({}).toArray(function(err, result){
				if(err) throw err;
				console.log('result : ');
				console.log(result);
				res.render('main.ejs', {data:result});
			})
		}
	})
});

app.listen(app.get('port'), () =>{
        console.log('서버 실행 중')
});
