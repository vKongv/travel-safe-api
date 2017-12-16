const utils = require('./utils');

const getWeather = (start, end) => {
    return {
        wind: utils.generateData(24),
        rain: utils.generateData(50),
        humidity: utils.generateData(100),
    };
};

module.exports = {
    getWeather
};