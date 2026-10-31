
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import KwandaChatbot from "./components/shared/KwandaChatbot";
import IntroVideo from "./components/shared/IntroVideo";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CompanyPage from "./pages/CompanyPage";
import NewsPage from "./pages/NewsPage";
import KatishaNewsPage from "./pages/KatishaNewsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// --- MAIN APP COMPONENT ---
export default function App() {
  // The film opens the site: it plays before any page is revealed.
  const [intro, setIntro] = useState(true);

  return (
    <Router>
      {intro && <IntroVideo onComplete={() => setIntro(false)} />}
      <div id="top" className="flex min-h-screen flex-col bg-brand-mist font-sans selection:bg-brand-blue/25 selection:text-brand-navy">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/katisha-bus-ticketing" element={<KatishaNewsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <KwandaChatbot />
      </div>
    </Router>
  );
}
