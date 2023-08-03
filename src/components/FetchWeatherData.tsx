import { useState, useEffect } from 'react';
import { axiosDefaultConfig } from '../axiosDefaultConfig';

export default function FetchWeatherData() {
    const londonGeo = {
        lat: '44.34',
        lon: '10.99'
    }
    const { lat, lon } = londonGeo;
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axiosDefaultConfig.get("/data/2.5/forecast", {
                    params: {
                        lat: lat,
                        lon: lon,
                    },
                });
                setWeatherData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        void fetchWeatherData();
    }, [lat, lon]);

    console.log(weatherData);
}