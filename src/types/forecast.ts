interface ForecastBody {
  dt: number;
  main: {
    humidity: number;
    temp: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
}

export default ForecastBody;

export interface ForecastAPIResponse {
  list: ForecastBody[];
}
