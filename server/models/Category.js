/**
 * Created by rohaan on 4/26/15.
 */

var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
	'name': String,
	'sub_categories' : [
		{
			'name': String
			/*'products': [
				{
					'product': Schema.ObjectID, ref: 'Product'
				}
			]*/
		}
	]
});

mongoose.model('Category',CategorySchema);