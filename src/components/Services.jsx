import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers3,
  LayoutDashboard,
  Rocket,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeInUp, stagger } from "./utils.jsx";

// WhatsApp number
const whatsappNumber = "923345938162";

// WhatsApp link generator
const getWhatsAppLink = (serviceTitle) => {
  const message = `Hi, I want to discuss ${serviceTitle} service.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const services = [
  {
    title: "Custom Web Development",
    desc: "High-performance web apps and marketing sites built to convert.",
    icon: Code2,
    bullets: ["MERN stack", "Next.js apps", "APIs", "Dashboards"],
    to: "/services/custom-web-development",
  },
  {
    title: "Shopify Development",
    desc: "Fast storefronts, clean themes, and seamless app integrations.",
    icon: ShoppingBag,
    bullets: ["Store setup", "Theme customization", "App integrations", "Speed optimization"],
    to: "/services/shopify-development",
  },
  {
    title: "WordPress Development",
    desc: "Flexible content sites and WooCommerce stores that scale.",
    icon: Layers3,
    bullets: ["Business websites", "WooCommerce", "SEO optimization", "Performance tuning"],
    to: "/services/wordpress-development",
  },
  {
    title: "SaaS Product Development",
    desc: "From MVP to scale: architecture, features, and reliable delivery.",
    icon: Rocket,
    bullets: ["MVPs", "Scalable systems", "API integrations", "Analytics-ready"],
    to: "/services/saas-product-development",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.16),transparent_42%),radial-gradient(circle_at_85%_55%,rgba(251,146,60,0.10),transparent_44%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <SectionHeader
            eyebrow="Services"
            title="Everything you need to design, build, and launch"
            subtitle="Choose a focused engagement or combine services for a full product build. We're optimized for speed without sacrificing quality."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-8 shadow-soft backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-red-500/5 opacity-70" />

                {/* ICON + TITLE */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/90 via-rose-500/85 to-orange-400/80 shadow-soft">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300/90">
                      {service.desc}
                    </p>
                  </div>

                  <div className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60">
                    <LayoutDashboard className="h-5 w-5" />
                  </div>
                </div>

                {/* BULLETS */}
                <ul className="mt-6 grid gap-2 text-sm text-slate-200/90 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="mt-7 flex items-center gap-4">

                  {/* Learn More */}
                  <Link
                    to={service.to}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-rose-200 hover:text-white transition"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {/* WhatsApp ICON */}
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}