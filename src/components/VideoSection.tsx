const VideoSection = () => {
  return (
    <section className="p-8 bg-brand-navy animate-fade-in">
      <div className="container max-w-6xl mx-auto">
        <div className="aspect-video bg-card animate-scale-in hover-scale transition-transform duration-500">
          <video 
            className="w-full h-full shadow-lg bg-background"
            controls
            poster="/placeholder.svg"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
export default VideoSection;