import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeInUp, stagger } from "./utils.jsx";

const stats = [
  { label: "Projects Completed", value: "100+" },
  { label: "Clients", value: "50+" },
  { label: "Years Experience", value: "5+" },
  { label: "Client Retention", value: "95%" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.16),transparent_48%),radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.10),transparent_50%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <SectionHeader
            eyebrow="About DigitalExperts"
            title="A senior team that ships, not just designs"
            subtitle="We combine engineering discipline with a premium design approach—so your product looks world-class and performs even better."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Premium execution",
                desc: "Clean UI, smooth motion, and a polished experience inspired by Stripe-level craftsmanship.",
              },
              {
                icon: TrendingUp,
                title: "Growth-oriented",
                desc: "Performance, SEO, analytics readiness, and conversion patterns built in from day one.",
              },
              {
                icon: BadgeCheck,
                title: "Reliable delivery",
                desc: "Clear milestones, transparent communication, and production-ready code that scales.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={fadeInUp}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/60 via-rose-500/50 to-orange-400/40">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-5 text-lg font-semibold text-white">{c.title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300/90">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold text-slate-100">Our mission</div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                  Make world-class digital products accessible to modern teams
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300/90">
                  Whether you’re launching a new SaaS, upgrading an eCommerce store, or
                  building a high-converting website, we focus on sustainable engineering,
                  fast iteration, and measurable outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
                  >
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-300/80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
