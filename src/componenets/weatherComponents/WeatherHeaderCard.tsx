import { FaCloudSunRain } from "react-icons/fa6"
import type { WeatherHeaderCardProps } from "../../types/type/WeatherCard.type"
import type React from "react"


const WeatherHeaderCard: React.FC<WeatherHeaderCardProps> = ({
    setCity,
    getWeather,
    isLoading,
    city

}) => {
    return (
        <header className="bg-gradient-to-br from-yellow-50 to-rose-100 px-4 py-16">

            <div className="mx-auto max-w-6xl text-center">

                <h1 className="mb-4 flex items-center justify-center gap-3 text-4xl font-semibold text-red-900 sm:text-5xl">
                    <FaCloudSunRain className="text-4xl text-red-800 drop-shadow-sm sm:text-5xl" />

                    <span>
                        Weather Report
                    </span>
                </h1>

                <p className="mb-8 text-sm text-red-700 sm:text-base">
                    Get accurate weather information for any city using
                    real-time weather data.
                </p>


                {/* ================= SEARCH FORM ================= */}
                <div
                    className="
                        mx-auto max-w-xl rounded-3xl bg-white p-6
                        shadow-[0_8px_25px_rgba(127,29,29,0.10)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_15px_30px_rgba(127,29,29,0.18)]
                    "
                >

                    <div className="mb-5 text-left">

                        <label
                            htmlFor="city"
                            className="mb-2 block text-sm font-semibold text-red-900"
                        >
                            Enter City
                        </label>

                        <input
                            id="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="e.g. Kolkata"
                            className="
                                w-full rounded-lg border border-red-200
                                bg-yellow-50
                                px-4 py-3 text-sm text-red-900
                                outline-none transition
                                placeholder:text-red-300
                                focus:border-red-500
                                focus:ring-2 focus:ring-yellow-200
                            "
                        />

                    </div>


                    <button
                        type="button"
                        onClick={getWeather}
                        disabled={isLoading}
                        className="
                            relative w-full overflow-hidden rounded-lg
                            bg-red-900 px-6 py-3
                            text-base font-semibold text-yellow-100
                            shadow-sm
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:bg-red-800
                            hover:shadow-[0_10px_20px_rgba(127,29,29,0.30)]
                            disabled:cursor-not-allowed
                            disabled:opacity-80
                        "
                    >

                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">

                                <span
                                    className="
                                        h-5 w-5 animate-spin rounded-full
                                        border-[3px] border-yellow-100/40
                                        border-t-yellow-100
                                    "
                                />

                                Loading...

                            </span>
                        ) : (
                            "Search"
                        )}

                    </button>

                </div>

            </div>

        </header>
    )
}

export default WeatherHeaderCard