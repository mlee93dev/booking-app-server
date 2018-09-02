let axios = require('axios');

let generateLocationDetails = (zipcode) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyD5X2-fHRtED9fiwyQqJVpteHcZTivVP78`)
    .then((response) => {
      if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
      }
      let location = response.data.results[0].address_components;
      let city = location.find(element => element.types[0] == 'locality');
      let state = location.find(element => element.types[0] == 'administrative_area_level_1');
      return {
        city: city.long_name,
        state: state.short_name
      };
    }).catch((e) => {
      if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to Google Maps API.')
      } else {
        console.log(e.message);
      }
    });
};

module.exports = {generateLocationDetails};