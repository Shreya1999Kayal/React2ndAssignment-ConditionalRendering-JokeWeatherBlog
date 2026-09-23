
import React from "react";
import type { WeatherResultReportCardProps } from "../../types/type/WeatherCard.type";


const WeatherResultReportCard: React.FC<WeatherResultReportCardProps> = ({ weather }) => {
    return (
        <section className="mt-12">

            <h2 className="mb-6 text-center text-3xl font-semibold text-red-900">
                Weather Report
            </h2>

            <div
                className="
                overflow-hidden rounded-2xl bg-white
                shadow-[0_12px_30px_rgba(127,29,29,0.12)]
            "
            >

                <div
                    className="
                    grid grid-cols-1
                    divide-y divide-red-100
                    sm:grid-cols-3 sm:divide-x sm:divide-y-0
                "
                >

                    <div className="p-6 text-center">

                        <p className="text-sm font-medium text-red-500">
                            City
                        </p>

                        <p className="mt-2 text-xl font-bold text-red-900">
                            {weather.name}
                        </p>

                    </div>


                    <div className="p-6 text-center">

                        <p className="text-sm font-medium text-red-500">
                            Temperature
                        </p>

                        <p className="mt-2 text-xl font-bold text-red-900">
                            {Math.round(weather.main.temp)}°C
                        </p>

                    </div>


                    <div className="p-6 text-center">

                        <p className="text-sm font-medium text-red-500">
                            Condition
                        </p>

                        <p className="mt-2 text-xl font-bold text-red-900">
                            {weather.weather[0].main}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WeatherResultReportCard;

