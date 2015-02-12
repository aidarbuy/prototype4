var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');
var Promise = require('bluebird');

var dataSavedDoctor;

var db = {
    findDoctors: function() {
        return new Promise(function(resolve, reject) {
            resolve(['Hi']);
        });
    },
    saveDoctor: function(doctor) {
        dataSavedDoctor = doctor;
    }
};

var doctorsService = require('../../doctors-service')(db, app);

describe("get jobs", function() {
    it("get should give me a json list of doctors", function(done) {
        request(app).get('/api/doctors')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            expect(res.body).to.be.a('Array');
            done();
        });
    });
});

describe("save jobs", function() {
    it("should validate that name is greater than 4 characters");
    it("should validate that name is less than 40 characters");
    it("should validate that description is greater than 4 characters");
    it("should validate that description is less than 250 characters");
    
    var newDoctor = {name:'Doctor 1', description:'You will be making bagels'};
    
    it("should pass the doctor to the database save", function(done) {
        request(app).post('/api/doctors').send(newDoctor).end(function(err, res) {
            expect(dataSavedDoctor).to.deep.equal(newDoctor);
            done();
        });
    });
    it("should return a status of 200 to the front end if the database saved");
    it("should return a doctor with an id");
    it("should return an error if the database failed");
});