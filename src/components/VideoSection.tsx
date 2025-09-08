const VideoSection = () => {
  return (
    <section className="bg-brand-navy">
      <div className="container max-w-6xl mx-auto">
        <div className="aspect-video bg-card">
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