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
    price: 4999,
    note: "starting",
    desc: "Store setup and a clean theme foundation to start selling quickly.",
    features: ["Theme setup", "Core pages", "Payments + shipping", "Speed basics"],
    cta: { label: "Choose Basic", href: "/contact" },
  },
  {
    name: "Standard",
    price: 14999,
    desc: "Theme customization + sections tailored to your brand and funnel.",
    features: ["Custom sections", "Product/collection UX", "App integrations", "Conversion polish"],
    recommended: true,
    cta: { label: "Choose Standard", href: "/contact" },
  },
  {
    name: "Premium",
    price: 39999,
    note: "starting",
    desc: "Advanced Shopify builds, subscriptions, bundles, and CRO optimization.",
    features: ["Advanced Liquid work", "Subscriptions/bundles", "Analytics (GA4)", "Ongoing optimization"],
    cta: { label: "Talk to Us", href: "/contact" },
  },
];

export default function ShopifyDev() {
  useMeta({
    title: "Shopify Development — DigitalExperts",
    description:
      "Shopify development for premium storefronts: store setup, theme customization, app integrations, and conversion optimization.",
  });

  return (
    <>
      <ServiceHero
        eyebrow="Shopify Development"
        title="Premium Shopify storefronts built to convert"
        subtitle="We design and engineer fast, brand-aligned Shopify experiences with clean theme customization and best-practice integrations."
        bullets={["Store setup", "Theme customization", "App integrations", "Performance", "CRO-ready UX"]}
        visual="shopify"
      />

      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <SectionHeader
              eyebrow="Services"
              title="From setup to optimization"
              subtitle="We focus on storefront speed, clean UX, and higher conversion."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Store setup", desc: "Payments, shipping, taxes, collections, and launch readiness." },
                { title: "Theme customization", desc: "Custom sections, pages, and brand-consistent components." },
                { title: "App integrations", desc: "Klaviyo, Recharge, reviews, upsells—cleanly integrated." },
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
              eyebrow="Store examples"
              title="Storefront upgrades we commonly deliver"
              subtitle="These are typical improvements we prioritize to lift conversion and AOV."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Product page UX", desc: "Better variants, trust blocks, and conversion sections." },
                { title: "Collection filters", desc: "Fast, clean filtering and merchandising improvements." },
                { title: "Checkout optimizations", desc: "Reduce friction and improve cart-to-checkout flow." },
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
        subtitle="Starting points for Shopify engagements."
        plans={plans}
        recommendedName="Standard"
      />

      <CTA />
    </>
  );
}
