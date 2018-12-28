const request = require('request');

const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBut76aU8KK1puDk_6VhcDdwMb6chJMnAs&callback=initMap`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Lat: body.results[0].geometry.location.lat,
                Lng: body.results[0].geometry.location.lng
            });
        }


    });

};

module.exports = {
    geocodeAddress
}

// forecast api f0fcb43c9c9d354594fea4cc356a87a0
// api https://api.darksky.net/forecast/f0fcb43c9c9d354594fea4cc356a87a0/37.8267,-122.4233
