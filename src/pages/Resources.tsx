import LearnListenHeader from "@/components/LearnListenHeader";
import LearnListenFooter from "@/components/LearnListenFooter";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <LearnListenHeader />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-8">Resources</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Helpful resources and tools for navigating death and dying in the digital age.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Digital Legacy Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Tools and guides for managing your digital presence after death.
                </p>
                <a href="#" className="text-brand-orange hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Grief Support</h3>
                <p className="text-muted-foreground mb-4">
                  Resources for those dealing with loss in the digital age.
                </p>
                <a href="#" className="text-brand-orange hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Digital Estate Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Legal and practical guidance for digital assets.
                </p>
                <a href="#" className="text-brand-orange hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">End-of-Life Technology</h3>
                <p className="text-muted-foreground mb-4">
                  How technology can help in end-of-life care.
                </p>
                <a href="#" className="text-brand-orange hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with others navigating similar experiences.
                </p>
                <a href="#" className="text-brand-orange hover:underline">Learn more →</a>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Educational Materials</h3>
                <p className="text-muted-foreground mb-4">
                  Research and educational content on digital death.
                </p>
                <a href="#" className="text-brand-orange hover:underline">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <LearnListenFooter />
    </div>
  );
};

export default Resources;