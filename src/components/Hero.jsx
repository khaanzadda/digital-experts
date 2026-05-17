import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "./utils.jsx";

function FloatingCard({ className, title, desc }) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl shadow-soft ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs leading-5 text-slate-300/90">{desc}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.30),transparent_40%),radial-gradient(circle_at_70%_10%,rgba(244,63,94,0.22),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.16),transparent_45%)]" />
        <div className="absolute inset-0 opacity-50 [background-size:20px_20px] bg-grid-fade" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Premium agency-level execution
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building Powerful Digital Solutions for Modern Businesses
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-slate-200/90"
            >
              We help startups and businesses build scalable websites, eCommerce
              stores, and SaaS platforms.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 grid gap-3 text-sm text-slate-200/90 sm:grid-cols-2"
            >
              {[
                "Fast, SEO-first builds",
                "Premium UI/UX & motion",
                "Conversion-focused layout",
                "Long-term support",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-400" />
                  <span>{t}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-soft"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(239,68,68,0.28),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.20),transparent_45%)]" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">Digital Dashboard</div>
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Performance", value: "98/100" },
                    { label: "SEO", value: "A+" },
                    { label: "Conversion", value: "Optimized" },
                    { label: "Deployment", value: "CI/CD" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-xs text-slate-300/80">{m.label}</div>
                      <div className="mt-2 text-lg font-bold text-white">{m.value}</div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-red-400 via-rose-400 to-orange-300" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-300/80">Weekly Activity</div>
                    <div className="text-xs font-semibold text-rose-200">+32%</div>
                  </div>
                  <div className="mt-3 grid grid-cols-12 items-end gap-1">
                    {[3, 6, 4, 8, 7, 10, 9, 12, 8, 11, 10, 13].map((h, i) => (
                      <div
                        key={i}
                        className="rounded-t bg-gradient-to-b from-orange-300 to-red-500"
                        style={{ height: `${h * 6}px`, opacity: 0.18 + i * 0.02 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <FloatingCard
              className="absolute -left-2 top-10 hidden w-52 lg:block"
              title="Launch faster"
              desc="MVPs in weeks with a clear roadmap and clean delivery."
            />
            <FloatingCard
              className="absolute -right-2 bottom-10 hidden w-56 lg:block"
              title="Scale with confidence"
              desc="Architecture and performance tuned for growth."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
