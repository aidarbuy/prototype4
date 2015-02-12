var express = require("express");
var mongoose = require('mongoose');
var doctorModel = require('./models/Doctor');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/api/doctors', function(req, res) {
    mongoose.model('Doctor').find({}).exec(function(error, collection) {
        console.log('serving doctors api');
        res.send(collection);
    });
});

app.get('*', function(req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/prototype4');
mongoose.connect('mongodb://dbuser:dbpassword@ds041861.mongolab.com:41861/prototype4');

var con = mongoose.connection;
con.once('open', function() {
    console.log("connected to MongoDB succesfully!");
    doctorModel.seedDoctors();
});

app.listen(process.env.PORT, process.env.IP);
