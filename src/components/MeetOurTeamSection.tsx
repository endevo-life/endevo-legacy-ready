import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      {/* Warm-toned horizontal band in the background */}
      <div className="absolute inset-0 top-1/2 bg-gradient-to-r from-orange-50 via-peach-50 to-orange-100" 
           style={{ background: 'linear-gradient(90deg, #fff5f0 0%, #ffe8dc 50%, #ffd4c1 100%)' }} />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div 
          ref={elementRef as any} 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 font-playfair">
            Meet Our Team
          </h2>

          {/* Team Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => {
                const CardWrapper = member.linkedIn ? 'a' : 'div';
                const cardProps = member.linkedIn 
                  ? { href: member.linkedIn, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                    <CardWrapper
                      {...cardProps}
                      className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center group hover:-translate-y-2 h-full ${
                        member.linkedIn ? 'cursor-pointer' : ''
                      }`}
                    >
                      {/* Portrait Image */}
                      <div className="mb-4 w-full">
                        <img 
                          src={member.image} 
                          alt={`${member.name} - ${member.title}`}
                          className="w-full aspect-square object-cover rounded-xl shadow-sm"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="space-y-2 flex-grow flex flex-col justify-start">
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-700 italic leading-snug">
                          {member.title}
                        </p>
                        <p className="text-xs text-gray-600 leading-snug">
                          {member.organization}
                        </p>
                      </div>
                    </CardWrapper>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hover-scale" />
            <CarouselNext className="hover-scale" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
