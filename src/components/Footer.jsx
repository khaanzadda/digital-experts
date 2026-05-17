import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_cgc3yzg";
const TEMPLATE_ID = "template_3r9n199";
const PUBLIC_KEY = "oxoc1gM-OgsUXfB2L";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    try {
      // STORE EMAILS
      const existingEmails =
        JSON.parse(localStorage.getItem("newsletter_emails")) || [];

      localStorage.setItem(
        "newsletter_emails",
        JSON.stringify([...existingEmails, email])
      );

      // SEND EMAIL
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
          website: "https://digitalexperts.dev",
          linkedin:
            "https://www.linkedin.com/company/122184322",
          facebook:
            "https://www.facebook.com/profile.php?id=61589981786804",
          instagram:
            "https://www.instagram.com/digitalexperts.dev",
        },
        PUBLIC_KEY
      );

      alert("Successfully subscribed!");

      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/brand/logo2.png"
                alt="DigitalExperts"
                className="h-24 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300/90">
              We help startups and businesses ship high performance websites,
              conversion focused eCommerce, and scalable SaaS products.
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-300/90">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-200/80" />
                <a
                  className="hover:text-white"
                  href="mailto:info.digitalexpertsdev@gmail.com"
                >
                  info.digitalexpertsdev@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-200/80" />
                <a
                  className="hover:text-white"
                  href="tel:+923460941405"
                >
                  +92 346 0941405
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-200/80" />
                <span>Remote-first • Serving in Pakistan</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-2">
            <div>
              <div className="text-sm font-semibold text-white">
                Quick Links
              </div>

              <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
                <li>
                  <Link className="hover:text-white" to="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-white" to="/portfolio">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-white" to="/testimonials">
                    Testimonials
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-white" to="/faq">
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-white" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">
                Services
              </div>

              <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
                <li>
                  <Link
                    className="hover:text-white"
                    to="/services/custom-web-development"
                  >
                    Custom Web Development
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-white"
                    to="/services/shopify-development"
                  >
                    Shopify Development
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-white"
                    to="/services/wordpress-development"
                  >
                    WordPress Development
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-white"
                    to="/services/saas-product-development"
                  >
                    SaaS Product Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">
              Newsletter
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300/90">
              Product updates, engineering insights, and launch
              checklists—no spam.
            </p>

            <form
              className="mt-5 flex gap-2"
              onSubmit={handleSubscribe}
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none focus:border-red-400/60"
              />

              <button
                type="submit"
                disabled={loading}
                className="shrink-0 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                {loading ? "Joining..." : "Join"}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/122184322"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61589981786804"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/digitalexperts.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/devdigitalexperts"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-300/80 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} DigitalExperts.
            All rights reserved.
          </div>

          <div className="flex gap-4">
            <Link className="hover:text-white" to="/privacy">
              Privacy
            </Link>

            <Link className="hover:text-white" to="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}