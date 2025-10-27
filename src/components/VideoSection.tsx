const VideoSection = () => {
  return <section className="py-12 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
            See ENDevo in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience how we simplify legacy readiness and digital resilience through AI-powered tools, 
            human-centered guidance, and our connected marketplace approach.
          </p>
        </div>

        {/* Demo Video Area */}
        <div className="relative bg-card rounded-2xl shadow-lg mb-12 overflow-hidden max-w-[270px] mx-auto">
          <div style={{ aspectRatio: '9/16' }}>
            <video src="https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/68ffeb149d3acf6be441f118.mp4" controls className="w-full h-full object-contain" poster="">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-orange mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>AI Tools</h3>
            <p className="text-muted-foreground">Legacy Planning Tools</p>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-orange mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>Digital</h3>
            <p className="text-muted-foreground">Asset Protection</p>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-brand-orange mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>Human-Centered</h3>
            <p className="text-muted-foreground">Guidance & Support</p>
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;