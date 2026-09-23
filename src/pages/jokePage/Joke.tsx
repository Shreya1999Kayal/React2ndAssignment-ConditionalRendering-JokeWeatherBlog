import { useEffect, useState } from "react";
import type { joke } from "../../types/interface/joke.interface";

const Joke = () => {
    const [joke, setJoke] = useState<joke | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);

    const getJoke = async () => {
        setIsLoading(true);
        setIsError(null);

        try {
            const res = await fetch(
                "https://official-joke-api.appspot.com/random_joke"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch joke");
            }

            const data = await res.json();
            setJoke(data);
        } catch (error: any) {
            setIsError(error.message);
            console.log("Error", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-rose-100 px-4 py-16 text-red-900">

            <div className="mx-auto max-w-2xl text-center">

                <h1 className="mb-8 text-4xl font-semibold text-red-900">
                    Random Joke Generator
                </h1>

                {isLoading && (
                    <p className="text-red-700">
                        Loading...
                    </p>
                )}

                {isError && (
                    <p className="mb-6 rounded-lg border border-red-200 bg-rose-50 px-4 py-3 text-red-700">
                        {isError}
                    </p>
                )}

                {joke && !isLoading && !isError && (
                    <div className="rounded-2xl border border-red-100 bg-white p-8 shadow-lg">

                        <p className="mb-4 text-xl font-semibold text-red-900">
                            {joke.setup}
                        </p>

                        <p className="mb-8 text-lg text-red-700">
                            {joke.punchline}
                        </p>

                        <button
                            type="button"
                            onClick={getJoke}
                            disabled={isLoading}
                            className="rounded-lg bg-red-900 px-6 py-3 font-semibold text-yellow-100 transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            New Joke
                        </button>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Joke;