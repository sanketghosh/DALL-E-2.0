import { createBrowserRouter } from "react-router-dom";
import { CreatePost, Home } from "../pages";
import Layout from "../layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);
