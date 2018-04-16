const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const request = require('request');

// const address_finder = require('./address_finder.js')
// const weather_file = require('./public/weather.js');

var app = express();

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//-----------------------------------------------------------------------------------------------
var temp = '';

//---------------------------------------functions-----------------------------------------------
// function readJsonFile() {
//     fs.readFile('./username.json', (err, data) => {
//         if (err) {
//             throw err;
//         }
//         userlog = JSON.parse(data);
//     });
// }

// function writeJsonFile() {
//     fs.writeFile('./username.json', JSON.stringify(userlog));
// }

// function weather_fetcher() {
//     weather_file.geocode(address).then((result) => {
//         return weather_file.weather(result.lat, result.lng);
//     }).then((result) => {
//         weather_body = result;
//     }).catch((error) => {
//         console.log(error)
//     })
// }

// function latlng_converter(address) {
//     address_finder.getAddress(address, (errorMessage, results) => {
//         if (errorMessage) {
//             console.log("latlng_converter Error");
//             lat = '49.2834444',
//                 lng = '-123.1196331';
//         } else {
//             lat = JSON.stringify(results.lat, undefined, 2)
//             lng = JSON.stringify(results.lng, undefined, 2)
//         }
//     });
// }

//------------------------------app.list to the port--------------------------------------------------
app.listen(port, () => {
    console.log(`Server is up on the port ${port}`);
});