var mongoose = require('mongoose');
var Promise = require('bluebird');
var doctorsArray = require('./doctors-seed');
// var doctorModel = require("./models/Doctor");

var Doctor = mongoose.model('Doctor');

var findDoctors = function(query) {
    return Promise.cast(Doctor.find(query).exec());
};

var createDoctor = Promise.promisify(Doctor.create, Doctor);

// exports

exports.findDoctors = findDoctors;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveDoctor = createDoctor;

exports.seedDoctors = function(){
    return findDoctors({}).then(function(collection) {
        if(collection.length === 0) {
            return Promise.map(doctorsArray.doctors, function(doctor) {
                return createDoctor(doctor);
            });
        }
    });
};
