import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-background text-text">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;