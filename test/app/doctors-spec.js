describe("posting jobs", function() {
    
    var postRequestDoctor;
    var newDoctor = {name:"Test Name", description:"Test description."};
    
    beforeEach(module('app'));
    
    it("should call /api/doctors with doctor data", inject(function($httpBackend, doctors){
        $httpBackend.whenPOST('/api/doctors', function(data) {
            postRequestDoctor = JSON.parse(data);
            expect(postRequestDoctor).to.not.be.empty;
            return true;
        }).respond(200);
        doctors.save(newDoctor);
        $httpBackend.flush();
    }));
});