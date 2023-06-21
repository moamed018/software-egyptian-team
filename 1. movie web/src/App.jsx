/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Tv from "./pages/Tv/Tv";
import Servies from "./pages/Servies/Servies";
import Contact from "./pages/Contact/Contact";
import Show from "./pages/Show/Show";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Search from "./pages/Search/Search"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/movies",
            element: <Movies />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/movies/:id",
            element: <Show />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/tv",
            element: <Tv />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/tv/:id",
            element: <Show />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/servies",
            element: <Servies />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/contact",
            element: <Contact />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/login",
            element: <Login />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/search",
            element: <Search />,
            errorElement: <ErrorPage />,
        },
        {
            path: "*",
            element: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;

/*
// import Slider from "./components/ui/Slider/Slider";
import { from } from './../node_modules/react-router/dist/index';


// function App() {
//     const slides = [
//         <div
//             className="slide"
//             style={{ backgroundColor: "#000" }}
//             key="1"
//         ></div>,
//         <div
//             className="slide"
//             style={{ backgroundColor: "#f00" }}
//             key="2"
//         ></div>,
//         <div
//             className="slide"
//             style={{ backgroundColor: "#0f0" }}
//             key="3"
//         ></div>,
//         <div
//             className="slide"
//             style={{ backgroundColor: "#00f" }}
//             key="4"
//         ></div>,
//     ];

//     return <Slider slides={slides} />;
// }

// export default App;
*/
