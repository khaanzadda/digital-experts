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
    price: "15,999",
    note: "starting",
    desc: "A clean WordPress marketing site with SEO-first structure.",
    features: ["Core pages", "Mobile responsive", "SEO essentials", "Performance basics"],
    cta: { label: "Choose Basic", href: "/contact" },
  },
  {
    name: "Standard",
    price: "32,999",
    desc: "A premium WordPress website with content workflows and polish.",
    features: ["Custom blocks/sections", "Blog setup", "Speed optimization", "Analytics-ready"],
    recommended: true,
    cta: { label: "Choose Standard", href: "/contact" },
  },
  {
    name: "Premium",
    price: "66,999",
    note: "starting",
    desc: "WooCommerce + advanced functionality for content and commerce.",
    features: ["WooCommerce setup", "Payments/shipping", "SEO + performance pass", "Launch support"],
    cta: { label: "Talk to Us", href: "/contact" },
  },
];

export default function WordPressDev() {
  useMeta({
    title: "WordPress Development — DigitalExperts",
    description:
      "WordPress development for businesses: premium websites, WooCommerce, SEO optimization, and performance tuning.",
  });

  return (
    <>
      <ServiceHero
        eyebrow="WordPress Development"
        title="Fast, flexible WordPress sites with premium polish"
        subtitle="From marketing sites to WooCommerce builds—DigitalExperts ships WordPress experiences optimized for speed, content, and conversion."
        bullets={["Business websites", "WooCommerce", "SEO optimization", "Performance tuning"]}
        visual="wordpress"
      />

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Features"
              title="A clean CMS workflow for your team"
              subtitle="We build structured pages that keep content easy to edit and maintain."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Content-first structure", desc: "Reusable sections and layouts for speed and consistency." },
                { title: "SEO-ready pages", desc: "Semantics, metadata patterns, and clean hierarchy." },
                { title: "Performance mindset", desc: "Caching guidance and front-end optimization to keep it fast." },
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
              eyebrow="WooCommerce"
              title="Commerce capabilities when you need them"
              subtitle="We can extend WordPress into a full eCommerce solution with WooCommerce."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Product + category UX", desc: "Clean merchandising and consistent product journeys." },
                { title: "Checkout readiness", desc: "Payment integrations and checkout flow improvements." },
                { title: "SEO + analytics", desc: "Track what matters and keep pages indexable and fast." },
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
        subtitle="Starting points for WordPress and WooCommerce builds."
        plans={plans}
        recommendedName="Standard"
      />

      <CTA />
    </>
  );
}
