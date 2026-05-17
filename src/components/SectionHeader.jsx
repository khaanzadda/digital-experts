import { motion } from "framer-motion";
import { fadeInUp } from "./utils.jsx";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  const eyebrowText = typeof eyebrow === "string" ? eyebrow : eyebrow?.text;
  const variant = typeof eyebrow === "string" ? "dark" : eyebrow?.variant ?? "dark";
  const light = variant === "light";

  return (
    <motion.div
      variants={fadeInUp}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrowText ? (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${light
            ? "border-slate-200 bg-slate-900/5 text-white"
            : "border-white/10 bg-white/5 text-slate-100"
            }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-red-500" : "bg-red-400"}`} />
          {eyebrowText}
        </div>
      ) : null}
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-white"
          }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-7 ${light ? "text-slate-600" : "text-slate-300/90"
            }`}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
