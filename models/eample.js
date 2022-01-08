var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect( mongoDB, {useNewUrlParser : true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on( 'error', console.error.bind(console, 'MongoDB connection error' ));
db.on( 'open', console.log.bind(console, 'success'));
var Schema = mongoose.Schema;

var ExampleSchema = Schema({
    name: String,
    age: Number
})

var ExampleModel = mongoose.model('othermodel', ExampleSchema);

/*
var instance = new ExampleModel({name: 'Aravind', age: 23});
instance.save(function(err){
    if(err) console.log(err.message);
    else console.log('inserted');
});

*/

ExampleModel.find().select().exec(function(err, list){
    console.log(list);
});
