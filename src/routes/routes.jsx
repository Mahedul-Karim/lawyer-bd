import FullPageSpinner from "@/components/common/loader/FullPageSpinner";
import Loader from "@/components/common/loader/Loader";
import Error from "@/components/error/Error";
import Root from "@/layout/Root";
import Home from "@/pages/home/Home";
import LawyerDetails from "@/pages/lawyer-details/LawyerDetails";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const lawyers = await fetch("/lawyers.json");
          return lawyers;
        },
        hydrateFallbackElement: <FullPageSpinner />,
      },
    ],
  },
  {
    path: "/lawyer/:licenseNumber",
    element: <LawyerDetails />,
    loader: async () => {
      const lawyers = await fetch("/lawyers.json");
      return lawyers;
    },
    hydrateFallbackElement: <FullPageSpinner />,
  },
]);
