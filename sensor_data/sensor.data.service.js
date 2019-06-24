const db = require('../_helpers/db');
const SensorData = db.SensorData;

module.exports = {
    create,
    fromDate,
    latest,
    getAll,
    getLastHour,
    getLastMinute
};

async function create(sensorParam) {

    var pm25Value = sensorParam.header('pm25');
    var pm10Value = sensorParam.header('pm10');
    var temperatureValue = sensorParam.header('temperature');
    var humidityValue = sensorParam.header('humidity');
    var pressureValue = sensorParam.header('pressure');

    Data = new SensorData({ pm25: pm25Value, pm10: pm10Value, temperature: temperatureValue, humidity: humidityValue, pressure: pressureValue });

    // save user
    await Data.save();
}

async function fromDate(fromDate) {
    return await SensorData.find({'createdDate' : {$gt: fromDate }}).select('pm25 pm10 temperature humidity pressure createdDate');
}

async function latest() {
    return await SensorData.findOne({}, {}, {sort: {'createdDate' : -1 } }).select('pm25 pm10 temperature humidity pressure createdDate');
}

async function getAll() {
    return await SensorData.find().select('pm25 pm10 temperature humidity pressure createdDate');
}

async function getLastHour() {
    var myDate = new Date(Date.now() - 1 * 60 * 60 * 1000);

    return await SensorData.find({'createdDate' : {$gt: myDate }}).select('pm25 pm10 temperature humidity pressure createdDate');
}

async function getLastMinute() {
    var myDate = new Date(Date.now() - 3 * 60 * 1000);

    return await SensorData.find({'createdDate' : {$gt: myDate }}).select('pm25 pm10 temperature humidity pressure createdDate');
}
