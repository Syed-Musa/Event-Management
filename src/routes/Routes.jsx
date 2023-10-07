import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Homepage from "../pages/Homepage/Homepage";

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
            
        ]
    }
]);

export default routes;