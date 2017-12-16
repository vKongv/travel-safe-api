const utils = require('./utils');

const getRoadCondition = (lat, lng) => {
    return {
        traffic: utils.generateData(100),
        curve: utils.generateData(180),
        slope: utils.generateData(45),
        numOfHole: utils.generateData(5),
        numOfLane: utils.generateData(3)
    };
}

module.exports = {
    getRoadCondition,
}