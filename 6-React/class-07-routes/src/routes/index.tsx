import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { Contact } from "../pages/Contact";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";
import { Details } from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <Page404 /> },
  { path: "/details", element: <Details /> },
  { path: "/admin", element: <Navigate to="/" replace /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
