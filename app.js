const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js")

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode("Seattle", (error,data) => {
    console.log("Error", error)
    console.log("Data", data)
})