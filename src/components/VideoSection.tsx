const VideoSection = () => {
  return <section className="pt-12 pb-6 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
          fontFamily: 'Times New Roman, serif'
        }}>
            See ENDevo in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience how we simplify legacy readiness and digital resilience through AI-powered tools, 
            human-centered guidance, and our connected marketplace approach.
          </p>
        </div>

        {/* Demo Video Area */}
        <div className="relative bg-card rounded-2xl shadow-lg mb-12 overflow-hidden max-w-4xl mx-auto">
          <div style={{
          aspectRatio: '16/9'
        }}>
            <video src="https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/691dfee088e1e604ea8cd838.mp4" controls className="w-full h-full object-contain" poster="">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Feature Boxes */}
        
      </div>
    </section>;
};
export default VideoSection;