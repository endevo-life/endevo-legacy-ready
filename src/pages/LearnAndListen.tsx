import Header from "@/components/Header";

const LearnAndListen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/cdba9dc9-fda6-4e55-93b5-c348508632af.png" 
              alt="In the Digital Age Podcast" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="heading-hero mb-6 text-primary">
            Learn & Listen
          </h1>
          <p className="text-lead text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our comprehensive resources on digital legacy planning, end-of-life preparedness, 
            and protecting what matters most. From expert podcasts to in-depth guides, we're here 
            to help you navigate life's final chapter with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearnAndListen;