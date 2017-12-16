const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const roadAccident = require('./roadAccident');
const roadCondition = require('./roadCondition');
const weather = require('./weather');
const utils = require('./utils');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080, () => {
    console.log('Listening on port 8080!');
});

app.post('/safety', (req, res, next) => {
    const stepsWithSafetyMetric = req.body.steps.map((step) => {
        const { lat, lng } = step;
        const currentWeather = weather.getWeather(lat, lng);
        const currentRoadCondition = roadCondition.getRoadCondition(lat, lng);
        const currentRoadAccidents = roadAccident.getRoadAccidents(lat, lng)
        return {
            ...step,
            safetyMetric: {
                overall: 1,
                weather: parseFloat(utils.calcWeatherMetric(currentWeather).toFixed(2)),
                roadCondition: parseFloat(utils.calcRoadConditionMetric(currentRoadCondition, currentRoadAccidents.numOfAccidents).toFixed(2)),
                accidentRate: currentRoadAccidents,
            }
        };
    });
    res.json(stepsWithSafetyMetric);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    if (!(err.status >= 100 && err.status < 600)) {
        err.status = 500;
        err.message = 'Internal Server Error';
    }
    res.status(err.status).send({
        error: {
            message: err.message,
        },
    });
});

module.exports = app;
