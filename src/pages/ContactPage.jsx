import Contact from "../components/Contact.jsx";
import { useMeta } from "../components/useMeta.jsx";

export default function ContactPage() {
  useMeta({
    title: "Contact — DigitalExperts",
    description:
      "Contact DigitalExperts to discuss your next website, Shopify store, WordPress build, or SaaS product. Book a free consultation.",
  });

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-10 shadow-soft sm:p-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Contact
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Book a free consultation
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200/90">
              Tell us what you’re building. We’ll reply with next steps, timeline guidance,
              and a suggested package.
            </p>
          </div>
        </div>
      </div>
      <Contact compact />
    </>
  );
}
