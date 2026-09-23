import React from 'react'
import { FaCloudSunRain } from 'react-icons/fa6'
import type { ConditionCardProps } from '../../types/type/WeatherCard.type'

const ConditionCard: React.FC<ConditionCardProps> = ({ weather }) => {
    return (
        <div
            className="
                overflow-hidden rounded-[18px]
                border border-yellow-300
                bg-gradient-to-br from-yellow-50 to-rose-50
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_18px_35px_rgba(127,29,29,0.15)]
            "
        >
            <div
                className="
                    bg-gradient-to-r from-amber-400 to-yellow-300
                    px-5 py-4 text-center
                    text-red-900
                "
            >
                <h3 className="text-xl font-semibold">
                    <FaCloudSunRain className="mr-2 inline-block align-middle text-red-900" />
                    Weather Condition
                </h3>
            </div>

            <div className="flex flex-col items-center p-6 text-center">

                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    className="h-24 w-24"
                />

                <p className="text-xl font-bold capitalize text-red-900">
                    {weather.weather[0].main}
                </p>

                <p className="mt-2 capitalize text-red-600">
                    {weather.weather[0].description}
                </p>

            </div>
        </div>
    )
}

export default ConditionCard