
import React from "react";
import type { Weather3CardsProps } from "../../types/type/WeatherCard.type";



import TemperatureCard from "./TemperatureCard";
import HumidityCard from "./HumidityCard";
import ConditionCard from "./ConditionCard";

const Weather3Cards: React.FC<Weather3CardsProps> = ({ weather }) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Temperature */}
            <TemperatureCard weather={weather} />


            {/* Humidity */}
            <HumidityCard weather={weather} />


            {/* Weather Condition */}
            <ConditionCard weather={weather} />

        </div>
    );
};

export default Weather3Cards;
