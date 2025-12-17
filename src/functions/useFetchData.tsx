import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  'Guayaquil': { latitude: -2.1894, longitude: -79.8886 },
  'Quito': { latitude: -0.1807, longitude: -78.4678 },
  'Manta': { latitude: -0.9677, longitude: -80.7089 },
  'Cuenca': { latitude: -2.9001, longitude: -79.0059 }
};

export default function useFetchData(selectedOption: string | null): OpenMeteoResponse | null | undefined {
    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cityConfig = selectedOption && CITY_COORDS[selectedOption] 
                    ? CITY_COORDS[selectedOption] 
                    : CITY_COORDS["Guayaquil"];

                const URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm`;

                const response = await fetch(URL);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); 
    }, [selectedOption]);
    
    return data;
}