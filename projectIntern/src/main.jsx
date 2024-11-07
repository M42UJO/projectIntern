import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./components/login.jsx";
import Dashboard from "./components/dashboard.jsx";
import AddSpaces from "./components/Spaces_add.jsx";
import AddSeting from "./components/setting/setting_add.jsx";
import EditSetting from "./components/setting/setting.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SeeSeting from "./components/setting/setting_see.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/EditSetting",
    element: <EditSetting />,
  },
  {
    path: "/AddSetting",
    element: <AddSeting />,
  },
  {
    path: "/AddSpaces",
    element: <AddSpaces />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SeeSetting",
    element: <SeeSeting />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
