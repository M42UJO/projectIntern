import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/login/login.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import AddSpaces from "./components/spaces/spaces_add.jsx";
import AddSeting from "./components/setting/setting_add.jsx";
import EditSetting from "./components/setting/setting.jsx";
import SeeSeting from "./components/setting/setting_see.jsx";
import EditList from "./components/setting/list_edit.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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
  {
    path: "/EditList",
    element: <EditList />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
