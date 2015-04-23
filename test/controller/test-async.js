describe('Array', function(){

    describe('#indexOf()', function(){
        afterEach(function(done) {
            console.log("afterEach");
            done();
        })

        it('it--1', function(done){
            setTimeout(function() {
                console.log("it--1");
                done();
            }, 1000);
        })

        it('it--2', function(){
            console.log("it--2");
        })
    })

    describe('#indexOf()', function(){
        afterEach(function(done) {
            console.log("afterEach");
            done();
        })

        it('it--3', function(done){
            setTimeout(function() {
                console.log("it--3");
                done();
            }, 1000);
        })

        it('it--4', function(){
            console.log("it--4");
        })
    })
})