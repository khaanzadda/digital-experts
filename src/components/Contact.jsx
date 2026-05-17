import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { fadeInUp, stagger } from "./utils.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact({ compact = false }) {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };
  return (
    <section id="contact" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {!compact ? (
            <SectionHeader
              eyebrow="Contact"
              title="Tell us what you’re building"
              subtitle="Share a few details and we’ll respond with next steps and a suggested plan."
            />
          ) : null}

          <motion.div variants={fadeInUp} className={`${compact ? "" : "mt-14"} grid gap-8 lg:grid-cols-5`}>
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
                <form
                  ref={formRef}
                  className="grid gap-4 sm:grid-cols-2"
                  onSubmit={sendEmail}
                >
                  <label className="grid gap-2 text-sm text-slate-200/90">
                    Name
                    <input
                      name="user_name"
                      required
                      className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none focus:border-red-400/60"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-slate-200/90">
                    Email
                    <input
                      name="user_email"
                      required
                      type="email"
                      className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none focus:border-red-400/60"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="sm:col-span-2 grid gap-2 text-sm text-slate-200/90">
                    Project details
                    <textarea
                      name="message"
                      rows={5}
                      className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none focus:border-red-400/60"
                      placeholder="What are you building? What’s your timeline?"
                    />
                  </label>
                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-slate-300/80">
                      By submitting, you agree to be contacted about your request.
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-soft"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-soft">
                <div className="text-sm font-semibold text-white">Get in touch</div>
                <p className="mt-3 text-sm leading-6 text-slate-300/90">
                  Prefer email or a quick call? We’re flexible—choose what’s easiest.
                </p>

                <div className="mt-8 space-y-4 text-sm text-slate-200/90">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-rose-200" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <a className="text-slate-200/90 hover:text-white" href="mailto:info.digitalexpertsdev@gmail.com">
                        info.digitalexpertsdev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-rose-200" />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <a className="text-slate-200/90 hover:text-white" href="tel:+923460941405">
                        +92 346 0941405
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-rose-200" />
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-slate-200/90">Remote-first • Serving in Pakistan</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <div className="text-xs font-semibold text-slate-200/90">Typical response time</div>
                  <div className="mt-2 text-2xl font-extrabold text-white">&lt; 24 hours</div>
                  <div className="mt-2 text-xs text-slate-300/80">
                    For urgent requests, include “Urgent” in your subject line.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
