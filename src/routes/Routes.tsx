// src/routes/Routes.tsx

import { createBrowserRouter } from "react-router-dom";
import MainContent from "../Layouts/MainContent";

import Weather from "../pages/weatherPage/Weather";
import Joke from "../pages/jokePage/Joke";
import Blog from "../pages/blogPage/Blog";
import SingleBlogDetails from "../pages/blogPage/SingleBlogDetails";
import Author from "../pages/blogPage/Author";
import NotFound from "../pages/NotFound";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainContent />,
        children: [
            {
                index: true,
                element: <Weather />
            },
            {
                path: "weather",
                element: <Weather />
            },
            {
                path: "joke",
                element: <Joke />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blog/:id",
                element: <SingleBlogDetails />
            },
            {
                path: "author/:authorId",
                element: <Author />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default Routes;