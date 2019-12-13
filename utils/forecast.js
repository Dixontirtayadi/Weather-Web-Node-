const request = require("request")

const forecast = (latitude,longitude,callback) => {
    const url = "https://api.darksky.net/forecast/d018ae19994f4f56543c738379ea380a/" + latitude + "," + longitude + "?units=si"

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("There is no connection to weather service")
        } else if (response.body.error){
            callback("Unable to find the location")
        } else {
            const data = response.body.currently
            const str = "It is currently " + data.temperature + " degrees out. there is a " + data.precipProbability + "% chance of rain"
            callback(undefined,str)
        }
    })
}

module.exports = forecast