import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import nikiHeadshot from "@/assets/niki-headshot.jpg";
const NikiWeissSection = () => {
  const {
    elementRef: nikiRef,
    isVisible: nikiVisible
  } = useScrollAnimation();
  return <section id="niki-weiss" ref={nikiRef} className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${nikiVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-center`}>
            <img src={nikiHeadshot} alt="Niki Weiss" className="max-w-md w-full h-auto rounded-lg" />
          </div>
          <div className={`${nikiVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Niki Weiss
            </h2>
            <h3 className="text-2xl font-semibold text-brand-orange mb-6">Digital Legacy Thanatologist</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Niki Weiss is transforming how we approach and navigate death, dying and end-of-life planning in the digital age. Digital Legacy Thanatologist, Founder of ENDevo, Creator of My Final Playbook App, and host of the Digital Legacy Podcast
              </p>
              <p>
                Niki normalizes and simplifies the often daunting end-of-life planning process by merging innovative digital tools with traditional methods. With a background in healthcare, project management, and risk analysis, Niki brings a unique skill set in coaching her clients through developing a well-thought-out, customized legacy plan.
              </p>
              <p>
                My Final Playbook App incorporates a holistic approach that guides users through a customizable journey of exploring end-of-life options by breaking down complex decision-making into actionable steps. By comprehensively planning and documenting various facets of your life (such as legal, financial, physical, and digital aspects) we gain peace of mind to live fully while providing a roadmap for preserving our digital imprint and protecting the people we leave behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NikiWeissSection;