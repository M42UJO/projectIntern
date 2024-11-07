import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./components/login.jsx";
import Dashboard from "./components/dashboard.jsx";
import Spaces from "./components/spaces.jsx";
import EditSetting from "./components/setting.jsx";
import AddSpaces from "./components/Spaces_add.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Spaces",
    element: <Spaces />,
  },
  {
    path: "/EditSetting",
    element: <EditSetting />,
  },
  {
    path: "/AddSpaces",
    element: <AddSpaces />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
