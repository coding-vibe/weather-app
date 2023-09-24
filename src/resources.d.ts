interface Resources {
  translation: {
    error: {
      fetchGeoData: string;
      fetchWeatherData: string;
    };
    iconDescriptions: {
      brokenClouds: string;
      clearSky: string;
      fewClouds: string;
      overcastClouds: string;
      scatteredClouds: string;
    };
    labels: {
      endDayDatePicker: string;
      forecastTab: string;
      historicalForecastTab: string;
      historicalWeatherTable: string;
      languageSelect: string;
      layoutTabs: string;
      locationAutocomplete: string;
      startDayDatePicker: string;
      temperatureUnitsSelect: string;
      weatherTable: string;
    };
    languages: {
      english: string;
      french: string;
      ukrainian: string;
    };
    temperatureUnits: {
      celsius: string;
      fahrenheit: string;
      kelvin: string;
    };
    texts: {
      contentHeader: string;
      historicalForecastTableCell: string;
      noOptions: string;
      propForecast: string;
      propHistoricalForecast: string;
      searchCaption: string;
    };
    weatherPeriodDetails: {
      humidity: string;
      temperature: string;
    };
    submit: string;
  };
}

export default Resources;
