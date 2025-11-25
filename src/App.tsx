import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AIChatBot from "@/components/AIChatBot";
import Index from "./pages/Index";
import LearnAndListen from "./pages/LearnAndListen";
import Solution from "./pages/Solution";
import WhoWeServe from "./pages/WhoWeServe";
import Podcast from "./pages/Podcast";
import Video from "./pages/Video";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Plan from "./pages/Plan";
import Company from "./pages/Company";
import ForCompanies from "./pages/ForCompanies";
import ForIndividuals from "./pages/ForIndividuals";
import ForEmployers from "./pages/ForEmployers";
import ForInvestors from "./pages/ForInvestors";
import EmployeeWellness from "./pages/EmployeeWellness";
import WWSIndividuals from "./pages/WWSIndividuals";
import WWSServiceProviders from "./pages/WWSServiceProviders";
import WWSForEmployers from "./pages/WWSForEmployers";
import Marketplace from "./pages/Marketplace";
import TrustedExperts from "./pages/TrustedExperts";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn-and-listen" element={<LearnAndListen />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/loss-support" element={<NotFound />} />
          <Route path="/legacy-planning" element={<NotFound />} />
          <Route path="/eap-replacement" element={<NotFound />} />
          <Route path="/approach" element={<NotFound />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/for-individuals" element={<ForIndividuals />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/wws-individuals" element={<WWSIndividuals />} />
          <Route path="/wws-service-providers" element={<WWSServiceProviders />} />
          <Route path="/wws-for-employers" element={<WWSForEmployers />} />
          <Route path="/for-investors" element={<ForInvestors />} />
          <Route path="/employee-wellness" element={<EmployeeWellness />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/trusted-experts" element={<TrustedExperts />} />
          <Route path="/employers" element={<ForEmployers />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
