/**
 * Created by rohaan on 4/26/15.
 */

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(express){
	var app = express();
	// view engine setup
	app.set('views', path.join(__dirname, '../server/views'));
	app.set('view engine', 'jade');

	// uncomment after placing your favicon in /public
	// app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handlers

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		});
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});

	// connecting to mongodb
	mongoose.connect(config.db.url,config.db.options,function(){
		console.log('mongodb connected successfully');
	});

	// on error
	mongoose.connection.on('error',function(err){
		console.log(err);
	});

	// on disconnect
	mongoose.connection.on('disconnected',function(){
		console.log('mongodb disconnected');
	});
}