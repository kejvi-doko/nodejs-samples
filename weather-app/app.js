const geocode = require("./utils/geocode");
const forcast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, data) => {
    if (error) return console.log("Error: ", error);

    forcast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) return console.log("Error: ", error);

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
