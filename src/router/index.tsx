import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Project from "../pages/Projects";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/:slug",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
