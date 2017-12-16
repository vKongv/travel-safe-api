const utils = require('./utils');

const getRoadAccidents = (start, end) => {
    return {
        numOfAccidents: utils.generateData(5),
    };
};

module.exports = {
    getRoadAccidents,
}

