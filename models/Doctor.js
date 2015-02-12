var mongoose = require("mongoose");

var doctorSchema = mongoose.Schema({
    name: String,
    description: String
});

mongoose.model('Doctor', doctorSchema);
