import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "./utils.jsx";
import ServiceHeroVisual from "./ServiceHeroVisual.jsx";

export default function ServiceHero({
  eyebrow = "Service",
  title,
  subtitle,
  bullets = [],
  visual = "web",
  primaryCta = { label: "Schedule a Call", to: "/contact" },
  secondaryCta = { label: "View Portfolio", to: "/portfolio" },
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.18),transparent_50%),radial-gradient(circle_at_80%_25%,rgba(244,63,94,0.14),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-45 [background-size:22px_22px] bg-grid-fade" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white"
              >
                <Sparkles className="h-3.5 w-3.5 text-red-200" />
                {eyebrow}
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                {title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-5 max-w-2xl text-base leading-7 text-slate-200/90"
              >
                {subtitle}
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={primaryCta.to}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  {primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              </motion.div>

              {bullets?.length ? (
                <motion.div
                  variants={fadeInUp}
                  className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-3xl"
                >
                  {bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-slate-200/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
                      {b}
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </div>

            <motion.div variants={fadeInUp}>
              <ServiceHeroVisual variant={visual} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
