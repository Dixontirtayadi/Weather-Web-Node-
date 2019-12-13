const request = require("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZGl4b250aXJ0YXlhZGkiLCJhIjoiY2s0M2xpemZoMDk3NTNmcnVvdHRpdTFmbiJ9.NiUXOJOrSOrQnoVHBGAX8w&limit=1"

    request( { url:url, json:true}, (error, response) => {
        if (error) {
            callback("There is no connection")
        } else if (response.body.features.length === 0) {
            callback("Unable to find the location")
        } else {
            const lat = response.body.features[0].center[1]
            const long = response.body.features[0].center[0]
            const placeName = response.body.features[0].place_name
            callback(undefined, {
                latitude: lat,
                longitude: long,
                location: placeName
            })
        }
    })
}

module.exports = geocode