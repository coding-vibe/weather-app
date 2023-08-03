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
                const response = await axiosDefaultConfig.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1654c28d41c1a36f7849a6714417335e'`);
                setWeatherData(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchWeatherData();
        console.log(weatherData)
    }, [weatherData, lat, lon]);
}