const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bbrSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    OWS: {
        type: Number,
        require: true
    },
    DWS: {
        type: Number,
        require: true
    },
    WS: {
        type: Number,
        require: true
    },
    WS48: {
        type: Number,
        require: true
    },
    OBPM: {
        type: Number,
        require: true
    },
    DBPM: {
        type: Number,
        require: true
    },
    BPM: {
        type: Number,
        require: true
    },
    VORP: {
        type: Number,
        require: true
    },
})

const BBR = mongoose.model('BBR', bbrSchema);
module.exports = BBR;