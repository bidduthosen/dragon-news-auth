import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Roots from "../Pages/Roots/Roots";

export const router = createBrowserRouter([

        {
            path: '/',
            element: <Roots></Roots>,
            errorElement: <h1>error page 404</h1>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <h1>about</h1>
                },
                {
                    path: '/career',
                    element: <h3>career</h3>
                },
            ]
        }
])

