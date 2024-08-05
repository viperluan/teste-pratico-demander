import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Home } from "./pages/home";
import { Converter } from "./pages/converter";
import { TreeMap } from "./pages/treemap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/converter",
    element: <Converter />,
  },
  {
    path: "/treemap",
    element: <TreeMap />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
