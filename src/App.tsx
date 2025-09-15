import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn-and-listen" element={<LearnAndListen />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/loss-support" element={<NotFound />} />
          <Route path="/legacy-planning" element={<NotFound />} />
          <Route path="/eap-replacement" element={<NotFound />} />
          <Route path="/approach" element={<NotFound />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
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
          <Route path="/plan" element={<Plan />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
