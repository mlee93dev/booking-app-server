let expect = require('expect');

let {generateLocationDetails} = require('./location');

describe('generateLocationDetails', () => {
  it('should generate correct location details object', () => {
    let zipcode = '98101';
    let locationDetails = generateLocationDetails(zipcode);

    expect(locationDetails).toMatchObject({city: 'Seattle', state: 'WA'});
  })
});