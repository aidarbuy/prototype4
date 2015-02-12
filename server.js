var express = require("express");
var doctorModel = require('./models/Doctor');
var doctorsData = require('./doctors-data');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/api/doctors', function(req, res) {
    doctorsData.findDoctors().then(function(collection) {
        console.log('Serving doctors api..');
        res.send(collection);
    });
});

app.get('*', function(req, res) {
    res.render('index');
});

doctorsData.connectDB('mongodb://dbuser:dbpassword@ds041861.mongolab.com:41861/prototype4')
.then(function() {
    console.log("connected to MongoDB succesfully!");
    doctorsData.seedDoctors();
});

app.listen(process.env.PORT, process.env.IP);
