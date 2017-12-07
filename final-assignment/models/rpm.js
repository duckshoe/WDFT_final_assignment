const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rpmSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    oRPM: {
        type: Number,
        require: true
    },
    dRPM: {
        type: Number,
        require: true
    },
    RPM: {
        type: Number,
        require: true
    },
    wins: {
        type: Number,
        require: true
    }
})

const RPM = mongoose.model('RPM', rpmSchema);
module.exports = RPM;