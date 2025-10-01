import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Building2, User, TrendingUp } from "lucide-react";
const ExploreOurSolutions = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const solutions = [{
    icon: Building2,
    title: "For Companies (HR/EAP)",
    description: "Reduce risk, protect employees, safeguard continuity.",
    cta: "Learn More",
    color: "brand-navy"
  }, {
    icon: User,
    title: "For Individuals",
    description: "AI-powered tools for personal legacy & digital preparedness.",
    cta: "Get Started",
    color: "brand-teal"
  }, {
    icon: TrendingUp,
    title: "For Investors",
    description: "Be part of a $126B industry transformation.",
    cta: "Explore Opportunity",
    color: "brand-orange"
  }];
  return;
};
export default ExploreOurSolutions;