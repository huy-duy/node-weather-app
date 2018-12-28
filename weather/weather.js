const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ee18348f9ba0182ace66b68ef46fecf4/${lat},${lng}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect to API Servers.');
        }

        else if (response.statusCode === 400) {
            callback(body.error);
        }

        else if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }

    });

};

module.exports = {
    getWeather
}
