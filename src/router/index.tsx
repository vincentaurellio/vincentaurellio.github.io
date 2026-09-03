import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Project from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/:slug",
    element: <Project />,
  }
]);
