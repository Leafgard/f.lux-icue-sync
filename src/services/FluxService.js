const cue = require('cue-sdk')
const KelvinToRGB = require('../utils/KelvinToRGB')

/**
 * Updates CUE lighting with f.lux data
 * @param kelvin f.lux current temperature
 */
function updateLighting(kelvin) {
    const { r, g, b } = KelvinToRGB(kelvin)
    console.log(r, g, b)

    const deviceCount = cue.CorsairGetDeviceCount()

    for (let i = 0; i < deviceCount; i++) {
        const updatedLEDs = cue.CorsairGetLedPositionsByDeviceIndex(i)
            .map(({ ledId }) => ({
                ledId,
                r,
                g: g - 100,
                b: b - 120
            }))
        cue.CorsairSetLedsColorsBufferByDeviceIndex(i, updatedLEDs)
        cue.CorsairSetLedsColorsFlushBuffer()
    }

    return {
        message: 'Successfully updated CUE lighting'
    }
}

module.exports = {
    updateLighting
}
