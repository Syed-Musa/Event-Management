import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: ()=> fetch('/event.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
]);

export default routes;