# OpenWeatherMap API Documentation

## Weather Forecast API

### API Endpoint

- [Get 5 Day Weather Forecast with 3-hour Step](https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key})

#### Parameters

- Required:

1. `lat` - Geographical latitude coordinate.
2. `lon` - Geographical longitude coordinate.
3. `appid` - Your API key.

- Optional:

1. `cnt` - Number of days to forecast (1 to 30).
2. `mode` - Data format (json, xml).
3. `units` - Units of measurement (standard, metric, imperial).
4. `lang` - Language code (2-letter code). [Language Codes](https://openweathermap.org/api/geocoding-api)

## Historical Weather Forecast API

- Currently hardcoded, resulting in the retrieval of the same data regardless of the selected time period or location.

## Geocoding API

### API Endpoint

- [Get Location by City Name](http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key})

#### Parameters

- Required:

1. `q` - City name, state code (only for the US), and country code separated by commas. Please use ISO 3166 country codes.
2. `appid` - Your API key.

- Optional:

1. `limit` - Number of locations in the API response (up to 5 results).
