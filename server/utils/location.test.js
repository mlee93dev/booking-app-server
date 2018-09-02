let expect = require('expect');

let {generateLocationDetails} = require('./location');

describe('generateLocationDetails', () => {
  it('should generate correct location details object', () => {
    let zipcode = '98101';
    let locationDetails;
    generateLocationDetails(zipcode)
      .then(
        (locationData) => {
          locationDetails = locationData;
          expect(locationDetails).toMatchObject({ city: 'Seattle', state: 'WA' });
        }
      );
  });

  it('should throw an address not found error', () => {
    let zipcode = '99991';
    let error;
    generateLocationDetails(zipcode)
      .catch(
        (e) => {
          error = e.message;
          expect(error).toBe('Unable to find that address.');
        }
      );
  });
});