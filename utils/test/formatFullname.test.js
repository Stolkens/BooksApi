const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return Error if fullName is empty ', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return Error if fullName is not a string ', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return Error if fullName has not have 2 words', () => {
    expect(formatFullname('John Doe Junior')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Hook Junior ')).to.equal('Error');

  });

  it('should return good spelling', () => {
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JoHn dOe')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
    
  });
});