/**
 * Created by rohaan on 4/26/15.
 */

var fs = require('fs');
var env = {};
var envFile = __dirname+'/env.json';

// check if file exists in synchronous behavior
if(fs.existsSync(envFile)){
	// read file in synchronous behavior
	env = JSON.parse(fs.readFileSync(envFile,'utf-8'));
}

module.exports = {
	db: env[process.env.NODE_ENV || 'development']['db']
}

