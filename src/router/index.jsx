import Dashboard from "../dashboard";
import VehicleCounter from "../VehicleCounter";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard
    },
    {
        path: '/count',
        Component: VehicleCounter
    },
])

export default router