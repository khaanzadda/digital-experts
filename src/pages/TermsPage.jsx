import CTA from "../components/CTA.jsx";
import { useMeta } from "../components/useMeta.jsx";

const sections = [
  {
    title: "Use of this website",
    body: "You may use this website to learn about DigitalExperts services, review portfolio work, and contact us about a project. Do not misuse the website, attempt unauthorized access, or interfere with its operation.",
  },
  {
    title: "Project engagements",
    body: "Any paid work, deliverables, timelines, pricing, and ownership terms are governed by a separate proposal, statement of work, or agreement shared with the client before work begins.",
  },
  {
    title: "Content and portfolio",
    body: "Website text, visuals, branding, and portfolio presentation belong to DigitalExperts or their respective owners. Portfolio references are shown to demonstrate project experience.",
  },
  {
    title: "No guaranteed outcomes",
    body: "We work carefully to improve quality, performance, and conversion, but we cannot guarantee specific revenue, ranking, or business results unless expressly agreed in writing.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, contact us at info.digitalexpertsdev@gmail.com.",
  },
];

export default function TermsPage() {
  useMeta({
    title: "Terms of Service - DigitalExperts",
    description:
      "DigitalExperts terms of service for website use, project engagement, portfolio content, and client communication.",
  });

  return (
    <>
      <section className="bg-slate-950 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-10 shadow-soft sm:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Terms
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200/90">
              Last updated: May 15, 2026
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft"
              >
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300/90">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
