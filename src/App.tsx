import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import AIChatBot from "@/components/AIChatBot";
import CookieBanner from "@/components/CookieBanner";
import { initializeConsentMode, trackPageView } from "@/lib/analytics";

// Route-level code splitting — each page loads only when visited
const Index = lazy(() => import("./pages/Index"));
const LearnAndListen = lazy(() => import("./pages/LearnAndListen"));
const Solution = lazy(() => import("./pages/Solution"));
const Blog = lazy(() => import("./pages/Blog"));
const Resources = lazy(() => import("./pages/Resources"));
const Company = lazy(() => import("./pages/Company"));
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
const SanityStudio = lazy(() => import("./pages/SanityStudio"));
const Videos = lazy(() => import("./pages/Videos"));
const CaseStudyAwarenessToAction = lazy(
  () => import("./pages/CaseStudyAwarenessToAction"),
);
const CaseStudyLifeInTransition = lazy(
  () => import("./pages/CaseStudyLifeInTransition"),
);
const CaseStudyMedicalCoverage = lazy(
  () => import("./pages/CaseStudyMedicalCoverage"),
);
const CaseStudyAlreadyCovered = lazy(
  () => import("./pages/CaseStudyAlreadyCovered"),
);
const CaseStudyHospiceVolunteer = lazy(
  () => import("./pages/CaseStudyHospiceVolunteer"),
);

const queryClient = new QueryClient();

// Smoothly scroll to hash targets on route changes and track page views.
// Retries up to 10 times (1 s total) because lazy-loaded pages may not have
// mounted yet when the effect first fires.
const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
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
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div
                className="w-8 h-8 rounded-full border-4 border-brand-orange border-t-transparent animate-spin"
                role="status"
                aria-label="Loading page"
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/learn-and-listen" element={<LearnAndListen />} />
            <Route path="/solution" element={<Solution />} />

            <Route path="/for-individuals" element={<WWSIndividuals />} />
            <Route
              path="/for-service-providers"
              element={<WWSServiceProviders />}
            />
            <Route path="/for-employers" element={<WWSEmployers />} />

            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/trusted-experts" element={<TrustedExperts />} />
            {/* <Route path="/plan" element={<Plan />} /> */}
            <Route path="/company" element={<Company />} />
            <Route path="/video" element={<Navigate to="/videos" replace />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/case-studies/from-awareness-to-action"
              element={<CaseStudyAwarenessToAction />}
            />
            <Route
              path="/case-studies/life-in-transition"
              element={<CaseStudyLifeInTransition />}
            />
            <Route
              path="/case-studies/medical-coverage"
              element={<CaseStudyMedicalCoverage />}
            />
            <Route
              path="/case-studies/already-covered"
              element={<CaseStudyAlreadyCovered />}
            />
            <Route
              path="/case-studies/hospice-volunteer"
              element={<CaseStudyHospiceVolunteer />}
            />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/legal/terms-of-service"
              element={<TermsOfService />}
            />
            <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
            <Route path="/legal/cookie-settings" element={<CookieSettings />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
            <Route path="/studio/*" element={<SanityStudio />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
