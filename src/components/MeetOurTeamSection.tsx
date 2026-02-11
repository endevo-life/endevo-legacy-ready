import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import nikiPortrait from "@/assets/niki-portrait-2.png";
import aaronPortrait from "@/assets/aaron-portrait-2.png";
import mercedesPortrait from "@/assets/mercedes-portrait-2.png";
import tyPortrait from "@/assets/ty-portrait-2.png";
import deepPortrait from "@/assets/deep-portrait-2.png";
import paulaPortrait from "@/assets/Paula_profile_pic.jpg";
import brookePortrait from "@/assets/Brook_profile_pic.png";
import nermeenPortrait from "@/assets/nermeen-portrait.png";
import { Linkedin } from "lucide-react";

const MeetOurTeamSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const teamMembers = [
    {
      name: "Niki Weiss, PMP, PMI-RMP",
      title: "Digital Thanatologist",
      organization: "Founder / CEO",
      image: nikiPortrait,
      linkedIn: "https://www.linkedin.com/in/nikiweiss/",
    },
    {
      name: "Mercedes Sullivan",
      title: "Advisor",
      organization: "HR Strategist",
      image: mercedesPortrait,
      linkedIn: "https://www.linkedin.com/in/mercedessullivan/",
    },
    {
      name: "Ty Hagler",
      title: "Advisor",
      organization: "Strategic Start up Advisor",
      image: tyPortrait,
      linkedIn: "https://www.linkedin.com/in/tyhagler/",
    },
    {
      name: "Deep Parmar",
      title: "Advisor",
      organization: "Fractional CFO",
      image: deepPortrait,
      linkedIn: "https://www.linkedin.com/in/deepparmar/",
    },
    {
      name: "Paula Soito",
      title: "Advisor",
      organization: "Instructional Design",
      image: paulaPortrait,
      linkedIn: "https://www.linkedin.com/in/paulasoito",
    },
    {
      name: "Brooke Carroll Lemchak, PhD",
      title: "Advisor",
      organization: "Product Development",
      image: brookePortrait,
      linkedIn: "https://www.linkedin.com/in/brookeclemchak/",
    },
    {
      name: "Nermeen Nasim",
      title: "Advisor",
      organization: "Software Development",
      image: nermeenPortrait,
      linkedIn: "https://linkedin.com/in/n-nasim",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-orange-100/40"
    >
      <div className="container max-w-7xl mx-auto px-4 relative z-10 overflow-hidden">
        <div
          ref={elementRef as any}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            style={{ fontFamily: "serif" }}
          >
            Meet Our Team
          </h2>

          {/* Team Grid - Horizontal Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full max-w-6xl mx-auto px-12 md:px-16"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => {
                const CardWrapper = member.linkedIn ? "a" : "div";
                const cardProps = member.linkedIn
                  ? {
                      href: member.linkedIn,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="flex flex-col items-center">
                      <CardWrapper
                        {...cardProps}
                        className={`group ${member.linkedIn ? "cursor-pointer" : ""}`}
                      >
                        {/* Portrait Image - Rounded Rectangle */}
                        <div className="mb-4 w-32 h-32 mx-auto">
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
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:left-2 bg-white/90 hover:bg-white border-2 border-brand-orange shadow-md text-brand-orange hover:text-brand-orange/80 h-12 w-12" />
            <CarouselNext className="right-0 md:right-2 bg-white/90 hover:bg-white border-2 border-brand-orange shadow-md text-brand-orange hover:text-brand-orange/80 h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
