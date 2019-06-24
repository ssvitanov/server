const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    createdDate: { type: Date, default: Date.now },
    pm25: { type: Number, required: true },
    pm10: { type: Number, required: true },
    temperature: {type: Number, required: true},
    humidity: {type: Number, required: true},
    pressure: {type: Number, required: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('SensorData', schema);