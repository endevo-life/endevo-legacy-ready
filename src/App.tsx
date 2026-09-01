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
import GhlFormTracker from "@/components/GhlFormTracker";
import { initializeConsentMode, trackPageView } from "@/lib/analytics";

// Route-level code splitting — each page loads only when visited
const Index = lazy(() => import("./pages/Index"));
const LearnAndListen = lazy(() => import("./pages/LearnAndListen"));
const Solution = lazy(() => import("./pages/Solution"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const VideoEpisode = lazy(() => import("./pages/VideoEpisode"));
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
const AppPrivacyPolicy = lazy(() => import("./pages/AppPrivacyPolicy"));
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
  }, [location.pathname, location.hash, location.search]);
  return null;
};

// /solution → /program, keeping the fragment so old #case-studies links land
// on the right section.
const ProgramRedirect = () => {
  const { search, hash } = useLocation();
  return <Navigate to={`/program${search}${hash}`} replace />;
};

// /playbook → /solutions, keeping ?src= and any #anchor intact. A bare
// <Navigate> would drop the query string and lose channel attribution.
const PlaybookRedirect = () => {
  const { search, hash } = useLocation();
  return <Navigate to={`/solutions${search}${hash}`} replace />;
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
        <GhlFormTracker />
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
            <Route path="/program" element={<Solution />} />
            {/* The program deep-dive lived at /solution, one letter from the
                /solutions fork — a near-duplicate URL that read as a mistake.
                Old links keep working, fragments (#case-studies) included. */}
            <Route path="/solution" element={<ProgramRedirect />} />
            <Route path="/solutions" element={<Solutions />} />
            {/* Sayable alias for the offer page — "endevo dot life slash
                playbook" on the podcast. Vercel 301s it in production; this
                route makes it work on localhost and as an in-app link. */}
            <Route path="/playbook" element={<PlaybookRedirect />} />
            {/* Readable aliases: the URL a person would guess or type reads
                as what the page is, then 301s (Vercel) / redirects (in-app)
                to the canonical path that already holds the ranking equity. */}
            <Route
              path="/pricing"
              element={<Navigate to="/solutions#pricing" replace />}
            />
            <Route
              path="/podcast"
              element={<Navigate to="/videos" replace />}
            />
            <Route path="/about" element={<Navigate to="/company" replace />} />
            <Route
              path="/readiness-hub"
              element={<Navigate to="/marketplace" replace />}
            />

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
            <Route path="/videos/:slug" element={<VideoEpisode />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
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
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route
              path="/legal/terms-of-service"
              element={<TermsOfService />}
            />
            <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
            <Route path="/legal/cookie-settings" element={<CookieSettings />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
            <Route
              path="/myfinalplaybook/app/privacy"
              element={<AppPrivacyPolicy />}
            />
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
