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
    price: 39999,
    note: "starting",
    desc: "MVP delivery with core flows and a clean foundation.",
    features: ["Discovery + roadmap", "Core screens", "API integrations", "Launch-ready handoff"],
    cta: { label: "Choose Basic", href: "/contact" },
  },
  {
    name: "Standard",
    price: 119999,
    desc: "Full MVP build with premium UI/UX and scale-ready architecture.",
    features: [
      "UI/UX design pass",
      "Auth + roles (as needed)",
      "Payments/billing (optional)",
      "Analytics-ready events",
      "Testing + QA pass",
    ],
    recommended: true,
    cta: { label: "Choose Standard", href: "/contact" },
  },
  {
    name: "Premium",
    price: 249999,
    note: "starting",
    desc: "Complex SaaS with advanced workflows, multi-tenancy, and scaling support.",
    features: ["Advanced architecture", "Audit logging", "Performance profiling", "Ongoing iterations", "Launch support"],
    cta: { label: "Talk to Us", href: "/contact" },
  },
];

export default function SaaSDev() {
  useMeta({
    title: "SaaS Product Development — DigitalExperts",
    description:
      "SaaS product development for modern teams: MVPs, UI/UX, API integrations, and scalable architecture.",
  });

  return (
    <>
      <ServiceHero
        eyebrow="SaaS Product Development"
        title="Build your MVP fast—then scale with confidence"
        subtitle="We deliver MVPs and scalable SaaS products with clean architecture, premium UI/UX, and reliable execution."
        bullets={["MVP Development", "UI/UX", "API integrations", "Scaling architecture", "Launch support"]}
        visual="saas"
      />

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Build"
              title="A product-minded delivery approach"
              subtitle="We focus on the fastest path to a lovable, usable MVP without future technical debt."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { title: "MVP development", desc: "Core flows, onboarding, and the first value-delivery loop." },
                { title: "UI/UX design", desc: "Premium interfaces that feel modern, clean, and intuitive." },
                { title: "API integrations", desc: "Payments, CRMs, email, analytics, and external data sources." },
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
              eyebrow="Scale"
              title="Architecture that supports growth"
              subtitle="As you find product-market fit, we help evolve the system safely."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Scaling architecture", desc: "Pragmatic layering and patterns that reduce complexity." },
                { title: "Security mindset", desc: "Auth and access patterns that keep data safe." },
                { title: "Observability-ready", desc: "Logging and monitoring readiness for production." },
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
        subtitle="Starting points for MVP and SaaS product delivery."
        plans={plans}
        recommendedName="Standard"
        serviceTitle="SaaS Product Development"
      />

      <CTA />
    </>
  );
}
