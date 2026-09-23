export interface WeatherInput {
  city: string;
  type: string;
  placeholder: string;
}

interface weatherType {
  main: string;
  description: string;
  icon: string;
};

interface mainType {
  temp: number;
  feels_like: number;
  humidity: number;
};

export interface WeatherData {
  name: string;

  main: mainType

  weather: weatherType[]


}