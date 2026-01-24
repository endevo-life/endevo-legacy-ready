import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Eager load critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load secondary pages for better performance
const LearnAndListen = lazy(() => import("./pages/LearnAndListen"));
const Solution = lazy(() => import("./pages/Solution"));
const Podcast = lazy(() => import("./pages/Podcast"));
const Video = lazy(() => import("./pages/Video"));
const Blog = lazy(() => import("./pages/Blog"));
const Resources = lazy(() => import("./pages/Resources"));
const Plan = lazy(() => import("./pages/Plan"));
const Company = lazy(() => import("./pages/Company"));
const ForInvestors = lazy(() => import("./pages/ForInvestors"));
const WWSIndividuals = lazy(() => import("./pages/WWSIndividuals"));
const WWSServiceProviders = lazy(() => import("./pages/WWSServiceProviders"));
const WWSEmployers = lazy(() => import("./pages/WWSEmployers"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const TrustedExperts = lazy(() => import("./pages/TrustedExperts"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
  </div>
);

// Smoothly scroll to hash targets on route changes
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
  }, [location.pathname, location.hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/video" element={<Video />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
