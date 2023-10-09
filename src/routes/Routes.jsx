import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import EventDtls from "../pages/EventDtls/EventDtls";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Orders from "../pages/Orders/Orders";
import OtherSection from "../pages/OtherSection/OtherSection";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: ()=> fetch('/event.json')
            },
            {
                path: '/events/:id',
                element: <PrivateRoute><EventDtls></EventDtls></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/othersection',
                element: <PrivateRoute><OtherSection></OtherSection></PrivateRoute>
            }
        ]
    }
]);

export default routes;