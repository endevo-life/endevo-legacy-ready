import { Button } from "@/components/ui/button";

const MobileAppSection = () => {
  return (
    <section className="py-20 relative overflow-hidden animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Text content on the left */}
          <div className="space-y-6 flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <h2 className="heading-section text-primary animate-fade-in" style={{ animationDelay: '0.4s' }}>Access Care Anywhere</h2>
              <p className="text-xl text-brand-orange font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>with our mobile app</p>
            </div>
            
            <div className="space-y-3 text-muted-foreground">
              {[
                "Stay connected with your care team and access important documents",
                "Schedule consultations and receive updates in real-time",
                "Secure messaging with healthcare professionals and advisors",
                "Digital document storage and easy sharing capabilities",
                "Emergency contact features and important notifications",
                "Personalized care plans and progress tracking",
                "24/7 access to resources and support materials",
                "Family coordination tools and shared decision-making",
                "Appointment reminders and care schedule management"
              ].map((item, index) => (
                <p key={index} className="animate-fade-in story-link hover-scale transition-transform duration-300" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  • {item}
                </p>
              ))}
            </div>
          </div>
          
          {/* Image on the right */}
          <div className="flex justify-center lg:justify-end items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/lovable-uploads/a9dca6bc-4f27-4993-8698-9727808c42f2.png" 
              alt="My Final Playbook mobile app interface"
              className="max-w-xs w-full h-auto hover-scale transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Centered button */}
        <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <Button size="lg" className="px-8 py-3 text-lg hover-scale">
            Get the App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;