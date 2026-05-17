import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { fadeInUp, stagger } from "./utils.jsx";
import avatar1 from "../assets/avatar-1.svg";
import avatar2 from "../assets/avatar-2.svg";
import avatar3 from "../assets/avatar-3.svg";

const testimonials = [
  {
    name: "Ayesha Khan",
    company: "FlowPilot",
    role: "Founder",
    quote:
      "DigitalExperts delivered a premium UI and a rock-solid foundation. Communication was clear and the pace was impressive.",
    avatar: avatar1,
  },
  {
    name: "Michael Chen",
    company: "Nimbus Analytics",
    role: "CTO",
    quote:
      "They helped us ship faster without compromising engineering quality. The final product is performant, clean, and scalable.",
    avatar: avatar2,
  },
  {
    name: "Sara Patel",
    company: "Luxe Threads",
    role: "eCommerce Lead",
    quote:
      "Our Shopify storefront is faster, cleaner, and converts better. The team nailed the design details and checkout experience.",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = useMemo(() => testimonials[active], [active]);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by teams that care about quality"
            subtitle="We’re a long-term partner—not just a build vendor. Here’s what clients say after shipping together."
          />

          <motion.div variants={fadeInUp} className="mt-14 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-lg leading-8 text-slate-100">“{current.quote}”</p>
                    <div className="mt-7 flex items-center gap-4">
                      <img
                        src={current.avatar}
                        alt={`${current.name} avatar`}
                        className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5"
                        loading="lazy"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white">{current.name}</div>
                        <div className="text-xs text-slate-300/80">
                          {current.role} • {current.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-3">
                {testimonials.map((t, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      type="button"
                      key={t.name}
                      onClick={() => setActive(i)}
                        className={`rounded-2xl border px-4 py-4 text-left transition ${
                          isActive
                          ? "border-red-400/40 bg-red-500/15"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={t.avatar}
                          alt=""
                          className="h-10 w-10 rounded-xl border border-white/10 bg-white/5"
                          loading="lazy"
                        />
                        <div>
                          <div className="text-sm font-semibold text-white">{t.name}</div>
                          <div className="text-xs text-slate-300/80">{t.company}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
