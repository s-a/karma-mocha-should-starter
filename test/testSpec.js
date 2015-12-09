"use strict";

describe('some test that needs a fixture', function(){
	before(function(){
		fixture.setBase('test');
	});

	beforeEach(function(){
		this.result = fixture.load('test.html');
	});

	afterEach(function(){
		fixture.cleanup()
	});

	it('plays with the html fixture', function(){
		document.getElementById("test").innerHTML.should.be.equal("test");
	});
});
