var expect = require('chai').expect;
var mongoose = require("mongoose");
var doctorModel = require("../models/Doctor");
var Promise = require("bluebird");
var doctorsData = require('../doctors-data');

function resetDoctors () {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['doctors'].drop(resolve, reject);
    });
}

// Describe what we expect to happen when we try to get our jobs
describe("get jobs", function() {
    
    var doctors;
    
    before(function(done) {
        doctorsData.connectDB('mongodb://localhossst/prototype4')
            .then(resetDoctors)
            .then(doctorsData.seedDoctors)
            .then(doctorsData.findDoctors)
            .then(function(collection) {
                doctors = collection;
                done();
            })
    });
    
    it("should never be empty since jobs are seeded", function() {
        expect(doctors.length).to.be.at.least(1);
    });
    
    it("should have a doctor with a name", function() {
        expect(doctors[0].name).to.not.be.empty;
    });
    
    it("should have a doctor with a description", function() {
        expect(doctors[0].name).to.not.be.empty;
    });
});
