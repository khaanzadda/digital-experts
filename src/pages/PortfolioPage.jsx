import Portfolio from "../components/Portfolio.jsx";
import CTA from "../components/CTA.jsx";
import { useMeta } from "../components/useMeta.jsx";

export default function PortfolioPage() {
  useMeta({
    title: "Portfolio — DigitalExperts",
    description:
      "Explore DigitalExperts work across web apps, Shopify stores, WordPress websites, and SaaS products.",
  });

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-10 shadow-soft sm:p-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Portfolio
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Work that blends design and engineering
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200/90">
              A snapshot of our approach across different industries and product types.
              Want to see relevant case studies? Let’s talk.
            </p>
          </div>
        </div>
      </div>
      <Portfolio />
      <CTA />
    </>
  );
}
