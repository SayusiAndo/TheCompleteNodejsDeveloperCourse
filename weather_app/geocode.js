const postmanRequest = require('postman-request')

const mapboxUri = 'https://api.mapbox.com'
const geocodeApi = '/geocoding/v5/mapbox.places/'
const geocodeApiPostfix = '.json'
const apiKey = 'pk.eyJ1IjoiYW5kcmFzY3NhbnlpIiwiYSI6ImNranJpem81djF3M3AydXFwa3BkeTY5dTQifQ.nuBg7JfSNDjs-4IvNbQibg'

const getGeoCodeById = (address, callback) => {
    if (address === undefined) {
        throw 'Address cannot be undefined';
    }

    const url = createApiUrl(address)

    postmanRequest(url, { json: true }, (error, response, body) => {
        if (error) {
            const msg = error + ' statusCode: ' + response.statusCode
            callback(msg, undefined)
        } else if (body.features.length === 0) {
            callback('No address found. Try another one.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[0],
                place_name: body.features[0].place_name
            })
        }
    })
}

const createApiUrl = (address) => {
    return mapboxUri +
        geocodeApi +
        address +
        geocodeApiPostfix +
        '?access_token=' +
        apiKey
}

module.exports = {
    getGeoCodeById: getGeoCodeById
}
