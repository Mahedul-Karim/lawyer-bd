import FullPageSpinner from "@/components/common/loader/FullPageSpinner";
import Loader from "@/components/common/loader/Loader";
import Error from "@/components/error/Error";
import Root from "@/layout/Root";
import Home from "@/pages/home/Home";
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
          const promise = new Promise((resolve) =>
            setTimeout(() => {
              resolve({ hello: "World" });
            }, 500)
          );
          return promise;
        },
        hydrateFallbackElement: <FullPageSpinner />,
      },
    ],
  },
]);
