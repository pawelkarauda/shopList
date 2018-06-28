const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bought: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Buy = mongoose.model('buys', BuySchema);