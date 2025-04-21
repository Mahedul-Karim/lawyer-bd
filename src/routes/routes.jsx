import Error from "@/components/error/Error";
import Root from "@/layout/Root";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root />,
        errorElement:<Error />,
        children:[
            {
                index:true,
                element:<Home />
            }
        ]
    }
])