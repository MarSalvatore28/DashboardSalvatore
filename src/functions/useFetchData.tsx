import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData(): OpenMeteoResponse | null | undefined {

    // Ejemplo con Guayaquil, Ecuador (ajusta según la ciudad que elegiste)
    const URL =
        "https://api.open-meteo.com/v1/forecast?latitude=-2.1894&longitude=-79.8886&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm";

    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); 
    }, []);  
    
    return data;
}