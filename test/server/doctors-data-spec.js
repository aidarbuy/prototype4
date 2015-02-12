var expect = require('chai').expect;
var mongoose = require("mongoose");
var doctorModel = require("../../models/Doctor");
var Promise = require("bluebird");
var doctorsData = require('../../doctors-data');

function resetDoctors () {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['doctors'].drop(resolve, reject);
    });
}

// Describe what we expect to happen when we try to get our jobs
describe("db get jobs", function() {
    
    var doctors;
    
    before(function(done) {
        doctorsData.connectDB('mongodb://localhost/prototype4')
            .then(resetDoctors)
            .then(doctorsData.seedDoctors)
            .then(doctorsData.findDoctors)
            .then(function(collection) {
                doctors = collection;
                done();
            })
    });
    
    after(function() {
        mongoose.connection.close();
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

describe("db save jobs", function() {
    
    var doctor = {name:"Save Jobs", description:"DB Save Jobs Description"};
    var doctors;
    
    function saveTestDoctor() {
        return doctorsData.saveDoctor(doctor);
    }
    
    before(function(done) {
        doctorsData.connectDB('mongodb://localhost/prototype4')
            .then(resetDoctors)
            .then(function () { return doctorsData.saveDoctor(doctor) })
            .then(doctorsData.findDoctors)
            .then(function setDoctors(collection) {
                doctors = collection;
                done();
            });
    });
   
    after(function() {
        mongoose.connection.close();
    });
    
    it("should have one doctor after saving one doctor", function() {
        expect(doctors).to.have.length(1);
    });
    
    it("should have a doctor with a name", function() {
        expect(doctors[0].name).to.not.be.empty;
    });
    
    it("should have a doctor with a description", function() {
        expect(doctors[0].name).to.not.be.empty;
    });
});