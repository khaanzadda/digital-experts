import { Route, Routes } from "react-router-dom";
import SiteLayout from "../components/SiteLayout.jsx";
import Home from "../pages/Home.jsx";
import CustomWebDev from "../pages/CustomWebDev.jsx";
import ShopifyDev from "../pages/ShopifyDev.jsx";
import WordPressDev from "../pages/WordPressDev.jsx";
import SaaSDev from "../pages/SaaSDev.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import TestimonialsPage from "../pages/TestimonialsPage.jsx";
import FAQPage from "../pages/FAQPage.jsx";
import PrivacyPage from "../pages/PrivacyPage.jsx";
import TermsPage from "../pages/TermsPage.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/services/custom-web-development" element={<CustomWebDev />} />
        <Route path="/services/shopify-development" element={<ShopifyDev />} />
        <Route path="/services/wordpress-development" element={<WordPressDev />} />
        <Route path="/services/saas-product-development" element={<SaaSDev />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
