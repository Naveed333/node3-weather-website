const request = require("request");

const forecast = (lat,long, callback) => {
    
    const Url =
		'https://api.darksky.net/forecast/f87f5921f05086cd38a672be5a9c47f9/'+encodeURIComponent(lat)+','+encodeURIComponent(long);
	request({ url: Url, json: true }, (error, {body}) => {
		if (error) {
			callback('Uable to connect to weather service',undefined);
		} else if (body.error) {
			callback('Unable to find location',undefined);
		} else {
			callback(
				undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree. There is ${body.currently.precipProbability} % chance of Rain`
			);
		}
	});
};
module.exports = forecast;
