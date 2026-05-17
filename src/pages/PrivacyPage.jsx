import CTA from "../components/CTA.jsx";
import { useMeta } from "../components/useMeta.jsx";

const sections = [
  {
    title: "Information we collect",
    body: "We collect the details you send through forms, email, or project calls, such as your name, company, email address, project goals, and any files or links you choose to share.",
  },
  {
    title: "How we use information",
    body: "We use this information to respond to inquiries, prepare proposals, deliver services, improve our website, and maintain client communication during and after a project.",
  },
  {
    title: "Sharing and processors",
    body: "We do not sell personal information. We may use trusted service providers for hosting, analytics, email, scheduling, payments, or project delivery when needed to run the business.",
  },
  {
    title: "Data retention",
    body: "We keep information only as long as reasonably needed for business, legal, security, and support purposes. You can request that we update or delete your information.",
  },
  {
    title: "Contact",
    body: "For privacy questions or requests, contact us at info.digitalexpertsdev@gmail.com.",
  },
];

export default function PrivacyPage() {
  useMeta({
    title: "Privacy Policy - DigitalExperts",
    description:
      "DigitalExperts privacy policy covering how we collect, use, and protect contact and project information.",
  });

  return (
    <>
      <section className="bg-slate-950 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-10 shadow-soft sm:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Privacy
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Privacy Policy
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
