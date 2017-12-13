const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OnOffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    onOffense: {
        type: Number,
        require: true
    },
    onDefense: {
        type: Number,
        require: true
    },
    onNet: {
        type: Number,
        require: true
    },
    offOffense: {
        type: Number,
        require: true,

    },
    offDefense: {
        type: Number,
        require: true
    },
    offNet: {
        type: Number,
        require: true
    },
    totalNet: {
        type: Number,
        require: true
    }
})

const OnOff = mongoose.model('OnOff', OnOffSchema);
module.exports = OnOff;