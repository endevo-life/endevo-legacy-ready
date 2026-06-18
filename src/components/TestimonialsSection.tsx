const TestimonialsSection = () => {
  const videos = [
    {
      title: "Jeff Monger",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/66f577cf33c02706dbce43d5.mp4",
      thumbnail:
        "https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/66f578778a8a073a07cf7acd.jpeg",
      description: "Realtor",
      isDirectVideo: true,
    },
    {
      title: "Mary Cioffi",
      videoUrl:
        "https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/66f577cffae5c95204b208b9.mp4",
      thumbnail:
        "https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/66f5787775b6040ca16ef6e1.jpeg",
      description: "Business Coach",
      isDirectVideo: true,
    },
  ];
  return (
    <section id="testimonials" className="py-12 bg-muted/30 animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          className="text-center mb-12 animate-fade-in"
          style={{
            animationDelay: "0.2s",
          }}
        >
          <h2 className="heading-section text-primary">Our Clients Stories</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              <div className="mb-4 shadow-lg rounded-lg">
                {video.isDirectVideo ? (
                  <video
                    src={video.videoUrl}
                    poster={video.thumbnail}
                    controls
                    className="w-full h-auto rounded-lg"
                    aria-label={`${video.title} testimonial video`}
                  >
                    <track
                      kind="captions"
                      srcLang="en"
                      label="English captions"
                      default
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
