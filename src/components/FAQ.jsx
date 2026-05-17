import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeInUp, stagger } from "./utils.jsx";

const faqs = [
  {
    q: "How long does development take?",
    a: "Most websites launch in 2–6 weeks depending on scope. SaaS MVPs typically range from 6–12+ weeks. We’ll provide a clear timeline after discovery.",
  },
  {
    q: "What technologies do you use?",
    a: "We build with modern stacks like React, Node.js, Next.js, and best-practice APIs. For eCommerce we specialize in Shopify. For CMS we work with WordPress + WooCommerce.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer ongoing support, performance monitoring, iterative improvements, and feature development.",
  },
  {
    q: "What are your pricing models?",
    a: "We offer fixed packages for smaller scopes and milestone-based pricing for larger engagements. We’ll recommend the most cost-effective approach for your goals.",
  },
];

function AccordionItem({ item, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-soft">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-black">{item.q}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-6 text-slate-600">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="bg-[#020617] py-20 sm:py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <SectionHeader
            eyebrow={{ text: "FAQ", variant: "light" }}
            title="Answers to common questions"
            subtitle="If you have something specific in mind, we’re happy to jump on a quick call."
          />

          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-12 grid max-w-3xl gap-3"
          >
            {faqs.map((f, idx) => (
              <AccordionItem
                key={f.q}
                item={f}
                open={openIdx === idx}
                onToggle={() => setOpenIdx((v) => (v === idx ? -1 : idx))}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
