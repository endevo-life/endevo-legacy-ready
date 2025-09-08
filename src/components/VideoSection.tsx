const VideoSection = () => {
  return (
    <section className="p-16 bg-brand-navy">
      <div className="container max-w-4xl mx-auto">
        <div className="aspect-video bg-card rounded-lg p-16">
          <video 
            className="w-full h-full rounded-lg shadow-lg bg-background"
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