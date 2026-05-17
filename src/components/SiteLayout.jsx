import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function scrollToHash(hash) {
  if (!hash) return false;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
  return true;
}

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    const handled = scrollToHash(location.hash);
    if (!handled) window.scrollTo({ top: 0, behavior: "auto" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const t = window.setTimeout(() => scrollToHash(location.hash), 0);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-50">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
