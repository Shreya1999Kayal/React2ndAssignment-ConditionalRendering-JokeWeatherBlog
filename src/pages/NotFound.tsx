import { Link } from "react-router-dom";
import AeroShards from "../componenets/AeroshradsComponents/AeroShards.tsx";

const NotFound = () => {
    return (
        <div className="relative min-h-screen bg-[#4A1018] flex items-center justify-center px-6 overflow-hidden">

            <div className="absolute inset-0">
                <AeroShards
                    backgroundColor="#4A1018"
                    shardColor="#F5C542"
                    accentColor="#991B1B"
                    placement="full"
                    flow="stream"
                    material="pearl"
                />
            </div>

            <div className="relative z-10 text-center max-w-md">

                <h1
                    className="text-[110px] leading-none font-black text-yellow-100 mb-4"
                    style={{
                        fontFamily: "cursive",
                        transform: "rotate(-2deg)"
                    }}
                >
                    404
                </h1>

                <h2 className="text-[26px] font-bold text-yellow-50 mb-2">
                    Oops! Page Not Found
                </h2>

                <p className="text-[14.5px] text-rose-100 mb-8">
                    The page you're looking for doesn't exist or has been
                    moved somewhere else.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-yellow-400 text-red-900 text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;