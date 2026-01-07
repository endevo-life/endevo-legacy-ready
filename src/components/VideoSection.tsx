const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width Video Background */}
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <video
          src="https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/691dfee088e1e604ea8cd838.mp4"
          controls
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Tinted Overlay with Text */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              See ENDevo in Action
            </h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              Experience how we simplify legacy readiness and digital resilience through AI-powered tools,
              human-centered guidance, and our connected marketplace approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;