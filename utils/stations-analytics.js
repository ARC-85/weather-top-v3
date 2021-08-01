"use strict";

const stationsAnalytics = {
  getWeatherType(station) {
    let weatherType = null;
    const readings = station.readings;
    if (station.readings.length > 0) {
      if (station.readings[station.readings.length - 1].code === 100) {
        weatherType = "Clear";
      } else if (station.readings[station.readings.length - 1].code === 200) {
        weatherType = "Partial Clouds";
      } else if (station.readings[station.readings.length - 1].code === 300) {
        weatherType = "Cloudy";
      } else if (station.readings[station.readings.length - 1].code === 400) {
        weatherType = "Light Showers";
      } else if (station.readings[station.readings.length - 1].code === 500) {
        weatherType = "Heavy Showers";
      } else if (station.readings[station.readings.length - 1].code === 600) {
        weatherType = "Rain";
      } else if (station.readings[station.readings.length - 1].code === 700) {
        weatherType = "Snow";
      } else if (station.readings[station.readings.length - 1].code === 800) {
        weatherType = "Thunder";
      } else weatherType = "Unrecognised code";
    } else {
      weatherType = "No readings available.";
    }
    return weatherType;
  },
  
  getCelsius(station) {
    let celsius = null;
    if (station.readings.length > 0) {
      celsius = station.readings[station.readings.length - 1].temperature + " Celsius";
    } else {
      celsius = "No readings available.";
    }
    return celsius;
  },
  
  getFahrenheit(station) {
    let fahrenheit = null;
    let fahrenheitTemp = null;
    if (station.readings.length > 0) {
      fahrenheitTemp = station.readings[station.readings.length - 1].temperature * 9 / 5 + 32; 
      fahrenheit = fahrenheitTemp + " Fahrenheit";
    } else {
      fahrenheit = "No readings available.";
    }
    return fahrenheit;
  },

  getMinimumTemperature(station) {
    let minimumTemperature = null;
    if (station.readings.length > 0) {
      minimumTemperature = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minimumTemperature) {
          minimumTemperature = "Min Temp: " + station.readings[i].temperature + " Celsius";
        }
      }
    } else {
      minimumTemperature = "No readings available.";
    }
    return minimumTemperature;
  },
  
  getMaximumTemperature(station) {
    let maximumTemperature = null;
    if (station.readings.length > 0) {
      maximumTemperature = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maximumTemperature) {
          maximumTemperature = "Max Temp: " + station.readings[i].temperature + " Celsius";
        }
      }
    } else {
      maximumTemperature = "No readings available.";
    }
    return maximumTemperature;
  },
  
  getTemperatureTrend(station) {
    let tempTrend = null;
    if (station.readings.length > 0) {
      if (station.readings.length < 1) {
                return "No Temp Trend";
            }
            if (station.readings.length === 1) {
                return "No Temp Trend";
            } else if (station.readings.length === 2) {
                Reading firstReading = readings.get(readings.size() - 1);
                Reading secondReading = readings.get(readings.size() - 2);
                if (firstReading.getTemp() > secondReading.getTemp()) {
                    return "Increasing Temp Trend";
                } else {
                    return "Decreasing Temp Trend";
                }
            } else if (readings.size() >= 3) {
                Reading firstReading = readings.get(readings.size() - 1);
                Reading secondReading = readings.get(readings.size() - 2);
                Reading thirdReading = readings.get(readings.size() - 3);
                if ((firstReading.getTemp() > secondReading.getTemp()) && (secondReading.getTemp() > thirdReading.getTemp())) {
                    return "Increasing Temp Trend";
                } else if ((firstReading.getTemp() < secondReading.getTemp()) && (secondReading.getTemp() < thirdReading.getTemp())) {
                    return "Decreasing Temp Trend";
                } else {
                    return "No Temp Trend";
                }
            }
    } else {
      maximumTemperature = "No readings available.";
    }
    return maximumTemperature;
  },
  
  getWindBeaufort(station) {
    let windBeaufort = null;
    const readings = station.readings;
    if (station.readings.length > 0) {
      if (station.readings[station.readings.length - 1].windSpeed <= 1) {
                windBeaufort = "Beaufort 0 (Calm)";
            } else if ((station.readings[station.readings.length - 1].windSpeed > 1) && (station.readings[station.readings.length - 1].windSpeed <= 5)) {
                windBeaufort = "Beaufort 1 (Light Air)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 5 && station.readings[station.readings.length - 1].windSpeed <= 11) {
                windBeaufort = "Beaufort 2 (Light Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 11 && station.readings[station.readings.length - 1].windSpeed <= 19) {
                windBeaufort = "Beaufort 3 (Gentle Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 19 && station.readings[station.readings.length - 1].windSpeed <= 28) {
                windBeaufort = "Beaufort 4 (Moderate Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 28 && station.readings[station.readings.length - 1].windSpeed <= 38) {
                windBeaufort = "Beaufort 5 (Fresh Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 38 && station.readings[station.readings.length - 1].windSpeed <= 49) {
                windBeaufort = "Beaufort 6 (Strong Breeze)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 49 && station.readings[station.readings.length - 1].windSpeed <= 61) {
                windBeaufort = "Beaufort 7 (Near Gale)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 61 && station.readings[station.readings.length - 1].windSpeed <= 74) {
                windBeaufort = "Beaufort 8 (Gale)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 74 && station.readings[station.readings.length - 1].windSpeed <= 88) {
                windBeaufort = "Beaufort 9 (Severe Gale)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 88 && station.readings[station.readings.length - 1].windSpeed <= 102) {
                windBeaufort = "Beaufort 10 (Strong Storm)";
            } else if (station.readings[station.readings.length - 1].windSpeed > 102 && station.readings[station.readings.length - 1].windSpeed <= 117) {
                windBeaufort = "Beaufort 11 (Violent Storm)";
            } else
                windBeaufort = "Perfect Storm";
    } else {
      windBeaufort = "No readings available.";
    }
    return windBeaufort;
  },
  
  getWindDirection(station) {
    let windDirect = null;
    const readings = station.readings;
    if (station.readings.length > 0) {
      if ((station.readings[station.readings.length - 1].windDirection >= 348.75) && (station.readings[station.readings.length - 1].windDirection <= 360.00)) {
                windDirect = "North";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 0) && (station.readings[station.readings.length - 1].windDirection < 11.25)) {
                windDirect = "North";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 11.25) && (station.readings[station.readings.length - 1].windDirection < 33.75)) {
                windDirect = "North North East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 33.75) && (station.readings[station.readings.length - 1].windDirection < 56.25)) {
                windDirect = "North East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 56.25) && (station.readings[station.readings.length - 1].windDirection < 78.75)) {
                windDirect = "East North East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 78.75) && (station.readings[station.readings.length - 1].windDirection < 101.25)) {
                windDirect = "East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 101.25) && (station.readings[station.readings.length - 1].windDirection < 123.75)) {
                windDirect = "East South East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 123.75) && (station.readings[station.readings.length - 1].windDirection < 146.25)) {
                windDirect = "South East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 146.25) && (station.readings[station.readings.length - 1].windDirection < 168.75)) {
                windDirect = "South South East";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 168.75) && (station.readings[station.readings.length - 1].windDirection < 191.25)) {
                windDirect = "South";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 191.25) && (station.readings[station.readings.length - 1].windDirection < 213.75)) {
                windDirect = "South South West";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 213.75) && (station.readings[station.readings.length - 1].windDirection < 236.25)) {
                windDirect = "South West";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 236.25) && (station.readings[station.readings.length - 1].windDirection < 258.75)) {
                windDirect = "West South West";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 258.75) && (station.readings[station.readings.length - 1].windDirection < 281.25)) {
                windDirect = "West";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 281.25) && (station.readings[station.readings.length - 1].windDirection < 303.75)) {
                windDirect = "West North West";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 303.75) && (station.readings[station.readings.length - 1].windDirection < 326.25)) {
                windDirect = "North West";
            } else if ((station.readings[station.readings.length - 1].windDirection >= 326.25) && (station.readings[station.readings.length - 1].windDirection < 348.75)) {
                windDirect = "North North West";
            } else
                windDirect = "Even Breeze";
    } else {
      windDirect = "No readings available.";
    }
    return windDirect;
  },
  
  getWindChill(station) {
    let windChill = null;
    let windTemp = null;
    if (station.readings.length > 0) {
      windChill = 13.12 + 0.6215 * station.readings[station.readings.length - 1].temperature - 11.37 * (Math.pow(station.readings[station.readings.length - 1].windSpeed, 0.16)) + 0.3965 * (Math.pow(station.readings[station.readings.length - 1].temperature, 0.16));
      windTemp = "Feels like " + (Math.round(windChill * 100) / 100).toFixed(2) + " Celsius";
    } else {
      windTemp = "No readings available.";
    }
    return windTemp;
  },
  
  getMinimumWind(station) {
    let minimumWind = null;
    if (station.readings.length > 0) {
      minimumWind = station.readings[0].windSpeed;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed < minimumWind) {
          minimumWind = "Min Wind: " + station.readings[i].windSpeed + " km/hr";
        }
      }
    } else {
      minimumWind = "No readings available.";
    }
    return minimumWind;
  },
  
  getMaximumWind(station) {
    let maximumWind = null;
    if (station.readings.length > 0) {
      maximumWind = station.readings[0].windSpeed;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed > maximumWind) {
          maximumWind = "Max Wind: " + station.readings[i].windSpeed + " km/hr";
        }
      }
    } else {
      maximumWind = "No readings available.";
    }
    return maximumWind;
  },
  
  getPressureHpa(station) {
    let pressureHpa = null;
    if (station.readings.length > 0) {
      pressureHpa = station.readings[station.readings.length - 1].pressure + " hPa";
    } else {
      pressureHpa = "No readings available.";
    }
    return pressureHpa;
  },
  
  getMinimumPressure(station) {
    let minimumPressure = null;
    if (station.readings.length > 0) {
      minimumPressure = station.readings[0].pressure;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].pressure < minimumPressure) {
          minimumPressure = "Min Pressure: " + station.readings[i].pressure + " hPa";
        }
      }
    } else {
      minimumPressure = "No readings available.";
    }
    return minimumPressure;
  },
  
  getMaximumPressure(station) {
    let maximumPressure = null;
    if (station.readings.length > 0) {
      maximumPressure = station.readings[0].pressure;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maximumPressure) {
          maximumPressure = "Max Pressure: " + station.readings[i].pressure + " hPa";
        }
      }
    } else {
      maximumPressure = "No readings available.";
    }
    return maximumPressure;
  },

  getLatestReading(station) {
    let latestReading = null;
    if (station.readings.length > 0) {
      latestReading = station.readings[station.readings.length - 1].time;
    } else {
      latestReading = "No readings available.";
    }
    return latestReading;
  },
  
  
};

module.exports = stationsAnalytics;
