import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    return (
        <nav className="bg-red-900 px-6 py-4">

            <div className="flex items-center justify-between">

                <h1 className="text-xl font-bold text-yellow-100">
                    Asignement
                </h1>

                <div className="flex gap-6">

                    <NavLink
                        to="/weather"
                        className={
                            location.pathname === "/" ||
                            location.pathname === "/weather"
                                ? "font-bold text-yellow-300"
                                : "text-yellow-100 hover:text-yellow-200"
                        }
                    >
                        Weather
                    </NavLink>

                    <NavLink
                        to="/joke"
                        className={({ isActive }) =>
                            isActive
                                ? "font-bold text-yellow-300"
                                : "text-yellow-100 hover:text-yellow-200"
                        }
                    >
                        Joke
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? "font-bold text-yellow-300"
                                : "text-yellow-100 hover:text-yellow-200"
                        }
                    >
                        Blog
                    </NavLink>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;