const request = require('request');

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBut76aU8KK1puDk_6VhcDdwMb6chJMnAs&callback=initMap`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else if (body.status === 'OK') {
                resolve({
                    Address: body.results[0].formatted_address,
                    Lat: body.results[0].geometry.location.lat,
                    Lng: body.results[0].geometry.location.lng
                });
            }


        });
    });

};


geocodeAddress('Tao dan Park')
    .then((location) => {
        console.log(JSON.stringify(location, undefined, 2));
    })
    .catch((errorMessage) => {
        console.log('Error ', errorMessage);
    });

module.exports = {
    geocodeAddress
}
