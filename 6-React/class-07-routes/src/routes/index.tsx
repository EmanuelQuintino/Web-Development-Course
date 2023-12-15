import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { Contact } from "../pages/Contact";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";

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
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
