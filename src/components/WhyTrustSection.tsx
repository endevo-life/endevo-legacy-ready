import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import marketIcon from "@/assets/trust-icon-market.png";
import aiHumanIcon from "@/assets/trust-icon-ai-human.png";
import businessIcon from "@/assets/trust-icon-business.png";
import securityIcon from "@/assets/trust-icon-security.png";
import valuesIcon from "@/assets/trust-icon-values.png";
const WhyTrustSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const features = [{
    iconSrc: marketIcon,
    title: "$126B Market Need",
    description: "Legacy readiness & digital preparedness are urgent, but overlooked."
  }, {
    iconSrc: aiHumanIcon,
    title: "AI + Human-Centered Design",
    description: "Smart tools made simple, supportive, and compassionate."
  }, {
    iconSrc: businessIcon,
    title: "Trusted by Businesses & Individuals",
    description: "Early HR/EAP pilots and app users already seeing impact."
  }, {
    iconSrc: securityIcon,
    title: "Secure & Reliable",
    description: "Enterprise-grade safeguards to protect digital footprints."
  }, {
    iconSrc: valuesIcon,
    title: "Built on Values (C.L.A.R.I.T.Y.)",
    description: "Compassion, Clarity, Resilience, and Innovation at the core."
  }];
  return;
};
export default WhyTrustSection;