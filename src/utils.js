const generateData = max => Math.ceil(Math.random() * max);

const calcRainMetric = rain => {
    let rainMetric = 1;
    if (rain >= 50) {
        rainMetric = 0.05;
    } else if (rain >= 16) {
        rainMetric = 0.35;
    } else if (rain >= 4) {
        rainMetric = 0.6;
    } else if (rain >= 1) {
        rainMetric = 0.8;
    } else if (rain >= 0.25) {
        rainMetric = 0.95;
    }
    return rainMetric;
};

const calcWindSpeedMetric = windSpeed => {
    let windSpeedMetric = 1;
    if (windSpeed >= 24) {
        windSpeedMetric = 0.1;
    } else if (windSpeed >= 14) {
        windSpeedMetric = 0.5;
    } else if (windSpeed >= 5) {
        windSpeedMetric = 0.8;
    }
    return windSpeedMetric;
};

const calcHumiditydMetric = humidity => {
    let humidityMetric = 1;
    if (humidity >= 70) {
        humidityMetric = 0.33;
    } else if (humidity >= 40) {
        humidityMetric = 0.67;
    }
    return humidityMetric;
};

const calcTrafficMetric = traffic => {
    let trafficMetric = 0.1;
    if (traffic >= 80) {
        trafficMetric = 1;
    } else if (traffic >= 50) {
        trafficMetric = 0.9;
    } else if (traffic >= 20) {
        trafficMetric = 0.4;
    }
    return trafficMetric;
};

const calcCurveMetric = curve => {
    let curveMetric = 1;
    if (curve >= 90) {
        curveMetric = 0.33;
    } else if (curve >= 20) {
        curveMetric = 0.67;
    }
    return curveMetric;
};

const calcSlopeMetric = slope => {
    let slopeMetric = 1;
    if (slope >= 45) {
        slopeMetric = 0.33;
    } else if (slope >= 10) {
        slopeMetric = 0.67;
    }
    return slopeMetric;
};

const calcNumOfHoleMetric = numOfHole => {
    let numOfHoleMetric = 1;
    if (numOfHole >= 5) {
        numOfHoleMetric = 0.1;
    } else if (numOfHole >= 3) {
        numOfHoleMetric = 0.2;
    } else if (numOfHole >= 1) {
        numOfHoleMetric = 0.5;
    }
    return numOfHoleMetric;
};

const calcNumOfLaneMetric = numOfLane => {
    let numOfLaneMetric = 0.5;
    if (numOfLane >= 3) {
        numOfLaneMetric = 1;
    } else if (numOfLane >= 2) {
        numOfLaneMetric = 0.8;
    }
    return numOfLaneMetric;
};

const calcAccidentMetric = accidentRate => {
    let accidentMetric = 1;
    if (accidentRate >= 4) {
        accidentMetric = 0.1;
    } else if (accidentRate >= 2) {
        accidentMetric = 0.4;
    }
    return accidentMetric;
};

const calcWeatherMetric = weather => {
    let rainMetric = calcRainMetric(weather.rain);
    let windSpeedMetric = calcWindSpeedMetric(weather.wind);
    let humidityMetric = calcHumiditydMetric(weather.humidity);
    console.log(`rain: ${weather.rain} --> ${rainMetric}`);
    console.log(`wind: ${weather.wind} --> ${windSpeedMetric}`);
    console.log(`humidity: ${weather.humidity} --> ${humidityMetric}`);
    return (rainMetric + windSpeedMetric + humidityMetric) / 3;
};

const calcRoadConditionMetric = (roadCondition, accidentRate) => {
    let trafficMetric = calcTrafficMetric(roadCondition.traffic);
    let curveMetric = calcCurveMetric(roadCondition.curve);
    let slopeMetric = calcSlopeMetric(roadCondition.slope);
    let numOfHoleMetric = calcNumOfHoleMetric(roadCondition.numOfHole);
    let numOfLaneMetric = calcNumOfLaneMetric(roadCondition.numOfLane);
    let accidentMetric = calcAccidentMetric(accidentRate);

    console.log(`traffic: ${roadCondition.traffic} --> ${trafficMetric}`);
    console.log(`curve: ${roadCondition.curve} --> ${curveMetric}`);
    console.log(`slope: ${roadCondition.slope} --> ${slopeMetric}`);
    console.log(`numOfHole: ${roadCondition.numOfHole} --> ${numOfHoleMetric}`);
    console.log(`numOfLane: ${roadCondition.numOfLane} --> ${numOfLaneMetric}`);
    console.log(`accidentRate: ${accidentRate} --> ${accidentMetric}`);

    return (
        (trafficMetric +
            curveMetric +
            slopeMetric +
            numOfHoleMetric +
            numOfLaneMetric +
            accidentMetric) /
        6
    );
};

module.exports = { generateData, calcWeatherMetric, calcRoadConditionMetric };
