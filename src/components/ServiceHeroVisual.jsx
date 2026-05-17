import { motion, useReducedMotion } from "framer-motion";
import { Code2, Layers3, Rocket, ShoppingBag } from "lucide-react";
import { clsx } from "./utils.jsx";

const variants = {
  web: {
    Icon: Code2,
    badge: "API • UI • Performance",
    cards: [
      { label: "Edge-ready UI", value: "95 Lighthouse" },
      { label: "API latency", value: "120ms p95" },
      { label: "Deploy", value: "CI/CD" },
    ],
  },
  shopify: {
    Icon: ShoppingBag,
    badge: "Theme • CRO • Checkout",
    cards: [
      { label: "Add to cart", value: "+18%" },
      { label: "Checkout", value: "Friction ↓" },
      { label: "AOV", value: "+12%" },
    ],
  },
  wordpress: {
    Icon: Layers3,
    badge: "Blocks • SEO • Speed",
    cards: [
      { label: "Core Web Vitals", value: "Pass" },
      { label: "Schema", value: "Ready" },
      { label: "Editor", value: "Blocks" },
    ],
  },
  saas: {
    Icon: Rocket,
    badge: "MVP • Scale • Billing",
    cards: [
      { label: "Activation", value: "Onboarding" },
      { label: "Roles", value: "RBAC" },
      { label: "Usage", value: "Metrics" },
    ],
  },
};

export default function ServiceHeroVisual({ variant = "web" }) {
  const reduceMotion = useReducedMotion();
  const cfg = variants[variant] ?? variants.web;
  const { Icon } = cfg;

  return (
    <div aria-hidden="true" className="relative hidden lg:block">
      <div className="pointer-events-none absolute -inset-12 -z-10 opacity-80 blur-2xl">
        <div className="absolute left-8 top-10 h-44 w-44 rounded-full bg-red-500/25" />
        <div className="absolute bottom-8 right-10 h-56 w-56 rounded-full bg-red-400/15" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ perspective: 1200 }}
        className="relative mx-auto max-w-md"
      >
        <motion.div
          className="relative rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-xl"
          animate={
            reduceMotion
              ? undefined
              : { rotateX: [7, 9, 7], rotateY: [-10, -7, -10] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
          }
          whileHover={reduceMotion ? undefined : { rotateX: 5, rotateY: -5, y: -2 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              {cfg.badge}
            </div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-red-400 text-white shadow-soft">
              <Icon className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {cfg.cards.map((c) => (
              <div
                key={c.label}
                className={clsx(
                  "rounded-2xl border border-white/10 bg-black/20 p-4",
                  "transition-transform duration-300",
                  "motion-reduce:transition-none",
                )}
                style={{ transform: "translateZ(18px)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-200/90">{c.label}</div>
                  <div className="text-xs font-semibold text-white">{c.value}</div>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400" />
                </div>
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-[28px] border border-white/10 bg-white/5 shadow-soft"
            style={{ transform: "translateZ(10px) rotate(8deg)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-40 rounded-[28px] border border-white/10 bg-white/5 shadow-soft"
            style={{ transform: "translateZ(8px) rotate(-7deg)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

