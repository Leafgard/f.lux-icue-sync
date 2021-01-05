const app = require('./app')
const cue = require('cue-sdk')

const details = cue.CorsairPerformProtocolHandshake();
const errCode = cue.CorsairGetLastError();

// Ensure CUE connection is working
if (errCode === 0) {
    console.log('CUE connection details', details)
    app.listen(3000, () => console.log('f.lux-iCUE synchronizer is running'))
}
