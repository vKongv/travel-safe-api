const utils = require('./utils');

const getRoadAccidents = (lat, lng) => {
    return {
        numOfAccidents: utils.generateData(5),
    };
};

module.exports = {
    getRoadAccidents,
}

