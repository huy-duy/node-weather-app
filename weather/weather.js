const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/f0fcb43c9c9d354594fea4cc356a87a0/${lat},${lng}`,
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
