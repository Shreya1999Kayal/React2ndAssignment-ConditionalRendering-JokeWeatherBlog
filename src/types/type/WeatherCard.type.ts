import type { WeatherData } from "../interface/weather.interface";

export type WeatherHeaderCardProps = {
    city: string;
    setCity: (city: string) => void;
    getWeather: () => void;
    isLoading: boolean;
};

export type WeatherResultCardProps = {
    weather: WeatherData;
};

export type Weather3CardsProps ={
    weather: WeatherData;
}

export type WeatherResultReportCardProps = {
    weather: WeatherData;
};

export type  TemperatureCardProps  = {
    weather: WeatherData;
};

export type HumidityCardProps = {
    weather: WeatherData;
};

export type ConditionCardProps = {
    weather: WeatherData;
};