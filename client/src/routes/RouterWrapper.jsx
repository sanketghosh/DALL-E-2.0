import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const RouterWrapper = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default RouterWrapper;
