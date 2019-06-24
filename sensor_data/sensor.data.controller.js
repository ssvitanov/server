const express = require('express');
const router = express.Router();
const SensorDataService = require('./sensor.data.service');

// routes
router.post('/log', log);
router.get('/fromDate/:date', getFromDate);
router.get('/latest', getLatest);
router.get('/all', getAll);
router.get('/lastHour', getLastHour);
router.get('/lastMinute', getLastMinute);

module.exports = router;

function log(req, res, next) {
    SensorDataService.create(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getFromDate(req, res, next) {
    SensorDataService.fromDate(req.params.date)
        .then(sensorData => sensorData ? res.json(sensorData) : res.sendStatus(404))
        .catch(err => next(err));
}

function getLatest(req, res, next) {
    SensorDataService.latest()
        .then(sensorData => sensorData ? res.json(sensorData) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    SensorDataService.getAll()
        .then(sensorData => sensorData ? res.json(sensorData) : res.sendStatus(404))
        .catch(err => next(err));
}

function getLastHour(req, res, next) {
    SensorDataService.getLastHour()
        .then(sensorData => sensorData ? res.json(sensorData) : res.sendStatus(404))
        .catch(err => next(err));
}

function getLastMinute(req, res, next) {
    SensorDataService.getLastMinute()
        .then(sensorData => sensorData ? res.json(sensorData) : res.sendStatus(404))
        .catch(err => next(err));
}