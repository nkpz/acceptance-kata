var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {
  this.Given(/^There are (\d+) widgets to rent$/, function(arg1, next) {
    // Will need to interact with db setup later
    next();
  });

  this.When(/^I go to the home page$/, function(next) {
    browser.get("/app/index.html");
    next();
  });

  this.Then(/^I see a list of (\d+) widgets for rent\.$/, function(arg, next) {
    var count = parseInt(arg);
    var all = element.all(by.repeater('rental in rentals'));
    all.then(function(arr) {
      expect(arr.length).equals(count);
      next();
    });
  });
};
