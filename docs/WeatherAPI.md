[WebLink] (https://openweathermap.org/forecast5)

# Weather API

## [APICall] (api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key})

## Params

#### Required:

1. lat, lon - Geographical coordinates (latitude, longitude)
2. appid - API key

#### Optional:

1. cnt - A number of days, which will be returned in the API response (from 1 to 30)
2. mode - Data format. Possible values are: json, xml
3. units - Units of measurement. standard, metric and imperial units are available
4. lang - Language code