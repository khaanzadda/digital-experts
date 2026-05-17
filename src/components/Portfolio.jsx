import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { clsx, fadeInUp, stagger } from "./utils.jsx";
import {
  portfolioCategories as categories,
  portfolioProjects as projects,
} from "../data/portfolioProjects.js";

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/90">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  const Card = project.url ? motion.a : motion.article;
  const linkProps = project.url
    ? {
        href: project.url,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `Open ${project.client} live site`,
      }
    : {};

  return (
    <Card
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft outline-none transition-colors hover:border-red-300/40 focus-visible:border-red-300/70 focus-visible:ring-2 focus-visible:ring-red-300/40"
      {...linkProps}
    >
      <div className="aspect-[21/10] w-full bg-slate-900/40">
        <img
          src={project.image}
          alt={`${project.client} project preview`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-7">
        <div className="text-xs font-semibold text-rose-200">{project.category}</div>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{project.client}</h3>
          {project.url ? (
            <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition group-hover:border-red-300/40 group-hover:text-white">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300/90">{project.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {project.url ? (
          <div className="mt-5 text-xs font-semibold text-rose-200 transition group-hover:text-white">
            View live site
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <SectionHeader
            eyebrow="Portfolio"
            title="Recent work across web, eCommerce, and SaaS"
            subtitle="A curated selection of projects to demonstrate our approach: performance, UX polish, and clean engineering."
          />

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition",
                  active === c
                    ? "border-red-400/40 bg-red-500/20 text-white"
                    : "border-white/10 bg-white/5 text-slate-200/90 hover:bg-white/10",
                )}
              >
                {c}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={active}
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
