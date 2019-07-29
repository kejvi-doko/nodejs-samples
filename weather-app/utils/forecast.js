const request = require("request");

const forcast = (lat, long, callback) => {
  const url =
    "https://api.darksky.net/forecast/8a59547c7a5091bcbaccbd9601ef478e/" +
    lat +
    "," +
    long +
    "?units=si";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service");
    } else if (response.body.error) {
      callback("Unable to forcast for this location");
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          "\n" +
          "It is currently " +
          response.body.currently.temperature +
          " degrees out." +
          "\n" +
          "There is a " +
          response.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forcast;
