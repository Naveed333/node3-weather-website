const request = require('request')
const geocode = (address, callback) => {
	const url =
		"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
		encodeURIComponent(address) +
		".json?access_token=pk.eyJ1IjoibmF2ZWVkYXNoZmFxIiwiYSI6ImNqeWNmdGZkZTBoNjAzam1mYjIxYWc5NjkifQ.3zfiOZVHZ2wt5p_P7QqmBw";
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Uable to connect to weather service',undefined);
		} else if (response.body.features.length === 0) {
			callback('Unable to find location. Try another search',undefined);
		} else {
			const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];
            const location = response.body.features[0].place_name
			callback(undefined,{latitude, longitude,location});
		}
	});
};


module.exports = geocode 