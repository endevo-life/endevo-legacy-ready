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
                Niki is transforming how people navigate death, dying and end-of-life planning in the digital age.
              </p>
              <p>
                Merging innovative digital tools with traditional estate planning methods, Niki simplifies the often daunting end-of-life planning process using a proprietary framework centered around our beliefs in four key areas of legal, financial, physical and digital. By creating a comprehensive and well-thought-out end-of-life plan before something happens, we gain peace of mind and provide a roadmap for those we leave behind to navigate and adapt to life when we are no longer here. With an extensive background in healthcare, project management, data governance and risk analysis, Niki brings a unique skill set and progressive strategies for coaching her clients through developing end-of-life legacy plans that safeguard and preserve their digital legacy and provide protection and relief for the significant people in their lives.
              </p>
              <p>
                Through speaking, training and coaching, Niki's mission is to normalize conversations about death, dying and end-of-life planning, break down complex decision-making into actionable steps and provide cutting-edge tools to prepare for the inevitable, so we can live fully and die ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NikiWeissSection;