import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}