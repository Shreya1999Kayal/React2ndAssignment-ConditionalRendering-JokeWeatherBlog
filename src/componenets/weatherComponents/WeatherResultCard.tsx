import type { WeatherResultCardProps } from "../../types/type/WeatherCard.type";
import Weather3Cards from "./WeatherResult3Cards";
import WeatherResultReportCard from "./WeatherResultReportCard";


const WeatherResultCard: React.FC<WeatherResultCardProps> = ({ weather }) => {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">

            {/* City Heading */}
            <div className="mb-8 text-center">

                <h2 className="text-3xl font-semibold text-red-900">
                    {weather.name}
                </h2>

                <p className="mt-2 capitalize text-red-700">
                    {weather.weather[0].description}
                </p>

            </div>


            {/* THREE CARDS */}
            <Weather3Cards weather = { weather } />


            {/* WEATHER REPORT */}
            <WeatherResultReportCard weather = { weather } />

        </main>
    );
};

export default WeatherResultCard;