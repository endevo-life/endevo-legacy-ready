import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AIChatBot from "@/components/AIChatBot";
import CookieBanner from "@/components/CookieBanner";
import { initializeConsentMode, trackPageView } from "@/lib/analytics";

// Route-level code splitting — each page loads only when visited
const Index = lazy(() => import("./pages/Index"));
const LearnAndListen = lazy(() => import("./pages/LearnAndListen"));
const Solution = lazy(() => import("./pages/Solution"));
const Podcast = lazy(() => import("./pages/Podcast"));
const PodcastEpisode = lazy(() => import("./pages/PodcastEpisode"));
const Video = lazy(() => import("./pages/Video"));
const Blog = lazy(() => import("./pages/Blog"));
const Resources = lazy(() => import("./pages/Resources"));
const Company = lazy(() => import("./pages/Company"));
const ForInvestors = lazy(() => import("./pages/ForInvestors"));
const WWSIndividuals = lazy(() => import("./pages/ForIndividuals"));
const WWSServiceProviders = lazy(() => import("./pages/ForServiceProviders"));
const WWSEmployers = lazy(() => import("./pages/ForEmployers"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const TrustedExperts = lazy(() => import("./pages/TrustedExperts"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const CookieSettings = lazy(() => import("./pages/CookieSettings"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NewsAndEvents = lazy(() => import("./pages/NewsAndEvents"));

const queryClient = new QueryClient();

// Smoothly scroll to hash targets on route changes and track page views
const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // Track page view with analytics
    trackPageView(location.pathname + location.search + location.hash);
  }, [location.pathname, location.hash]);
  return null;
};

// Initialize consent mode on app load
const AppInitializer = () => {
  useEffect(() => {
    initializeConsentMode();
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppInitializer />
        <ScrollToHash />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-brand-orange border-t-transparent animate-spin" role="status" aria-label="Loading page" /></div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn-and-listen" element={<LearnAndListen />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/loss-support" element={<NotFound />} />
          <Route path="/legacy-planning" element={<NotFound />} />
          <Route path="/eap-replacement" element={<NotFound />} />
          <Route path="/approach" element={<NotFound />} />
          
          <Route path="/wws-individuals" element={<WWSIndividuals />} />
          <Route path="/wws-service-providers" element={<WWSServiceProviders />} />
          <Route path="/wws-employers" element={<WWSEmployers />} />
          
          <Route path="/for-investors" element={<ForInvestors />} />
          <Route path="/employee-wellness" element={<NotFound />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/trusted-experts" element={<TrustedExperts />} />
          <Route path="/employers" element={<NotFound />} />
          <Route path="/consultants" element={<NotFound />} />
          <Route path="/members" element={<NotFound />} />
          <Route path="/providers" element={<NotFound />} />
          <Route path="/financial-institutions" element={<NotFound />} />
          <Route path="/knowledge-base" element={<NotFound />} />
          <Route path="/blogs-podcasts" element={<NotFound />} />
          <Route path="/guides" element={<NotFound />} />
          <Route path="/events" element={<NotFound />} />
          <Route path="/customer-stories" element={<NotFound />} />
          {/* <Route path="/plan" element={<Plan />} /> */}
          <Route path="/company" element={<Company />} />
          <Route path="/about-us" element={<NotFound />} />
          <Route path="/team" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/news" element={<NotFound />} />
          <Route path="/alliance" element={<NotFound />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/podcast/episode" element={<PodcastEpisode />} />
          <Route path="/video" element={<Video />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/cookie-settings" element={<CookieSettings />} />
          <Route path="/cookie-settings" element={<CookieSettings />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news-and-events" element={<NewsAndEvents />} />
        </Routes>
        </Suspense>
        <CookieBanner />
        <AIChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
