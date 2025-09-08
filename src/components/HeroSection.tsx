import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/9e254043-ae74-4e4d-b86f-694807a431d0.png')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="heading-hero mb-6">
          ARE YOU READY FOR<br />
          WHAT COMES NEXT?
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-orange">
          LIFE'S FINAL CHAPTER
        </h2>
        
        <p className="text-lead mb-12 max-w-3xl mx-auto opacity-90">
          Are you ready for what comes next? ENDevo helps you achieve Legacy Readiness & Digital Preparedness—so your life story, values, and digital footprint are protected, preserved, and passed on with intention.
        </p>
        
        <Button variant="cta" size="lg" className="text-lg px-8 py-4">
          Peace of Mind Assessment
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;