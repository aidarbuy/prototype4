var mongoose = require("mongoose");

var doctorSchema = mongoose.Schema({
    name: String,
    description: String
});

var Doctor = mongoose.model('Doctor', doctorSchema);

exports.seedDoctors = function(){
    Doctor.find({}).exec(function(error, collection) {
        if(collection.length === 0) {
            Doctor.create({name:'Doctor 1', description:'You will be making bagels'});
            Doctor.create({name:'Doctor 2', description:'You will be putting food in peoples'});
            Doctor.create({name:'Doctor 3', description:'You will be billionaire!'});
            Doctor.create({name:'Doctor 4', description:'You will be making bagels'});
        }
    });
};