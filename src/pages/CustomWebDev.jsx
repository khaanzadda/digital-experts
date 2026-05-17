import { motion } from "framer-motion";
import ServiceHero from "../components/ServiceHero.jsx";
import PricingCards from "../components/PricingCards.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import CTA from "../components/CTA.jsx";
import { fadeInUp, stagger } from "../components/utils.jsx";
import { useMeta } from "../components/useMeta.jsx";


const plans = [
  {
    name: "Basic",
    price: 14999,
    note: "starting",
    desc: "A premium marketing site or landing page built to convert.",
    features: ["1–3 pages", "Responsive Tailwind UI", "SEO essentials", "Performance-first build"],
    cta: { label: "Choose Basic", href: "/contact" },
  },
  {
    name: "Standard",
    price: 69999,
    desc: "A custom web app with reusable components and clean architecture.",
    features: [
      "Multi-page app",
      "API integration",
      "Auth-ready patterns",
      "Analytics-ready setup",
      "Polished UI + motion",
    ],
    recommended: true,
    cta: { label: "Choose Standard", href: "/contact" },
  },
  {
    name: "Premium",
    price: 149999,
    note: "starting",
    desc: "Complex web apps, dashboards, and bespoke systems with scale in mind.",
    features: ["Advanced workflows", "Role-based access", "Testing + QA pass", "CI/CD guidance", "Launch support"],
    cta: { label: "Talk to Us", href: "/contact" },
  },
];

export default function CustomWebDev() {
  useMeta({
    title: "Custom Web Development — DigitalExperts",
    description:
      "Custom web development for modern businesses: MERN, Next.js, APIs, dashboards, and performance-focused engineering.",
  });

  return (
    <>
      <ServiceHero
        eyebrow="Custom Web Development"
        title="Web apps, dashboards, and marketing sites that perform"
        subtitle="From high-converting landing pages to complex internal tools—we build scalable, SEO-ready, premium experiences."
        bullets={["MERN stack", "Next.js apps", "APIs", "Dashboards", "Performance + SEO"]}
        visual="web"
      />

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="What you get"
              title="Premium builds with a clean, scalable foundation"
              subtitle="We ship production-ready code with strong UX, thoughtful architecture, and performance baked in."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Conversion-first UI",
                  desc: "Modern UI patterns, clear messaging, and frictionless funnels.",
                },
                {
                  title: "Performance + SEO",
                  desc: "Core Web Vitals mindset, clean semantics, and fast rendering.",
                },
                {
                  title: "Engineering quality",
                  desc: "Reusable components, maintainable code, and deployment-ready structure.",
                },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft"
                >
                  <div className="text-lg font-semibold text-white">{c.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300/90">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Technologies"
              title="Modern stack, pragmatic choices"
              subtitle="We pick tools that keep velocity high and maintenance low."
            />
            <motion.div variants={fadeInUp} className="mx-auto mt-12 max-w-3xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "React + Vite",
                  "Tailwind CSS",
                  "React Router",
                  "Framer Motion",
                  "Node.js APIs",
                  "Auth patterns",
                  "Analytics-ready events",
                  "CI/CD guidance",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/90"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Case studies"
              title="Examples of typical outcomes"
              subtitle="Short snapshots of the impact we target for web builds."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Faster load times",
                  desc: "Improve Core Web Vitals to reduce bounce and increase conversions.",
                },
                {
                  title: "Better funnels",
                  desc: "Tight messaging hierarchy + UX improvements to raise lead quality.",
                },
                {
                  title: "Scalable architecture",
                  desc: "Reusable components + API-ready structure for future features.",
                },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-soft"
                >
                  <div className="text-lg font-semibold text-white">{c.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300/90">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <PricingCards
        title="Pricing packages"
        subtitle="Starting points for most engagements. Final pricing depends on scope."
        plans={plans}
        recommendedName="Standard"
      />

      <CTA />
    </>
  );
}
