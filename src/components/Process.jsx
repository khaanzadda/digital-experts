import { motion } from "framer-motion";
import { fadeInUp, stagger } from "./utils.jsx";
import SectionHeader from "./SectionHeader.jsx";

const steps = [
  { title: "Discovery", desc: "Goals, constraints, success metrics, and competitive research." },
  { title: "Planning", desc: "Architecture, milestones, and a delivery plan that reduces risk." },
  { title: "UI/UX Design", desc: "Premium interface design with conversion-first user flows." },
  { title: "Development", desc: "Clean implementation, reusable components, best practices." },
  { title: "Testing", desc: "QA, performance checks, responsive reviews, edge-case coverage." },
  { title: "Deployment", desc: "CI/CD-ready release process with analytics and monitoring." },
  { title: "Ongoing Support", desc: "Iteration, improvements, maintenance, and growth support." },
];

export default function Process() {
  return (
    <section className="relative bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(244,63,94,0.10),transparent_50%),radial-gradient(circle_at_90%_30%,rgba(239,68,68,0.14),transparent_55%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <SectionHeader
            eyebrow="Process"
            title="A simple, reliable delivery system"
            subtitle="Clear milestones, high-quality execution, and continuous communication—built for modern teams."
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-7">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft lg:col-span-1"
                style={{ gridColumn: idx < 4 ? "span 1" : "span 1" }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-sm font-bold text-white">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="text-sm font-semibold text-white">{s.title}</div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300/90">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
