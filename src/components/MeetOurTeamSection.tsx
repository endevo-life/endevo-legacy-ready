import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import nikiPortrait from "@/assets/niki-portrait-2.png";
import aaronPortrait from "@/assets/aaron-portrait-2.png";
import mercedesPortrait from "@/assets/mercedes-portrait-2.png";
import tyPortrait from "@/assets/ty-portrait-2.png";
import deepPortrait from "@/assets/deep-portrait-2.png";

const MeetOurTeamSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: "Niki Weiss, PMP, PMI-RMP",
      title: "Digital Thanatologist",
      organization: "Founder / CEO",
      image: nikiPortrait,
      linkedIn: "https://www.linkedin.com/in/nikiweiss/"
    },
    {
      name: "Aaron Swam",
      title: "AI Enablement and Strategist",
      organization: "Choice Appointments",
      image: aaronPortrait
    },
    {
      name: "Mercedes Sullivan",
      title: "VP, HR Storefront, PMO",
      organization: "TIAA",
      image: mercedesPortrait
    },
    {
      name: "Ty Hagler",
      title: "Design Engineer",
      organization: "Principal, Trig",
      image: tyPortrait
    },
    {
      name: "Deep Parmar",
      title: "Fractional CFO",
      organization: "Founders Institute Mentor",
      image: deepPortrait
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-orange-100/40">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div 
          ref={elementRef as any} 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: 'serif' }}>
            Meet Our Team
          </h2>

          {/* Team Grid - Horizontal Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => {
              const CardWrapper = member.linkedIn ? 'a' : 'div';
              const cardProps = member.linkedIn 
                ? { href: member.linkedIn, target: "_blank", rel: "noopener noreferrer" }
                : {};
              
              return (
                <div key={index} className="flex flex-col items-center">
                  <CardWrapper
                    {...cardProps}
                    className={`group ${member.linkedIn ? 'cursor-pointer' : ''}`}
                  >
                    {/* Portrait Image - Rounded Rectangle */}
                    <div className="mb-4 w-48 h-48 mx-auto">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="text-center space-y-2">
                      <h3 className="text-base font-bold text-gray-900 border-b-2 border-gray-300 pb-1 inline-block">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-700 font-medium">
                        {member.title}
                      </p>
                      <p className="text-xs text-gray-600 font-sans">
                        {member.organization}
                      </p>
                    </div>
                  </CardWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
