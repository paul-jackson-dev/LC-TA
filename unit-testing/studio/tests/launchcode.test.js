// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  it("checks if lc is nonprofit", function() {
		let string = launchcode.organization
		expect(string).toEqual("nonprofit");
	});
  
  it("checks if jeff is the executive director", function() {
		let string = launchcode.executiveDirector
		expect(string).toEqual("Jeff");
	});

  it("checks if percentageCoolEmployees to be 100", function() {
		let integer = launchcode.percentageCoolEmployees
		expect(integer).toEqual(100);
	});

  it("checks the values of programsOffered", function() {
		let array = launchcode.programsOffered
		expect(array[0]).toEqual("Web Development");
    expect(array[1]).toEqual("Data Analysis");
    expect(array[2]).toEqual("Liftoff");
    expect(array.length).toEqual(3)
	});

  it("checks that the correct things are printed based on the number given", function() {
		let objectFunction = launchcode.method;
		expect(objectFunction(2)).toEqual("Launch!");
    expect(objectFunction(3)).toEqual("Code!");
    expect(objectFunction(5)).toEqual("Rocks!");
    expect(objectFunction(6)).toEqual("LaunchCode!");
    expect(objectFunction(15)).toEqual("Code Rocks!");
    expect(objectFunction(10)).toEqual("Launch Rocks!");
    expect(objectFunction(30)).toEqual("LaunchCode Rocks!");
    expect(objectFunction(31)).toEqual("Rutabagas! That doesn't work.");

	});
  
});

