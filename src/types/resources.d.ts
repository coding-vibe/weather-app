interface Resources {
  translation: {
    errors: {
      fetchGeoData: string;
      fetchWeatherData: string;
      required: string;
      endDateField: string;
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
      iconAlt: string;
      noOptions: string;
      propCaptionForecast: string;
      propCaptionHistoricalForecast: string;
      propHeaderForecast: string;
      propHeaderHistoricalForecast: string;
      searchCaption: string;
    };
    weatherPeriodDetails: {
      humidity: string;
      temperature: string;
    };
    weekDays: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    submit: string;
  };
}

export default Resources;
