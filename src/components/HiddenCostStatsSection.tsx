import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const HiddenCostStatsSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const stats = [{
    value: "$33B",
    description: "$33B in Productivity Loss Every Year"
  }, {
    value: "1 in 3",
    description: "1 in 3 Employees Have No Plan"
  }, {
    value: "$100B+",
    description: "$100B+ in Digital Assets Go Unclaimed"
  }];
  return <section ref={elementRef} className="py-20 bg-white">
      
    </section>;
};
export default HiddenCostStatsSection;