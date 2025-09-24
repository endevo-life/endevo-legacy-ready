const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See ENDevo in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience how we simplify legacy readiness and digital resilience through AI-powered tools, 
            human-centered guidance, and our connected marketplace approach.
          </p>
        </div>

        {/* Demo Video Area */}
        <div className="relative bg-card rounded-2xl shadow-lg mb-16 overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/T8bDMPgohvM"
              title="ENDevo Demo Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Legacy Planning Tools</h3>
            <p className="text-muted-foreground">AI-powered tools to help you organize and plan your digital and physical legacy with precision.</p>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Asset Protection</h3>
            <p className="text-muted-foreground">Comprehensive digital asset protection strategies to secure your valuable information and accounts.</p>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-orange mb-4">Guidance & Support</h3>
            <p className="text-muted-foreground">Human-centered guidance and support throughout your legacy readiness journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoSection;