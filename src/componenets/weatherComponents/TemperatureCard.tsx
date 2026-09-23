import React from 'react'
import { FaTemperatureArrowUp } from 'react-icons/fa6'
import { LiaTemperatureHighSolid } from 'react-icons/lia'
import { TbTemperatureCelsius } from 'react-icons/tb'
import type { TemperatureCardProps } from '../../types/type/WeatherCard.type'

const TemperatureCard: React.FC<TemperatureCardProps> = ({ weather }) => {
    return (
        <div
            className="
                    overflow-hidden rounded-[18px]
                    border border-yellow-300
                    bg-gradient-to-br from-yellow-50 to-yellow-100
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_18px_35px_rgba(127,29,29,0.15)]
                "
        >
            <div
                className="
                        bg-gradient-to-r from-yellow-500 to-amber-400
                        px-5 py-4 text-center
                        text-red-900
                    "
            >
                <h3 className="text-xl font-semibold">
                    Temperature{" "}
                    <LiaTemperatureHighSolid className="inline-block align-middle text-red-900" />
                </h3>
            </div>

            <div className="space-y-4 p-6 text-center">

                <p className="text-red-700">
                    <FaTemperatureArrowUp className="mr-2 inline-block align-middle text-red-700" />
                    Temp:
                    <strong className="ml-2 text-3xl font-extrabold text-red-900">
                        {Math.round(weather.main.temp)}
                        <TbTemperatureCelsius className="ml-1 inline-block align-middle text-2xl text-red-900" />
                    </strong>
                </p>

                <p className="text-red-700">
                    <FaTemperatureArrowUp className="mr-2 inline-block align-middle text-red-700" />
                    Feels Like:
                    <strong className="ml-2 font-semibold text-red-900">
                        {Math.round(weather.main.feels_like)}
                        <TbTemperatureCelsius className="ml-1 inline-block align-middle text-lg text-red-900" />
                    </strong>
                </p>

            </div>
        </div>
    )
}

export default TemperatureCard