/**
 * Created by rohaan on 4/25/15.
 */

var Categories = require('../server/controllers/Categories');
var Products = require('../server/controllers/Products');
var Users = require('../server/controllers/Users');

module.exports = function(express){
	var app = express();

	// Categories
	app.get('/categories',Categories.getCate);
	app.post('/add_cate',Categories.addCate);
	app.post('/remove_cate',Categories.removeCate);
	app.post('/update_cate',Categories.updateCate);
	// Products
	app.get('/product/:id',Products.getProd);
	app.post('/add_prod',Products.addProd);
	app.post('/remove_prod',Products.removeProd);
	app.post('/update_prod',Products.updateProd);
	// Users
	app.post('/sign_in',Users.signIn);
	app.post('/sign_up',Users.signUp);
	app.post('/add_user',Users.addUser);
	app.post('/remove_user',Users.removeUser);
	app.post('/update_user',Users.updateUser);
}
