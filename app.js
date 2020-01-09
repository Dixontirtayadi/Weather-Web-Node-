const geocode = require("../utils/geocode.js")
const forecast = require("../utils/forecast.js")

const address = process.argv[2]
if (!address) {
    console.log("Please provide a location")
} else {
    geocode(address, (error, {latitude,longitude,location} ) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log("Forecast on", location)
            console.log(forecastData)
        })
    })
}