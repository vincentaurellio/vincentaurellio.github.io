import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:slug",
    element: <Project />,
  },
]);
