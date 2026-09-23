import { useState } from "react";
import type { WeatherData } from "../../types/interface/weather.interface";
import WeatherHeaderCard from "../../componenets/weatherComponents/WeatherHeaderCard";
import WeatherResultCard from "../../componenets/weatherComponents/WeatherResultCard";

const Weather = () => {
    const [city, setCity] = useState<string>("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);

    const getWeather = async () => {
        setIsLoading(true);
        setIsError(null);

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18cf6f6db3f6b1396a1b5c97f250b64e&units=metric`
            );

            if (!res.ok) {
                throw new Error("City not found");
            }

            const data = await res.json();
            setWeather(data);
        } catch (error: any) {
            setIsError(error.message);
            console.log("Error", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 text-red-900">

            {/* ================= Weather UI ================= */}
            <WeatherHeaderCard
                city={city}
                setCity={setCity}
                getWeather={getWeather}
                isLoading={isLoading}
            />


            {/* ================= ERROR ================= */}
            {isError && (
                <div className="mx-auto mt-8 max-w-6xl px-4">

                    <div className="
                    rounded-xl border border-red-300
                    bg-rose-50 px-5 py-4
                    text-center text-sm font-medium text-red-800
                ">
                        {isError}
                    </div>

                </div>
            )}


            {/* ================= WEATHER RESULTS ================= */}
            {weather && !isError && (
                <WeatherResultCard weather={weather} />
            )}

        </div>
    );
};

export default Weather;