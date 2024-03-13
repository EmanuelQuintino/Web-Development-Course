import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
  { path: "/details", element: <Details />, errorElement: <Page404 /> },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
