import { motion } from "framer-motion";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { clsx, fadeInUp, stagger, formatCurrencyPKR } from "./utils.jsx";

// WhatsApp setup
const whatsappNumber = "923345938162";

const getWhatsAppLink = (plan, title) => {
  const message = `
Hi Digital Experts,

I'm interested in ${title} — ${plan.name} Package.

Package Details:
• Price: ${plan.price}
• Features:
${plan.features.map(f => `- ${f}`).join("\n")}

Please share more details.

Thank you.
`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

function PricingCard({ plan, recommended, serviceTitle }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      className={clsx(
        "relative rounded-3xl border p-8 shadow-soft",
        recommended
          ? "border-red-400/40 bg-gradient-to-b from-red-500/15 to-white/5"
          : "border-white/10 bg-white/5",
      )}
    >
      {recommended ? (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/20 px-3 py-1 text-xs font-semibold text-white">
          <Sparkles className="h-3.5 w-3.5 text-rose-200" />
          Recommended
        </div>
      ) : null}

      <div className="text-sm font-semibold text-slate-100">{plan.name}</div>

      <div className="mt-3 flex items-end gap-2">
        <div className="text-4xl font-extrabold tracking-tight text-white">
          {typeof plan.price === "number"
            ? formatCurrencyPKR(plan.price)
            : plan.price}
        </div>
        {plan.note ? (
          <div className="pb-1 text-xs text-slate-300/80">
            {plan.note}
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300/90">
        {plan.desc}
      </p>

      <ul className="mt-7 grid gap-3 text-sm text-slate-200/90">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-rose-200" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* MAIN CTA BUTTON */}
      <a
        href={plan.cta?.href ?? "/contact"}
        className={clsx(
          "mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
          recommended
            ? "bg-white text-slate-950 hover:bg-slate-100"
            : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        )}
      >
        {plan.cta?.label ?? "Get Started"}
      </a>

      {/* WHATSAPP ICON BUTTON */}
      <div className="mt-4 flex justify-center">
        <a
          href={getWhatsAppLink(plan, serviceTitle)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow-lg"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
}

export default function PricingCards({
  title = "Pricing packages",
  subtitle = "",
  plans = [],
  recommendedName = "",
  serviceTitle = "",
}) {
  return (
    <section className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-base leading-7 text-slate-300/90">
                {subtitle}
              </p>
            ) : null}
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <PricingCard
                key={p.name}
                plan={p}
                recommended={
                  recommendedName
                    ? p.name === recommendedName
                    : Boolean(p.recommended)
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}