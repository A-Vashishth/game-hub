import { createBrowserRouter } from "react-router-dom";
import Layout from "./views/Layout";
import HomeView from "./views/homeView";
import DetailsView from "./views/DetailsView";
import ErrorView from "./views/ErrorView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "details/:slug",
        element: <DetailsView />,
      },
    ],
  },
]);

export default router;
