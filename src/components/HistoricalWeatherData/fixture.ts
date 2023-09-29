import { ForecastAPIResponse } from 'types/forecast';

const FIXTURE = {
  list: [
    {
      dt: 1694034000,
      main: {
        temp: 22.97,
        humidity: 41,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1694120400,
      main: {
        temp: 21.3,
        humidity: 38,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
    },
    {
      dt: 1694206800,
      main: {
        temp: 17.3,
        humidity: 42,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
    },
    {
      dt: 1694293200,
      main: {
        temp: 12.85,
        humidity: 50,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
    },
    {
      dt: 1694379600,
      main: {
        temp: 12.01,
        humidity: 55,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02n',
        },
      ],
    },
    {
      dt: 1694466000,
      main: {
        temp: 15.94,
        humidity: 46,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
    },
    {
      dt: 1694552400,
      main: {
        temp: 20.6,
        humidity: 31,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
    },
    {
      dt: 1694638800,
      main: {
        temp: 23.53,
        humidity: 23,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
    },
    {
      dt: 1694725200,
      main: {
        temp: 23.53,
        humidity: 22,
      },
      weather: [
        {
          description: 'iconDescriptions.scatteredClouds',
          icon: '03d',
        },
      ],
    },
    {
      dt: 1694811600,
      main: {
        temp: 18.55,
        humidity: 35,
      },
      weather: [
        {
          description: 'iconDescriptions.scatteredClouds',
          icon: '03n',
        },
      ],
    },
    {
      dt: 1694898000,
      main: {
        temp: 15,
        humidity: 60,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02d',
        },
      ],
    },
    {
      dt: 1694984400,
      main: {
        temp: 14.81,
        humidity: 50,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1695070800,
      main: {
        temp: 12.73,
        humidity: 62,
      },
      weather: [
        {
          description: 'iconDescriptions.brokenClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1695157200,
      main: {
        temp: 15.5,
        humidity: 55,
      },
      weather: [
        {
          description: 'iconDescriptions.scatteredClouds',
          icon: '03d',
        },
      ],
    },
    {
      dt: 1695243600,
      main: {
        temp: 19.86,
        humidity: 37,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1695330000,
      main: {
        temp: 21.92,
        humidity: 26,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1695416400,
      main: {
        temp: 21.02,
        humidity: 22,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1695502800,
      main: {
        temp: 15.7,
        humidity: 29,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
    },
    {
      dt: 1695589200,
      main: {
        temp: 13,
        humidity: 40,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02n',
        },
      ],
    },
    {
      dt: 1695675600,
      main: {
        temp: 11.7,
        humidity: 46,
      },
      weather: [
        {
          description: 'iconDescriptions.fewClouds',
          icon: '02n',
        },
      ],
    },
    {
      dt: 1695762000,
      main: {
        temp: 10.9,
        humidity: 49,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01n',
        },
      ],
    },
    {
      dt: 1695848400,
      main: {
        temp: 15.05,
        humidity: 38,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1695934800,
      main: {
        temp: 20.5,
        humidity: 26,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1696021200,
      main: {
        temp: 23.22,
        humidity: 22,
      },
      weather: [
        {
          description: 'iconDescriptions.clearSky',
          icon: '01d',
        },
      ],
    },
    {
      dt: 1696107600,
      main: {
        temp: 22.22,
        humidity: 24,
      },
      weather: [
        {
          description: 'iconDescriptions.scatteredClouds',
          icon: '03d',
        },
      ],
    },
    {
      dt: 1696194000,
      main: {
        temp: 18.27,
        humidity: 32,
      },
      weather: [
        {
          description: 'iconDescriptions.brokenClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1696280400,
      main: {
        temp: 16.65,
        humidity: 37,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1696366800,
      main: {
        temp: 15.52,
        humidity: 41,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1696453200,
      main: {
        temp: 15.02,
        humidity: 44,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1696539600,
      main: {
        temp: 17.72,
        humidity: 33,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1696626000,
      main: {
        temp: 22.63,
        humidity: 21,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1696712400,
      main: {
        temp: 24.72,
        humidity: 17,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1696798800,
      main: {
        temp: 24.19,
        humidity: 19,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1696885200,
      main: {
        temp: 19.27,
        humidity: 37,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1696971600,
      main: {
        temp: 17.38,
        humidity: 44,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1697058000,
      main: {
        temp: 18.11,
        humidity: 43,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1697144400,
      main: {
        temp: 17.14,
        humidity: 46,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04n',
        },
      ],
    },
    {
      dt: 1697230800,
      main: {
        temp: 18.81,
        humidity: 41,
      },
      weather: [
        {
          description: 'iconDescriptions.brokenClouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1697317200,
      main: {
        temp: 22.56,
        humidity: 31,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
    },
    {
      dt: 1697403600,
      main: {
        temp: 26.02,
        humidity: 23,
      },
      weather: [
        {
          description: 'iconDescriptions.overcastClouds',
          icon: '04d',
        },
      ],
    },
  ],
} as ForecastAPIResponse;

export default FIXTURE;
