// Interfaces para Open-Meteo API Response

export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  hourly_units: HourlyUnits;  // ✅ NUEVO
  hourly: Hourly;              // ✅ NUEVO
}

export interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  wind_speed_10m: string;
}

export interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  wind_speed_10m: number;
}

// ✅ NUEVAS INTERFACES para datos por hora
export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  wind_speed_10m: string;  // Agrega esta si también seleccionaste wind_speed en hourly
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  wind_speed_10m: number[];  // Agrega esta si también seleccionaste wind_speed en hourly
}