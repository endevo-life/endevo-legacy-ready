import { useState, useRef } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative w-full overflow-hidden py-8 px-4 bg-background">
      <div
        className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <video
          ref={videoRef}
          src="https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/691dfee088e1e604ea8cd838.mp4"
          controls={isPlaying}
          className="w-full h-full object-cover"
          onPause={handlePause}
          onEnded={handlePause}
          aria-label="ENDevo product overview video"
        >
          <track
            kind="captions"
            srcLang="en"
            label="English captions"
            default
          />
          Your browser does not support the video tag.
        </video>

        {/* Tinted Overlay with Text - hidden when playing */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/50">
            {/* Play Button - centered */}
            <button
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-105"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
            </button>

            {/* Text - bottom left */}
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-12">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Meet Jesse L. Bones
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Our Trusted Advisor
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
