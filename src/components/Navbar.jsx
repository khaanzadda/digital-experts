import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

const navLinkBase =
  "text-sm font-medium text-slate-600/90 hover:text-black transition-colors";
const navLinkActive = "text-black";

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${navLinkBase} ${isActive ? navLinkActive : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = useMemo(
    () => [
      {
        label: "Custom Web Development",
        to: "/services/custom-web-development",
      },
      { label: "Shopify Development", to: "/services/shopify-development" },
      { label: "WordPress Development", to: "/services/wordpress-development" },
      { label: "SaaS Product Development", to: "/services/saas-product-development" },
    ],
    [],
  );

  const sectionLinks = useMemo(
    () => [
      { label: "Portfolio", to: "/portfolio" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
    [],
  );

  function closeAll() {
    setServicesOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mt-2 overflow-visible rounded-2xl bg-white border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-soft">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => closeAll()}
              aria-label="DigitalExperts Home"
            >
              <img
                src="/brand/logo.png"
                alt="DigitalExperts"
                className="h-14 w-49"
                loading="eager"
                decoding="async"
              />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              <NavItem to="/" onClick={() => closeAll()}>
                Home
              </NavItem>
              <NavItem to="/about" onClick={() => closeAll()}>
                About
              </NavItem>

              <div
                className="relative z-[1001] inline-block after:absolute after:inset-x-0 after:top-full after:h-3 after:content-['']"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={(event) => {
                  if (event.currentTarget.contains(event.relatedTarget)) return;
                  setServicesOpen(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    event.currentTarget.blur();
                    setServicesOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`${navLinkBase} inline-flex items-center gap-1`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                >
                  Services <ChevronDown className="h-4 w-4 opacity-80" />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="pointer-events-auto absolute left-0 top-full z-[1002] mt-0 w-[320px] pt-3"
                      role="menu"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-soft">
                        <div className="p-2">
                          {services.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={() => closeAll()}
                              className="block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/5"
                              role="menuitem"
                            >
                              <div className="font-medium">{s.label}</div>
                              <div className="text-xs text-slate-300/80">
                                Learn more about our {s.label.toLowerCase()}.
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {sectionLinks.map((l) => (
                <NavItem key={l.to} to={l.to} onClick={() => closeAll()}>
                  {l.label}
                </NavItem>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                to="/contact"
                onClick={() => closeAll()}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Free Consultation
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm hover:bg-slate-50 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                  <span className="h-0.5 w-full rounded-full bg-slate-950" />
                  <span className="h-0.5 w-full rounded-full bg-slate-950" />
                  <span className="h-0.5 w-full rounded-full bg-slate-950" />
                </span>
              )}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden"
              >
                <div className="border-t border-white/10 px-4 py-4 sm:px-6">
                  <div className="flex flex-col gap-3">
                    <NavItem to="/" onClick={() => closeAll()}>
                      Home
                    </NavItem>
                    <NavItem to="/about" onClick={() => closeAll()}>
                      About
                    </NavItem>

                    <button
                      type="button"
                      className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm font-medium text-slate-900"
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-slate-900/70 p-2">
                            {services.map((s) => (
                              <Link
                                key={s.to}
                                to={s.to}
                                onClick={() => closeAll()}
                                className="rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/5"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {sectionLinks.map((l) => (
                      <NavItem key={l.to} to={l.to} onClick={() => closeAll()}>
                        {l.label}
                      </NavItem>
                    ))}

                    <Link
                      to="/contact"
                      onClick={() => closeAll()}
                      className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-soft"
                    >
                      Book Free Consultation
                    </Link>

                    <div className="pt-2 text-xs text-slate-300/80">
                      <span className="opacity-80">You’re on:</span>{" "}
                      <span className="font-medium text-slate-100">{location.pathname}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
