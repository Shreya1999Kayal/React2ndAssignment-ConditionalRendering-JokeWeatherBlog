import React from 'react'
import { FaCloud, FaDroplet } from 'react-icons/fa6'
import { WiHumidity } from 'react-icons/wi'
import type { HumidityCardProps } from '../../types/type/WeatherCard.type'

const HumidityCard: React.FC<HumidityCardProps> = ({ weather }) => {
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
                    Humidity{" "}
                    <WiHumidity className="inline-block align-middle text-red-900" />
                </h3>
            </div>

            <div className="space-y-5 p-6 text-center">

                <p className="text-red-700">
                    <FaDroplet className="mr-2 inline-block align-middle text-red-700" />
                    Humidity:
                    <strong className="ml-2 text-3xl font-extrabold text-red-900">
                        {weather.main.humidity}%
                    </strong>
                </p>

                <p className="text-red-700">
                    <FaCloud className="mr-2 inline-block align-middle text-red-700" />
                    Weather:
                    <strong className="ml-2 font-semibold text-red-900">
                        {weather.weather[0].main}
                    </strong>
                </p>

            </div>
        </div>
    )
}

export default HumidityCard