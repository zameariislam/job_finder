import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import NewJob from "../pages/NewJob";
import EditJob from "../pages/EditJob";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/addJob',
                    element: <NewJob />
                },
                {
                    path: '/editJob',
                    element: <EditJob />
                }
            ]

        }
    ]


)

export default router