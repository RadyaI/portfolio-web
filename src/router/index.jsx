import Dashboard from "../dashboard";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard
    }
])

export default router