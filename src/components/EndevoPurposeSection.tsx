import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import endevoImage from "@/assets/endevo-preparedness-bg.jpg";
const EndevoPurposeSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const navigate = useNavigate();
  return <section className="relative py-12 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url('${endevoImage}')`
  }}>
      {/* Gradient overlay - left black to right transparent */}
      
      
      {/* Content */}
      
    </section>;
};
export default EndevoPurposeSection;