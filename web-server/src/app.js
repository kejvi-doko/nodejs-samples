const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require("./utils/geocode");
const forcast = require("./utils/forecast");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

// Define paths for Express config
const publiDirectoryFolder = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publiDirectoryFolder));

app.get('', (req, res) => {

    res.render('index', {
        title: "Weather App",
        name: "Kejvi Doko"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Kejvi Doko"
    });

});

app.get('/help', (req, res) => {
    res.render('help', {
        message: "Help Message",
        title: 'Help',
        name: "Kejvi Doko"
    });

});

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({ error: "Address parameter should be provided." })
    }

    const address = req.query.address;

    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) return res.send({ error });

        forcast(latitude, longitude, (error, forecastData) => {
            if (error) return res.send({ error });

            res.send({
                location,
                forcast: forecastData,
                address
            });
        });
    });

});

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help Article Not Found', title: '404',
        name: "Kejvi Doko"
    });

});

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'My 404 Page', title: '404',
        name: "Kejvi Doko"
    });

});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});