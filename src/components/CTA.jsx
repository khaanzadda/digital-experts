import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "./utils.jsx";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.16),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(244,63,94,0.14),transparent_45%),radial-gradient(circle_at_60%_90%,rgba(251,146,60,0.14),transparent_50%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-10 shadow-soft sm:p-14"
          >
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to build your next digital product?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-200/90">
                  Get a clear roadmap, premium design, and production-ready engineering.
                  Let’s launch something exceptional.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  Schedule a Call
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Work
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
