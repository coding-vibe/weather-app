// TODO: let's rename it and the file to fixture
import { ForecastAPIResponse } from 'types/forecast';

const FORECAST = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1694034000,
      main: {
        temp: 22.97,
        feels_like: 22.39,
        temp_min: 22.7,
        temp_max: 22.97,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1006,
        humidity: 41,
        temp_kf: 0.27,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      // TODO: let's removed unused properties
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clouds: {
        all: 7,
      },
      wind: {
        speed: 4.28,
        deg: 357,
        gust: 5.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-07 00:00:00',
    },
    {
      dt: 1694120400,
      main: {
        temp: 21.3,
        feels_like: 20.48,
        temp_min: 17.96,
        temp_max: 21.3,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1006,
        humidity: 38,
        temp_kf: 3.34,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 3.22,
        deg: 34,
        gust: 7.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-08 00:00:00',
    },
    {
      dt: 1694206800,
      main: {
        temp: 17.3,
        feels_like: 16.18,
        temp_min: 14.47,
        temp_max: 17.3,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1007,
        humidity: 42,
        temp_kf: 2.83,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.64,
        deg: 63,
        gust: 5.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-09 00:00:00',
    },
    {
      dt: 1694293200,
      main: {
        temp: 12.85,
        feels_like: 11.5,
        temp_min: 12.85,
        temp_max: 12.85,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1007,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.08,
        deg: 57,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-10 00:00:00',
    },
    {
      dt: 1694379600,
      main: {
        temp: 12.01,
        feels_like: 10.7,
        temp_min: 12.01,
        temp_max: 12.01,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1006,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'iconDescriptions.fewClouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.36,
        deg: 353,
        gust: 1.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-11 00:00:00',
    },
    {
      dt: 1694466000,
      main: {
        temp: 15.94,
        feels_like: 14.79,
        temp_min: 15.94,
        temp_max: 15.94,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1006,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 2.25,
        deg: 346,
        gust: 3.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-12 00:00:00',
    },
    {
      dt: 1694552400,
      main: {
        temp: 20.6,
        feels_like: 19.53,
        temp_min: 20.6,
        temp_max: 20.6,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1005,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 16,
      },
      wind: {
        speed: 3.15,
        deg: 346,
        gust: 4.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-13 00:00:00',
    },
    {
      dt: 1694638800,
      main: {
        temp: 23.53,
        feels_like: 22.54,
        temp_min: 23.53,
        temp_max: 23.53,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1003,
        humidity: 23,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 2.99,
        deg: 333,
        gust: 4.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-14 00:00:00',
    },
    {
      dt: 1694725200,
      main: {
        temp: 23.53,
        feels_like: 22.51,
        temp_min: 23.53,
        temp_max: 23.53,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1001,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'iconDescriptions.scatteredClouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 3.96,
        deg: 324,
        gust: 5.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-15 00:00:00',
    },
    {
      dt: 1694811600,
      main: {
        temp: 18.55,
        feels_like: 17.37,
        temp_min: 18.55,
        temp_max: 18.55,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1001,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'iconDescriptions.scatteredClouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 2.79,
        deg: 332,
        gust: 6.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-16 00:00:00',
    },
    {
      dt: 1694898000,
      main: {
        temp: 16.61,
        feels_like: 15.42,
        temp_min: 16.61,
        temp_max: 16.61,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1000,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 2.59,
        deg: 329,
        gust: 5.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-17 00:00:00',
    },
    {
      dt: 1694984400,
      main: {
        temp: 14.81,
        feels_like: 13.65,
        temp_min: 14.81,
        temp_max: 14.81,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1000,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.14,
        deg: 4,
        gust: 3.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-18 00:00:00',
    },
    {
      dt: 1695070800,
      main: {
        temp: 12.73,
        feels_like: 11.68,
        temp_min: 12.73,
        temp_max: 12.73,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1000,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'iconDescriptions.brokenClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 2.49,
        deg: 24,
        gust: 4.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-19 00:00:00',
    },
    {
      dt: 1695157200,
      main: {
        temp: 15.5,
        feels_like: 14.54,
        temp_min: 15.5,
        temp_max: 15.5,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1002,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'iconDescriptions.scatteredClouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 3.91,
        deg: 48,
        gust: 6.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-20 00:00:00',
    },
    {
      dt: 1695243600,
      main: {
        temp: 19.86,
        feels_like: 18.87,
        temp_min: 19.86,
        temp_max: 19.86,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1003,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 4.34,
        deg: 44,
        gust: 5.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-21 00:00:00',
    },
    {
      dt: 1695330000,
      main: {
        temp: 21.92,
        feels_like: 20.85,
        temp_min: 21.92,
        temp_max: 21.92,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1003,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 3.84,
        deg: 30,
        gust: 4.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-22 00:00:00',
    },
    {
      dt: 1695416400,
      main: {
        temp: 21.02,
        feels_like: 19.75,
        temp_min: 21.02,
        temp_max: 21.02,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1003,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 3.52,
        deg: 40,
        gust: 3.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-23 00:00:00',
    },
    {
      dt: 1695502800,
      main: {
        temp: 15.7,
        feels_like: 14.08,
        temp_min: 15.7,
        temp_max: 15.7,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1004,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 2.35,
        deg: 82,
        gust: 4.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-24 00:00:00',
    },
    {
      dt: 1695589200,
      main: {
        temp: 13,
        feels_like: 11.4,
        temp_min: 13,
        temp_max: 13,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1005,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'iconDescriptions.fewClouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 2.28,
        deg: 104,
        gust: 4.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-25 00:00:00',
    },
    {
      dt: 1695675600,
      main: {
        temp: 11.7,
        feels_like: 10.13,
        temp_min: 11.7,
        temp_max: 11.7,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1005,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'iconDescriptions.fewClouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 1.45,
        deg: 127,
        gust: 2.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-26 00:00:00',
    },
    {
      dt: 1695762000,
      main: {
        temp: 10.9,
        feels_like: 9.33,
        temp_min: 10.9,
        temp_max: 10.9,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1005,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 0.75,
        deg: 132,
        gust: 0.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-09-27 00:00:00',
    },
    {
      dt: 1695848400,
      main: {
        temp: 15.05,
        feels_like: 13.6,
        temp_min: 15.05,
        temp_max: 15.05,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1005,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.04,
        deg: 98,
        gust: 1.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-28 00:00:00',
    },
    {
      dt: 1695934800,
      main: {
        temp: 20.5,
        feels_like: 19.28,
        temp_min: 20.5,
        temp_max: 20.5,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1005,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.1,
        deg: 56,
        gust: 1.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-29 00:00:00',
    },
    {
      dt: 1696021200,
      main: {
        temp: 23.22,
        feels_like: 22.17,
        temp_min: 23.22,
        temp_max: 23.22,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1003,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.51,
        deg: 44,
        gust: 0.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-09-30 00:00:00',
    },
    {
      dt: 1696107600,
      main: {
        temp: 22.22,
        feels_like: 21.12,
        temp_min: 22.22,
        temp_max: 22.22,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1002,
        humidity: 24,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'iconDescriptions.scatteredClouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 1.05,
        deg: 360,
        gust: 0.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-01 00:00:00',
    },
    {
      dt: 1696194000,
      main: {
        temp: 18.27,
        feels_like: 16.99,
        temp_min: 18.27,
        temp_max: 18.27,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1002,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'iconDescriptions.brokenClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 1.15,
        deg: 79,
        gust: 1.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-02 00:00:00',
    },
    {
      dt: 1696280400,
      main: {
        temp: 16.65,
        feels_like: 15.34,
        temp_min: 16.65,
        temp_max: 16.65,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1002,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.6,
        deg: 158,
        gust: 2.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-03 00:00:00',
    },
    {
      dt: 1696366800,
      main: {
        temp: 15.52,
        feels_like: 14.2,
        temp_min: 15.52,
        temp_max: 15.52,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1001,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 1.81,
        deg: 186,
        gust: 2.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-04 00:00:00',
    },
    {
      dt: 1696453200,
      main: {
        temp: 15.02,
        feels_like: 13.73,
        temp_min: 15.02,
        temp_max: 15.02,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1000,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.72,
        deg: 190,
        gust: 2.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-05 00:00:00',
    },
    {
      dt: 1696539600,
      main: {
        temp: 17.72,
        feels_like: 16.41,
        temp_min: 17.72,
        temp_max: 17.72,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1000,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.05,
        deg: 186,
        gust: 2.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-06 00:00:00',
    },
    {
      dt: 1696626000,
      main: {
        temp: 22.63,
        feels_like: 21.5,
        temp_min: 22.63,
        temp_max: 22.63,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1001,
        humidity: 21,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.86,
        deg: 173,
        gust: 2.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-07 00:00:00',
    },
    {
      dt: 1696712400,
      main: {
        temp: 24.72,
        feels_like: 23.69,
        temp_min: 24.72,
        temp_max: 24.72,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 999,
        humidity: 17,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.97,
        deg: 159,
        gust: 2.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-08 00:00:00',
    },
    {
      dt: 1696798800,
      main: {
        temp: 24.19,
        feels_like: 23.16,
        temp_min: 24.19,
        temp_max: 24.19,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 998,
        humidity: 19,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.03,
        deg: 132,
        gust: 3.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-09 00:00:00',
    },
    {
      dt: 1696885200,
      main: {
        temp: 19.27,
        feels_like: 18.22,
        temp_min: 19.27,
        temp_max: 19.27,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 999,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.16,
        deg: 136,
        gust: 9.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-10 00:00:00',
    },
    {
      dt: 1696971600,
      main: {
        temp: 17.38,
        feels_like: 16.32,
        temp_min: 17.38,
        temp_max: 17.38,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 999,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 3.41,
        deg: 142,
        gust: 8.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-11 00:00:00',
    },
    {
      dt: 1697058000,
      main: {
        temp: 18.11,
        feels_like: 17.1,
        temp_min: 18.11,
        temp_max: 18.11,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 999,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 3.84,
        deg: 158,
        gust: 10.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-12 00:00:00',
    },
    {
      dt: 1697144400,
      main: {
        temp: 17.14,
        feels_like: 16.11,
        temp_min: 17.14,
        temp_max: 17.14,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 999,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.03,
        deg: 151,
        gust: 7.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-10-13 00:00:00',
    },
    {
      dt: 1697230800,
      main: {
        temp: 18.81,
        feels_like: 17.82,
        temp_min: 18.81,
        temp_max: 18.81,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1000,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'iconDescriptions.brokenClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 3.86,
        deg: 157,
        gust: 6.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-14 00:00:00',
    },
    {
      dt: 1697317200,
      main: {
        temp: 22.56,
        feels_like: 21.68,
        temp_min: 22.56,
        temp_max: 22.56,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1000,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.04,
        deg: 167,
        gust: 5.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-15 00:00:00',
    },
    {
      dt: 1697403600,
      main: {
        temp: 26.02,
        feels_like: 26.02,
        temp_min: 26.02,
        temp_max: 26.02,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1000,
        humidity: 23,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.26,
        deg: 166,
        gust: 4.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-10-16 00:00:00',
    },
  ],
  city: {
    id: 696050,
    name: 'Pushcha-Vodytsya',
    coord: {
      lat: 50.45,
      lon: 30.5241,
    },
    country: 'UA',
    population: 0,
    timezone: 10800,
    sunrise: 1694056841,
    sunset: 1694104315,
  },
} as ForecastAPIResponse;

export default FORECAST;
