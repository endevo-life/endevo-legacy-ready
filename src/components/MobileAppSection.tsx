import { Button } from "@/components/ui/button";

const MobileAppSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/lovable-uploads/b1dce9ec-1c3f-4f2f-9591-45df95955a21.png" 
              alt="My Final Playbook mobile app interface"
              className="max-w-md w-full h-auto"
            />
          </div>
          
          {/* Text content on the right */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="heading-section text-primary">Access Care Anywhere</h2>
              <p className="text-xl text-brand-orange font-medium">with our mobile app</p>
            </div>
            
            <div className="space-y-3 text-muted-foreground">
              <p>• Stay connected with your care team and access important documents</p>
              <p>• Schedule consultations and receive updates in real-time</p>
              <p>• Secure messaging with healthcare professionals and advisors</p>
              <p>• Digital document storage and easy sharing capabilities</p>
              <p>• Emergency contact features and important notifications</p>
              <p>• Personalized care plans and progress tracking</p>
              <p>• 24/7 access to resources and support materials</p>
              <p>• Family coordination tools and shared decision-making</p>
              <p>• Appointment reminders and care schedule management</p>
            </div>
          </div>
        </div>
        
        {/* Centered button */}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="px-8 py-3 text-lg">
            Get the App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;