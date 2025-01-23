import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../views/Home.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import NotFound from "../views/NotFound.jsx";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);
